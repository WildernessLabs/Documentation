---
layout: Meadow
title: Meadow OS Deployment
subtitle: Flashing the Meadow with the latest OS via Meadow.CLI
---

When you receive your Meadow board, it will need to have the latest Meadow.OS uploaded, or _flashed_, to it.

## Prerequisites

### Windows
* Install [.NET CORE SDK](https://dotnet.microsoft.com/download)
* Install Meadow.CLI: `dotnet tool install WildernessLabs.Meadow.CLI --global`
* [Update USB driver for ST devices](/Meadow/Getting_Started/Update_USB_Driver/)

### macOS
* Install [.NET CORE SDK](https://dotnet.microsoft.com/download)
* Install Meadow.CLI: `dotnet tool install WildernessLabs.Meadow.CLI --global`
* Install dfu-util: `brew install dfu-util`

You can follow this detailed step by step guide for both macOS and Windows: 

## Step 1: Download Meadow OS and network binaries

```
meadow --Download
```

## Step 2: Put the device into DFU Bootloader mode.

To update the OS, Meadow must be in _DFU bootloader_ mode. To enter this mode, the `BOOT` button needs to be held down while the board boots up. This can be accomplished one of two ways.

**If the board is disconnected:** hold the `BOOT` button down and connect the board to your computer via a Micro USB Cable.

![Primary USB port](./primary_usb.png){:standalone}

**If the board is connected:** hold the `BOOT` button down, and then press and release the `RST` (Reset) button. Then release the `BOOT` button. 

## Step 3: Flash Meadow.OS and Coprocessor Firmware

1. Flash the main Meadow.OS:
```
meadow --FlashOS
```
   When it's done, exit the CLI by pressing **ctrl+z**.

2. Reset the device (push the RST button or disconnect and reconnect) and identify the serial port name that the Meadow is connecting on:

    **Windows**
   
    On Windows, serial port name looks something like *COM5*. To locate, open *Device Manager*; the Meadow device should show up as *USB Serial Device [COMXX]*:  
  
    ![DeviceManagerPort](./ports.png){:standalone} 

    **Mac**

    Run the following from terminal:
    
    ```
ls /dev/tty.usb*
    ```
    The port should be something like `/dev/tty.usbmodem01`.

3. Once you've identified out the port name, run the following, replacing `[PORT]` with the serial port name:

    ```
meadow --MonoDisable -s [PORT]
    ```

    **NOTE: If the process hangs on *Opening port '[PORT]'...*, hit the RST button on the device.**

4. Install the Meadow.OS runtime, coprocessor firmware, and then re-enable mono:

    ```
meadow --MonoUpdateRt
meadow --FlashEsp
meadow --MonoEnable
```

Your board is now ready to have a Meadow application deployed to it!

#### Notes:

 * Linux may require `sudo` to access USB devices.

## [Next - Hello, Meadow](/Meadow/Getting_Started/Hello_World/)
