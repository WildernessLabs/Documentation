---
layout: Meadow
title: Meadow OS Deployment Troubleshooting
subtitle: Steps to getting your Meadow board working
---

## Meadow OS Deployment Troubleshooting

This guide supplements the [main troubleshooting guide](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/Troubleshooting/) and assumes that drivers for the Meadow board are installed correctly.  It will dive a little deeper into the start up process and the steps that can be taken to diagnose and resolve issues with truculent boards.

Starting with a review of the OS components and boot sequence, we will move on to the LED indicator and finish with information on how to resolve some of the more difficult issues.

The main tools that will be used here are:

* `meadow` [command line tool (CLI)](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/Meadow_CLI/)
* `dfu-util` which is normally deployed as part of the `meadow` CLI deployment process.

## Meadow OS Start Sequence

Meadow OS is composed of three main components:

* Bootloader
* NuttX RTOS with extensions to support Meadow
* Coprocessor binaries for the ESP32

All three components are usually deployed using the `meadow flash os` command.  The final part of the system is the user application and the associated frameworks (Meadow.Core, Meadow.Foundation etc.).

The first component to start when power is applied of the system resets is the bootloader.  This performs some system checks and if all is well it will hand control over to the OS.

NuttX starts the kernel components and then launches the application which will allow the Meadow board to communicate with a computer attached to the USB port on the board.  The application running on the ESP32 starts in parallel with NuttX.  These two components synchronise the communications channel between the main processor and the coprocessor and the ESP32 is made ready to respond to requests from the STM32 running NuttX.

## LED Indicators (Meadow V1 and V2)

Meadow V1 and V2 board both have a RGB LED installed on the board.  This is used to indicate the status of the board as it starts.

* Flashing Red - indicates that the bootloader has detected a problem with the system
* Solid Green - The bootloader is executing
* Solid Blue - Control has transferred from the bootloader to the OS but Mono has not been started
* Off - Mono has started and the application deployed to the board

In a correctly configured system the LED should progress through the following sequence:

* Green (~1 second)
* Blue (~2-4 seconds)
* Off

## Check OS Version

The first thing to check is if the Meadow board can communicate with the computer over USB.  Checking the OS version number is the simplest way to do this.  Executing the command `meadow device info` should yield output similar to the following:

```
Meadow by Wilderness Labs
Board Information
    Model: F7Micro
    Hardware version: F7FeatherV2
    Device name: MeadowF7V2CCM

Hardware Information
    Processor type: STM32F777IIK6
    ID: ##-##-##-##-##-##-##-##-##-##-##-##
    Serial number: ############
    Coprocessor type: ESP32
Firmware Versions
    OS: 0.9.4.0
    Mono: 0.9.4.0
    Coprocessor: 0.9.4.0

Done!
```

Output such as the above normally indicates that the OS and coprocessor firmware have been deployed correctly.

Note that the OS and Mono version number **must** match.   The Coprocessor firmware version does not necessarily have to match OS/Mono version numbers but it must be compatible.  Check the release notes for the specific OS version to ascertain the correct version number for the OS and coprocessor.

OS versions `0.6.4.0` and above all execute a check at startup for the OS and Mono versions.  The system will refuse to start Mono if the two version numbers do not match.  This is key to preventing some situations where the board could lock.

## Deploy the Latest Operating System

Our first step is to deploy the current operating system by running the following commands in sequence:

* `meadow mono disable`
* `meadow download os`
* `meadow flash os`
* `meadow device info`

Finally, attempt to start your application either using your IDE or by executing the command `meadow mono enable` (the later option assumes that you have an application deployed on the board).

The remainder of this guide assumes that the above steps have not resolved your deployment issues.

### Deploying a Specific Operating System Version

It is desirable in some situations, as we will see later, to deploy a specific version of the operating system.  This can be achieved by using the `-v a.b.c.d` options for the download and deploy operations.  In this case the above sequence of commands would become:

