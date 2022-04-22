---
uid: Meadow.Foundation.Sensors.Weather.WindVane
remarks: *content
---

| WindVane | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.WindVane/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.WindVane.svg?label=Meadow.Foundation.Sensors.Weather.WindVane" alt="NuGet Gallery for WindVane" /></a> |

### Code Example

```csharp
WindVane windVane;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    // initialize the wind vane driver
    windVane = new WindVane(Device, Device.Pins.A00);

    //==== Classic event example:
    windVane.Updated += (sender, result) => Console.WriteLine($"Updated event {result.New.DecimalDegrees}");

    //==== IObservable Pattern
    var observer = WindVane.CreateObserver(
        handler: result => Console.WriteLine($"Wind Direction: {result.New.Compass16PointCardinalName}"),
        filter: null
    );
    windVane.Subscribe(observer);

    // get initial reading, just to test the API
    Azimuth azi = windVane.Read().Result;
    Console.WriteLine($"Initial azimuth: {azi.Compass16PointCardinalName}");

    // start updating
    windVane.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Samples/WindVane_Sample)

