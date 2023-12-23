---
uid: Meadow.Foundation.Sensors.Accelerometers.Lsm303agr

---

| Lsm303agr | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Lsm303agr/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Lsm303agr.svg?label=Meadow.Foundation.Sensors.Motion.Lsm303agr" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Lsm303agr" /></a> |

### Code Example

```csharp
Lsm303agr sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    sensor = new Lsm303agr(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Lsm303agr.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    sensor.Subscribe(consumer);

    sensor.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<(Acceleration3D? Acceleration3D, MagneticField3D? MagneticField3D)> result)
{
    return result.New.Acceleration3D.Value.Z > new Acceleration(0.1, Acceleration.UnitType.Gravity);
}

void HandleResult(object sender,
    IChangeResult<(Acceleration3D? Acceleration3D,
    MagneticField3D? MagneticField3D)> result)
{
    var accel = result.New.Acceleration3D.Value;
    var mag = result.New.MagneticField3D.Value;

    Resolver.Log.Info($"AccelX={accel.X.Gravity:0.##}g, AccelY={accel.Y.Gravity:0.##}g, AccelZ={accel.Z.Gravity:0.##}g, MagX={mag.X.Gauss:0.##}gauss, MagY={mag.Y.Gauss:0.##}gauss, MagZ={mag.Z.Gauss:0.##}gauss");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lsm303agr/Samples/Lsm303agr_Sample)

