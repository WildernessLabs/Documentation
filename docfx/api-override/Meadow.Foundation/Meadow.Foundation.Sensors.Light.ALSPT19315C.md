---
uid: Meadow.Foundation.Sensors.Light.ALSPT19315C
remarks: *content
---

The ALS-PT19-315C is a low cost ambient light sensor, consisting of phototransistor in miniature SMD.

## Purchasing

The ALS-PT19 senors are available on breakout boards and as individual sensors:

* [Adafruit breakout board](https://www.adafruit.com/product/2748)
* [Sparkfun ALS-PT19 Sensor](https://www.proto-pic.co.uk/als-pt19-light-sensor.html)
* [Sparkfun Weather Shield](https://www.proto-pic.co.uk/weather-shield.html)

---
uid: Meadow.Foundation.Sensors.Light.ALSPT19315C
example: [*content]
---

The following application reads the sensor output voltage once per second and outputs the result on the output console:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Light;

namespace ALSPT19315C_Sample
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
            Console.WriteLine("ALSPT19315C Test");
            var sensor = new ALSPT19315C(Cpu.AnalogChannel.ANALOG_1, 3.3);
            
            while (true)
            {
                Console.WriteLine("Sensor reading: " + sensor.Voltage.ToString("f2"));
                Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

The ALS-PT19C is a simple analog device requiring only three connections:

![](../../API_Assets/Meadow.Foundation.Sensors.Light.ALSPT19315C/ALSPT19315C.svg)