---
uid: Meadow.Foundation.Sensors.Atmospheric.Dht10
remarks: *content
---

| Dht10         |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Dhtxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Dhtxx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Dhtxx" style="width: auto; height: -webkit-fill-available;" /></a> |

The DHT10 is a low-cost humidity and temperature sensor that communicates over the I2C bus.

-40 to 80 celius +/- 0.5 degrees
0 to 99.9% humidity +/- 3% relative humidity

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
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Dhtxx/Samples/Sensors.Atmospheric.Dht12_Sample) 

### Wiring Example

To wire a DHT10 to your Meadow board, connect the following:

| DHT12   | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
