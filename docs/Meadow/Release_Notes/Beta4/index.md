---
layout: Meadow
title: Meadow Beta 4
subtitle: Release Notes
---

# b4.2

This is a big release with a ton of stability fixes, an overhaul of the CLI, and big new features for networking. Major changes and improvements include:

 * **Meadow.OS Flashing from CLI** - We pulled the Meadow.OS firmware uploading out of the Visual Studio IDE and moved it into the CLI for a more unified and reliable Meadow.OS upload experience. [Check out the updated guide](/Meadow/Getting_Started/Deploying_Meadow/).
 * **WiFi Enumeration Fix** - You can now enumerate WiFi networks without having to first connect to a Network.
 * **Faster, More Reliable OS Startup** - Meadow.OS startup is more robust and better handles a mismatch between co-processor firmware or runtime version.
 * **Exceptions on Reflection.Emit(ted) code work** - Exceptions via code that was executed from `Reflection.Emit()` now work properly. Previously they would tear down the .NET runtime.
 * **WiFi Memory Leak Fixed** - Network requests no longer leak memory.
 * **Networking Server Methods** - `UdpClient`, `TcpListener` and `TcpClient` are all working now. Note that we're still working on `HttpListener`.
 * **[Meadow.OS Watchdog Timer](/Meadow/Meadow_Basics/Meadow.OS/Watchdog/)** - You can now use the hardware watch timer, which will automatically restart the device in case of an application hang.
 <!--* **`TextDisplayMenu`** - Meadow.Foundation now has a new library called `TextDisplayMenu` that allows for easy menu creation and interaction.-->
 * **Meadow.Foundation `GraphicsLibrary` Upgrades** - The [Graphics Library](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/uGraphics/) available in Meadow.Foundation got some serious performance upgrades, as well as the ability to run `TextDisplayMenu` on any graphics display (as well as `CharacterDisplay`s).

## Meadow.Foundation

<!--### `TextDisplayMenu` Library

The [`TextDisplayMenu`](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/) library is an extensible framework for quickly creating hierarchical, editable menus that can display on a `CharacterDisplay` or a graphics display via `GraphicsLibrary`. 

![Animated image of a menu displayed on an LCD with a rotary encoder driving navigation.](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/TextDisplayMenu.gif)

The menu can be created programmatically or loaded from JSON, and has a number of built-in menu item types for display and editing input including: time, temperature, and numbers. Additionally, you can easily create custom menu item types that allow users to edit their value via the inputs.-->

### `GraphicsLibrary` Updates

We improved performance for all displays using [`GraphicsLibrary`](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/uGraphics/) with additional performance for color Tft displays.

`GraphicsLibrary` also includes several new and improved APIs including:
- Support for 12bpp (RGB444) display buffers which reduces frame buffer memory
- Center and right text alignment when calling `DrawText`
- `InvertPixel` and `InvertRectangle` methods which are great for drawing cursors

### New Drivers

 * [Audio.Mp3.Yx5300 (serial MP3 player)](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300.html)
 * [Sensors.Atmospheric.AdaFruitMPRLS (ported pressure sensor)](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor.html)
 * [Sensors.Motion.Mag3110 (3-axis magnetometer)](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html)
 * [Sensors.Environmental.AnalogWaterLevel](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel.html)
 * [Displays.Ssd1327 (4bpp greyscale OLED)](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1327.html)
 
 * Additional TFT SPI Display Drivers:
   * [Displays.Tft.HX8357b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Hx8357b.html)
   * [Displays.Tft.HX8357d](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Hx8357d.html)
   * [Displays.Tft.GC9A01](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Gc9a01.html)
   * [Displays.Tft.ILI9481](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9481.html)
   * [Displays.Tft.ILI9486](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9486.html)
   * [Displays.Tft.ILI9488](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9488.html)
   * [Displays.Tft.Rm68140](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Rm68140.html)
   * [Displays.Tft.ST7796s](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.St7796s.html)

## Bug Fixes

