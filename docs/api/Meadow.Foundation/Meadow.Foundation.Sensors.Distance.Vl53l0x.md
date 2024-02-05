---
uid: Meadow.Foundation.Sensors.Distance.Vl53l0x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x
---

| Vl53l0x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Vl53l0x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Vl53l0x.svg?label=Meadow.Foundation.Sensors.Distance.Vl53l0x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Vl53l0x" /></a> |

### Code Example

```csharp
Vl53l0x sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing hardware...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
    sensor = new Vl53l0x(i2cBus);

    sensor.DistanceUpdated += Sensor_Updated;

    return Task.CompletedTask;
}

public override Task Run()
{
    sensor.StartUpdating(TimeSpan.FromMilliseconds(250));

    return Task.CompletedTask;
}

private void Sensor_Updated(object sender, IChangeResult<Length> result)
{
    if (result.New == null) { return; }

    if (result.New < new Length(0, LU.Millimeters))
    {
        Resolver.Log.Info("out of range.");
    }
    else
    {
        Resolver.Log.Info($"{result.New.Millimeters}mm / {result.New.Inches:n3}\"");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Samples/Vl53l0x_Sample)

### Wiring Example

To wire a Vl53l0x to your Meadow board, connect the following:

| Vl53l0x | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Distance.Vl53l0x/Vl53l0x_Fritzing.png" />




