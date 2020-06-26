Meadow on the Linux will typically appear as a serial device **/dev/ttyACM*** unless it's in BOOT mode.

There a couple of Gotcha's which you should be aware of.  These depend on your distro.

1)  You may not have user permission to access the serial device.
2)  Port probing maybe in action (aka ModemManager).  This is the system trying to detect what you have plugged in. You don't want this interference.


The simplest way to overcome these issues, is to add new rules to udev.

Create a file:

**/etc/udev/rules.d/99-wilderness-labs.rules**


    # Wilderness Labs
    ATTRS{idVendor}=="2e6a", ENV{ID_MM_DEVICE_IGNORE}="1", ENV{MTP_NO_PROBE}="1", MODE:="0666"
    
    
    # 0483:df11 - STM32F4 Discovery in DFU mode (CN5)
    SUBSYSTEMS=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="df11", MODE:="0666"

Reload udevd rules with

    sudo udevadm control --reload
