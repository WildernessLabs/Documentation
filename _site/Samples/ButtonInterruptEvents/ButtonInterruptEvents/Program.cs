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
