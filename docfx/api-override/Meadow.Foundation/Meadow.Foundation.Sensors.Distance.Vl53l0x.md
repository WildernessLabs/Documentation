---
uid: Meadow.Foundation.Sensors.Distance.Vl53l0x
remarks: *content
---

| Vl53l0x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Vl53l0x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Vl53l0x.svg?label=Meadow.Foundation.Sensors.Distance.Vl53l0x" /></a> |
                    <img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Vl53l0x.svg?label=Meadow.Foundation.Sensors.Distance.Vl53l0x" 
                    style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
Vl53l0x sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing hardware...");
    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
    sensor = new Vl53l0x(Device, i2cBus, 250);

    sensor.DistanceUpdated += Sensor_Updated;
    sensor.StartUpdating(TimeSpan.FromMilliseconds(250));
}

private void Sensor_Updated(object sender, IChangeResult<Length> result)
{
    if (result.New == null) { return; }

    if (result.New < new Length(0, LU.Millimeters))
    { 
        Console.WriteLine("out of range.");
    }
    else 
    {
        Console.WriteLine($"{result.New.Millimeters}mm / {result.New.Inches:n3}\"");
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Vl53l0x/Samples/Sensors.Distance.Vl53l0x_Sample)

### Wiring Example

To wire a Vl53l0x to your Meadow board, connect the following:

| Vl53l0x | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Distance.Vl53l0x/Vl53l0x_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

