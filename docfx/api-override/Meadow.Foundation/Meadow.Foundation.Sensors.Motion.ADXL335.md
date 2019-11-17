---
uid: Meadow.Foundation.Sensors.Motion.ADXL335
remarks: *content
---

The ADXL335 is a low power accelerometer capable of measuring +/- 3g of acceleration along three axes.

## Purchasing

The ADXL335 sensor can be purchased on a breakout board from the following suppliers:

* [Adafruit ADXL335](https://www.adafruit.com/product/163)
* [Sparkfun ADXL335](https://www.sparkfun.com/products/9269)

---
uid: Meadow.Foundation.Sensors.Motion.ADXL335
example: [*content]
---

The ADXL335 can operate in interrupt and polling mode.

### Interrupt Mode

The example below uses the default setting to check the sensor every 100 milliseconds.  The sensor will generate and interrupt if the acceleration changes by more than 0.1g:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace ADXL335_Sample
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
            var adxl335 = new ADXL335(AnalogChannels.ANALOG_PIN_A0, AnalogChannels.ANALOG_PIN_A1, AnalogChannels.ANALOG_PIN_A2);
            adxl335.SupplyVoltage = 3.3;
            adxl335.XVoltsPerG = 0.343;
            adxl335.YVoltsPerG = 0.287;
            adxl335.ZVoltsPerG = 0.541;
            
            // Attach an interrupt handler.            
            adxl335.AccelerationChanged += (s, e) =>
            {
                var rawData = adxl335.GetRawSensorData();
                Console.WriteLine("\n");
                Console.WriteLine("X: " + adxl335.X.ToString("F2") + ", " + rawData.X.ToString("F2"));
                Console.WriteLine("Y: " + adxl335.Y.ToString("F2") + ", " + rawData.Y.ToString("F2"));
                Console.WriteLine("Z: " + adxl335.Z.ToString("F2") + ", " + rawData.Z.ToString("F2"));
            };

            // Meadow can now go to sleep as the data will be processed
            // by the interrupt handler.
            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

### Polling Mode

The following code will set up the sensor and display the G force and raw sensor data every 250 milliseconds:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace ADXL335_Sample
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
            ADXL335 adxl335 = new ADXL335(AnalogChannels.ANALOG_PIN_A0, AnalogChannels.ANALOG_PIN_A1, AnalogChannels.ANALOG_PIN_A2);
            adxl335.SupplyVoltage = 3.3;
            adxl335.XVoltsPerG = 0.343;
            adxl335.YVoltsPerG = 0.287;
            adxl335.ZVoltsPerG = 0.541;
            
            while (true)
            {
                ADXL335.Readings acceleration = adxl335.GetAcceleration();
                ADXL335.Readings rawData = adxl335.GetRawSensorData();

                Console.WriteLine("\n");
                Console.WriteLine("X: " + acceleration.X.ToString("F2") + ", " + rawData.X.ToString("F2"));
                Console.WriteLine("Y: " + acceleration.Y.ToString("F2") + ", " + rawData.Y.ToString("F2"));
                Console.WriteLine("Z: " + acceleration.Z.ToString("F2") + ", " + rawData.Z.ToString("F2"));
                Thread.Sleep(250);
            }
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.ADXL335/ADXL335.svg)

The datasheet notes that bypass capacitors should be installed for the X, Y and Z outputs from the sensor.  Both the Sparkfun and Adafruit breakout boards have `0.1uF` capacitors installed on the board.