* `meadow mono disable`
* `meadow download os -v a.b.c.d`
* `meadow flash os -v a.b.c.d`
* `meadow device info`

### Understanding the Flash Process Output

`meadow flash os` command will attempt to write the various components in the following order:

* Operating system (STM32)
* Runtime system 
* Coprocessor (ESP32)

You can also omit writing various components by supplying the `meadow flash os` command with one of three flags `-d`, `-k` or `-e`.

#### Operating System

The OS is flashed using the external tool `dfu-util` application.  This requires the board to be in DFU mode.  The system normally does this automatically but occasionally this can fail.  A Meadow board can be put into DFU mode manually using either of the following methods:

* Hold the `Boot` button while pressing the `Reset` button
* Hold the `Boot` button while plugging in the USB cable

The second step, pressing the `Boot` button when plugging in the USB cable should be used if the first option fails.

The OS will be written to the STM32 once the board is in DFU mode and will generate output similar to the following:

```
Flashing OS with /Users/markstevens/.local/share/WildernessLabs/Firmware/0.9.4.0/Meadow.OS.bin
dfu-util update required. To install, run: brew upgrade dfu-util
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

dfu-util: Warning: Invalid DFU suffix signature
dfu-util: A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 0483:df11
Device DFU version 011a
Claiming USB DFU Interface...
Setting Alternate Interface #0 ...
Determining device status...
DFU state(10) = dfuERROR, status(10) = Device's firmware is corrupt. It cannot return to run-time (non-DFU) operations
Clearing status
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 011a
Device returned transfer size 2048
DfuSe interface name: "Internal Flash  "
Downloading element to address = 0x08000000, size = 2097152

Erase    done.	[=========================] 100%      2097152 bytes

Download done.	[=========================] 100%      2097152 bytes
File downloaded successfully
Submitting leave request...
Transitioning to dfuMANIFEST state
```

Flashing the OS can be omitted by using the `-d` flag.

#### Runtime System

The next component to be written is the Mono runtime system.  This is written to a reserved area in the external flash memory.

```
Connecting to Meadow on /dev/tty.usbmodem336C337130361
Meadow StdInfo: Mono will not start - version mismatch: Meadow.OS version 0.9.4.0, Mono version 0.9.5.6
Connecting to Meadow on /dev/tty.usbmodem336C337130361
Meadow StdInfo: Mono is disabled
Writing /Users/markstevens/.local/share/WildernessLabs/Firmware/0.9.4.0/Meadow.OS.Runtime.bin runtime
Starting File Transfer...
Meadow StdInfo: File 10% downloaded
Meadow StdInfo: File 20% downloaded
Meadow StdInfo: File 30% downloaded
Meadow StdInfo: File 40% downloaded
Meadow StdInfo: File 50% downloaded
Meadow StdInfo: File 60% downloaded
Meadow StdInfo: File 70% downloaded
Meadow StdInfo: File 80% downloaded
Meadow StdInfo: File 90% downloaded
Meadow StdInfo: Download of 'Meadow.OS.Runtime.bin' success (checksums calculated:0x8B134941, expected:0x8B134941)
Meadow StdInfo: Erasing mono flash memory
Meadow StdInfo: Mono memory erase success
Meadow StdInfo: Flashing 10% complete
Meadow StdInfo: Flashing 20% complete
Meadow StdInfo: Flashing 30% complete
Meadow StdInfo: Flashing 40% complete
Meadow StdInfo: Flashing 50% complete
Meadow StdInfo: Flashing 60% complete
Meadow StdInfo: Flashing 70% complete
Meadow StdInfo: Flashing 80% complete
Meadow StdInfo: Flashing 90% complete
Meadow StdInfo: Verifying runtime flash operation.
Meadow StdInfo: Verifying 10% complete
Meadow StdInfo: Verifying 20% complete
Meadow StdInfo: Verifying 30% complete
Meadow StdInfo: Verifying 40% complete
Meadow StdInfo: Verifying 50% complete
Meadow StdInfo: Verifying 60% complete
Meadow StdInfo: Verifying 70% complete
Meadow StdInfo: Verifying 80% complete
Meadow StdInfo: Verifying 90% complete
Meadow StdInfo: Mono runtime successfully flashed.
Transfer Complete, wrote 3145728 bytes to Meadow
```

