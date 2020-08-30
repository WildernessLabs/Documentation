---
uid: Meadow.Foundation.Sensors.Motion.ParallaxPir
remarks: *content
---

| ParallaxPir   |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir) |
| NuGet package | <img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.ParallaxPir.svg?label=Meadow.Foundation.Sensors.Motion.ParallaxPir" style="width: auto; height: -webkit-fill-available;" /> |

The Parallax PIR detects motion via infrared. It emits a high signal over the data pin when motion is detected. The pin returns to a low state when motion stops.

####Purchasing

The parallax PIR sensor is available from Parallax Inc:

* [Parallax PIR Rev B](https://www.parallax.com/product/555-28027)

The following application creates a ParallaxPIR object and attaches interrupt handlers to the `OnMotionStart` and `OnMotionEnd` events:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    ParallaxPIR parallax;

    public MeadowApp()
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
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.ParallaxPir/Samples/) 

### Wiring Example

The Parallax PIR sensor requires only three connections, power, ground and motion detection signal:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.ParallaxPir/ParallaxPIR.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />