---
layout: Meadow
title: Meadow CLI
subtitle: Command Line Interface for Meadow
---

# Meadow CLI

## Getting Started

The CLI tool supports DFU flashing for `nuttx.bin` and `nuttx_user.bin`. When the application is run with `-d`, it looks for `nuttx.bin` and `nuttx_user.bin` in the application directory and if not found, it will abort. Optionally, paths for the files can be specific with `--osFile` and `--userFile`.

The CLI tool also supports device and file management including file transfers, flash partitioning, and MCU reset.

To run MeadowCLI on Windows, run MeadowCLI.exe from the command prompt. On Mac and Windows, call **mono MeadowCLI.exe**.

## Options

To see the options, run the application with the --help arg.

## Running Commands 

File and device commands require you to specify the serial port. You can determine the serial port name in Windows by viewing the Device Manager.

On Mac and Linux, the serial port will show up in the **/dev** folder, generally with the prefix **tty.usb**. You can likely find the serial port name by running the command `ls /dev/tty.usb`.

Note: MeadowCLI automatically caches the serial port name. Once you've sent a command using the `--SerialPort` parameter, you can omit in future calls.

## Useful commands

### Set the trace level

You can set the debug trace level to values 1, 2, 3, or 4. 2 in the most useful.
`MeadowCLI.exe --SetTraceLevel --Level 2 --SerialPort [NameOfSerialPort]`

### File transfers

`MeadowCLI.exe --WriteFile -f [NameOfFile] --SerialPort [NameOfSerialPort]`

### List files in flash

`MeadowCLI.exe --ListFiles --SerialPort [NameOfSerialPort]`

### Delete a File

`MeadowCLI.exe -s [NameOfSerialPort] --DeleteFile --TargetFileName [nameOfFile]`

### Reformat the flash

`MeadowCLI.exe --EraseFlash`

### Stop/start the installed application from running automatically

`MeadowCLI.exe --MonoDisable`

`MeadowCLI.exe --MonoEnable`

## Running applications 

You'll typically need at least six files installed to the Meadow flash to run a Meadow app:
1. System.dll
2. System.Core.dll
3. mscorlib.dll
4. Meadow.Core.dll
5. Meadow.Foundation.dll
6. App.exe (your app)

It's a good idea to disable mono first, copy the files, and then enable mono