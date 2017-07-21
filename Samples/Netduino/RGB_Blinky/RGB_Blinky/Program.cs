using System;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using System.Threading;
using SecretLabs.NETMF.Hardware.Netduino;

namespace RGB_Blinky
{
	public class Program
	{
		public static void Main()
        {
            OutputPort redLed = new OutputPort(Cpu.Pin.GPIO_Pin3, false);
			OutputPort greenLed = new OutputPort(Cpu.Pin.GPIO_Pin4, false);
			OutputPort blueLed = new OutputPort(Cpu.Pin.GPIO_Pin5, false);


			int i = 0;
			while (true)
			{
                redLed.Write(true);
                greenLed.Write(false);
                blueLed.Write(false);

                Thread.Sleep(250);

				redLed.Write(false);
				greenLed.Write(true);
				blueLed.Write(false);

				Thread.Sleep(250);

				redLed.Write(false);
				greenLed.Write(false);
				blueLed.Write(true);

				Thread.Sleep(250);

				Debug.Print("Looping" + i);
				i++;
			}

		}
	}
}