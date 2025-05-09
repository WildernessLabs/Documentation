---
uid: Meadow.Foundation.Sensors.Temperature.Max6675
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Max6675
---

| Max6675 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Max6675) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Max6675/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Max6675/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Max6675.svg?label=Meadow.Foundation.Sensors.Temperature.Max6675" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Max6675" /></a> |
### Code Example

```csharp
private Max6675 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Max6675(Device.CreateSpiBus(), Device.Pins.D00);

    return base.Initialize();
}

public override async Task Run()
{
    while (true)
    {
        try
        {
            var temp = await sensor.Read();
            Resolver.Log.Info($"Temp: {temp.Fahrenheit:N1}F");
        }
        catch (Exception ex)
        {
            Resolver.Log.Error(ex.Message);
        }

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Max6675/Samples/Max6675_Sample)


