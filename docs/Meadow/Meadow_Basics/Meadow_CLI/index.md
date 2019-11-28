---
layout: Meadow
title: Meadow.CLI
subtitle: Command Line Interface for Meadow
---

The Meadow Command-Line-Interface (Meadow.CLI) provides a way to interact with the board and perform functions via a terminal window.

The Meadow.CLI tool supports device and file management including file transfers, flash partitioning, and MCU reset.

To run Meadow.CLI on Windows, open a command window and run `MeadowCLI.exe`. On macOS, call **mono MeadowCLI.exe** to execute it via mono.

You can download the Meadow.CLI executable from the [downloads page](/Meadow/Getting_Started/Downloads/). 


## Enumerating Options

To see the options, run the application with the `--help` arg.

## Running Commands 

File and device commands require you to specify the serial port. You can determine the serial port name in Windows by viewing the Device Manager.

On Mac and Linux, the serial port will show up in the **/dev** folder, generally with the prefix **tty.usb**. You can likely find the serial port name by running the command:

```bash
ls /dev/tty.usb*
```

Note: MeadowCLI automatically caches the serial port name. Once you've sent a command using the `--SerialPort` parameter, you can omit in future calls.

## Useful commands

### Set the trace level

You can set the debug trace level to values 1, 2, 3, or 4. Trace level 2 is the most useful.

```bash
Meadow.CLI.exe --SetTraceLevel --Level 2 --SerialPort [NameOfSerialPort]
```

### File transfers

```bash
Meadow.CLI.exe --WriteFile -f [NameOfFile] --SerialPort [NameOfSerialPort]
```

### List files in flash

```bash
Meadow.CLI.exe --ListFiles --SerialPort [NameOfSerialPort]
```

### Delete a File

```bash
Meadow.CLI.exe -s [NameOfSerialPort] --DeleteFile --TargetFileName [nameOfFile]
```

### Reformat the flash

```bash
Meadow.CLI.exe --EraseFlash
```

This operation takes just over 2 minutes to complete.  It is recommended that you leave your Meadow device connected to your computer for about 3-5 minutes following the execution of this command and then reset the board.

### Stop/start the installed application from running automatically

```bash
Meadow.CLI.exe --MonoDisable
```

```bash
Meadow.CLI.exe --MonoEnable
```

## Running applications 

You'll typically need at least six files installed to the Meadow flash to run a Meadow app:
1. System.dll
2. System.Core.dll
3. mscorlib.dll
4. Meadow.Core.dll
5. Meadow.Foundation.dll
6. App.exe (your app)

It's a good idea to disable mono first, copy the files, and then enable mono.
