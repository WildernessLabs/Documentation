---
uid: Meadow.Foundation.ICs.IOExpanders.Tca9548a
remarks: *content
---

| Pca9685       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.PCA9685) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Tca9548a/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Tca9548a.svg?label=Meadow.Foundation.ICs.IOExpanders.Tca9548a" style="width: auto; height: -webkit-fill-available;" /></a> |

[Explanation of the peripheral]

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    //Code example here
}
```
[Sample projects available on GitHub [when its live]]() 

### Wiring Example

To wire a Tca9548a to your Meadow board, connect the following:

| Tca9548a | Meadow Pin  |
|----------|-------------|
| GND      | GND         |
| SCL      | D08 (SCL)   |
| SDA      | D07 (SDA)   |
| VCC      | 3V3         |

It should look like the following diagram:

ToDo: Fritzing diagram here
