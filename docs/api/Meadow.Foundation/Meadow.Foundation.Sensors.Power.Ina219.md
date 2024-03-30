---
uid: Meadow.Foundation.Sensors.Power.Ina219
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina219
---

| Ina219 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.Ina2xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.Ina2xx.svg?label=Meadow.Foundation.Sensors.Power.Ina2xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.Ina2xx" /></a> |
### Code Example

```csharp
Ina219 ina219;

public override Task Initialize()
{
    Resolver.Log.Debug("Initialize...");

    var bus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    ina219 = new Ina219(bus);
    ina219.Configure(busVoltageRange: Ina219.BusVoltageRange.Range_32V,
        maxExpectedCurrent: new Current(1.0),
        adcMode: Ina219.ADCModes.ADCMode_4xAvg_2128us);
    Resolver.SensorService.RegisterSensor(ina219);

    Resolver.Log.Info($"--- INA219 Sample App ---");
    ina219.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"{result.New.Voltage:N3} V @ {result.New.Current:N3} A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Debug("Run...");
    ina219.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Samples/Ina219_Sample)

