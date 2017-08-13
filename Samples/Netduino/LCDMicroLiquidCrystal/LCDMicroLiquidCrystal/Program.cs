using System.Threading;
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using SecretLabs.NETMF.Hardware.NetduinoPlus;
using MicroLiquidCrystal;

namespace HelloWorld
{
	public class Program
	{
		public static void Main()
		{
            Debug.Print("Application started OK.");

            Debug.Print("Initialising the display");
			var setup = new BaseShifterLcdTransferProvider.ShifterSetup()
			{
				BL = ShifterPin.GP7,
				RS = ShifterPin.GP1,
				RW = ShifterPin.None,
				Enable = ShifterPin.GP2,
				D4 = ShifterPin.GP6,
				D5 = ShifterPin.GP5,
				D6 = ShifterPin.GP4,
				D7 = ShifterPin.GP3
			};
            Debug.Print("Shifter setup correctly.");

			var lcdBus = new Shifter74Hc595LcdTransferProvider(SPI.SPI_module.SPI1, Pins.GPIO_PIN_D3,
                                                               Shifter74Hc595LcdTransferProvider.BitOrder.MSBFirst, setup);
            Debug.Print("LCD Bus created.");

            var lcd = new Lcd(lcdBus);
            Debug.Print("LCD Created");

			lcd.Begin(16, 2);
            Debug.Print("Starting the application loop.");
			lcd.Write("Hello, world!");
            int count = 0;
			while (true)
			{
                count++;
                Debug.Print("Pass: " + count.ToString());
				lcd.SetCursorPosition(0, 1);
				lcd.Write((Utility.GetMachineTime().Ticks / 10000).ToString());
				Thread.Sleep(100);
			}
		}
	}
}
