---
uid: Meadow.Foundation.Sensors.Motion.Mpu6050
remarks: *content
---

| Mpu6050 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mpu6050) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mpu6050/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Mpu6050/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Mpu6050.svg?label=Meadow.Foundation.Sensors.Motion.Mpu6050" alt="NuGet Gallery for Mpu6050" /></a> |

### Code Example

```csharp
Mpu6050 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing");

    sensor = new Mpu6050(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Accel: [X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

        Console.WriteLine($"Angular Velocity: [X:{result.New.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
            $"Y:{result.New.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
            $"Z:{result.New.AngularVelocity3D?.Z.DegreesPerSecond:N2} (dps)]");

        Console.WriteLine($"Temp: {result.New.Temperature?.Celsius:N2}C");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Mpu6050.CreateObserver(
        handler: result => Console.WriteLine($"Observer: [x] changed by threshold; new [x]: X:{result.New.Acceleration3D?.X:N2}, old: X:{result.Old?.Acceleration3D?.X:N2}"),
        // only notify if there's a greater than 1G change in the Z direction
        filter: result => {
            if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                return ((result.New.Acceleration3D.Value - old.Acceleration3D.Value).Z > new Acceleration(1, AU.Gravity));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    //==== one-off read
    ReadConditions().Wait();

    // start updating
    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"Accel: [X:{result.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    Console.WriteLine($"Angular Accel: [X:{result.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
        $"Y:{result.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
        $"Z:{result.AngularVelocity3D?.Z.DegreesPerSecond:N2} (dps)]");

    Console.WriteLine($"Temp: {result.Temperature?.Celsius:N2}C");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mpu6050/Samples/Mpu6050_Sample)

