---
uid: Meadow.Foundation.Sensors.Environmental.Scd40
remarks: *content
---

| Scd40 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Scd4x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Scd4x.svg?label=Meadow.Foundation.Sensors.Environmental.Scd4x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Scd4x" /></a> |
### Code Example

```csharp
Scd40 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var i2cBus = Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Standard);
      
    sensor = new Scd40(i2cBus);
    var serialNum = sensor.GetSerialNumber();
    Resolver.Log.Info($"Serial: {BitConverter.ToString(serialNum)}");

    var consumer = Scd40.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old?.Temperature is { } oldTemp &&
                result.Old?.Humidity is { } oldHumidity &&
                result.New.Temperature is { } newTemp &&
                result.New.Humidity is { } newHumidity)
            {
                return ((newTemp - oldTemp).Abs().Celsius > 0.5 &&
                        (newHumidity - oldHumidity).Percent > 0.05);
            }
            return false;
        }
    );

    sensor?.Subscribe(consumer);

    if (sensor != null)
    {
        sensor.Updated += (sender, result) =>
        {
            Resolver.Log.Info($"  Concentration: {result.New.Concentration?.PartsPerMillion:N0}ppm");
            Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N1}C");
            Resolver.Log.Info($"  Relative Humidity: {result.New.Humidity:N0}%");
        };
    }

    sensor?.StartUpdating(TimeSpan.FromSeconds(6));

    return base.Initialize();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Scd4x/Samples/Scd40_Sample)