You can omit writing the runtime system using the `-k` flag.

#### Coprocessor Firmware

The final stage it to write the three components of the ESP firmware and this will show something similar to the following:

```
Updating ESP
Transferring /Users/markstevens/.local/share/WildernessLabs/Firmware/0.9.4.0/MeadowComms.bin
Starting File Transfer...
Meadow StdInfo: File 10% downloaded
Meadow StdInfo: File 20% downloaded
Meadow StdInfo: File 30% downloaded
Meadow StdInfo: File 40% downloaded
Meadow StdInfo: File 50% downloaded
Meadow StdInfo: File 60% downloaded
Meadow StdInfo: File 70% downloaded
Meadow StdInfo: File 80% downloaded
Meadow StdInfo: File 90% downloaded
Transfer Complete, wrote 1242720 bytes to Meadow
Transferring /Users/markstevens/.local/share/WildernessLabs/Firmware/0.9.4.0/bootloader.bin
Starting File Transfer...
Meadow StdInfo: File 10% downloaded
Meadow StdInfo: File 20% downloaded
Meadow StdInfo: File 30% downloaded
Meadow StdInfo: File 41% downloaded
Meadow StdInfo: File 51% downloaded
Meadow StdInfo: File 61% downloaded
Meadow StdInfo: File 71% downloaded
Meadow StdInfo: File 80% downloaded
Meadow StdInfo: File 90% downloaded
Transfer Complete, wrote 24896 bytes to Meadow
Transferring /Users/markstevens/.local/share/WildernessLabs/Firmware/0.9.4.0/partition-table.bin
Starting File Transfer...
Meadow StdInfo: File 16% downloaded
Meadow StdInfo: File 33% downloaded
Meadow StdInfo: File 50% downloaded
Meadow StdInfo: File 66% downloaded
Meadow StdInfo: File 83% downloaded
Transfer Complete, wrote 3072 bytes to Meadow
Connecting to Meadow on /dev/tty.usbmodem336C337130361
Meadow StdInfo: Mono is disabled
Updated Meadow to OS: 0.9.4.0, Mono: 0.9.4.0, Coprocessor: 0.9.4.0
```

The ESP firmware can be omitted using the `-e` flag.

## Advanced Troubleshooting

If you have got here then you are either curious or have a problem that was not solved by the above steps.  Let us start by defining some terms that will be used in the remainder of this text.

The `target` operating system is the version of the operating system, runtime etc. that is being deployed to the board.

The `current` operating system is the version of the operating system, runtime etc. that is currently on the board or was on the board at the point where upgrade problems started to be experienced.

The `fallback` operating system is any version `0.6.4.0` or above that is not the same as the `target` or the `current` operating system.

So for example, upgrading `RC1` to `RC2` we may have the following:

* `target` OS is `0.9.4.0`
* `current` OS is `0.9.2.5`
* `fallback` OS is `0.6.4.0`

It should also be noted that except in exceptional circumstances (local issues with static electricity damaging the board, physical damage) it is unusual to not be able to resurrect a "bricked" board.

One piece of information that maybe required is the location of the firmware on the local machine.  This is normally given when the firmware is downloaded.  So for `RC2` (`0.9.4.0`) on a Mac the following is shown at the end of the download:

`Downloaded and extracted OS version 0.9.4.0 to: /Users/username/.local/share/WildernessLabs/Firmware/0.9.4.0`

Depending upon the issue you may need to know this location later.

## Determine the Versions Deployed

