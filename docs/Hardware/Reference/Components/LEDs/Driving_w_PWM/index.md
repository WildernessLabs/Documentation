---
layout: Hardware
title: LED w/PWM
subtitle: Driving an LED with a current-limiting Pulse-Width-Modulation (PWM) Signal.
---

## Overview

An LED current can be limited with a [Pulse Width Modulation](/Netduino/Input_Output/Digital/PWM/) signal. Netduino includes 6 hardware PWM generators, availalbe on digital pins 3, 5, 6, 9, 10, and 11:

![Pinout diagram of the Netduino 3](../../../../../Netduino/About/Netduino3_Pinout.svg){:standalone}

### Netduino.Foundation Support

Netduino.Foundation includes a number of classes that make driving LEDs with PWM signals easy. They include the ability to control the PWM by setting the brightness, and even have built-in animations.

#### `PwmLed` Class

The [`PwmLed`](http://netduino.foundation/API/LEDs/PwmLed/) class represents an LED whose voltage (and brightness) is controlled by the duty-cycle of a PWM signal. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

#### `RgbPwmLed` Class

The [`RgbPwmLed`](http://netduino.foundation/API/LEDs/RgbPwmLed/) class represents an RGB LED whose color is controlled by the duty-cycle of three PWM signals. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

### Low-Level Code Example

A PWM signal can be manually configured by either setting the duty cycle, as a percentage of on time, or by manually configuring the period and duration.

While we recommend using [Netduino.Foudation](http://Netduino.Foundation) to control LEDs, the following low-level illustrates manually controlling an LED by setting pin 3 to duty cycle of 50%, and the onboard LED to a duty cycle of 33% (by manually setting the period and duration and cycles between the two:

```csharp
using System;
using Microsoft.SPOT;
using SecretLabs.NETMF.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;
using Microsoft.SPOT.Hardware;
using System.Threading;

namespace DrivingLED_w_PWM
{
	/// <summary>
	/// This program illustrates how to drive an LED with a Pulse-Width
	/// Modulation signal.
	/// </summary>
	public class Program
	{
		public static void Main()
		{
			// Create a PWM signal on Pin 3 @ 1000Hz and
			// 50% duty cycle
			PWM dutyCyclePwm = new PWM(PWMChannels.PWM_PIN_D3, 1000,
			   .5, false);
			// note that only certain pins support PWM. the
			// PWMChannels enumeration lists the ones that do.

			// Create a PWM signal on the onboard LED by specifying
			// the period and duration in milliseconds. this will be 
			//  a 33% duty cycle (on 1/3rd of the time)
			PWM periodDurationPwm = new PWM (
				PWMChannels.PWM_ONBOARD_LED, 3, 1,
				PWM.ScaleFactor.Milliseconds, false);

			// alternate between the 50% duty cycle and the 33% duty
			// cycle every second
			while (true) {
				dutyCyclePwm.Start ();
				Thread.Sleep (1000);
				dutyCyclePwm.Stop ();

				periodDurationPwm.Start ();
				Thread.Sleep (1000);
				periodDurationPwm.Stop ();
			}
		}
	}
}
```
