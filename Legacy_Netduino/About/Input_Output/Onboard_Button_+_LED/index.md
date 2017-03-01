---
title: Onboard Button + LED
---


[LED available via `Pins.ONBOARD_LED`]

[Button available via `Pins.ONBOARD_BTN`]

Can access them via `OutputPort` or `InputPort`. Following example illustrates turning the LED on when the Button is pressed.


```CSharp

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

Button can also be set as an InterruptPort which raises events:

[code]

## Further Reading

[Working with Switches and Buttons]