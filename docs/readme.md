# Netduino.Foundation Web Site



## Running Locally

This repo is also a Ruby site powered by jekyll (which is how it's hosted by GitHub Pages). You can run and browse this site locally, which is especially useful if you're contributing documentation, or you just want an offline experience.

To browse locally:

### 1. [Install Homebrew](https://brew.sh/) (if not already installed)


### 2. Install prerequisites: Ruby, Jekyll, Bundler, and various gems

Open a terminal and navigate to the `Documentation/docs` folder and run (Ruby version 2.6.3 required for Jekyll):

```
$ brew install ruby
```

Once you have Ruby, you'll need Jekyll and Bundler to build and host the site locally:

```
$ gem install jekyll bundler
```

With the Bundler installed to manage the Ruby gems, you can run a command to install all the prerequisite gems for the site:

```
$ bundle install
```

### 3. Launch local server

Change your terminal working folder to `Documentation/docs` (if it's not aleady) and run:

```
bundle exec jekyll serve
```

The site should be available locally at: `http://127.0.0.1:4001/`. You can verify the IP address and port from the jekyll output in terminal.

Changes should automatically be picked up and displayed on the site.

## Modifying Styles

Styles are generated from the WildernessLabs.co repository and its normal workflow.

### ruby watch.rb

Use this task in the `docs` directory to build the CSS for the documentation site.

- Setup path to `dist` directory in WildernessLabs.co repository in `watch_config.json`
- Run the `ruby watch.rb` task from the `docs` directory in this repository while working on the CSS to build for the Documentation site
