---
uid: Meadow.Foundation.Sensors.Weather.SwitchingAnemometer
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer
---

| SwitchingAnemometer | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer.svg?label=Meadow.Foundation.Sensors.Weather.SwitchingAnemometer" alt="NuGet Gallery for Meadow.Foundation.Sensors.Weather.SwitchingAnemometer" /></a> |

### Code Example

```csharp
SwitchingAnemometer anemometer;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    anemometer = new SwitchingAnemometer(Device.Pins.A01);

    //==== classic events example
    anemometer.WindSpeedUpdated += (sender, result) =>
    {
        Resolver.Log.Info($"new speed: {result.New.KilometersPerHour:n1}kmh, old: {result.Old?.KilometersPerHour:n1}kmh");
    };

    //==== IObservable example
    var observer = SwitchingAnemometer.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"new speed (from observer): {result.New.KilometersPerHour:n1}kmh, old: {result.Old?.KilometersPerHour:n1}kmh");
        },
        null
        );
    anemometer.Subscribe(observer);

    return Task.CompletedTask;
}

public override Task Run()
{
    // start raising updates
    anemometer.StartUpdating();
    Resolver.Log.Info("Hardware initialized.");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Samples/SwitchingAnemometer_Sample)

