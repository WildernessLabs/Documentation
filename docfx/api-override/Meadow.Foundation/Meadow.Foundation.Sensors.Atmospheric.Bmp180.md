---
uid: Meadow.Foundation.Sensors.Atmospheric.Bmp180
remarks: *content
---

| Bmp180 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp180) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp180/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bmp180/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bmp180.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bmp180" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bmp180" /></a> |

The BMP180 is a high-precision, low-power barometric pressure sensor. The BMP180 offers a measuring range of 300 to 1100 hPa with an absolute accuracy of down to 0.03 hPa. It's based on piezo-resistive technology for EMC robustness, high accuracy and linearity as well as long term stability. It is designed to be connected directly to a micro-controller via the I2C bus.

### Code Example

```csharp
Bmp180 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Bmp180(Device.CreateI2cBus());

    var consumer = Bmp180.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            // C# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5);
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Bar:N2}bar");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var conditions = await sensor.Read();
    Resolver.Log.Info($"Temperature: {conditions.Temperature?.Celsius}°C, Pressure: {conditions.Pressure?.Pascal}Pa");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp180/Samples/Bmp180_Sample)

### Wiring Example

To wire a BMP180 to your Meadow board, connect the following:

| BMP180 | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| SCL    | D08 (SCL)   |
| SDA    | D07 (SDA)   |
| VCC    | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Bmp180/Bmp180_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




