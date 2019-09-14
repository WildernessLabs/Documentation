---
uid: Meadow.Foundation.Sensors.Temperature.TMP102
remarks: *content
---

The TMP102 is a temperature sensor capable of reading the current temperature with an accuracy of 0.5C over the range of -25C to 85C with a total range of -40C to 125C.

## Purchasing

TMP102 sensors are available on a breakout board from the following suppliers:

* [Sparkfun TMP102 Breakout Board](https://www.sparkfun.com/products/13314)

---
uid: Meadow.Foundation.Sensors.Temperature.TMP102
example: [*content]
---

The TMP102 temperature sensor can operate in interrupt or polling mode.

### Interrupt Mode

The example below will check the temperature every second.  An interrupt will be raised if the difference in temperature between the last reported reading and the current reading is greater than + / - 0.1 &deg;C.

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Temperature;

namespace TMP102_Sample
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
            Console.WriteLine("TMP102 Interrupt Sample");

            // Create a new TMP102 object, check the temperature every
            // 1s and report any changes grater than +/- 0.1C.
            var tmp102 = new TMP102(updateInterval: 1000, temperatureChangeNotificationThreshold: 0.1F);

            // Hook up the interrupt handler.
            tmp102.TemperatureChanged += (s, e) =>
            {
                Console.WriteLine("Temperature: " + e.CurrentValue.ToString("f2"));
            };

            // Now put the main program to sleep as the interrupt handler
            // above deals with processing the sensor data.
            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

### Polling Mode

The following application reads the temperature from the TMP102 sensor every second and displays the results in the debug console:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Temperature;

namespace TMP102_Sample
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
            Console.WriteLine("TMP102 Test");
            var tmp102 = new TMP102();
            while (true)
            {
                Console.WriteLine("Temperature: " + tmp102.Temperature.ToString("f2"));
                Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

TMP102 sensors can be connected to Meadow using only four connections:

![](../../API_Assets/Meadow.Foundation.Sensors.Temperature.TMP102/TMP102.svg)