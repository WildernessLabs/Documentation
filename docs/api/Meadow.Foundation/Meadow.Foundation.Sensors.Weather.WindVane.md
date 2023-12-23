---
uid: Meadow.Foundation.Sensors.Weather.WindVane

---

| WindVane | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.WindVane/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.WindVane.svg?label=Meadow.Foundation.Sensors.Weather.WindVane" alt="NuGet Gallery for Meadow.Foundation.Sensors.Weather.WindVane" /></a> |

### Code Example

```csharp
WindVane windVane;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // initialize the wind vane driver
    windVane = new WindVane(Device.Pins.A00);

    //==== Classic event example:
    windVane.WindAzimuthUpdated += (sender, result) => Resolver.Log.Info($"Updated event {result.New.DecimalDegrees}");

    //==== IObservable Pattern
    var observer = WindVane.CreateObserver(
        handler: result => Resolver.Log.Info($"Wind Direction: {result.New.Compass16PointCardinalName}"),
        filter: null
    );
    windVane.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    // get initial reading, just to test the API
    Azimuth azi = await windVane.Read();
    Resolver.Log.Info($"Initial azimuth: {azi.Compass16PointCardinalName}");

    // start updating
    windVane.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Samples/WindVane_Sample)

