---
uid: Meadow.Foundation.Sensors.Moisture.FC28
remarks: *content
---

FC-28 Soil Moisture Sensor is a simple breakout for measuring the moisture in soil and similar materials. The sensor has two probes and measures the resistance between them, which means this sensor is of type Resistive. Since water is conductive, as moisture in the soil increases, the resistance decreases allowing the sensor to determine soil humidity. 

![](../../API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/img_FC28.jpg)

The biggest issue of this sensor is the corrosion of the probes, not just because it is in contact with the soil but also because there is a DC current flowing which causes electrolysis of the sensors. A workararound to prolong the life of the probes is to not constantly have the sensor powered on, but activate it everytime the sensor will perform a read using a digital output port connected to the VCC pin. The code and circuit example shows you how to use it.

---
uid: Meadow.Foundation.Sensors.Moisture.FC28
example: [*content]
---

The following example shows how read the soil moisture every second:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Moisture;

namespace FC28_Sample
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
        FC28 _FC28;

        public App ()
        {
            // create a new FC-28 object connected to analog pin A01 and digital pin 14
            _FC28 = new FC28(Device.Pins.A01, Device.Pins.D14);

            Run();
        }

        async Task Run()
        {
            while (true)
            {
                float moisture = await _FC28.Read();
                Console.WriteLine($"Moisture: {0}", moisture);
                Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/FC28.svg)