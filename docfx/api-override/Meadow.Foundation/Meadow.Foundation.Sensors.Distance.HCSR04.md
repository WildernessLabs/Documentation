---
uid: Meadow.Foundation.Sensors.Distance.HCSR04
remarks: *content
---

The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

###Purchasing

The HC-SR04 sensor is available from Sparkfun:

* [Ultrasonic Sensor - HC-SR04](https://www.sparkfun.com/products/13959)

---
uid: Meadow.Foundation.Sensors.Distance.HCSR04
example: [*content]
---

The following application creates a **HC-SR04** object, invokes **MeasureDistanceSensor** every second and attaches interrupt handlers to the **DistanceDetected** event that its triggered when the sensor picks up a rebound signal:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Distance;

namespace HCSR04_Sample
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
            var  _HCSR04 = new HCSR04(Device.Pins.D14, Device.Pins.D13);
            _HCSR04.DistanceDetected += OnDistanceDetected;

            while (true)
            {
                // Send a echo
                _HCSR04.MeasureDistance();
                Thread.Sleep(500);
            }
        }

        // Fired when detecting an obstacle
        private static void OnDistanceDetected(object sender, DistanceEventArgs e) 
        {
            Debug.Print(e.Distance.ToString());
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Distance.HCSR04/HCSR04.svg)