- [#118 - Interrupt events not unhooking](https://github.com/WildernessLabs/Meadow_Issues/issues/118) - Fixed.
- [#116 - System.Net.Sockets.SocketException (0x80004005): Access denied on creating Socket](System.Net.Sockets.SocketException (0x80004005): Access denied on creating Socket) - Fixed as part of the new network work.
- [#109 - CLI Uplink percentages > 100%](https://github.com/WildernessLabs/Meadow_Issues/issues/109) - Fixed as part of the CLI overhaul.


# b4.0.1

This release focuses on stability and ease of use, and it comes with a couple of major improvements:

* **Expanded set of Meadow Base Class Libraries!** Meadow is now shipping with a complete set of BCLs. This means you can now access libraries such as `System.Numerics`, `System.Transactions` and `System.Json`. This not only greatly extends the .NET API surface available to Meadow, but it also means that 3rd library compatibility is drastically improved now that Meadow includes many common dependency libraries.
* **Nugets are easier to consume.** When you add a Nuget package to your project, the Meadow Visual Studio extension will now automatically resolve and include any necessary base class library (BCL) dlls. So for instance, when you add `System.Text.Json`, the extension will pull in the required dlls that it needs from our Meadow.Assemblies Nuget package and make sure they get deployed to the board. No more “Can’t find [x].dll” messages.
* **Deployment is much more reliable.** We also did a bunch of work on the extensions to better integrate with the Meadow.CLI. Deployment is now not only more reliable, but we’ve reduced the random disconnects that were happening after an app was deployed, and VS was listening for application output.
* **Flashing from VS for Windows works again.** We were also able to fix the bug that we had in Visual Studio for Windows that prevented Meadow.OS from being flashed correctly. A number of customers were seeing an “unspecified network error,” after upgrading to b4.0, so we had to disable the automatic Meadow.OS upload and required manual flashing to upgrade. No more! Now you can easily upgrade Meadow.OS from Visual Studio again. Note that Mac users still have to flash manually, as that feature isn’t currently possible in VS4Mac.

## Meadow.Foundation

This release also includes a couple of new drivers:
* `Analog.WaterLevel` is driver that represents common analog water level sensors to detect both the presense and depth of water.

* `Audio.Mp3.Yx5300` is an MP3 player controlled over serial. It's now possible to add sound effects or music to your Meadow project.

## Updating

This release only requires IDE extension and Meadow nuget updates. 

# b4.0

W000t, b4.0 is here! This is a major release with a pile of new features and improvements, including our first cut of WiFi networking support as well as file system support! All in, this release includes:

- **Basic WiFi Networking**
- **Basic File System**
- **Serial Port Fixes**
- **CLI/USB deployment overhaul**
- **Garbage Collector Improvements**

## Updating

This release requires an OS update as well as IDE extension updates. We recommend updating on a Windows machine in Visual
Studio if you have access to one, but the manual steps for macOS and Linux are provided as well.

### Windows instructions
 
**Note:** Due to a bug in the VS for Windows IDE Extension, you must update manually in order to get WiFi networking working.

<!--
### Windows instructions

1. Download/update [VS Tools for Meadow](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow01) extension.
1. Connect the device in normal mode and click "Check Version".
1. If you are on OS version 0.3.12 or later, you must first "Erase Flash".
1. Click "Download Meadow OS".
1. Next, reconnect the device in bootloader mode and then "Flash Device".
-->

#### Post-build

A bug in msbuild is causing `System.Net.Http.dll` to not copy to the Output Directory. A temporary workaround is to add a post-build step to the project by adding the following to your csproj file within the `Project` node:

```
<Project Sdk="Meadow.Sdk/1.1.0">
    ...
    <Target Name="PostBuild" AfterTargets="PostBuildEvent">
      <Exec Command="copy C:\Users\[YOUR_FOLDER]\.nuget\packages\wildernesslabs.meadow.assemblies\0.3.2\lib\net472\System.Net.Http.dll  $(OutDir)" />
    </Target>
</Project>
```

<!--### macOS/Linux Manual Instructions-->

#### Manual Update Instructions

First, go to the [Downloads page](http://developer.wildernesslabs.co/Meadow/Getting_Started/Downloads/) and download the Beta 4.0 Meadow.OS binaries, the Beta 4.0 CLI, and the Meadow network binaries.

Unzip everything to a common folder, the instructions below assume the OS and network binaries are in the same folder and the CLI is in a `Meadow.CLI` subfolder relative to the OS binaries.

Open a terminal window and execute the following steps. Please note that if you don't have DFU-Util
installed, you can find instructions on how to install it [here](/Meadow/Getting_Started/Deploying_Meadow/DFU/).

1. Connect Meadow in normal mode
1. Disable mono (may need to run twice if you get an exception the first time).
   `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
1. Erase flash:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --EraseFlash --KeepAlive`  
    This will take a few minutes. After it says "Bulk erase completed," hit space to exit.
1. Connect Meadow in bootloader mode (hold down the BOOT button)
1. Copy the new Meadow.OS.bin using dfu-util:  
   `dfu-util -a 0 -S [serial] -D Meadow.OS.bin -s 0x08000000`
1. Reset F7
1. Disable mono (may need to run twice if you get an exception the first time).
   `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
1. Upload new Mono Runtime  
   `mono ./Meadow.CLI/Meadow.CLI.exe --WriteFile -f Meadow.OS.Runtime.bin --KeepAlive`  
    After "Download success," hit space again.
1. Move the runtime into it's special home on the 2MB partition  
   `mono ./Meadow.CLI/Meadow.CLI.exe --MonoFlash --KeepAlive`  
    After "Mono runtime successfully flashed," hit space to exit.
1. Upload the ESP32 bootloader:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f bootloader.bin --McuDestAddr 0x1000`
1. Upload the ESP32 partition table:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f partition-table.bin --McuDestAddr 0x8000`
1. Upload the ESP32 Meadow Comms application:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f MeadowComms.bin --McuDestAddr 0x10000`
1. Reset F7

## Meadow.OS Improvements

### Networking

Basic WiFi networking is up! Check out our [Networking guide](/Meadow/Meadow_Basics/Networking/) for more information!

#### Networking Known Issues

- **SSL not supported** - Currently, only unencrypted traffic is supported via HTTP. We're working on TLS support.
- **`HttpServer` not available** - `HttpClient` has been tested and is fully supported, but we're still working on `HttpServer` support.
- **Network scans require a network connection** - Due to a limitation in the API, you must first connect to a WiFi network before attempting a scan.
- **`HttpClient` memory leak** - Each `HttpClient.Request` incurs a `~5k` memory leak on the ESP32 coprocessor, so after a number of requests it will no longer be functional. If requests become unresponsive, a call to `Device.InitWiFiAdapter()` will reset the ESP32 coprocessor and get things running again.

### File System

You can now use the `System.IO` file system calls to do basic file system operations such as create, open, and delete files on the onboard flash device. For more infomation, see the [File System guide](/Meadow/Meadow_Basics/File_System).

#### Known Issues

- **Non-persistent during deployment** - Currently, during IDE deployment, all non app-related files are purged from flash. In a near future release, all files within a special app folder will be excluded from file purging. In the meantime, if you need to persist files between app deployment, you can use Meadow.CLI to manually deploy a new app.

### Garbage Collector Improvements

Our Garbage Collector work is almost done now; the Mono GC works in most use cases and has been tuned for the Meadow device. We still have an outstanding
deadlock to solve, but generally apps should stay alive for hours, days, or weeks, depending on memory allocation.

### Other Known Issues

Due to a configuration issue with UARTs that we're investigating, `D02` and `D05` are pulled `HIGH` on Meadow.OS startup. All other pins are pulled `LOW`.

### Bug Fixes

- [#103 - ISerialMessagePort.preserveDelimiter=false leaves null bytes in message data](https://github.com/WildernessLabs/Meadow_Issues/issues/103) - Added.
- [#102 - Need to add a thread `SynchronizationContext` to our main thread](https://github.com/WildernessLabs/Meadow_Issues/issues/102) - Added.
- [#101 - SPI Bus speed property read is off by x1000](https://github.com/WildernessLabs/Meadow_Issues/issues/101) - Fixed.
- [#98 - ISerialPort.Read does not remove bytes from the ReceiveBuffer anymore.](https://github.com/WildernessLabs/Meadow_Issues/issues/98) - Fixed. This was a regression introduced by some of our `SerialPort` overhaul work in `b3.12`.

## Meadow.CLI & Deployment Improvements

We did a big rearchitecture of our host comms layer on the Meadow, which is the part of the Meadow.OS
stack that handles USB deployment and other CLI tasks. We refactored host comms out of the process that
runs Mono and hosts Meadow applications. We also changed how Meadow applications are launched so that
the Mono Virtual Machine is in its own isolated process.

The upshot of this is that deployment should be more reliable and a crashing Meadow app shouldn't tear
down the host communications.

## Meadow.Foundation

Meadow.Foundation has new peripheral drivers to play with, including:

- [Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121.html)
- [Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x.html)
- [Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html)

#### Minor update on SG90 Servos

We adjusted the frequency for the SG90 micro servos that comes in the hack kit, so when using the `NamedServoConfigs.SG90` enum, you will see the servos wont twitch when using `Rotate To(int degrees)` and have full 180 degree range;

#### Updates on Graphics Library

We also added and improved several APIs in the Graphics Library including the ability to draw quadrants and rounded rectangles.

#### CharacterDisplay now supports I2C

If you have an LCD character display comes with an I2C backpack, you can now instantiate a CharacterDisplay object passing an II2cBus, reducing eight Digital IO pins to just two for I2C.
