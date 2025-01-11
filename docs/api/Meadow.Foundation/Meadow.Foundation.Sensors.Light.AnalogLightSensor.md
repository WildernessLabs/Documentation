---
uid: Meadow.Foundation.Sensors.Light.AnalogLightSensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogLightSensor
---

| AnalogLightSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Light) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
AnalogLightSensor analogLightSensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // configure our AnalogLightSensor sensor
    analogLightSensor = new AnalogLightSensor(
        analogPin: Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter.
    var consumer = AnalogLightSensor.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Lux:N2} lux, old: {result.Old.Value.Lux:N2} lux"),

        // only notify if the change is greater than 0.5
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Lux > 0.5; // returns true if > 0.5  change.
            }
            return false;
        }
        // if you want to always get notified, pass null for the filter:
        //filter: null
    );
    analogLightSensor.Subscribe(consumer);

    // classical .NET events can also be used:
    analogLightSensor.Updated += (sender, result) =>
        Resolver.Log.Info($"Lux changed: {result.New.Lux:N2} lux, old: {result.Old?.Lux:N2} lux");

    //==== One-off reading use case/pattern
    ReadIlluminance().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    analogLightSensor.StartUpdating(TimeSpan.FromMilliseconds(1000));

    return Task.CompletedTask;
}

protected async Task ReadIlluminance()
{
    var illuminance = await analogLightSensor.Read();
    Resolver.Log.Info($"Initial lux: {illuminance.Lux:N2} lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Light.AnalogLightSensor_Sample)

