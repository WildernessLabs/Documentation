---
uid: Meadow.Foundation.Sensors.Atmospheric.Htu31d
remarks: *content
---

| Htu31d | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Htux1d/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Htux1d.svg?label=Meadow.Foundation.Sensors.Atmospheric.Htux1d" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Htux1d" /></a> |
### Code Example

```csharp
Htu31d? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Htu31d(Device.CreateI2cBus());

    var consumer = Htu31d.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old?.Temperature is { } oldTemp &&
                result.Old?.Humidity is { } oldHumidity &&
                result.New.Temperature is { } newTemp &&
                result.New.Humidity is { } newHumidity)
            {
                return ((newTemp - oldTemp).Abs().Celsius > 0.5 &&
                        (newHumidity - oldHumidity).Percent > 0.05);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:F1}C");
        Resolver.Log.Info($"  Relative Humidity: {result.New.Humidity?.Percent:F1}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result.Temperature?.Celsius:F1}C");
    Resolver.Log.Info($"  Relative Humidity: {result.Humidity:F1}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd/Samples/Htu31d_Sample)

