---
layout: Meadow
title: Meadow.CLI
subtitle: Command Line Interface for Meadow
---

The Meadow Command-Line-Interface (Meadow.CLI) provides a way to interact with the board and perform functions via a terminal window.

The Meadow.CLI tool supports device and file management including file transfers, and MCU reset.

To run Meadow.CLI on Windows, open a command window and run `MeadowCLI.exe`. On macOS, call **mono MeadowCLI.exe** to execute it via mono.

You can download the Meadow.CLI executable from the [downloads page](/Meadow/Getting_Started/Downloads/).

## Enumerating Options

To see the options, run the application with the `--help` arg.

## Running Commands

File and device commands require you to specify the serial port. You can determine the serial port name in Windows by viewing the Device Manager, under the **Ports (COM & LPT)** node.

On Mac and Linux, the serial port will show up in the **/dev** folder, generally with the prefix **tty.usb**. You can likely find the serial port name by running the command:

```bash
ls /dev/tty.usb*
```

Note: The serial port can be specified with either `--Serial Port [NameOfSerialPort]` or simply `-s [NameOfSerialPort]`.

Note: MeadowCLI automatically caches the serial port name. Once you've sent a command using the `--SerialPort` parameter, you can omit in future calls.

## Useful commands

### File transfers

Writes a file into the Meadow's flash file system.

```bash
Meadow.CLI.exe --WriteFile -f [NameOfFile] --SerialPort [NameOfSerialPort]
```

### List files in flash

Lists all the files in the flash file system.

```bash
Meadow.CLI.exe --ListFiles --SerialPort [NameOfSerialPort]
```

### List files in flash including CRC checksum

The command lists the same files as `--ListFiles` but includes the CRC checksum. Because this command must separately read each file, this command takes longer to execute.

```bash
Meadow.CLI.exe --ListFilesAndCrcs --SerialPort [NameOfSerialPort]
```

### Delete a File

Deletes one existing file from the flash file system.

```bash
Meadow.CLI.exe --DeleteFile --TargetFileName [nameOfFile] --SerialPort [NameOfSerialPort]
```

### Get Meadow's device information

Requests the Meadows device information, including Meadow.OS version.

```bash
Meadow.CLI.exe --GetDeviceInfo --SerialPort [NameOfSerialPort]
```

### Renew file system

```bash
Meadow.CLI.exe --RenewFileSys --SerialPort [NameOfSerialPort]
```

This command recreates the files system. After invalidating the current file system, this command restarts Meadow, after which, a new, empty flash file system exists. This command makes the reformatting command (EraseFlash) unnecessary unless confidential information needs to be erased.

### Reformat the flash

```bash
Meadow.CLI.exe --EraseFlash --SerialPort [NameOfSerialPort]
```

This operation takes just over 2 minutes to complete.  It is recommended that you leave your Meadow device connected to your computer for about 3-5 minutes following the execution of this command and then reset the board. The command completely erases the flash memory device and on restart, recreates the file system.

### Restart Meadow

This command causes Meadow to be restated from the Meadow.CLI.

```bash
Meadow.CLI.exe --ResetMeadow --SerialPort [NameOfSerialPort]
```

### Stop/start the installed application from running automatically

```bash
Meadow.CLI.exe --MonoDisable --SerialPort [NameOfSerialPort]
```

```bash
Meadow.CLI.exe --MonoEnable --SerialPort [NameOfSerialPort]
```

### Read the mono run state

Requests Meadows to return whether mono will run or not on restart.

```bash
Meadow.CLI.exe --MonoRunState --SerialPort [NameOfSerialPort]
```

### Set the trace level

This command is generally not necessary for normal Meadow app development, as it reports the MeadowOS internal trace information. You can set the debug trace level to values 0, 1, 2 or 3. Trace level 3 being the most verbose and level 0 restores the internal default. Trace level 2 is the most useful.

```bash
Meadow.CLI.exe --SetTraceLevel --Level 2 --SerialPort [NameOfSerialPort]
```

## Running applications

You'll typically need at least the following six files installed to the Meadow flash to run a Meadow app:

1. System.dll
2. System.Core.dll
3. mscorlib.dll
4. Meadow.Core.dll
5. Meadow.Foundation.dll
6. App.exe (your app)

It's a good idea to disable mono first, copy the files, and then enable mono.
