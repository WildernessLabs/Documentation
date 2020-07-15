---
uid: Meadow.Foundation.Sensors.Atmospheric.Dht12
remarks: *content
---

| Dht12         |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Dhtxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Dhtxx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Dhtxx" style="width: auto; height: -webkit-fill-available;" /></a> |

The DHT12 is a low-cost humidity and temperature sensor that communicates over the I2C bus. It measures humidity from 20 to 95% with an accuracy of +/- 5% relative humidity with a resolution of 0.1%. Temperature range is from -20 to 60 degrees celcius with an accuracy of +/- 0.5 degrees and a resolution of 0.1.

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

To wire a DHT12 to your Meadow board, connect the following:

| DHT12   | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Dht12/Dht12_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />