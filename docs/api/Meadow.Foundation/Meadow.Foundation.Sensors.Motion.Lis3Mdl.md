---
uid: Meadow.Foundation.Sensors.Motion.Lis3Mdl
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis3Mdl
---

| Lis3mdl | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Lis3mdl/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Lis3mdl.svg?label=Meadow.Foundation.Sensors.Motion.Lis3mdl" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Lis3mdl" /></a> |

### Code Example

```csharp
Lis3mdl sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    sensor = new Lis3mdl(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Lis3mdl.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    sensor.Subscribe(consumer);

    sensor.StartUpdating(TimeSpan.FromSeconds(2));

    return base.Initialize();
}

bool FilterResult(IChangeResult<MagneticField3D> result)
{
    return result.New.Z > new MagneticField(0.1, MagneticField.UnitType.Gauss);
}

void HandleResult(object sender, IChangeResult<MagneticField3D> result)
{
    var mag = result.New;

    Resolver.Log.Info($"Magnetometer (gauss): X = {mag.X.Gauss:0.##}, Y = {mag.Y.Gauss:0.##}, Z = {mag.Z.Gauss:0.##}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Samples/Lis3mdl_Sample)

