---
layout: Meadow
title: macOS Setup
subtitle: Guides and documentation for Meadow
---

# macOS Setup

To configure your Mac you'll install several tools.

## Install Brew
First, verify that you have [Brew package manager for macOS](https://brew.sh) installed.

 1. Open the terminal
 1. Run the following command:
   
   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

## Install Brew packages

We need two Brew packages installed, **arm-ggc-bin** and **dfu-util**. To install, run the following commands:

```bash
brew install osx-cross/arm/arm-gcc-bin
brew install dfu-util
```

## Download ST-Link

We have a custom version of the open-source st-tools developed by [ST](https://www.st.com).

[Download ST Utils](http://downloads.wildernesslabs.co/Meadow_Beta/STLink.zip), unzip if needed (macOS will do this by default) and save to a convenient location.

## Vagrant (Optional)

We recommend installing the tools directly as described above. If you run into issues, you can alternatively use the provided prebuilt virtual machine. This requires you install Vagrant and VirualBox.

You can follow [the Windows instructions](/Meadow/Getting_Started/Setup/Windows/); you'll use the macOS terminal in place of the Windows Command Prompt.

## [Next - Deploy Meadow OS](/Meadow/Getting_Started/Deploying_Meadow/)