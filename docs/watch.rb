require 'filewatcher'
require 'fileutils'

require 'json'
file = File.read('watch_config.json')
data_hash = JSON.parse(file)

# CSS Watcher
path_from_dist = data_hash['path_from_dist']
path_to_dist = './dist'

if path_from_dist.eql? "<path to wwwroot dist>"
  raise ArgumentError, 'You need to configure your path_from_dist variable, point this to the location of your Wildernesslabs wwwroot dist directory and try running this task again.'
else
  puts "Watching -- " + path_from_dist

  Filewatcher.new([path_from_dist]).watch do |filename, event|

    # specify files which should not be copied
    puts "Copying files from WildernessLabs CSS to Documentation site --------------- "

    from_dir = path_from_dist
    to_dir = path_to_dist

    contains = Dir.new(from_dir).entries

    puts "Emptying directory target --------------- "
    FileUtils.rm_rf(to_dir)

    puts "Copying new DIST files --------------- "
    FileUtils.cp_r(from_dir, to_dir);
    puts "Copying DIST Complete --------------- "

    puts "Updating file paths in CSS --------------- "
    file_names = [path_to_dist +'/css/main.css']

    file_names.each do |file_name|
      text = File.read(file_name)
      new_contents = text.gsub("../../assets/", "/dist/assets/")

      # To write changes to the file, use:
      File.open(file_name, "w") {|file| file.puts new_contents }
    end

    puts "Path Updating Complete --------------- "
    puts "Watching " + path_from_dist
    puts "-"
  end
end
