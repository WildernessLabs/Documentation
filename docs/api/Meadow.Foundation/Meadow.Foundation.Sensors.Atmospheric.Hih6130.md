---
uid: Meadow.Foundation.Sensors.Atmospheric.Hih6130

---

| Hih6130 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Hih6130/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Hih6130.svg?label=Meadow.Foundation.Sensors.Atmospheric.Hih6130" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Hih6130" /></a> |

The **HIH6130** sensor allows the reading of the relative humidity and temperature via I2C.

### Code Example

```csharp
Hih6130? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Hih6130(Device.CreateI2cBus());

    var consumer = Hih6130.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {

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
        Resolver.Log.Info($"  Temperature: {result?.New.Temperature?.Celsius:F1}°C");
        Resolver.Log.Info($"  Relative Humidity: {result?.New.Humidity?.Percent:F1}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result.Temperature?.Celsius:F1}°C");
    Resolver.Log.Info($"  Relative Humidity: {result.Humidity:F1}%");

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




