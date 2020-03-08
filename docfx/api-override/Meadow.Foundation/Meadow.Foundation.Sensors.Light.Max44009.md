---
uid: Meadow.Foundation.Sensors.Light.Max44009
remarks: *content
---

| Max44009      |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Max44009/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Max44009.svg?label=Meadow.Foundation.Sensors.Light.Max44009" style="width: auto; height: -webkit-fill-available;" /></a> |

The Max44009 is an analog ambient light sensor.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Max44009 sensor;

    public MeadowApp()
    {
        var bus = Device.CreateI2cBus();
        sensor = new Max44009(bus);

        while (true)
        {
            Thread.Sleep(1000);

            Console.WriteLine($"Lux: {sensor.GetIlluminance()}");
        }
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Samples/Sensors.Light.Max44009_Sample) 

### Wiring Example

To wire a Max44009 to your Meadow board, connect the following:

| Max44009 | Meadow Pin  |
|----------|-------------|
| SCL      | D08         |
| SDA      | D07         |
| GND      | GND         |
| VCC      | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Max44009/Max44009_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />