---
layout: Netduino
title: Onboard Button + LED
subtitle: Working with Netduino's onboard push button and LED.
---

## Info

Netduino has an accessible button and a blue LED onboard. This means that you can test code that uses a button or LED circuit without having to build an external one.

The onboard LED  is availble via the `Pins.ONBOARD_LED` enumeration, and turns on briefly when power is turned on, as well as after booting to indicate the OS is operational and the program is ready to run.

The onboard Button is available via `Pins.ONBOARD_BTN` enumeration, and if not bound to either an `InputPort` or `OutputPort`, will reset the Netduino by default when pressed. To disable it, simple assign a port to it.

Note that the Netduino also has a white power LED indicating the board is powered. Boards that are network enabled, such as the N2+, N3 Ethernet, or N3 WiFi also have a network LED that lights up to indicate network traffic. 

### Netduino.Foundation PushButton and PwmLed

Both the onboard button and LED can be controlled via the Netduino.Foundation [`PushButton`](http://netduino.foundation/API/Sensors/Buttons/PushButton/) and [`PwmLed`](http://netduino.foundation/API/LEDs/PwmLed/) classes, respectively. These classes provide a modern, clean API for interacting with these peripherals.

This guide is provided for information on accessing it via the low-level .NET MicroFramework classes.


### InputPort and OutputPort

Both the onboard LED and Button are accessible via an `OutputPort` or `InputPort` object. For instance, the following example illustrates turning the LED on when the Button is pressed.


```csharp
using System;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;

namespace OnboardButtonAndLed
{
	public class Program
	{
		// An output port allows you to write (send a signal) to a pin
		static OutputPort _led = new OutputPort(Pins.ONBOARD_LED, false);
		// An input port reads the signal from a pin (Should be Pins.ONBOARD_BTN, but there is a bug)
		static InputPort _button = new InputPort((Cpu.Pin)0x15, false, Port.ResistorMode.Disabled);

		static bool _buttonPressed = false;

		public static void Main()
		{
			// turn the LED off initially
			_led.Write(false);

			// run forever
			while (true)
			{
				// set the onboard LED output to be the input of the button
				_led.Write(_button.Read());
			}

		}
	}
}

```

### InterruptPorts

Just as with other digital inputs, the onboard Button can be wired up as an [`InterruptPort`](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.interruptport(v=vs.102).aspx) to raise an event when it is pressed. For more information, see the [Digital IO guide](/Netduino/Input_Output/Digital/).

### See Also

[`InterruptPort` API Reference](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.interruptport(v=vs.102).aspx)