The first step is to ensure that the correct versions of the three components have been deployed to the board.  Execute `meadow device info` to work out which versions are in place and compare these to the release notes.

If any of the component versions do not match the release notes then either try to redeploy all of the OS components or use the `-d`, `-k` or `-e` flags to deploy only the components that have failed.

## `meadow device info` Causes an Exception or Locks

This is normally an operating system deployment failure or corruption on the STM32.  It is necessary to redeploy the OS (and possibly the runtime and coprocessor firmware) in order to resolve this issue.

One other scenario to eliminate is a case where one of the OS or the runtime do not flash correctly.  In this case we need to use a slightly different approach.  The first step is to put an older operating system on the board.  Doing this will cause an issue with the OS and Mono version step.  In this case the OS will refuse to start Mono and we can then start the recovery process.

Using the definitions of `target`, `current` and `fallback` from above, the recovery steps are as follows:

Restart the board in DFU mode and deploy the `fallback` operating system.  You only need to deploy the OS itself, the runtime can be left as is.  This can be done using `meadow flash os -k -e -v a.b.c.d` or using the `dfu-util` method below.

Now attempt to deploy the OS as normal using the command `meadow flash os`.

If this still fails then revert to the `fallback` OS again and clear the flash on the board with the command `meadow flash erase`.  Note that doing this will clear the entire flash including the deployed application.  Now try to deploy the `target` OS once more with `meadow flash os`.



## Onboard LED is Green or Flashing Red

This indicates that the system is having problems progressing past the bootloader part of the boot sequence.  This can be resolved by attempting to flash OS once more.

There are rare cases where using `meadow flash os` does not resolve this issue.  In this case using `dfu-util` can help.  The first step is to change to the firmware download directory shown as part of the `meadow download os` process.

Next, place the board in bootloader mode using the `Boot` button and the `Reset`/USB power steps.

Finally issue the command:

```console
dfu-util -a 0 -D Meadow.OS.bin -s 0x08000000
```

This command will write the `Meadow.OS.bin` file to the STM32 and will show output similar to the OS flash stage shown above.

## Meadow StdInfo: Mono will not start - version mismatch: Meadow.OS version 0.9.4.0, Mono version 0.9.2.5

This message indicates that the OS and Mono versions do not match.  In the case of the message above, the OS has been updated to `0.9.4.0` but the Mono runtime system has not been upgraded successfully.

In this case, it should not be necessary to update the OS, just the runtime system and possibly the coprocessor firmware.  `meadow device info` will confirm which components need updating.

Executing `meadow flash os` using the `-d` and possibly the `-e` flag should update the runtime and the coprocessor firmware leaving the OS in place.

## `Meadow StdInfo: Mono will not start - the following files are missing: mscorlib.dll, System.Core.dll, System.dll, Meadow.dll, App.exe`

This message normally indicates that there is no application deployed to the board.  Applications require `App.dll` or `App.exe` along with the basic supporting DLLs.

Execute `meadow device info` to check that the OS, Mono and ESP version numbers match, if they do then it should be a case or redeploying the application either using the `meadow` CLI (covered later) or using an IDE with the appropriate extension.

This situation can arise if one or more of the minimum set of files have been deleted or the flash has been reformatted prior to the OS being deployed.

## Application Deployment Issues Using IDE

Deployment problems can sometimes occur when deploying from the IDE.  These could result due to issues with either the OS deployed to the board or with the integration with the IDE.  It is helpful if the source of the issue can be identified.  A manual deployment using the `meadow` tool can sometimes provide additional information.

Deployment from the command line:

* Compile the application using the IDE
* From a command prompt change to the directory containing the compiled binaries.  Typically this is the `bin/Debug/netstandard2.1` under the project directory.
* Execute the command `meadow app deploy -f App.dll` to deploy the application to the board.

If this succeeds then the issue is either transient or there could be an issue with the IDE integration.  If this fails then this points to an OS or core command line library issue.  These issues should be reported to the support team.
