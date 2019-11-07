

require 'filewatcher'
require 'fileutils'

require 'json'
file = File.read('watch_config.json')
data_hash = JSON.parse(file)

# get arguments
args = Hash[ ARGV.join(' ').scan(/--?([^=\s]+)(?:=(\S+))?/) ]

# CSS Watcher
path_from_dist = data_hash['path_from_dist']
path_to_dist_docs = './docs/dist'
path_to_dist_fx = './docfx/_exported_templates/default'

# Sets up watcher for a specific to and from path
def setWatcher(to_path, from_path)

  from_dir = from_path
  to_dir = to_path

  contains = Dir.new(from_dir).entries

  puts "- - - - Emptying directory target "
  FileUtils.rm_rf(to_dir)

  puts "- - - - Copying new 'dist' files"
  FileUtils.cp_r(from_dir, to_dir);
  puts "- - - - Copying 'dist' files - complete "

  puts "- - - - Updating file paths in CSS "
  file_names = [to_dir +'/css/main.css']

  file_names.each do |file_name|
    text = File.read(file_name)
    new_contents = text.gsub("../../assets/", "/dist/assets/")

    # To write changes to the file, use:
    File.open(file_name, "w") {|file| file.puts new_contents }
  end

  puts "- - - - Path Updating Complete"
  puts " "
end


if path_from_dist.eql? "<path to wwwroot dist>"
  raise ArgumentError, 'You need to configure your path_from_dist variable, point this to the location of your Wildernesslabs wwwroot dist directory and try running this task again.'
else
  puts "> > > Watching Path " + path_from_dist
  puts "> > > Site specific: " + args['site'] if args.key?('site')

  Filewatcher.new([path_from_dist]).watch do |filename, event|

    #if the site is the docfx site, we need to compile the files specially
    if !args.key?('site') || args['site'] == "docfx"
      # specify files which should not be copied
      puts "> > > Copying files from WildernessLabs to DOCFX site "

      setWatcher(path_to_dist_fx + "/dist", path_from_dist);

      path_from_fonts = path_to_dist_fx + "/dist/assets/fonts";
      path_to_fonts = path_to_dist_fx + "/fonts"

      FileUtils.rm_rf(path_to_fonts)
      FileUtils.cp_r(path_from_fonts, path_to_fonts);
      FileUtils.remove_dir(path_from_fonts)
    end

    if !args.key?('site') || args['site'] == "docs"
      # specify files which should not be copied
      puts "> > > Copying files from WildernessLabs to Documentation site "

      setWatcher(path_to_dist_docs, path_from_dist);
    end

    puts "> > > Watching " + path_from_dist

  end
end
