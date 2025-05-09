---
uid: Meadow.Foundation.Sensors.Battery.Max17043
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Battery.Max17043
---

| Max17043 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Battery.Max1704x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Battery.Max1704x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Battery.Max1704x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Battery.Max1704x.svg?label=Meadow.Foundation.Sensors.Battery.Max1704x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Battery.Max1704x" /></a> |
### Code Example

```csharp
private Max17043 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Max17043(Device.CreateI2cBus());

    return Task.CompletedTask;
}

public override async Task Run()
{
    while (true)
    {
        Resolver.Log.Info($"Voltage: {(await sensor.ReadVoltage()).Volts:N2}V ");
        Resolver.Log.Info($"SoC: {await sensor.ReadStateOfCharge():N0}% ");
        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Battery.Max1704x/Samples/Max17043_Sample)

