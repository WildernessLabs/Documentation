---
uid: Meadow.Foundation.Sensors.Temperature.Pct2075
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Pct2075
---

| Pct2075 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Pct2075) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Pct2075/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Pct2075/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Pct2075.svg?label=Meadow.Foundation.Sensors.Temperature.Pct2075" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Pct2075" /></a> |
### Code Example

```csharp
private Pct2075 sensor;

public override Task Initialize()
{
    sensor = new Pct2075(Device.CreateI2cBus());

    sensor.Updated += OnUpdated;

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromSeconds(1));

    return Task.CompletedTask;
}

private void OnUpdated(object sender, IChangeResult<Meadow.Units.Temperature> e)
{
    Resolver.Log.Info($"Temp: {e.New.Celsius:n1}C  {e.New.Fahrenheit:n1}F");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Pct2075/Samples/Pct2075_Sample)

