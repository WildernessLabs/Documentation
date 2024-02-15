---
uid: Meadow.Foundation.Sensors.Motion.Lis2Mdl
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis2Mdl
---

| Lis2Mdl | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Lis2Mdl/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Lis2Mdl.svg?label=Meadow.Foundation.Sensors.Motion.Lis2Mdl" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Lis2Mdl" /></a> |

### Code Example

```csharp
Lis2Mdl sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    sensor = new Lis2Mdl(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Lis2Mdl.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    sensor.Subscribe(consumer);

    sensor.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<MagneticField3D> result)
{
    return result.New.Z > new MagneticField(0.1, MagneticField.UnitType.Gauss);
}

void HandleResult(object sender,
    IChangeResult<MagneticField3D> result)
{
    var mag = result.New;

    Resolver.Log.Info($"MagX={mag.X.Gauss:0.##}gauss, MagY={mag.Y.Gauss:0.##}gauss, GyroZ={mag.Z.Gauss:0.##}gauss");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Samples/Lis2Mdl_Sample)

