---
uid: Meadow.Foundation.Sensors.Motion.Bno055
remarks: *content
---

| Bno055 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Driver) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Bno055/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Bno055.svg?label=Meadow.Foundation.Sensors.Motion.Bno055" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Bno055" /></a> |

**BNO055** is a 9-axis absolute orientation sensor. The three sensors (accelerometer, gyroscope and magnetometer) are measured with a 32-bit cortex M0 microcontroller. The BNO055 is controlled via I2C.

### Purchasing
* [Tindie BNO-055 9-axis motion sensor with fusion hardware](https://www.tindie.com/products/onehorse/bno-055-9-axis-motion-sensor-with-hardware-fusion/)

### Code Example

```csharp
Bno055 sensor;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    // create the sensor driver
    sensor = new Bno055(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Console.WriteLine($"Accel: [X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

        Console.WriteLine($"Gyro: [X:{result.New.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
            $"Y:{result.New.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
            $"Z:{result.New.AngularVelocity3D?.Z.DegreesPerSecond:N2} (degrees/s)]");

        Console.WriteLine($"Compass: [X:{result.New.MagneticField3D?.X.Tesla:N2}," +
            $"Y:{result.New.MagneticField3D?.Y.Tesla:N2}," +
            $"Z:{result.New.MagneticField3D?.Z.Tesla:N2} (Tesla)]");

        Console.WriteLine($"Gravity: [X:{result.New.GravityVector?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.GravityVector?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.GravityVector?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

        Console.WriteLine($"Quaternion orientation: [X:{result.New.QuaternionOrientation?.X:N2}," +
            $"Y:{result.New.QuaternionOrientation?.Y:N2}," +
            $"Z:{result.New.QuaternionOrientation?.Z:N2}]");

        Console.WriteLine($"Euler orientation: [heading: {result.New.EulerOrientation?.Heading:N2}," +
            $"Roll: {result.New.EulerOrientation?.Roll:N2}," +
            $"Pitch: {result.New.EulerOrientation?.Pitch:N2}]");

        Console.WriteLine($"Linear Accel: [X:{result.New.LinearAcceleration?.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.LinearAcceleration?.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.LinearAcceleration?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

        Console.WriteLine($"Temp: {result.New.Temperature?.Celsius:N2}C");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Bno055.CreateObserver(
        handler: result => Console.WriteLine($"Observer: [x] changed by threshold; new [x]: X:{result.New.Acceleration3D?.X.MetersPerSecondSquared:N2}, old: X:{result.Old?.Acceleration3D?.X.MetersPerSecondSquared:N2}"),
        // only notify if there's a greater than 1 micro tesla on the Y axis
        
        filter: result =>
        {
            if (result.Old is { } old)
            { //c# 8 pattern match syntax. checks for !null and assigns var.
                return ((result.New.Acceleration3D - old.Acceleration3D)?.Y > new Acceleration(1, AU.MetersPerSecondSquared));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{ 
    await ReadConditions();

    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"Accel: [X:{result.Acceleration3D?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Acceleration3D?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Acceleration3D?.Z.MetersPerSecondSquared:N2} (m/s^2)]");

    Console.WriteLine($"Gyro: [X:{result.AngularVelocity3D?.X.DegreesPerSecond:N2}," +
        $"Y:{result.AngularVelocity3D?.Y.DegreesPerSecond:N2}," +
        $"Z:{result.AngularVelocity3D?.Z.DegreesPerSecond:N2} (degrees/s)]");

    Console.WriteLine($"Compass: [X:{result.MagneticField3D?.X.Tesla:N2}," +
        $"Y:{result.MagneticField3D?.Y.Tesla:N2}," +
        $"Z:{result.MagneticField3D?.Z.Tesla:N2} (Tesla)]");

    Console.WriteLine($"Gravity: [X:{result.GravityVector?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.GravityVector?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.GravityVector?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

    Console.WriteLine($"Quaternion orientation: [X:{result.QuaternionOrientation?.X:N2}," +
        $"Y:{result.QuaternionOrientation?.Y:N2}," +
        $"Z:{result.QuaternionOrientation?.Z:N2}]");

    Console.WriteLine($"Euler orientation: [heading: {result.EulerOrientation?.Heading:N2}," +
        $"Roll: {result.EulerOrientation?.Roll:N2}," +
        $"Pitch: {result.EulerOrientation?.Pitch:N2}]");

    Console.WriteLine($"Linear Accel: [X:{result.LinearAcceleration?.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.LinearAcceleration?.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.LinearAcceleration?.Z.MetersPerSecondSquared:N2} (meters/s^2)]");

    Console.WriteLine($"Temp: {result.Temperature?.Celsius:N2}C");
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Samples/Bno055_Sample)

### Wiring Example

The following diagram shows the BNO055 configured for bas

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Bno055/Bno055_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




