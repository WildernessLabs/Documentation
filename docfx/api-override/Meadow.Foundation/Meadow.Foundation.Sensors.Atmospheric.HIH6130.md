---
uid: Meadow.Foundation.Sensors.Atmospheric.Hih6130
remarks: *content
---

| Hih6130 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130/Driver) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Hih6130/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Hih6130.svg?label=Meadow.Foundation.Sensors.Atmospheric.Hih6130" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Hih6130" /></a> |

The **HIH6130** sensor allows the reading of the relative humidity and temperature via I2C.

### Code Example

```csharp
Hih6130 sensor;

public override Task Initialize()
{
    Console.WriteLine("Initializing...");

    sensor = new Hih6130(Device.CreateI2cBus());

    var consumer = Hih6130.CreateObserver(
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
        Console.WriteLine($"  Temperature: {result?.New.Temperature?.Celsius:F1}°C");
        Console.WriteLine($"  Relative Humidity: {result?.New.Humidity?.Percent:F1}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {result.Temperature?.Celsius:F1}°C");
    Console.WriteLine($"  Relative Humidity: {result.Humidity:F1}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130/Samples/Hih6130_Sample)

### Wiring Example

The HIH6130 requires only four connections between Meadow and the breakout board.

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | Vcc            | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Blue       |
| SD           | SDC            | White      |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.HIH6130/HIH6130_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




