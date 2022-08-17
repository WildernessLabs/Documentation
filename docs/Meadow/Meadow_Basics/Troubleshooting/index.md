---
layout: Meadow
title: Troubleshooting
subtitle: Steps to getting your Meadow board working
---

## USB Cables

It is important to remember that not all USB cables are created equal.  When programming, Meadow uses a USB cable supplying both power and data.  It is important to use a good quality USB cable to connect your Meadow device to your computer.

Some USB cables are only suitable for charging as they do not contain the D+ and / or D- data lines.

It is important to ensure that you have a USB cable capable of providing data transfer capability and that it is a good quality cable.

## Unpowered USB Hub

If you're having issues communicating with Meadow that is connected via an unpowered USB-Hub, try connecting Meadow directly to a USB port in your machine to ensure the USB-Hub is the issue. 

As there are a large variety USB-hubs out there, we cant guarantee Meadow will work properly for all of them.

## Windows Driver

It is important to ensure that Windows computers have the correct driver installed.

Scott Hanselman has written a good [blog post](https://www.hanselman.com/blog/HowToFixDfuutilSTMWinUSBZadigBootloadersAndOtherFirmwareFlashingIssuesOnWindows.aspx) about how to check this and ensure that the correct driver is installed.

## Error when flashing Meadow (Windows)

If you're getting the `Could not find a connected Meadow with the serial number #########`, the board might not have the correct Window drivers. To solve this, follow these steps:

1. Open Device Manager
1. Under USB Devices right click Meadow F7 Micro
1. Uninstall Devices and click the check box.
1. Unplug your Meadow
1. Restart your PC
1. Once PC is restarted, Plug in Meadow in Bootmode
1. Run command "meadow flash os"
1. Wait until the line: "Having trouble putting Meadow in DFU Mode, please press RST button on Meadow and press enter to try again" appears.
1. Open [Zadig](https://www.hanselman.com/blog/HowToFixDfuutilSTMWinUSBZadigBootloadersAndOtherFirmwareFlashingIssuesOnWindows.aspx) and replace the driver.
1. Wait for the flash to finish.

## Error while updating Meadow after successful DFU Meadow.OS install

While updating the Meadow.OS, you may encounter an error after successfully flashing the OS when your Meadow is rebooted.

```console
Meadow.CLI.Core.Exceptions.DeviceNotFoundException: Could not find a connected Meadow with the serial number
```

This means that something during the reboot didn't work correctly. You can work around this by doing another Meadow OS flash but skipping the DFU portion that worked previously.

```console
meadow flash os -d
```

## Deploying from a Virtual Machine

Some users have reported issues deploying to Meadow using a development environment installed on a VM.

At the moment we do not have a solution with this and would welcome any contribution / assistance with this problem.

## My Application.exe Does Not Run

At the moment, the default application executed by Meadow is _App.exe_.

If your application does not execute, please check your project settings and if necessary change your assembly name to _App.exe_ and redeploy your application.

## Diagnosing Issues Using Meadow CLI

The Meadow CLI tool can be used to diagnose and fix a number of issues that can appear during the beta phase.

A list of command can be found in the [Meadow CLI](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/Meadow_CLI/) documentation.

### Check Files Deployed to Meadow

Use the `meadow file list` command to verify that all of the required files have been deployed to Meadow.  The list of expected files can be found at the end of the [Meadow CLI](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/Meadow_CLI/) documentation page.

As noted above, the main application assembly should be _App.exe_.

### Disable Application Execution

Use the `meadow mono disable` command to stop Meadow from executing the deployed application.

Try to deploy your application using Visual Studio or Visual Studio for Mac.

### Delete Files

Delete one or more required files (start with _App.exe_) using the `meadow file delete -f [Filename]` command and try to redeploy your application.

### Erase Flash

`meadow flash erase` command will remove all of the files deployed to the flash storage and recreate the file system. It is recommended that you first do a Mono Disable so we ensure a Meadow app is not running.

### Deploy Your Application Manually

Firstly, ensure that Mono has automatic execution of the application disabled (see `meadow mono disable`).

Use the `meadow file write -f [Filename]` command to deploy each of the required files to Meadow.

Follow this by checking that the files have been deployed using the `meadow file list` command and if everything looks good then re-enable execution of the application using the `meadow mono enable` command.
