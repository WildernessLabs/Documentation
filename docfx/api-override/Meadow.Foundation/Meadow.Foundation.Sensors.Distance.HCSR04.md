---
uid: Meadow.Foundation.Sensors.Distance.HCSR04
remarks: *content
---

| HC-SR04       |             |
|---------------|-------------|
| Status        | Not working |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04) |
| NuGet package | Not published |
| | |

The **HC-SR04** ultrasonic sensor uses sonar to determine distance to an object (like bats). It offers excellent non-contact range detection with high accuracy and stable readings in an easy-to-use package.

### Purchasing

The HC-SR04 sensor is available from Sparkfun:

* [Ultrasonic Sensor - HC-SR04](https://www.sparkfun.com/products/13959)

The following application creates a **HC-SR04** object, invokes **MeasureDistanceSensor** every second and attaches interrupt handlers to the **DistanceDetected** event that its triggered when the sensor picks up a rebound signal:

```csharp
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        public MeadowApp()
        {
            var _HCSR04 = new HCSR04(Device.Pins.D14, Device.Pins.D13);
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

### Wiring Example

![](../../API_Assets/Meadow.Foundation.Sensors.Distance.HCSR04/HCSR04.svg)