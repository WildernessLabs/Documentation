---
uid: Meadow.Foundation.Sensors.Power.Ina260
remarks: *content
---

| Ina260 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.Ina260/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.Ina260.svg?label=Meadow.Foundation.Sensors.Power.Ina260" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.Ina260" /></a> |

### Code Example

```csharp
Ina260 ina260;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var bus = Device.CreateI2cBus();
    ina260 = new Ina260(bus);

    Resolver.Log.Info($"-- INA260 Sample App ---");
    Resolver.Log.Info($"Manufacturer: {ina260.ManufacturerID}");
    Resolver.Log.Info($"Die: {ina260.DieID}");
    ina260.Updated += (s, v) =>
    {
        Resolver.Log.Info($"{v.New.Item2}V @ {v.New.Item3}A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    ina260.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Samples/Ina260_Sample)

