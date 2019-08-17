require 'filewatcher'
require 'fileutils'

require 'json'
file = File.read('config.json')
data_hash = JSON.parse(file)

# Path to /dist/ directory in the Wildernesslabs Repo
path_from_dist = data_hash['path_from_dist'];

# CSS Watcher
path_from_css = path_from_dist + 'css'
path_to_dist_css = './assets/dist/css'

puts "Watching -- " + path_from_css

Filewatcher.new([path_from_css]).watch do |filename, event|

  # specify files which should not be copied
  puts "Copying files from WildernessLabs CSS to Documentation site --------------- "

  from_dir = path_from_css
  to_dir = path_to_dist_css

  contains = Dir.new(from_dir).entries

  def copy_with_path(src, dst)
    FileUtils.mkdir_p(File.dirname(dst))
    FileUtils.cp(src, dst)
  end

  puts "Emptying directory target --------------- "
  FileUtils.rm_rf(to_dir)

  puts "Copying new files --------------- "
  FileUtils.cp_r(from_dir, to_dir);
  puts "Copying CSS Complete --------------- "

  puts "Updating file paths in CSS --------------- "
  file_names = [path_to_dist_css+'/main.css']

  file_names.each do |file_name|
    text = File.read(file_name)
    new_contents = text.gsub("../../assets/", "/assets/dist/assets/")

    # To write changes to the file, use:
    File.open(file_name, "w") {|file| file.puts new_contents }
  end

  puts "Path Updating Complete --------------- "
  puts "Watching " + path_from_css
  puts "-"
end
