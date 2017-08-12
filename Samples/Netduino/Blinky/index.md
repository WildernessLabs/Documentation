---
title: Blinky
---

Blinky is the much revered "Hello, World" app for Netduino.

It illustrates a basic program flow in Netduino and how to make the onboard LED blink.

# Code

```csharp
using System;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;
using System.Threading;

namespace Blinky
{
	public class Program
	{
		public static void Main()
		{
			// create an output port (a port that can be written to) and wire it to the onboard LED
			OutputPort led = new OutputPort(Pins.ONBOARD_LED, false);

			// run forever
			while (true)
			{
				led.Write(true); // turn on the LED
				Thread.Sleep(250); // sleep for 250ms
				led.Write(false); // turn off the LED
				Thread.Sleep(250); // sleep for 250ms
			}
		} 
	}
}
```