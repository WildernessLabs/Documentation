---
layout: Meadow
title: Deploying a Meadow App in Windows
subtitle: Guides and documentation for Meadow
---

# Deploy a Meadow Test App

To verify that your Meadow OS is installed correctly and everything is setup, you should deploy a known working test app. We've provided an app that controls Meadow's onboard RGB led.

To deploy an app to Meadow you'll need several things:

1. A Linux virtual machine with st-util and gdb installed ([see the Setup guide](../Setup/)).
1. A copy of [mscorlib.dll](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/binaries/mscorlib.dll).
1. A copy of [System.Core.dll](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/binaries/System.Core.dll).
1. A .NET 4.7.2 console application that references the Meadow NuGet package. To validate your setup, you can download the provided sample [app](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/HelloMeadow.zip).

## Setup

1. Follow the steps in the [Setup](/Meadow/Getting_Started/Setup/).
1. Open the command prompt.
1. Navigate to the folder (working folder) where you created your VM.
1. Enter `vagrant up` to ensure your VM is running.
1. From the command prompt/terminal, connect to your VM by entering `vagrant ssh`.

## Prepare your app for deployment
1. Compile your .NET 4.7.2 console app in Visual Studio 2017 or 2019. 
1. Copy the **app files** into into the **/tmp** root folder of your working folder (tmp was was created automatically by Vagrant).
We've provided sample binaries for you to deploy. 
 * [Sample App](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/HelloMeadow.zip)
3. Copy the provided **[mscorlib.dll](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/binaries/mscorlib.dll)** into the **tmp** folder.
4. Copy the provided **[System.Core.dll](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/binaries/System.Core.dll)** into the **tmp** folder.

## Connect Meadow to the the VM
1. Follow this instructions to [connect your ST-Link V2 to Meadow](/Meadow/Getting_Started/Setup/stlink/).
1. With your VM running, insert your ST-Link V2 into a free USB port on your host PC.
1. While connected to your VM via SSH, verify the VM can see the ST-Link by running `lsusb` - you should see *ID 0483:3748 SGS Thomson Microelectronics ST-LINK/V2* (or something similar).
1. Enter `./start.sh &` to start st-util - you should see **Listening at \*:4242...** (the **&** is used to run the script in the background).
1. Press the **Enter** key to return to the terminal (st-util is now running as a background job).
1. Optional - you can verify it's running by entering `jobs` (**start.sh** should be the only job running).

## Start the application
1. Enter `gdb` to start a gdb debug session (no debug symbols are currently available).
1. From the gdb prompt, enter `target remote :4242`.
1. Enter `c` to start the application.

The application may take several minutes to deploy. You'll see periods appear in the terminal indicating progress. Once the app is fully deployed, it will start running on Meadow. Any `Console.WriteLine` commands will appear in the terminal.

If you ran the provided sample app, you should see the RGB led changing color!

![Meadow app deploying](./app_deploy.png){:standalone}

## Stop the application
1. Press control-C to stop debugging.
1. Enter `quit` to close gdb.
1. st-util will continue listening on port 4242 - you can now update the application in the tmp folder and restart gdp to deploy your updated app.

## [Next - Hello, World](/Meadow/Getting_Started/Hello_World/)