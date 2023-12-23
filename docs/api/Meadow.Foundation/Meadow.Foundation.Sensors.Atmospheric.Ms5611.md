---
uid: Meadow.Foundation.Sensors.Atmospheric.Ms5611

---

| Ms5611 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ms5611/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ms5611.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ms5611" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Ms5611" /></a> |

The MS5611 is a barometer and temperature sensor that communicates over I2C or SPI up to 20Mhz. Operating range: 10 to 1200 mbar, -40 to +85 °C.

### Code Example

```csharp
Ms5611 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Ms5611(Device.CreateI2cBus());

    var consumer = Ms5611.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5
                &&
                (result.New.Pressure.Value - old.Pressure.Value).Millibar > 0.5
                );
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
    };

    return Task.CompletedTask;
}

public async override Task Run()
{
    var conditions = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Temperature: {conditions.Temperature?.Celsius:N2}C");
    Resolver.Log.Info($" Pressure: {conditions.Pressure?.Bar:N2}hPa");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Samples/Ms5611_Sample)

### Wiring Example

To wire a Ms5611 to your Meadow board, connect the following:

| Ms5611 | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| SCL    | D08 (SCL)   |
| SDA    | D07 (SDA)   |
| VCC    | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Atmospheric.Ms5611/Ms5611_Fritzing.png" />




