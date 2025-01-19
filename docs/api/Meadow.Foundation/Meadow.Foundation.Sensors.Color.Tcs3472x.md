---
uid: Meadow.Foundation.Sensors.Color.Tcs3472x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Color.Tcs3472x
---

| Tcs3472x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Color.Tcs3472x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Color.Tcs3472x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Color.Tcs3472x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Color.Tcs3472x.svg?label=Meadow.Foundation.Sensors.Color.Tcs3472x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Color.Tcs3472x" /></a> |
### Code Example

```csharp
private Tcs3472x sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // configure our sensor on the I2C Bus
    sensor = new Tcs3472x(Device.CreateI2cBus());

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Tcs3472x.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New}, old: {result.Old}"),
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return Math.Abs(result.New.R - old.R) > 50;
            }
            return false;
        });
    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Color: {result.New}");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info($"Initial reading: {result}");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Color.Tcs3472x/Samples/Tcs3472x_Sample)

