# Documentation

Hello, and welcome to the Documentation repo for Wilderness Labs! These docs are probably best viewed at the [developer.wildernesslabs.co](http://developer.wildernesslabs.co), but they should be readable here, as well. You'll also find all the source code to the [samples](samples/) here.


## Running Locally

You can build and host the site locally for development, using our [Chloroplast](https://github.com/wildernesslabs/Chloroplast) tool.

This is especially useful if you're contributing documentation, or you just want an offline experience.

### Install Build and Host Pre-requisites

#### 1. Install `Chloroplast` DotNET tool Nuget Package

You can acquire chloroplast by installing it as either a local or global tool.

##### a. Add the Wilderness Labs Package Registry

Currently, Chloroplast is distributed only through the wilderness labs package registry. This means you'll need to add the authenticated nuget source as follows.

First, you'll need to [generate a GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Once you've done that, you can install the package registry locally:

```bash
dotnet nuget add source https://nuget.pkg.github.com/WildernessLabs/index.json --name “wildernesslabs” --username << your github username >> --password << a personal access token >>
```

##### b. (option 1) Install Chloroplast as a Global Tool

If you install it as a global tool, you can invoke it with the tool name `chloroplast`.

```bash
dotnet tool install Chloroplast.Tool -g
```

##### b. (option 2) Install Chloroplast as a Local Tool

Alternatively, you can install it as a local tool by first creating a local tool manifest in the project folder, as follows:

```bash
dotnet new tool-manifest
dotnet tool install Chloroplast.Tool
```

If you install it as a local tool, you must prefix the tool name, so you can invoke it with `dotnet chloroplast`.

#### 2. Install the Node Packages

```bash
npm install
```

### Build it!

You'll need to build both the front-end stuff (built in Node), and  run chloroplast to build the content.

#### 1. Build the Front-End

```bash
npm run build
```

##### Optional Start a Watcher for Front-End Build Changes

If you're making changes to the front-end (styles, scripts, etc.,) you can run the front-end node watcher:

```bash
npm run dev
```

#### 2. Build (and Optionally Host) the Content w/Chloroplast

Running `chloroplast` will automatically look in the `SiteConfig.yml` file and build the content out to the appropriate output folder. If you pass the `host` argument, it will also spin up an ASP.NET server to host it locally:

```bash
chloroplast host
```

##### Optionally, add a File Change Watcher

If you're making content changes (docs, templates, nav), you'll want a file watcher that will listen for changes and automatically rebuild using chloroplast. To do that, open a _new_ terminal tab or instance and run:

```bash
npm run watch:docs
```

**Note** - In the future, file watching will be built into Chloroplast




<!-- 
To browse locally on OSX (Steps 1 and 2):

not sure if you need this now someone should try on a fresh computer
### 1. [Install Homebrew](https://brew.sh/) (if not already installed)

To browse locally on Windows (Steps 1 and 2):

### 1. [Install Chocolatey](https://chocolatey.org/install) (if not already installed)

### 2. Install prerequisites: Ruby, Jekyll, Bundler, and various gems

Install MSYS2. Choose MSYS2 and MINGW development toolchain option

```
ridk install
```

Once you have Ruby and MSYS2, you'll need Jekyll and Bundler to build and host the site locally (tip: you may need to restart your shell):
-->


## [Contributing](Contributing)

Wilderness Labs welcomes and encourages constrictive contributions. We believe that documentation is best when a diverse community of folks with a variety of perspectives and experience share their wisdom and findings with others. Additionally, documentation contributions are a great way to capture learnings that you may even reference yourself.

For more information, please see the [Contributing](Contributing) page.

## License

### Copyright

Content copyright Wilderness Labs.

Electronics tutorial copyright Bryan Costanich.

### Documentation Prose

All the documentation prose is released under a [Creative Commons
Attribution + Noncommercial + NoDerivatives (CC BY-NC-ND) license](Licenses/CreativeCommons_BY_NC_ND.md). Feel free to share verbatim in non-commercial usage and provide attribution. Commercial usage may be granted in certain use cases. If you need a more permissive license, please contact us at [hello@wildernesslabs.co](mailto:hello@wildernesslabs.co).

![Creative Commons BY-NC-ND Logo](Licenses/Cc-by-nc-nd_icon.png)

[Human Readable Version of the License](https://creativecommons.org/licenses/by-nc-nd/4.0/)

### Code Samples and Code Snippets

All code samples and code snippets, whether they be full applications, or embedded snippets within the documentation are released under the [Apache 2 license](Licenses/Apache2_License.md). Feel free to use and distribute the code as you see fit, under the very permissive terms of the license.
