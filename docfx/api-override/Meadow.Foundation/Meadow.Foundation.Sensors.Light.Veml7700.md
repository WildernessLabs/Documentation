---
uid: Meadow.Foundation.Sensors.Light.Veml7700
remarks: *content
---

| Veml7700 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Veml7700/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Veml7700.svg?label=Meadow.Foundation.Sensors.Light.Veml7700" /></a> |

The TEMT6000 is an I2C ambient light sensor.

### Code Example

```csharp
Veml7700 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    sensor = new Veml7700(Device.CreateI2cBus());
    sensor.DataSource = Veml7700.SensorTypes.Ambient;
    sensor.RangeExceededHigh += (s, a) =>
    {
        Console.WriteLine("Too bright to measure.");
    };
    sensor.RangeExceededLow += (s, a) =>
    {
        Console.WriteLine("Too dim to measure.");
    };

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => {
        Console.WriteLine($"Illuminance: {result.New.Lux:n3}Lux");
    };

    //==== one-off read
    ReadConditions().Wait();

    // start updating continuously
    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

protected async Task ReadConditions()
{
    var conditions = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Illuminance: {conditions.Lux:n3}Lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Veml7700/Samples/Sensors.Light.Veml7700_Sample)

### Wiring Example

To wire a Veml7700 to your Meadow board, connect the following:

| Veml7700 | Meadow Pin  |
|----------|-------------|
| 3V3      | 3V3         |
| GND      | GND         |
| SCK      | D08         |
| SDA      | D07         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Veml7700/Veml7700_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




