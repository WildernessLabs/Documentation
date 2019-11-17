---
uid: Meadow.Foundation.Sensors.Atmospheric.HIH6130
remarks: *content
---

The HIH6130 sensor allows the reading of the relative humidity and temperature providing the data over an I2C interface.

## Purchasing

The HIH6130 sensor is available on a breakout board from Sparkfun.

* [Sparkfun HIH6130 Breakout Board](https://www.sparkfun.com/products/11295)

---
uid: Meadow.Foundation.Sensors.Atmospheric.HIH6130
example: [*content]
---

Example:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Atmospheric;

namespace HIH6130_Sample
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
            // Create a new HIH6130 and set the temperature change threshold to half a degree.
            HIH6130 hih6130 = new HIH6130(temperatureChangeNotificationThreshold: 0.5F);
            
            // Hook up the temperature interrupt handler.            
            hih6130.TemperatureChanged += (s, e) =>
            {
                Console.WriteLine("Temperature changed: " + e.CurrentValue.ToString("f2"));
            };
            
            // Hook up the humidity interrupt handler.
            hih6130.HumidityChanged += (s, e) =>
            {
                Console.WriteLine("Humidity changed: " + e.CurrentValue.ToString("f2"));
            };
        }
    }
}
```

##### Example Circuit

The HIH6130 requires only four connections between Meadow and the breakout board.

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | V<sub>cc</sub> | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Blue       |
| SD           | SDA            | White      |

![](../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.HIH6130/HIH6130.svg)