# Getting Started with Netduino
Instructions for Netduino 2, 3, and Go! boards.

# Installation
First, configure your development environment by installing the necessary software.

## Windows
Download and run the following:

1. [.NET Micro Framework (NETMF) SDK (v4.3.2. QFE2)](http://static.netduino.com/downloads/netmfsdk/v4.3.2-QFE2/MicroFrameworkSDK.MSI)
2. NETMF Plugin for Visual Studio (VS) 2015 or [VS 2013](http://static.netduino.com/downloads/netmfsdk/v4.3.2-QFE2/netmfvs2013.vsix)
3. Netduino SDK v5

## Mac
Download and install the following:

 1. Xamarin Studio 6 (also works with v5)
 2. Netduino SDK v5 (for Mac)

Launch Xamarin Studio and install the NETMF plug-in:

1. Open the *Xamarin Studio* menu and select *Add-ins...*.
2. Select the *Gallery* Tab.
3. In the *search* box, type `MicroFramework`:
![MicroFramework Search Dialog](XS_AddIns_MicroFramework_Search.png)
4. Click *install* and follow the directions.
5. Restart Xamarin Studio.

##  Configuring the Board Firmware
Once your development environment is configured, make sure your board has the latest firmware on it. The firmware includes a customized .NETMF runtime specific to the board hardware.

1. Plug your Netduino into your computer.
2. Launch *Netduino Utils* application.
3. Select the board in the left nav.
4. To the right of the firmware info, click *Check for Update*

