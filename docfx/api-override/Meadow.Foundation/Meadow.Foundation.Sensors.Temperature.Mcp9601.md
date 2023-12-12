---
uid: Meadow.Foundation.Sensors.Temperature.Mcp9601
remarks: *content
---

| Mcp9601 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Mcp960x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Mcp960x.svg?label=Meadow.Foundation.Sensors.Temperature.Mcp960x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Mcp960x" /></a> |
### Code Example

```csharp
Mcp9601 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Mcp9601(Device.CreateI2cBus());

    var consumer = Mcp9601.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.TemperatureHot.Value.Celsius}C");
        },
        filter: null
    );
    sensor.Subscribe(consumer);

    sensor.Updated += Sensor_Updated;
    return Task.CompletedTask;
}

private void Sensor_Updated(object sender, IChangeResult<(Meadow.Units.Temperature? TemperatureHot, Meadow.Units.Temperature? TemperatureCold)> e)
{
    Resolver.Log.Info($"Temperature hot: {e.New.TemperatureHot.Value.Celsius:n2}C, Temperature cold: {e.New.TemperatureCold.Value.Celsius:n2}C");
}

public override Task Run()
{
    sensor.StartUpdating();
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp960x/Samples/Mcp9601_Sample)

