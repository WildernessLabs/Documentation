---
uid: Meadow.Foundation.Sensors.Atmospheric.Dht10
remarks: *content
---

| Dht10         |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Radio.Tea5767) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Dht10/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Dht10.svg?label=Meadow.Foundation.Sensors.Atmospheric.Dht10" style="width: auto; height: -webkit-fill-available;" /></a> |

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

To wire a DhtXX to your Meadow board, connect the following:

| DhtXX      | Meadow Pin  |
|------------|-------------|
| GND        | GND         |
| TriggerOut | D05         |
| VCC        | 3V3         |
