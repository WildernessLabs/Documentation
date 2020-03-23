---
uid: Meadow.Foundation.Sensors.Light.Veml7700
remarks: *content
---

| Veml          |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Veml7700/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Veml7700.svg?label=Meadow.Foundation.Sensors.Light.Veml7700" style="width: auto; height: -webkit-fill-available;" /></a> |

The TEMT6000 is an I2C ambient light sensor.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Veml7700 _veml;

    public MeadowApp()
    {
        var bus = Device.CreateI2cBus();
        using (_veml = new Veml7700(bus))
        {

            _veml.ChangeThreshold = 10;
            _veml.LuxChanged += OnLightChanged;

            while (true)
            {
                Thread.Sleep(5000);
            }
        }
    }

    private void OnLightChanged(float previousValue, float newValue)
    {
        Console.WriteLine($"Light: {_veml.Lux} lux");
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Samples/Sensors.Light.Veml7700_Sample) 

### Wiring Example

To wire a Veml7700 to your Meadow board, connect the following:

| Veml7700 | Meadow Pin  |
|----------|-------------|
| 3V3      | 3V3         |
| GND      | GND         |
| SCK      | D08         |
| SDA      | D07         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Veml7700/Veml7700_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />