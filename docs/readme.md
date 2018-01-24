# Netduino.Foundation Web Site



## Running Locally

This repo is also a Ruby site powered by jekyll (which is how it's hosted by github pages). You can run and browse this site locally, which is especially if you're contributing documentation, or you just want an offline experience.

To browse locally:

### 1. [Install Homebrew](https://brew.sh/) (if not already installed).


### 2. Install prerequisites: Ruby, Jekyll, Bundler, and various gems

Open a terminal and navigate to the `Netduino.Foundation/docs` folder and run:

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

Change your terminal working directory to be the location of the git repo and run:

```
bundle exec jekyll serve
```

The site should be available locally at: `http://127.0.0.1:4001/`

Changes should automatically be picked up and displayed on the site.