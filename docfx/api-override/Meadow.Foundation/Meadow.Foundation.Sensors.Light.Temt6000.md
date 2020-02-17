---
uid: Meadow.Foundation.Sensors.Light.Temt6000
remarks: *content
---

| Temt6000      |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Temt6000) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Temt6000/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Temt6000.svg?label=Meadow.Foundation.Sensors.Light.Temt6000" style="width: auto; height: -webkit-fill-available;" /></a> |

The TEMT6000 is an analog ambient light sensor.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Temt6000 sensor;

    public MeadowApp()
    {
        sensor = new Temt6000(Device, Device.Pins.A03);

        Task.Run(async () =>
        {
            while(true)
            {
                Console.WriteLine($"Voltage: {await sensor.GetVoltage()}");
                await Task.Delay(500);
            }
        });
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Temt6000/Samples/Sensors.Light.Temt6000_Sample) 

### Wiring Example

To wire a Temt6000 to your Meadow board, connect the following:

| Temt6000 | Meadow Pin  |
|----------|-------------|
| GND      | GND         |
| SIG      | A03         |
| VCC      | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Temt6000/Temt6000_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />