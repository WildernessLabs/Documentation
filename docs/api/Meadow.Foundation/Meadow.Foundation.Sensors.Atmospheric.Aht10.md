---
uid: Meadow.Foundation.Sensors.Atmospheric.Aht10
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Aht10
---

| Aht10 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ahtx0/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ahtx0.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ahtx0" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Ahtx0" /></a> |
### Code Example

```csharp
private Ahtx0 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Aht10(Device.CreateI2cBus());

    var consumer = Aht10.CreateObserver(
        handler: (result) =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: null
    );
    sensor.Subscribe(consumer);

    (sensor as ITemperatureSensor).Updated += (sender, e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:n2}C");
    };
    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result.Temperature?.Celsius:F1}°C");
    Resolver.Log.Info($"  Relative Humidity: {result.Humidity:F1}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ahtx0/Samples/Aht10_Sample)


