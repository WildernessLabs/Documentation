---
layout: Meadow
title: Meadow OS Deployment
subtitle: Flashing the Meadow with the Visual Studio Extension
---

## Install MeadowOS

First, you need to install the latest **VS Tools for Meadow Extension** by [downloading it](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow01) or through the Extension Manager

1. In Visual Studio, go to **Extensions** > **Manage Extensions**.
1. Click **Online** and search for `Meadow`.
1. Install **VS Tools for Meadow** (version 0.6.0 or later), shut down all instances of Visual Studio, and restart.

Next, let's install MeadowOS.

*Important: If you previously installed MeadowOS via DFU, you need to uninstall the WinUSB bootloader driver. See **Uninstall WinUSB Bootloader Driver** below.*

1. In Visual Studio, open Meadow Device Explorer: View > Other Windows > Meadow (or Ctrl+Shift+M).
1. Click **Download MeadowOS**.
1. Connect your Meadow device in bootloader mode by connecting your device while holding down the **BOOT** button.
1. Click **Flash Device**. This will take a couple minutes to complete.
1. Choose the correct port in **Select Target Device Port** dropdown. *Hint: open Device Manager and expand Ports (COM & LPT), the correct Meadow device COM port is **USB Serial Device**.*

## Uninstall WinUSB Bootloader Driver

*If you did not installed MeadowOS via DFU previously, you can skip this section.*

1. Connect your device in bootloader mode.
1. Open **Device Manager**.
1. Find Universal Serial Bus devices > STM32 BOOTLOADER.
1. Right-click **STM32 BOOTLOADER** and select Uninstall Device.
1. In the Uninstall Device window, check **Delete the driver software for this device.** and click Uninstall.  
![Driver Uninstall](driver_uninstall.png){:standalone}
1. After uninstall is completed, the device will appear as **STM Device in DFU Mode** under Universal Serial Bus controllers.
1. Now, try flashing the device again in Visual Studio.

## [Next - Hello, Meadow](/Meadow/Getting_Started/Hello_World/)