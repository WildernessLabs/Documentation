---
uid: Meadow.Foundation.Sensors.Environmental.Ags01Db
remarks: *content
---

| Ags01Db       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Environmental.Ags01Db) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Ags01Db/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Ags01Db.svg?label=Meadow.Foundation.Sensors.Environmental.Ags01Db" style="width: auto; height: -webkit-fill-available;" /></a> |

The AGS01DB is a MEMS VOC gas sensor that commuincates over I2C. 

Supply voltage(V)	    3.3~5.5
Supply current(mA)	    ＜30
Measuring range(ppm)	0~100
Operating range (°C)	0~50
Operating range (% RH)	0~95
Interface 	            I²C
Size:L*W*H (mm)	        23.3*12.5*5.8

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Ags01Db sensor;

    public MeadowApp()
    {
        sensor = new Ags01Db(Device.CreateI2cBus());

        Console.WriteLine($"Version: v{sensor.GetVersion()}");

        while (true)
        {
            Console.WriteLine($"VOC gas concentration: {sensor.GetConcentration()}ppm");

            Thread.Sleep(2000);
        }
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Environmental.Ags01Db/Samples/Environmental.Ags01Db_Sample) 

### Wiring Example

To wire a Ags01Db to your Meadow board, connect the following:

| Ags01Db | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Environmental.Ags01Db/Ags01Db_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />