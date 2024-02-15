---
uid: Meadow.Foundation.Sensors.Temperature.Lm75
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75
---

| Lm75 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Lm75/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Lm75.svg?label=Meadow.Foundation.Sensors.Temperature.Lm75" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Lm75" /></a> |

### Code Example

```csharp
Lm75 lm75;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    lm75 = new Lm75(Device.CreateI2cBus());

    var consumer = Lm75.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Celsius}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Celsius}C");
        },
        filter: null
    );
    lm75.Subscribe(consumer);

    lm75.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:n2}C");
    };
    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await lm75.Read();
    Resolver.Log.Info($"Temperature New Value {temp.Celsius}C");

    lm75.StartUpdating();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Samples/Lm75_Sample)

