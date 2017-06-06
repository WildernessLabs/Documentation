---
title: Driving an LED with a Resistor
---

Generally, when driving (powering) an LED, you must use a current limiting resistor, which prevents the LED from receiving too much power and burning out.

# Forward Voltage

An LED is a [diode](../../Diodes) that requires a certain amount of voltage in order for it to open it's pn-gate and light up. This threshold is called the _Forward Voltage_ (VF). However once that voltage is met, there is a limited operating range of voltage that is safe for the LED:

[need a graph here of FV of an LED]

## Typical Forward Voltages and Current

[run of the mill 5MM LEDs usually have:]

| LED Color | Typical VF | Max VF | Max Current |
| --------- | ---------- | ------ | ----------- |
| Red, Yellow, Orange | 1.8v | 2.3v | 20mA |
| Green, Blue, White | 3.2v | 3.4v | 20mA |

[LEDs may vary, so it's good to check the datasheet of yours]

# Maximum Ratings

Exceeding the maximum rating for an LED by very much will usually burn out an LED quite quickly. 

[datasheet for your LED will have the maximum VF rating]

# Computing The Resistance Needed to Safely Operate

Let's say that you have a red LED (1.8v VF), and you're driving it off a 5v circuit. That means you need to reduce it by 3.2v. 

[use OHM's law: ]
`R = V / I = (5v - 1.8v) / 20 = 64Ω

[to be safe, need a 64Ω or better resistor (probably 100Ω is the next higher up)]


# Sample Circuit

General Circuit:

![](circuit.svg)



# Sample Project

![](LED_Circuit_bb.svg)

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
			// write your code here
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
