---
uid: Meadow.Foundation.Sensors.Atmospheric.Si70xx

---

| Si70xx | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Si70xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Si70xx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Si70xx" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Si70xx" /></a> |

The **SI70xx** is a humidity and temperature sensor controlled via I2C.

* ± 3% RH (max) 
* 0–80% RH 
* High Accuracy Temperature Sensor ±0.4 °C 
* –10 to 85 °C 
* 0 to 100% RH operating range 
* Up to –40 to +125 °C operating range 
* Wide operating voltage (1.9 to 3.6 V) 
* Low Power Consumption 
* 150 µA active current 
* 60 nA standby current

## Purchasing

The Si7021 is available on a breakout board from the the following suppliers:

* [Adafruit Si7021 Breakout Board](https://www.adafruit.com/product/3251)
* [Sparkfun Si7021 Breakout Board](https://www.sparkfun.com/products/13763)
* [Tessel Climate Module](https://www.seeedstudio.com/Tessel-Climate-Module-p-2225.html)

### Code Example

```csharp
Si70xx? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Si70xx(Device.CreateI2cBus());

    var consumer = Si70xx.CreateObserver(
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
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:F1}C");
        Resolver.Log.Info($"  Relative Humidity: {result.New.Humidity:F1}%");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {result.Temperature?.Celsius:F1}C");
    Resolver.Log.Info($"  Relative Humidity: {result.Humidity:F1}%");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Samples/Si70xx_Sample)

### Wiring Example

To wire a Si7021 to your Meadow board, connect the following:

| Si7021 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Si70xx/Si7021_Fritzing.png" />




