---
uid: Meadow.Foundation.Sensors.Temperature.Adt7410
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Adt7410
---

| Adt7410 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Adt7410) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Adt7410/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Adt7410/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Adt7410.svg?label=Meadow.Foundation.Sensors.Temperature.Adt7410" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Adt7410" /></a> |
### Code Example

```csharp
Adt7410 adt7410;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    adt7410 = new Adt7410(Device.CreateI2cBus());
    adt7410.SensorResolution = Adt7410.Resolution.Resolution13Bits;

    var consumer = Adt7410.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New {result.New.Celsius:N2}C, Old {result.Old?.Celsius:N2}C");
        },
        filter: null
    );
    adt7410.Subscribe(consumer);

    adt7410.Updated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await adt7410.Read();
    Resolver.Log.Info($"Current temperature: {temp.Celsius}C");

    adt7410.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Adt7410/Samples/Adt7410_Sample)

