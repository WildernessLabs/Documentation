---
uid: Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel
remarks: *content
---

| AnalogWaterLevel | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Environmental) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" /></a> |

The analog water level sensor will output a voltage based on the amount of conductivity detected across the sensor area. Most sensors will jump to a signal of about ~1V as soon as the sensor area touches water and the voltage increases linearly as the depth increases. 

Be careful to limit the water contact to only the the sensor area. Do not submerge the water level sensor.

### Code Example

```csharp
AnalogWaterLevel analogWaterLevel;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // configure our AnalogWaterLevel sensor
    analogWaterLevel = new AnalogWaterLevel(
        device: Device,
        analogPin: Device.Pins.A00
    );

    // Example that uses an IObersvable subscription to only be notified
    // when the level changes by at least 0.1cm
    analogWaterLevel.Subscribe(AnalogWaterLevel.CreateObserver(
        h => Console.WriteLine($"Water level changed by 10 mm; new: {h.New}, old: {h.Old}"),
        null //e => { return Math.Abs(e.Delta) > 0.1f; }
    ));

    // classical .NET events can also be used:
    analogWaterLevel.Updated += (object sender, IChangeResult<float> e) => {
        Console.WriteLine($"Level Changed, level: {e.New}cm");
    };

    // Get an initial reading.
    ReadLevel().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    analogWaterLevel.StartUpdating(TimeSpan.FromSeconds(5));
}

protected async Task ReadLevel()
{
    var conditions = await analogWaterLevel.Read();
    Console.WriteLine($"Initial level: { conditions }");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Environmental.AnalogWaterLevel_Sample)

### Wiring Example

To wire a AnalogWaterLevel to your Meadow board, connect the following:

| AnalogWaterLevel | Meadow Pin |
|-------|------------|
| GND   | GND        |
| IN    | A00        |
| VCC   | 3.3V       |
