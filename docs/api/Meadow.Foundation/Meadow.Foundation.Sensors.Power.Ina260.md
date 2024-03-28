---
uid: Meadow.Foundation.Sensors.Power.Ina260
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260
---

| Ina260 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.Ina2xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.Ina2xx.svg?label=Meadow.Foundation.Sensors.Power.Ina2xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.Ina2xx" /></a> |

### Code Example

```csharp
Ina260 ina260;

public override Task Initialize()
{
    Resolver.Log.Debug("Initialize...");

    var bus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    ina260 = new Ina260(bus);
    ina260.Configure(Ina260.ConversionTime.ConversionTime_8244us, Ina260.ConversionTime.ConversionTime_8244us, Ina260.Averaging.Average_4);
    //Resolver.SensorService.RegisterSensor(ina260);

    Resolver.Log.Info($"--- INA260 Sample App ---");
    Resolver.Log.Info($"Manufacturer: {ina260.ManufacturerID}");
    Resolver.Log.Info($"DeviceID: 0x{ina260.DeviceID:X3}");
    Resolver.Log.Info($"Revision: 0x{ina260.DeviceRevision:X2}");
    ina260.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"{result.New.Voltage:N3} V @ {result.New.Current:N3} A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Debug("Run...");
    ina260.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Samples/Ina260_Sample)

