---
uid: Meadow.Foundation.Sensors.Distance.HYSRF05
remarks: *content
---

The HY-SRF05 ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

###Purchasing

The HY-SRF05 sensor is available in ebay:

* [Ultrasonic Sensor - HY-SRF05](https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=HYSRF05&_sacat=0)

---
uid: Meadow.Foundation.Sensors.Distance.HYSRF05
example: [*content]
---

The following application creates a **HY-SRF05** object, invokes **MeasureDistanceSensor** every second and attaches interrupt handlers to the **DistanceDetected** event that its triggered when the sensor picks up a rebound signal:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Distance;

namespace HYSRF05_Sample
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
            var  _HYSRF05 = new HYSRF05(Device.Pins.D14, Device.Pins.D13);
            _HYSRF05.DistanceDetected += OnDistanceDetected;

            while (true)
            {
                // Send a echo
                _HYSRF05.MeasureDistance();
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

The HY-SRF05 sensor has 5 pins, but you’ll only connect 4: power, ground, echo and trigger (out isn’t used).

![](../../API_Assets/Meadow.Foundation.Sensors.Distance.HYSRF05/HYSRF05.svg)