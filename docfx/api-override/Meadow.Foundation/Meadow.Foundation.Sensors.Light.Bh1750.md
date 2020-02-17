---
uid: Meadow.Foundation.Sensors.Light.Bh1750
remarks: *content
---

| Bh1750        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1750/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1750.svg?label=Meadow.Foundation.Sensors.Light.Bh1750" style="width: auto; height: -webkit-fill-available;" /></a> |

The BH1750 is a light intensity sensor that communicates over I2C. 

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bh1750 sensor;

    public MeadowApp()
    {
        sensor = new Bh1750(Device.CreateI2cBus(), Bh1750.I2cAddressLow);

        Task.Run(async () =>
        {
            while(true)
            {
                Console.WriteLine($"Illuminance: {sensor.GetIlluminance()}lux");
                await Task.Delay(1000);
            }
        });
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Samples/Sensors.Light.Bh1750_Sample) 

### Wiring Example

To wire a Bh1750 to your Meadow board, connect the following:

| Bh1750  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Bh1750/Bh1750_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />