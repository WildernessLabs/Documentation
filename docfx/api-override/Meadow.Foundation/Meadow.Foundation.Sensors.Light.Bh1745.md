---
uid: Meadow.Foundation.Sensors.Light.Bh1745
remarks: *content
---

| Bh1745        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Meadow.Foundation.Sensors.Light.Bh1745) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1745/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1745.svg?label=Meadow.Foundation.Sensors.Light.Bh1745" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{

}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767/Samples/Audio.Radio.TEA5767_Sample) 

### Wiring Example

To wire a Ms5611 to your Meadow board, connect the following:

| Bh1745  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Bh1745/Bh1745_Frizzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />