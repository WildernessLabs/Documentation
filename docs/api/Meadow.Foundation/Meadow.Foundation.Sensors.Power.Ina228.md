---
uid: Meadow.Foundation.Sensors.Power.Ina228
remarks: *content
---

| Ina228 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.Ina2xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.Ina2xx.svg?label=Meadow.Foundation.Sensors.Power.Ina2xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.Ina2xx" /></a> |
### Code Example

```csharp
Ina228 ina228;

public override Task Initialize()
{
    Resolver.Log.Debug("Initialize...");

    var bus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    ina228 = new Ina228(bus);
    ina228.ConfigureConversion(averaging:Ina228.Averaging.Average_4);
    ina228.SetCalibration(new Current(10.0, Current.UnitType.Amps), false);
    Resolver.SensorService.RegisterSensor(ina228);

    Resolver.Log.Info($"--- INA228 Sample App ---");
    Resolver.Log.Info($"Manufacturer: {ina228.ManufacturerID}");
    Resolver.Log.Info($"DeviceID: 0x{ina228.DeviceID:X3}");
    Resolver.Log.Info($"Revision: 0x{ina228.DeviceRevision:X2}");
    ina228.Updated += (sender, result) =>
    {
        if (result.New is { Current: { }, Voltage: { } })
            Resolver.Log.Info($"{result.New.Voltage.Value.Millivolts:N3} mV @ {result.New.Current.Value.Milliamps:N3} mA");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Debug("Run..."); 
    ina228.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Samples/Ina228_Sample)

