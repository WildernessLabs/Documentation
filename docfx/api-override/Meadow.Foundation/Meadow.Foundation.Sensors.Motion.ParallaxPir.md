---
uid: Meadow.Foundation.Sensors.Motion.ParallaxPir
remarks: *content
---

The Parallax PIR detects motion by emitting a high signal when motion is detected. The signal returns to a low state when motion stops.

####Purchasing

The parallax PIR sensor is available from Parallax Inc:

* [Parallax PIR Rev B](https://www.parallax.com/product/555-28027)

---
uid: Meadow.Foundation.Sensors.Motion.ParallaxPir
example: [*content]
---

The following application creates a ParallaxPIR object and attaches interrupt handlers to the `OnMotionStart` and `OnMotionEnd` events:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace ParallaxPIR_Sample
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
        ParallaxPIR parallax;

        public App ()
        {
            parallax = new ParallaxPIR(Device.Pins.D13);

            parallax.OnMotionStart += ParallaxMotionStarted;
            parallax.OnMotionEnd += ParallaxMotionEnded;
        }

        void ParallaxMotionEnded(object sender)
        {
            Console.WriteLine("Motion stopped.");
        }

        void ParallaxMotionStarted(object sender)
        {
            Console.WriteLine("Motion detected.");
        }
    }
}
```

##### Example Circuit

The Parallax PIR sensor requires only three connections, power, ground and motion detection signal:

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.ParallaxPir/ParallaxPIR.svg)