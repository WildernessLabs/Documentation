---
layout: Meadow
title: Meadow Beta 4
subtitle: Release Notes
---


# b4.0

W000t, b4.0 is here! This is a major release with a pile of new features and improvements, including our first cut of WiFi networking support as well as file system support! All in, this release includes:

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

1. Connect Meadow in bootloader mode (hold down the BOOT button)
2. Copy the new Meadow.OS.bin using dfu-util:  
  `dfu-util -a 0 -S [serial] -D Meadow.OS.bin -s 0x08000000`  
3. Reset F7
4. Disable mono (may need to run twice if you get an exception the first time). 
  `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
5. Erase flash:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --EraseFlash --KeepAlive`  
   This will take a few minutes. After it says "Bulk erase completed," hit space to exit.
6. Reset F7
7. Upload new Mono Runtime  
  `mono ./Meadow.CLI/Meadow.CLI.exe --WriteFile -f Meadow.OS.Runtime.bin --KeepAlive`  
   After "Download success," hit space again.
8. Move the runtime into it's special home on the 2MB partition   
  `mono ./Meadow.CLI/Meadow.CLI.exe --MonoFlash --KeepAlive`  
   After "Mono runtime successfully flashed," hit space to exit.
9. Upload the ESP32 bootloader:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f bootloader.bin --McuDestAddr 0x1000` 
10. Upload the ESP32 partition table:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f partition-table.bin --McuDestAddr 0x8000`
11. Upload the ESP32 Meadow Comms application:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f MeadowComms.bin --McuDestAddr 0x10000`
12. Reset F7
 
## Meadow.OS Improvements

### Networking

Basic WiFi networking is up! Check out our [Networking guide](/Meadow/Meadow_Basics/Networking/) for more information!

#### Networking Known Issues

 * **SSL not supported** - Currently, only unencrypted traffic is supported via HTTP. We're working on TLS support.
 * **`HttpServer` not available** - `HttpClient` has been tested and is fully supported, but we're still working on `HttpServer` support.
 * **Network scans require a network connection** - Due to a limitation in the API, you must first connect to a WiFi network before attempting a scan.
 * **`HttpClient` memory leak** - Each `HttpClient.Request` incurs a `~5k` memory leak on the ESP32 coprocessor, so after a number of requests it will no longer be functional. If requests become unresponsive, a call to `Device.InitWiFiAdapter()` will reset the ESP32 coprocessor and get things running again. Note that requests performed low-level socket calls do not incur this memory leak.


### File System

You can now use the `System.IO` file system calls to do basic file system operations such as create, open, and delete files on the onboard flash device. For more infomation, see the [File System guide](/Meadow/Meadow_Basics/File_System).

#### Known Issues

* **Non-persistent during deployment** - Currently, during IDE deployment, all non app-related files are purged from flash. In a near future release, all files within a special app folder will be excluded from file purging. In the meantime, if you need to persist files between app deployment, you can use Meadow.CLI to manually deploy a new app.


### Garbage Collector Improvements

Our Garbage Collector work is almost done now; the Mono GC works in most use cases and has been tuned for the Meadow device. We still have an outstanding 
deadlock to solve, but generally apps should stay alive for hours, days, or weeks, depending on memory allocation.


### Bug Fixes

* [#103 - ISerialMessagePort.preserveDelimiter=false leaves null bytes in message data](https://github.com/WildernessLabs/Meadow_Issues/issues/103) - Added.
* [#102 - Need to add a thread `SynchronizationContext` to our main thread](https://github.com/WildernessLabs/Meadow_Issues/issues/102) - Added.
* [#101 - SPI Bus speed property read is off by x1000](https://github.com/WildernessLabs/Meadow_Issues/issues/101) - Fixed.
* [#98 - ISerialPort.Read does not remove bytes from the ReceiveBuffer anymore.](https://github.com/WildernessLabs/Meadow_Issues/issues/98) - Fixed. This was a regression introduced by some of our `SerialPort` overhaul work in `b3.12`.

## Meadow.CLI & Deployment Improvements

We did a big rearchitecture of our host comms layer on the Meadow, which is the part of the Meadow.OS 
stack that handles USB deployment and other CLI tasks. We refactored host comms out of the process that 
runs Mono and hosts Meadow applications. We also changed how Meadow applications are launched so that 
the Mono Virtual Machine is in its own isolated process.

The upshot of this is that deployment should be more reliable and a crashing Meadow app shouldn't tear 
down the host communications. 

## Meadow.Foundation

Meadow.Foundation has new peripheral drivers to play with, including:

* [Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121.html)
* [Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x.html)
* [Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html)

#### Minor update on SG90 Servos

We adjusted the frequency for the SG90 micro servos that comes in the hack kit, so when using the `NamedServoConfigs.SG90` enum, you will see the servos wont twitch when using `Rotate To(int degrees)` and have full 180 degree range;

#### Updates on Graphics Library

We also added and improved several APIs in the Graphics Library including the ability to draw quadrants and rounded rectangles.

#### CharacterDisplay now supports I2C

If you have an LCD character display comes with an I2C backpack, you can now instantiate a CharacterDisplay object passing an II2cBus, reducing eight Digital IO pins to just two for I2C.