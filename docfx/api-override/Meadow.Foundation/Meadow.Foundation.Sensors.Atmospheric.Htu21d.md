---
uid: Meadow.Foundation.Sensors.Atmospheric.Htu21d
remarks: *content
---

| Htu21d | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Htux1d/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Htux1d.svg?label=Meadow.Foundation.Sensors.Atmospheric.Htux1d" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Htux1d" /></a> |

The **HTU21D** is a low-cost, easy to use, highly accurate, digital humidity and temperature sensor controlled via the I2C bus.

### Code Example

```csharp
Htu21d? sensor;

public override Task Initialize()
{
    Console.WriteLine("Initializing...");

    sensor = new Htu21d(Device.CreateI2cBus());

    var consumer = Htu21d.CreateObserver(
        handler: result => 
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old?.Temperature is { } oldTemp &&
                result.Old?.Humidity is { } oldHumidity &&
                result.New.Temperature is { } newTemp &&
                result.New.Humidity is { } newHumidity)
            {
                return ((newTemp - oldTemp).Abs().Celsius > 0.5 &&
                        (newHumidity - oldHumidity).Percent > 0.05);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:F1}C");
        Console.WriteLine($"  Relative Humidity: {result.New.Humidity?.Percent:F1}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {result.Temperature?.Celsius:F1}C");
    Console.WriteLine($"  Relative Humidity: {result.Humidity:F1}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Htu2xd/Samples/Htu21d_Sample)

### Wiring Example

To wire a HTU21D to your Meadow board, connect the following:

| HTU21D | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| SCL    | D08 (SCL)   |
| SDA    | D07 (SDA)   |
| VCC    | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Htu21d/Htu21d_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




