---
uid: Meadow.Foundation.Sensors.Camera.Amg8833
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Amg8833
---

| Amg8833 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Amg8833) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Amg8833/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.Amg8833/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Camera.Amg8833.svg?label=Meadow.Foundation.Sensors.Camera.Amg8833" alt="NuGet Gallery for Meadow.Foundation.Sensors.Camera.Amg8833" /></a> |
### Code Example

```csharp
Amg8833 camera;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);
    camera = new Amg8833(i2cBus);

    return Task.CompletedTask;
}

public override Task Run()
{
    while (true)
    {
        var pixels = camera.ReadPixels();

        //output the first 4 pixels
        Resolver.Log.Info($"{pixels[0].Celsius:F1}°C, {pixels[1].Celsius:F1}°C, {pixels[2].Celsius:F1}°C, {pixels[3].Celsius:F1}°C");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Camera.Amg8833/Samples/Amg8833_Sample)

