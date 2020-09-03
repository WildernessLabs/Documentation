---
layout: Meadow
title: Meadow Beta 4
subtitle: Release Notes
---


# b4.0

W000t, b4.0 is here! 

 * **Basic WiFi Networking**
 * **Basic File System**
 * **Serial Port Fixes**
 * **CLI/USB deployment overhaul**
 * **Garbage Collector Improvements**

## Updating

This release requires an OS update as well as IDE extension updates. 

If you're on Windows, it's an easy one-click upgrade via the extension. However, on macOS 
(and Linux) it's significantly more complicated. We recommend updating on a Windows machine in Visual 
Studio if you have access to one, but the manual steps for macOS and Linux are provided as well.

### macOS/Linux Manual Instructions

Open a terminal window and execute the following steps. Please note that if you don't have DFU-Util 
installed, you can find instructions on how to install it [here](/Meadow/Getting_Started/Deploying_Meadow/DFU/).

1. DFU Meadow.OS.bin:  
  `dfu-util -a 0 -S [serial] -D Meadow.OS.bin -s 0x08000000`  
2. Reset F7
3. Disable mono (may need to run twice if you get an exception the first time). 
  `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
4. Erase flash:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --EraseFlash --KeepAlive`  
   This will take a few minutes. After it says "Bulk erase completed," hit space to exit.
5. Reset F7
6. Upload new Mono Runtime  
  `mono ./Meadow.CLI/Meadow.CLI.exe --WriteFile -f Meadow.OS.Runtime.bin --KeepAlive`  
   After "Download success," hit space again.
7. Move the runtime into it's special home on the 2MB partition   
  `mono ./Meadow.CLI/Meadow.CLI.exe --MonoFlash --KeepAlive`  
   After "Mono runtime successfully flashed," hit space to exit.
8. Upload the ESP32 bootloader:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f bootloader.bin --McuDestAddr 0x1000` 
9. Upload the ESP32 partition table:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f partition-table.bin --McuDestAddr 0x8000`
10. Upload the ESP32 Meadow Comms application:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f MeadowComms.bin --McuDestAddr 0x10000`
11. Reset F7
 
## Meadow.OS Improvements

### Networking

Basic WiFi networking is up! You can scan for WiFi networks, connect to one, and do basic `HttpClient` tasks. `HttpServer` is unavailable, and SSL doesn't work yet.


### File System

[you can now use the `System.IO` file system calls to do basic file system operations such as create, open, and delete files]  
[`FileInfo` and `DirectoryInfo` don't work]


### Garbage Collector Improvements

Our Garbage Collector work is almost done now; the Mono GC works in most use cases and has been tuned for the Meadow device. We still have an outstanding 
deadlock to solve, but generally apps should stay alive for hours, days, or weeks, depending on memory allocation.

### Bug Fixes

* [#101 - SPI Bus speed property read is off by x1000](https://github.com/WildernessLabs/Meadow_Issues/issues/101) - Fixed.
* [#98 - ISerialPort.Read does not remove bytes from the ReceiveBuffer anymore.](https://github.com/WildernessLabs/Meadow_Issues/issues/98) - Fixed. This was a regression 
  introduced by some of our `SerialPort` overhaul work in `b3.12`.
* [#102 - ISerialMessagePort.preserveDelimiter=false leaves null bytes in message data](https://github.com/WildernessLabs/Meadow_Issues/issues/102) - Fixed. 
* [#XX - Title]() - status

## Meadow.CLI & Deployment Improvements

We did a big rearchitecture of our host comms layer on the Meadow, which is the part of the Meadow.OS 
stack that handles USB deployment and other CLI tasks. We refactored host comms out of the process that 
runs Mono and hosts Meadow applications. We also changed how Meadow applications are launched so that 
the Mono Virtual Machine is in its own isolated process.

The upshot of this is that deployment should be more reliable and a crashing Meadow app shouldn't tear 
down the host communications. 


## Meadow.Foundation
