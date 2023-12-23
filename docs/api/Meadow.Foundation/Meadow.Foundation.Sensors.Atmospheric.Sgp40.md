---
uid: Meadow.Foundation.Sensors.Atmospheric.Sgp40

---

| Sgp40 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Sgp40/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Sgp40.svg?label=Meadow.Foundation.Sensors.Atmospheric.Sgp40" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Sgp40" /></a> |

### Code Example

```csharp
Sgp40? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Sgp40(Device.CreateI2cBus());

    Resolver.Log.Info($"Sensor SN: {sensor.SerialNumber:x6}");

    if (sensor.RunSelfTest())
    {
        Resolver.Log.Info("Self test successful");
    }
    else
    {
        Resolver.Log.Warn("Self test failed");
    }

    var consumer = Sgp40.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: VOC changed by threshold; new index: {result.New}");
        },
        filter: result =>
        {
            return Math.Abs(result.New - result.Old ?? 0) > 10;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  VOC: {result.New}");
    };

    return base.Initialize();
}

public override async Task Run()
{
    await ReadConditions();

    sensor?.StartUpdating(TimeSpan.FromSeconds(1));
}

async Task ReadConditions()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Sgp40/Samples/Sgp40_Sample)

### Wiring Example

To wire a Sgp40 to your Meadow board, connect the following:

| Sgp40  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
