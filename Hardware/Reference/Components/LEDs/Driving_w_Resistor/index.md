---
title: Driving an LED with a Resistor
---

To drive an LED with a resistor as the current limiting device in the circuit, we need to first compute the resistance needed.

## Calculating Necessary Resistance

To do this, we use ohm's law, solved for resistance, and remove the voltage drop specified as the forward voltage (F<sub>v</sub>) from the source voltage (V<sub>s</sub>) for the LED we're using:

```
R = (Vs - Fv) / I
```

![](LED_Resistor_Circuit.svg)

## Example

For example, let's say that we have a red LED has a maximum current rating of `20mA`, and a V<sub>f</sub> of `1.8V`, that we're driving from a `5V` voltage source. Solving for R:

```
R = (5V - 1.8V) / 0.020A = 160Ω 

```

The circuit would need at least a `160Ω` resistor to safely drive the LED. Note that when calculating the resistance, `20mA` was converted to `0.020A`.


## Sample Project

Prototyping this with a Netduino would look something like this:

![](LED_Circuit_bb.svg)

The following code can then be used to make that LED blink by repeatedly turning it on and off:

```CSharp
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
			// Create a new output port on Digital Pin 7
			OutputPort led = new OutputPort(Pins.GPIO_PIN_D7, false);
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
