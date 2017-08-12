---
title: RGB LED Controlled with Potentiometer
---

This sample sets the color of an RGB LED from the value read from a potentiometer. It illustrates reading an analog input and controlling PWMs with it.

# Code

```csharp
using System;
using System.Threading;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SLH = SecretLabs.NETMF.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;



namespace PotentiometerControlled_RgbLed
{
	/// <summary>
	/// This program illustrates how to drive an RGB LED with a Pulse-Width Modulation
	/// Signal.
	/// </summary>
	public class Program
	{
		public static void Main()
		{
			SLH.AnalogInput pot = new SLH.AnalogInput(Pins.GPIO_PIN_A1);
			PWM redLed = new PWM(PWMChannels.PWM_PIN_D11, 100, 0, false);
			PWM greenLed = new PWM(PWMChannels.PWM_PIN_D10, 100, 0, false);
			PWM blueLed = new PWM(PWMChannels.PWM_PIN_D9, 100, 0, false);

			double dutyCycleMax = .3; // RGB Led doesn't seem to get much brighter than at 30%
			int hue = 0;

			// set our range to be the range of possible hues
			pot.SetRange(0, 360);

			redLed.Start();
			greenLed.Start();
			blueLed.Start();


			while (true)
			{
				double r, g, b;

				hue = pot.Read();

				Debug.Print("Hue: " + hue.ToString());

				HsvToRgb(hue, 1, 1, out r, out g, out b);

				redLed.DutyCycle = (r * dutyCycleMax);
				greenLed.DutyCycle = (g * dutyCycleMax);
				blueLed.DutyCycle = (b * dutyCycleMax);

			}
		}


		/// <summary>
		/// HSV to rgb. Note that for RGB LED use, you probably want a constant 100% brightness. This doesn't do that. 
		/// For that Algorithm, check out: https://blog.adafruit.com/2012/03/14/constant-brightness-hsb-to-rgb-algorithm/
		/// </summary>
		/// <param name="hue">Hue in degress (0-359º).</param>
		/// <param name="saturation">Saturation.</param>
		/// <param name="brightValue">Brightness value.</param>
		/// <param name="r">The red component. (0-1)</param>
		/// <param name="g">The green component. (0-1)</param>
		/// <param name="b">The blue component. (0-1)</param>
		static void HsvToRgb(double hue, double saturation, double brightValue, out double r, out double g, out double b)
		{

			double H = hue;
			double R, G, B;

			// hue parameter checking/fixing
			if (H < 0 || H >= 360)
			{
				H = 0;
			}
			// if Brightness is turned off, then everything is zero.
			if (brightValue <= 0)
			{ R = G = B = 0; }

			// if saturation is turned off, then there is no color/hue. it's grayscale.
			else if (saturation <= 0)
			{
				R = G = B = brightValue;
			}
			else // if we got here, then there is a color to create.
			{

				double hf = H / 60.0;
				int i = (int)System.Math.Floor(hf);
				double f = hf - i;
				double pv = brightValue * (1 - saturation);
				double qv = brightValue * (1 - saturation * f);
				double tv = brightValue * (1 - saturation * (1 - f));

				switch (i)
				{

					// Red Dominant
					case 0:
						R = brightValue;
						G = tv;
						B = pv;
						break;

					// Green Dominant
					case 1:
						R = qv;
						G = brightValue;
						B = pv;
						break;
					case 2:
						R = pv;
						G = brightValue;
						B = tv;
						break;

					// Blue Dominant
					case 3:
						R = pv;
						G = qv;
						B = brightValue;
						break;
					case 4:
						R = tv;
						G = pv;
						B = brightValue;
						break;

					// Red Red Dominant
					case 5:
						R = brightValue;
						G = pv;
						B = qv;
						break;

					// In case the math is out of bounds, this is a fix.
					case 6:
						R = brightValue;
						G = tv;
						B = pv;
						break;
					case -1:
						R = brightValue;
						G = pv;
						B = qv;
						break;

					// If the color is not defined, go grayscale
					default:
						R = G = B = brightValue;
						break;
				}
			}
			r = Clamp(R);
			g = Clamp(G);
			b = Clamp(B);
		}

		/// <summary>
		/// Clamp a value to 0 to 1
		/// </summary>
		static double Clamp(double i)
		{
			if (i < 0) return 0;
			if (i > 1) return 1;
			return i;
		}
	}
}
```