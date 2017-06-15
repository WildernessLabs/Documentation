# Documentation

Hello, and welcome to the Documentation repo for Wilderness Labs! These docs are probably best viewed at the [developer.wildernesslabs.co](http://developer.wildernesslabs.co), but they should be readable here, as well. You'll also find all the source code to the [samples](samples/) here.

## Running Locally

This repo is also a Ruby site powered by jekyll (which is how it's hosted by github pages). You can run and browse this site locally, which is especially if you're contributing documentation, or you just want an offline experience.

### Setup Options

1. Native Install
   1. [Mac OS X](#mac-os-x)
   2. [Debian/Ubunutu](#debianubuntu)

2. [Vagrant](#vagrant) (Cross-Platform)

#### Mac OS X

>**NOTE:** This will require that you are an administrator on your system.

1. [Install Homebrew](https://brew.sh/) (if not already installed).
2. Install Ruby:
Open a terminal and run:
```
$ brew install ruby
```
4. Change your terminal working directory to be the location of the git repo and run:
```
bundle exec jekyll serve
```

The site should be available locally at: `http://127.0.0.1:4000/` with changes being reflected on the site automaticaly.

#### Debian/Ubunutu

>**NOTE:** This will require that you are root or have sudo permissions on the system.

1. Install python-software-properties `sudo apt-get install python-software-properties`
2. Add the brightbox repository for Ruby2+ and update the package list `sudo apt-add-repository ppa:brightbox/ruby-ng; sudo apt-get update`
3. Install the required packages `sudo apt-get install build-essential ruby2.4 ruby2.4-dev`
4. Install a javascript interpreter of your choice such as node.js `sudo apt-get install node`
5. Install the bundler gem for ruby `get install bundler`
6. Change to the directory you have cloned this repository into and run `bundle install`
7. Start the jekyll server `jekyll s -B -I`

The site should be available locally at: `http://127.0.0.1:4000/` with changes being reflected on the site automaticaly. If you wish to connect to the server remotely, add `--host=0.0.0.0`

#### Vagrant
>**NOTE:** This will require that you are an administrator on your system.

1. [Download](https://www.vagrantup.com/downloads.html) and Install Vagrant
2. Open a terminal, command prompt or shell depending on your operating system.
3. Switch to the directory that you have cloned this repository to.
4. Run `vagrant up`

The site should be available locally at: `http://127.0.0.1:4000/` with changes being reflected on the site automaticaly.

## Contributing

Wilderness Labs welcomes and encourages constrictive contributions. We believe that documentation is best when a diverse community of folks with a variety of perspectives and experience share their wisdom and findings with others. Additionally, documentation contributions are a great way to capture learnings that you may even reference yourself.

When contributing, please note that we have a strict policy on plagiarism; your contributions must be your own. Please do not copy and paste from external sources, unless they're your own writing that you are willing to contribute.

The documentation is all written in Markdown, and I (bryancostanich) highly recommend [MacDown](https://macdown.uranusjr.com/) as a markdown editor if you're on a Mac. 

### Typos and other Small Fixes

Typos and other small fixes, additions can just be made and submitted as a pull-request. No need to reserve the topic.

### General Documenation

For general documentation, please refer to the [Documentation Roadmap](DocumentationRoadmap.md) to see a list of high priority requested docs, as well as writer reservations and other notes. 

### Samples

When contributing samples, please document them in a way that someone who is new to the concepts illustrated within can pick up the code and understand it. This includes both code-commenting, as well as a simple sample documentation page. 

### Pull Requests

All contributions should be submitted as [pull requests](https://help.github.com/articles/about-pull-requests/). 

## License

### Documentation Prose

All the documentation prose is released under a [Creative Commons 
Attribution + Noncommercial + NoDerivatives (CC BY-NC-ND) license](Licenses/CreativecCommons_BY_NC_ND.md). Feel free to share verbatim in non-commercial usage and provide attribution. Commercial usage may be granted in certain use cases. If you need a more permissive license, please contact us at [hello@wildernesslabs.co](mailto:hell@wildernesslabs.co).

![Creative Commons BY-NC-ND Logo](Licenses/Cc-by-nc-nd_icon.png)

[Human Readable Version of the License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

### Code Samples and Code Snippets

All code samples and code snippets, whether they be full applications, or embedded snippets within the documentation are released under the [Apache 2 license](License/Apache2_License.md). Feel free to use and distribute the code as you see fit, under the very permissive terms of the license.
