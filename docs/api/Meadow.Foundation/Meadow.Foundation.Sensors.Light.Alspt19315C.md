---
uid: Meadow.Foundation.Sensors.Light.Alspt19315C
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C
---

| Alspt19315C | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Alspt19315C/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Alspt19315C.svg?label=Meadow.Foundation.Sensors.Light.Alspt19315C" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Alspt19315C" /></a> |

The **ALS-PT19-315C** is a low cost analog ambient light sensor, consisting of phototransistor in a miniature SMD.

### Code Example

```csharp
Alspt19315C sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // configure our sensor
    sensor = new Alspt19315C(Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter
    var consumer = Alspt19315C.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V"),

        // only notify if the change is greater than 0.5V
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Volts > 0.5; // returns true if > 0.5V change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    //==== Classic Events Pattern
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Voltage Changed, new: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info($"Initial temp: {result.Volts:N2}V");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Samples/Alspt19315C_Sample)

### Wiring Example

The ALS-PT19C is a simple analog device requiring only three connections:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Alspt19315C/Alspt19315C_Fritzing.svg" />
