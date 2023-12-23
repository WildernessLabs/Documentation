---
uid: Meadow.Foundation.Sensors.Weather.SwitchingRainGauge

---

| SwitchingRainGauge | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge.svg?label=Meadow.Foundation.Sensors.Weather.SwitchingRainGauge" alt="NuGet Gallery for Meadow.Foundation.Sensors.Weather.SwitchingRainGauge" /></a> |

### Code Example

```csharp
SwitchingRainGauge rainGauge;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // initialize the rain gauge driver
    rainGauge = new SwitchingRainGauge(Device.Pins.D14);

    //==== Classic event example:
    rainGauge.Updated += (sender, result) => Resolver.Log.Info($"Updated event {result.New.Millimeters}mm");

    //==== IObservable Pattern
    var observer = SwitchingRainGauge.CreateObserver(
        handler: result => Resolver.Log.Info($"Rain depth: {result.New.Millimeters}mm"),
        filter: null
    );
    rainGauge.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    // get initial reading, just to test the API - should be 0
    Length rainFall = await rainGauge.Read();
    Resolver.Log.Info($"Initial depth: {rainFall.Millimeters}mm");

    // start the sensor
    rainGauge.StartUpdating();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingRainGauge/Samples/SwitchingRainGauge_Sample)

