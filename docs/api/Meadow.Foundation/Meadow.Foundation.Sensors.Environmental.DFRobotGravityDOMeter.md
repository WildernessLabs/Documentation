---
uid: Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter
---

| DFRobotGravityDOMeter | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter.svg?label=Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter" /></a> |
### Code Example

```csharp
DFRobotGravityDOMeter sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new DFRobotGravityDOMeter(Device.Pins.A01);

    // Example that uses an IObservable subscription to only be notified when the saturation changes
    var consumer = DFRobotGravityDOMeter.CreateObserver(
        handler: result =>
        {
            string oldValue = (result.Old is { } old) ? $"{old.MilligramsPerLiter:n0}" : "n/a";
            string newValue = $"{result.New.MilligramsPerLiter:n0}";
            Resolver.Log.Info($"New: {newValue}mg/l, Old: {oldValue}mg/l");
        },
        filter: null
    );
    sensor.Subscribe(consumer);

    // optional classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        string oldValue = (result.Old is { } old) ? $"{old.MilligramsPerLiter}mg/l" : "n/a";
        Resolver.Log.Info($"Updated - New: {result.New.MilligramsPerLiter:n0}mg/l, Old: {oldValue}");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    await ReadSensor();

    sensor.StartUpdating(TimeSpan.FromSeconds(2));
}

protected async Task ReadSensor()
{
    var concentration = await sensor.Read();
    Resolver.Log.Info($"Initial concentration: {concentration.MilligramsPerLiter:N0}mg/l");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.DFRobotGravityDOMeter/Samples/DFRobotGravityDOMeter_Sample)

