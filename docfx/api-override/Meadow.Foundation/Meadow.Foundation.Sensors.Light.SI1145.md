---
uid: Meadow.Foundation.Sensors.Light.SI1145
remarks: *content
---

The SI1145 is a low power infrared, ultraviolet and ambient light sensor with an I2C interface.

* Ultraviolet / Infrared / ambient light sensor
* Proximity sensor
* Independent LED drivers
* I2C interface up to 3.4 MBps

## Purchasing

* [SI1145 from Adafruit](https://www.adafruit.com/product/1777)

---
uid: Meadow.Foundation.Sensors.Light.SI1145
example: [*content]
---

The following application reads the sensor output Infrared, Ultraviolet and Visibility once per second and outputs the result on the output console:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Light;

namespace SI1145_Sample
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
            Console.WriteLine("SI1145 Test");
            var sensor = new SI1145();
            
            while (true)
            {
                Console.WriteLine(
                    "Sensor reading - " + 
                    "Ultraviolet = " + sensor.Ultraviolet().ToString("f2") +
                    "Infrared = " + sensor.Infrared().ToString("f2") +
                    "Visible = " + sensor.Visible().ToString("f2"));

                Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Light.SI1145/SI1145.svg)