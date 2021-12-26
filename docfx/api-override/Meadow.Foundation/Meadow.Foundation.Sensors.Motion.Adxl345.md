---
uid: Meadow.Foundation.Sensors.Motion.Adxl345
remarks: *content
---

| Adxl345 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl345) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl3xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl3xx.svg?label=Meadow.Foundation.Sensors.Motion.Adxl3xx" /></a> |

The **ADXL345** is a small, low power, triple axis acceleration sensor capable of measuring up to +/-16g with a resolution of 13-bits.

The ADXL345 is controlled via I2C.


The ADXL345 can operating in interrupt and polling mode. Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Purchasing

The ADXL345 is available on a small breakout board:

* [Sparkfun ADXL345 Breakout Board](https://www.sparkfun.com/products/9836)

### Code Example

```csharp
Adxl345 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing");

    sensor = new Adxl345(Device.CreateI2cBus());
    sensor.SetPowerState(false, false, true, false, Adxl345.Frequencies.TwoHz);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Console.WriteLine($"Accel: [X:{result.New.X.MetersPerSecondSquared:N2}," +
            $"Y:{result.New.Y.MetersPerSecondSquared:N2}," +
            $"Z:{result.New.Z.MetersPerSecondSquared:N2} (m/s^2)]");
    };

    //==== one-off read
    ReadConditions().Wait();

    // start updating
    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}

protected async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"Accel: [X:{result.X.MetersPerSecondSquared:N2}," +
        $"Y:{result.Y.MetersPerSecondSquared:N2}," +
        $"Z:{result.Z.MetersPerSecondSquared:N2} (m/s^2)]");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl345/Samples/Sensors.Motion.Adxl345_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl345/Adxl345_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




