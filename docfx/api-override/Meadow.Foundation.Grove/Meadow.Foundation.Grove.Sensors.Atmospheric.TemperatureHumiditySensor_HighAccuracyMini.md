---
uid: Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini
remarks: *content
---

| TemperatureHumiditySensor_HighAccuracyMini | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/TemperatureHumiditySensor_HighAccuracyMini) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini.svg?label=Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var sensor = new TemperatureHumiditySensor_HighAccuracyMini(Device.CreateI2cBus());

    var consumer = TemperatureHumiditySensor_HighAccuracyMini.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Console.WriteLine($"  Relative Humidity: {result.New.Humidity?.Percent:N2}%");
    };

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/TemperatureHumiditySensor_HighAccuracyMini/Sample/TemperatureHumiditySensor_HighAccuracyMini_Sample)

### Wiring Example

| TemperatureHumiditySensor_HighAccuracyMini | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















