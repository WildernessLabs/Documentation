---
layout: Netduino
title: Digital I/O
subtitle: Netduino digital (binary) Input/Output capabilities.
---

## Info

Digital ports are useful for binary communication in which the port is either high/on (powered at `3.3V`) or low/off (grounded at `0V`). High represents a digital `1` or boolean `true`, and low represents digital `0` or boolean `false`. 

Additionally, Netduino provides built-in support for a host of different types of common digital communication protocols via the digital ports. 

* [I2C (Inter Integrated Circuit)](I2C/)
* [PWM (Pulse Width Modulation)](PWM/)
* [SPI (Serial Peripheral Interface)](SPI/) 
* [UART (Serial)](UART/)

The above protocols are sometimes called peripherals.  The location of the peripherals is shown on the pin out diagram for the boards.  The Netduino 3 and Netduino 3 WiFi pin out is as follows:

![](../../About/Netduino3_Pinout.svg){:standalone}

### Pulling High or Low

Digital ports can be set to stand at a high or low voltage, in what's knows as _pulling_ them high, or pulling them low. So for instance, a digital port that is pulled high will be powered at `3.3V`, until it is modified, whereas a port pulled low will be at `0V`.

The following is the signature for one of the `InputPort` constructors:

```csharp
public InputPort(Cpu.Pin portId, bool glitchFilter, Port.ResistorMode resistor);
```

### Input Ports

The following code initializes an [`InputPort`](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.inputport(v=vs.102).aspx) (used for reading the port's value) on GPIO Digital Pin #2 that's pulled down to `0V`, so that by default, it doesn't have a current running through it:


```csharp
var inputPort = new InputPort(Cpu.Pin.GPIO_Pin2, false,
Port.ResistorMode.PullDown);
```

The port's value can then be accessed via the `Read` method:

```csharp
bool state = inputPort.Read();
```

#### Events via InterruptPorts

In addition to polling/requesting a port for its value, the .NET MicroFramework can be set to raise an event when a port's value changes by using an [`InterruptPort`](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.interruptport(v=vs.102).aspx). For example, in response to a button being pressed that connects a circuit and raises the input port's voltage from low (`0V`) to high (`3.3V`).

The [Button Interrupt Events Sample](/Samples/Netduino/ButtonInteruptEvents) illustrates listening for the event raised when the onboard button is pressed, and then lights up the onboard LED:

```csharp
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

#### Glitch Filtering

Sometimes, switches and other circuits don't produce a perfectly clean signal, especially during activation. In this case, multiple events can be raised in quick succession when a single event was expected.

In order to counteract this noise, a technique called _Glitch Filtering_ can be used to only raise one event during any given time span.

To enable glitch filtering, pass `true` for the `glitchFilter` parameter when instantiating an `InputPort`:

```csharp
static InputPort _button = new InputPort((Cpu.Pin)0x15, true, Port.ResistorMode.Disabled);
```

And then, set the time span to filter events to, usually 5 milliseconds will do the trick, but depending on the hardware more may be needed:

```csharp
Cpu.GlitchFilterTime = new TimeSpan(0,0,0,0,5);
```

The following program comes from the [Glitch Filtering Sample](/Samples/Netduino/GlitchFilter) and illustrates configuring the glitch filter to 5 milliseconds:

```csharp
using System;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;

namespace GlitchFilter
{
	public class Program
	{
		// An output port allows you to write (send a signal) to a pin
		static OutputPort _led = new OutputPort(Pins.ONBOARD_LED, false);
		// An input port reads the signal from a pin (Should be Pins.ONBOARD_BTN, but there is a bug)
		static InputPort _button = new InputPort((Cpu.Pin)0x15, true, Port.ResistorMode.Disabled);

		public static void Main()
		{
			// turn the LED off initially
			_led.Write(false);

			// smooth noise out over 5 milliseconds
			Cpu.GlitchFilterTime = new TimeSpan(0,0,0,0,5);


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

### Output

To write to a port, an [`OutputPort`](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.outputport(v=vs.102).aspx) is instantiated. The code below is from the same [Button Interrupt Events Sample](/Samples/Netduino/ButtonInteruptEvents):

```csharp
static OutputPort _led = new OutputPort(Pins.ONBOARD_LED, false);
```

To send a signal to the port, the `Write` method is called, passing in `false` for a low signal (`0V`), or `true` for a high (`3.3V`) signal:

```csharp
_led.Write(true); 
```

## See Also

* [`InputPort` API Reference](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.inputport(v=vs.102).aspx)
* [`OutputPort` API Reference](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.outputport(v=vs.102).aspx)
* [`Port.ResistorMode` Enumeration](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.port.resistormode(v=vs.102).aspx)
* [`Port.InterruptMode` Enumeration](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.port.interruptmode(v=vs.102).aspx)
* [`Cpu.GlitchFilterTime` Property](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.cpu.glitchfiltertime(v=vs.102).aspx)
