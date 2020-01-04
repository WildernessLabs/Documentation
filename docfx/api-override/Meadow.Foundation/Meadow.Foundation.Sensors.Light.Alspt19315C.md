---
uid: Meadow.Foundation.Sensors.Light.Alspt19315C
remarks: *content
---

| ALS-PT19-315C |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Alspt19/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Alspt19.svg?label=Meadow.Foundation.Sensors.Light.Alspt19" style="width: auto; height: -webkit-fill-available;" /></a> |

The **ALS-PT19-315C** is a low cost analog ambient light sensor, consisting of phototransistor in a miniature SMD.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Alspt19315C sensor;

    public MeadowApp()
    {
        Init();

        Task.Run(async () =>
        {
            while(true)
            {
                Console.WriteLine($"Relative light intensity: {await sensor.GetVoltage()}");
                await Task.Delay(500);
            }
        });
    }

    public void Init()
    {
        Console.WriteLine("Init...");

        sensor = new Alspt19315C(Device, Device.Pins.A01);
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Samples/) 

### Purchasing

The ALS-PT19 senors are available on breakout boards and as individual sensors:

* [Adafruit breakout board](https://www.adafruit.com/product/2748)
* [Sparkfun ALS-PT19 Sensor](https://www.proto-pic.co.uk/als-pt19-light-sensor.html)
* [Sparkfun Weather Shield](https://www.proto-pic.co.uk/weather-shield.html)

### Circuit Example

The ALS-PT19C is a simple analog device requiring only three connections:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Alspt19315C/Alspt19315C_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />