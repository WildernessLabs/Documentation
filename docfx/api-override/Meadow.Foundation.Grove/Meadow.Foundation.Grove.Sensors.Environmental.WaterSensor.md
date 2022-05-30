---
uid: Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor
remarks: *content
---

| WaterSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/WaterSensor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor.svg?label=Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor" alt="NuGet Gallery for WaterSensor" /></a> |

### Code Example

```csharp
WaterSensor waterSensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our AnalogWaterLevel sensor
    waterSensor = new WaterSensor(
        device: Device,
        analogPin: Device.Pins.A01
    );

    // Example that uses an IObersvable subscription to only be notified
    // when the level changes by at least 0.1cm
    waterSensor.Subscribe(WaterSensor.CreateObserver(
        h => Console.WriteLine($"Water level changed by 10 mm; new: {h.New}, old: {h.Old}"),
        // TODO: revisit this
        null //e => { return Math.Abs(e.Delta) > 0.1f; }
    ));

    // classical .NET events can also be used:
    waterSensor.Updated += (object sender, IChangeResult<float> e) => {
        Console.WriteLine($"Level Changed, level: {e.New}cm");
    };

    // Get an initial reading.
    ReadLevel().Wait();

    // Spin up the sampling thread so that events are raised and
    // IObservable notifications are sent.
    waterSensor.StartUpdating(TimeSpan.FromSeconds(5));
}

async Task ReadLevel()
{
    var conditions = await waterSensor.Read();
    Console.WriteLine($"Initial level: { conditions }");
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
