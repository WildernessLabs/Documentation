---
uid: Meadow.Foundation.Sensors.Accelerometers.Bmi270
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Accelerometers.Bmi270
---

| Bmi270 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Bmi270/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Bmi270.svg?label=Meadow.Foundation.Sensors.Motion.Bmi270" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Bmi270" /></a> |

### Code Example

```csharp
Bmi270 bmi270;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    bmi270 = new Bmi270(Device.CreateI2cBus());

    // classical .NET events can also be used:
    bmi270.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Bmi270.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    bmi270.Subscribe(consumer);

    bmi270.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<(Acceleration3D? Acceleration3D,
                                 AngularVelocity3D? AngularVelocity3D,
                                 Temperature? Temperature)> result)
{
    return result.New.Acceleration3D.Value.Z > new Acceleration(0.1, Acceleration.UnitType.Gravity);
}

void HandleResult(object sender,
    IChangeResult<(Acceleration3D? Acceleration3D,
    AngularVelocity3D? AngularVelocity3D,
    Temperature? Temperature)> result)
{
    var accel = result.New.Acceleration3D.Value;
    var gyro = result.New.AngularVelocity3D.Value;
    var temp = result.New.Temperature.Value;

    Resolver.Log.Info($"AccelX={accel.X.Gravity:0.##}g, AccelY={accel.Y.Gravity:0.##}g, AccelZ={accel.Z.Gravity:0.##}g, GyroX={gyro.X.RadiansPerMinute:0.##}rpm, GyroY={gyro.Y.RadiansPerMinute:0.##}rpm, GyroZ={gyro.Z.RadiansPerMinute:0.##}rpm, {temp.Celsius:0.##}C");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bmi270/Samples/Bmi270_Sample)

