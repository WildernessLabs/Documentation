---
title: Getting Started with Netduino
---

Instructions for Netduino 2, 3, and Go! boards.

## Installation

First, configure your development environment by installing the necessary software.

### Windows

Download and install the following:

1. [.NET Micro Framework (.NETMF) v4.3.2 - QFE2 SDK](http://downloads.wildernesslabs.co/NETMF_SDK/netmf-v4.3.2-SDK-QFE2-RTM.zip)
2. NETMF Plugin for Visual Studio [Visual Studio 2015](http://downloads.wildernesslabs.co/NETMF_SDK/netmfvs14.vsix) or [Visual Studio 2013](http://downloads.wildernesslabs.co/NETMF_SDK/netmfvs2013.vsix)
3. [Netduino SDK V5](http://downloads.wildernesslabs.co/Netduino_SDK/netduinosdk_v5.exe)

### Mac

Download and install the latest [Visual Studio for Mac](https://www.visualstudio.com/vs/visual-studio-mac/) or [Xamarin Studio](http://www.monodevelop.com/download/)

Launch Xamarin Studio and install the NETMF plug-in:

1. Open the *Visual Studio* menu and select *Extensions*. Note, for Xamarin Studio users, the menu item is called *Add-ins...*.
2. Select the *Gallery* Tab.
3. In the *search* box, type `MicroFramework`:
![MicroFramework Search Dialog](VS_MicroFramework_Addin.png)
4. Click *install* and follow the directions.
5. Restart Visual Studio/Xamarin Studio.

## Make Sure the Board Firmware is Up to Date
Once your development environment is configured, make sure your board has the latest firmware on it. The firmware includes a customized .NETMF runtime specific to the board hardware. Firmware update instructions are [here](../About/Updating_Firmware).

## Create your First App
 	
### Visual Studio

 1. Launch Visual Studio and create a new solution of type **Visual C# > Micro Framework > Console Application** and name it whatever you want:
 ![New Solution Dialog](02-New_Solution_VS.png)
 
 2. Right-click on the **References** folder in the Solution Explorer and add:
 
     * Microsoft.Spot.Hardware
     * SecretLabs.NETMF.Hardware
     * SecretLabs.NETMF.Harware.Netduino (or NetduinoPlus if that's what you're using)

### Xamarin Studio

 1. Launch Xamarin Studio and create a new solution of type **C# > MicroFramework > MicroFramework Console Application** and name it whatever you want:
![New Solution Dialog](01-NewSolution_XS.png)

 2. Double-click on the **References** folder in the Solution Pad and add:
 
    * Microsoft.Spot.Hardware
    * SecretLabs.NETMF.Hardware
    * SecretLabs.NETMF.Harware.Netduino (or NetduinoPlus if that's what you're using)

### Add the Code

After you've created the project and configured the references, add the following code to your program.cs file. Not that you might want to modify the namespace declaration to match your projet's name:

```CSharp
using System;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using System.Threading;
using SecretLabs.NETMF.Hardware.Netduino;

namespace NetduinoBlink
{
	public class Program
	{
		public static void Main()
		{
			// configure an output port for us to "write" to the LED
			OutputPort led = new OutputPort(Pins.ONBOARD_LED, false); 
			// note that if we didn't have the SecretLabs.NETMF.Hardware.Netduino DLL, we could also manually access it this way:
			//OutputPort led = new OutputPort(Cpu.Pin.GPIO_Pin10, false); 
			int i = 0;
			while (true) 
			{ 
				led.Write(true); // turn on the LED 
				Thread.Sleep(250); // sleep for 250ms 
				led.Write(false); // turn off the LED 
				Thread.Sleep(250); // sleep for 250ms 

				Debug.Print ("Looping" + i);
				i++;
			} 

		}
	}
}
```

This code does the following things:

 1. It creates an OutputPort. An OutputPort allows you to "Write" to a pin, e.g. power it on or off.
 2. Loops forever, writing to the port on, then waiting 250ms, then turning it on.
 3. Prints to the Debug window the loop iteration it's on.

### Deploy

#### Xamarin Studio

 1. Make sure your Netduino is plugged in. It should show up in the build bar at the top:
![Xamarin Studio Build Bar](03-Build_Bar.png)

 2. Hit the ">" button to deploy.
 
The app should deploy and after a moment, the LED should start blinking on the Netduino:

![](05-blinking_Netduino.gif)

You should also see the debug output in the **Application Output** window:

```
Deploy: Deploying assemblies to device
Deploy: Deploying assemblies for a total size of 560 bytes
Deploy: Assemblies successfully deployed to device.

...
Looping0
Looping1
Looping2
Looping3
```
 
#### Visual Studio

 1. Make sure your Netduino is plugged in.
  	
 2. Double-click on the **Properties** item in the Solution Explorer, select **.NET Micro Framework** on the left, and the under **Deployment** choose **USB** and in the **Device** drop down, choose your Netduino device:
 ![Device Chooser](04-VS_Device_Choose.png)

 3. Click the **Start >** button in the toolbar to deploy to yoru device.
 
The app should deploy and after a moment, the LED should start blinking on the Netduino:

![](05-blinking_Netduino.gif)
