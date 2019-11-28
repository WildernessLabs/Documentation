---
layout: Meadow
title: Troubleshooting
subtitle: Steps to getting your Meadow board working.
---

## USB Cables

It is important to remember that not all USB cables are created equal.  When programming, Meadow uses a USB cable supplying both power and data.  It is important to use a good quality USB cable to connect your Meadow device to your computer.

Some USB cables are only suitable for charging as they do not contain the D+ and / or D- data lines.

It is important to ensure that you have a USB cable capable of providing data transfer capability and that it is a good quality cable.

## Unpowered USB Hub

## Windows Driver

It is important to ensure that Windows computers have the correct driver installed.

Scott Hanselman has written a good [blog post](https://www.hanselman.com/blog/HowToFixDfuutilSTMWinUSBZadigBootloadersAndOtherFirmwareFlashingIssuesOnWindows.aspx) about how to check this and ensure that the correct driver in installed.

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

Use the `--ListFiles` option to verify that all of the required files have been deployed to Meadow.  The list of expected files can be found at the end of the [Meadow CLI](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/Meadow_CLI/) documentation page.

As noted above, the main application assembly should be _App.exe_.

### Disable Application Execution

Use the `--MonoDisable` command to stop Meadow from executing the deployed application.

Try to deploy your application using Visual Studio or Visual Studio for Mac.

### Delete Files

Delete one or more required files (start with _App.exe_) and try to redeploy your application.

### Erase Flash

Erasing the flash will remove all of the files deployed to the flash storage and recreate the file system.

### Deploy Your Application Manually

Firstly, ensure that Mono has automatic execution of the application disabled (see `--MonoDisable`).

Use the `--WriteFiles` command to deploy each of the required files to Meadow.

Follow this by checking that the files have been deployed using the `--ListFiles` option and if everything looks good then re-enable execution of the application using the `--MonoEnable` option.

## VS2019 Preview