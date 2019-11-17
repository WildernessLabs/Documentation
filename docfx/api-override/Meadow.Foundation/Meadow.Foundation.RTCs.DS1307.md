---
uid: Meadow.Foundation.RTCs.DS1307
remarks: *content
---

The DS323x ICs offer a low cost accurate real time clock with a temperature compensation crystal oscillator.  This range of chips offers the following functionality:

* Temperature compensation
* Battery backup
* I2C (DS3231) and SPI (DS3234) interfaces.
* Two programmable alarms
* 32.768 KHz square wave output

## Purchasing

A variety of modules are available including low cost modules with integrated EEPROM:

* [DS3231 with integrated EEPROM](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=ds3231)
* [Sparkfun DS3234 Breakout board](https://www.sparkfun.com/products/10160)

### Code Example

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.RTCs;

namespace DS1307_Sample
{
    public class Program
    {
        static IApp app;

        static void Main(string[] args)
        {
            app = new DS1307App();
            Thread.Sleep(Timeout.Infinite);
        }
    }
    
    public class DS1307App : AppBase<F7Micro, DS1307App>
    {
        protected DS1307 dS1307;

        public DS1307App()
        {
            dS1307 = new DS1307(Device.CreateI2cBus());

            var running = dS1307.IsRunning;
            if (!running)
            {
                Console.WriteLine("Starting RTC...");
                dS1307.IsRunning = true;
            }

            DateTime now = new DateTime();
            while (true)
            {
                for (int i = 0; i < 3; i++)
                {
                    now = dS1307.GetTime();
                    Console.WriteLine($"Current time: {now.ToString("MM/dd/yy HH:mm:ss")}");
                    Thread.Sleep(1000);
                }

                var rand = new Random();
                if (now.Year < 2019)
                {
                    now = DateTime.Now;
                }
                else
                {
                    now = now.AddSeconds(rand.Next(1, 30));
                }

                var data = new byte[56];
                for (int i = 0; i < 56; i++)
                {
                    data[i] = (byte)rand.Next(256);
                }

                Console.WriteLine($"Writing to RTC RAM   : {BitConverter.ToString(data)}");
                dS1307.WriteRAM(0, data);
                Console.Write($"Reading from RTC RAM : ");
                data = dS1307.ReadRAM(0, 56);
                Console.WriteLine(BitConverter.ToString(data));

                Thread.Sleep(rand.Next(1, 5));            
            }
        }
    }
}
```

### Circuit Example

The DS3231 real time clock module (see image below) requires only four (for simple timekeeping) or five (for alarms) connections

| DS3231 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The 32K pin outputs the 32,768 Hz clock signal from the module.  This signal is only available when power is supplied by V<sub>cc</sub>, it is not available when the module is on battery power.

![](../../API_Assets/Meadow.Foundation.RTCs.DS1307/DS1307_Fritzing.png)
