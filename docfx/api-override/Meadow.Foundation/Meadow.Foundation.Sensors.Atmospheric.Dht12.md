---
uid: Meadow.Foundation.Sensors.Atmospheric.Dht12
remarks: *content
---

| Dht10         |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Dht12/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Dht12.svg?label=Meadow.Foundation.Sensors.Atmospheric.Dht12" style="width: auto; height: -webkit-fill-available;" /></a> |


### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Dht12 sensor;

    public MeadowApp()
    {
        sensor = new Dht12(Device.CreateI2cBus());
        sensor.StartUpdating();
        sensor.Updated += SensorUpdated;
    }

    void SensorUpdated(object sender, Meadow.Peripherals.Sensors.Atmospheric.AtmosphericConditionChangeResult e)
    {
        Console.WriteLine($"Humidity: {e.New.Humidity}%, Temperature: {e.New.Temperature}°C");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.HT16K33Samples) 

### Wiring Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Dht12/Dht12_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />