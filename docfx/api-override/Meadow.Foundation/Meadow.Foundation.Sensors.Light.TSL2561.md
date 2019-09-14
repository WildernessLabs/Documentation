---
uid: Meadow.Foundation.Sensors.Light.TSL2561
remarks: *content
---

The TSL2561 is alight sensor that is compensated for the presence of infrared light.  This compensation allows for the reading to be closer to that experienced by the human eye.

An interrupt pin allows the sensor to generate an interrupt if the sensor reading goes below a lower threshold or exceeds an upper threshold.

The sensor is controlled and data read over the I2C bus.

## Purchasing

The TSL2561 is available as a breakout board from the following suppliers:

* [Adafruit](https://www.adafruit.com/product/439)
* [Sparkfun](https://www.sparkfun.com/products/12055)

---
uid: Meadow.Foundation.Sensors.Light.TSL2561
example: [*content]
---

Applications using the TSL2561 can operating in two ways:

* Polled
* Interrupt driven

### Polling Application

A polled application will read the sensor whenever it needs access to a sensor reading.  The following application sets the sensor to high gain with an integration cycle of 402 milliseconds.  The sensor is then read every 2 seconds:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Light;

namespace TSL2561_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }
    
    public class App : AppBase<F7Micro, App>
    {
        public App ()
        {
            var tsl2561 = new TSL2561();

            Console.WriteLine("Polled TSL2561 Application.");
            Console.WriteLine("Device ID: " + tsl2561.ID.ToString());
            
            tsl2561.TurnOff();
            tsl2561.SensorGain = TSL2561.Gain.High;
            tsl2561.Timing = TSL2561.IntegrationTiming.Ms402;
            tsl2561.TurnOn();
            
            // Wait for at least one integration cycle (set to 402 milliseconds above).
            Thread.Sleep(500);

            // Repeatedly read the light intensity.
            while (true)
            {
                ushort[] adcData = tsl2561.SensorReading;
                Console.WriteLine("Data0: " + adcData[0].ToString() + ", Data1: " + adcData[1].ToString());
                Console.WriteLine("Light intensity: " + tsl2561.Lux.ToString());

                Thread.Sleep(2000);
            }
        }
    }
}
```

### Interrupt Driven Application

In the following application, a threshold window of 100 to 2000 is set.  An interrupt will be generated when the light reading on ADC Channel 0 falls below 100 or rises above 2000.  In a moderately lit room, covering the sensor will generate a reading below 100 and a low power torch will take the reading above 2000.

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Light;

namespace TSL2561_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }
    
    public class App : AppBase<F7Micro, App>
    {
        public App ()
        {
            var tsl2561 = new TSL2561();

            Console.WriteLine("Testing the TSL2561 Class.");
            Console.WriteLine("Device ID: " + tsl2561.ID.ToString());

            tsl2561.TurnOff();
            tsl2561.SensorGain = TSL2561.Gain.High;
            tsl2561.Timing = TSL2561.IntegrationTiming.Ms402;
            tsl2561.ThresholdLow = 100;
            tsl2561.ThresholdHigh = 2000;
            tsl2561.ReadingOutsideThresholdWindow += tsl2561_ReadingOutsideThresholdWindow;
            tsl2561.SetInterruptMode(TSL2561.InterruptMode.Enable, 1, Pins.GPIO_PIN_D7);
            tsl2561.TurnOn();

            Thread.Sleep(Timeout.Infinite);
        }

        private void tsl2561_ReadingOutsideThresholdWindow(System.DateTime time)
        {
            ushort[] adcData = tsl2561.SensorReading;
            Console.WriteLine("Data0: " + adcData[0].ToString() + ", Data1: " + adcData[1].ToString());
            Console.WriteLine("Light intensity: " + tsl2561.Lux.ToString());
            tsl2561.ClearInterrupt();
        }
    }
}
```

##### Example Circuit

The basic configuration of the TSL2561 requires only the data and power connections to be made:

![](../../API_Assets/Meadow.Foundation.Sensors.Light.TSL2561/TSL2561.svg)

Note that the connection between the `Int` pin and `D9` is only required when using the device in interrupt mode.