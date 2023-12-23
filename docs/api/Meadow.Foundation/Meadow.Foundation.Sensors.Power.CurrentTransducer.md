---
uid: Meadow.Foundation.Sensors.Power.CurrentTransducer

---

| CurrentTransducer | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.CurrentTransducer/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.CurrentTransducer.svg?label=Meadow.Foundation.Sensors.Power.CurrentTransducer" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.CurrentTransducer" /></a> |

### Code Example

```csharp
private CurrentTransducer transducer = default!;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var bus = Device.CreateI2cBus();
    transducer = new CurrentTransducer(
        Device.Pins.A00.CreateAnalogInputPort(1),
        new Voltage(3.3, Voltage.UnitType.Volts), // a reading of 3.3V
        new Current(10, Current.UnitType.Amps)    // equals 10 amps of current
        );

    Resolver.Log.Info($"-- Current Transducer Sample App ---");
    transducer.Updated += (s, v) =>
    {
        Resolver.Log.Info($"Current is now {v.New.Amps}A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    transducer.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Samples/CurrentTransducer_Sample)

