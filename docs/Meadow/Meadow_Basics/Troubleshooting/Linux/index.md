---
layout: Meadow
title: Linux
subtitle: Troubleshooting guide to detect Meadow on Linux
---

## Device not found

Meadow on Linux will typically appear as a serial device **/dev/ttyACM*** unless it's in BOOT mode.

There a couple of "gotcha's" which you should be aware of and may vary depending on your Linux distribution:

1)  You may not have user permission to access the serial device
2)  Port probing may be active (aka ModemManager) - this is the system trying to detect what you have plugged in and will block access


To overcome these issues, add new rules to udev.

Create a file:

**/etc/udev/rules.d/99-wilderness-labs.rules**


    # Wilderness Labs
    ATTRS{idVendor}=="2e6a", ENV{ID_MM_DEVICE_IGNORE}="1", ENV{MTP_NO_PROBE}="1", MODE:="0666"
    
    
    # 0483:df11 - STM32F4 Discovery in DFU mode (CN5)
    SUBSYSTEMS=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="df11", MODE:="0666"

Reload udevd rules with

    sudo udevadm control --reload
