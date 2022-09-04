---
uid: Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor
remarks: *content
---

| WaterSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/WaterSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor.svg?label=Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor" /></a> |

### Code Example

```csharp
WaterSensor waterSensor;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    waterSensor = new WaterSensor(Device, Device.Pins.A01);

    waterSensor.Subscribe(WaterSensor.CreateObserver(
        h => Console.WriteLine($"Water level changed by 10 mm; new: {h.New}, old: {h.Old}"),
        null //e => { return Math.Abs(e.Delta) > 0.1f; }
    ));

    waterSensor.Updated += (object sender, IChangeResult<float> e) => 
    {
        Console.WriteLine($"Level Changed, level: {e.New}cm");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var conditions = await waterSensor.Read();
    Console.WriteLine($"Initial level: {conditions}");

    waterSensor.StartUpdating(TimeSpan.FromSeconds(5));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/WaterSensor/Sample/WaterSensor_Sample)

### Wiring Example

| WaterSensor | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
