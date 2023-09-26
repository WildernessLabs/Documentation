---
uid: Meadow.Foundation.Sensors.Atmospheric.Hc2
remarks: *content
---

| Hc2 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Hc2/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Hc2.svg?label=Meadow.Foundation.Sensors.Atmospheric.Hc2" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Hc2" /></a> |
### Code Example

```csharp
HC2 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // Analog
    //sensor = new HC2(Device.Pins.A00, Device.Pins.A01);

    // Serial
    sensor = new HC2(Device, Device.PlatformOS.GetSerialPortName("COM4"));

    var consumer = HC2.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new Temp: {result.New.Temperature?.Celsius:N2} °C, old: {result.Old?.Temperature?.Celsius:N2} °C");
        },
        filter: result =>
        {
            // C# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old)
            {
                if (result.New.Temperature.HasValue && old.Temperature.HasValue)
                    return ((result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Relative Humidity: {result.New.Humidity?.Percent:N2} %, Temperature: {result.New.Temperature?.Celsius:N2} °C");
    };
    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info($"Initial Read:");
    var conditions = await sensor.Read();
    Resolver.Log.Info($"Relative Humidity: {conditions.Humidity?.Percent:N2} %, Temperature: {conditions.Temperature?.Celsius:N2} °C");

    sensor.StartUpdating(TimeSpan.FromSeconds(5));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hc2/Samples/Hc2_Sample)


