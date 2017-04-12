---
title: Digital I/O
---

Digital ports are useful for binary communication in which the port is either high/on (powered at 3.3v) or low/off (grounded at 0v). High represents a digital 1, and low represents 0. 

Additionally, Netduion provides built-in support for a host of different types of common digital communication protocols via the digital ports. 

* [I2C (CAN)](Digital/CAN/) - [explain]
* [PWM](Digital/PWM/) - [signal pulses for analog-like functionality]
* [SPI](Digital/SPI/) - 
* [UART (Serial)](Digital/UART/)

[available via different pins on the board:]

![](../../About/Netduino3_Pinout.svg)

## Pulling High or Low

Digital ports can be set to stand at a high or low current, in what's knows as _pulling_ them high, or pulling them low. So for instance, a digital port that is pulled high will be powered at 3.3v, until it is modified, whereas a port pulled low will be at 0v. 


## Input Ports


For example, the following code initializes an `InputPort` (used for reading the port's value) on GPIO Digital Pin #2 that's pulled down to 0v, so that by default, it doesn't have a current running through it:

```CSharp
var inputPort = new InputPort(Cpu.Pin.GPIO_Pin2, false,Port.ResistorMode.PullDown);
```

The port's value can then be accessed via the `Read` method:

```CSharp
bool state = inputPort.Read();
```

### Events

In addition to polling/requesting a port for its value, the .NET MicroFramework can be set to raise an event when a port's value changes, for example, in response to a button being pressed that connnects a circuit and raises the input port's current from low (0v) to high (3.3v).

For example, the [Button Interrupt Events Sample](/Samples/Netduino/ButtonInteruptEvents) illustrates listening for the event raised when the onboard button is pressed, and then lights up the onboard LED:

```
using System;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;

namespace ButtonInterruptEvents
{
	public class Program
	{
		// An output port allows you to write (send a signal) to a pin
		static OutputPort _led = new OutputPort(Pins.ONBOARD_LED, false);

		// An interrupt port raises events when its value changes. in this case, 
		// we use it to create an event when the button is clicked.
		// We set the Interrupt mode to raise an event on both edges of the signal;
		// both down, and up.
		static InterruptPort _button = new InterruptPort((Cpu.Pin)0x15, false, 
			Port.ResistorMode.Disabled, Port.InterruptMode.InterruptEdgeBoth );
		
		public static void Main()
		{
			// turn the LED off initially
			_led.Write(false);

			// wire up the interrupt to our event handler
			_button.OnInterrupt += handleButtonClick;

			// run forever
			while (true)
			{
				
			}

		}

		static void handleButtonClick (uint port, uint data, DateTime time)
		{
			// will be 1 when pressed (raised high), and 0, when unpressed
			Debug.Print ("Data: " + data.ToString ());
			_led.Write (data == 1);
		}
	}
}
```

### Glitch Filtering
[todo]

## Output

To write to a port, an `OutputPort` is instantiated. The code below is from the same [Button Interrupt Events Sample](/Samples/Netduino/ButtonInteruptEvents):

```CSharp
static OutputPort _led = new OutputPort(Pins.ONBOARD_LED, false);
```

To send a signal to the port, the `Write` method is called, passing in `false` for a low signal (0v), or `true` for a high (3.3v) signal:

```CSharp
_led.Write(false); 
```