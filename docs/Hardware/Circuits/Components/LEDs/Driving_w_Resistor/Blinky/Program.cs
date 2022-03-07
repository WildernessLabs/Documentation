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
