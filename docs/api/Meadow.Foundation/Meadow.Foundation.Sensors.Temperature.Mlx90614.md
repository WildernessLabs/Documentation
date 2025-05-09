---
uid: Meadow.Foundation.Sensors.Temperature.Mlx90614
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mlx90614
---

| Mlx90614 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mlx90614) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mlx90614/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Mlx90614/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Mlx90614.svg?label=Meadow.Foundation.Sensors.Temperature.Mlx90614" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Mlx90614" /></a> |
### Code Example

```csharp
private Mlx90614 sensor;

public override async Task Run()
{
    sensor = new Mlx90614(Device.CreateI2cBus(1));

    while (true)
    {
        var temp = await sensor.Read();
        Resolver.Log.Info($"Temperature: {temp.Celsius:N1}C ({temp.Fahrenheit:N1}F)");
        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mlx90614/Samples/Mlx90614_Sample)


