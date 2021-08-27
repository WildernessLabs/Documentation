---
uid: Meadow.Foundation.Sensors.Atmospheric.Si70xx
remarks: *content
---

| Si70xx | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Si70xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Si70xx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Si70xx" /></a> |

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
Si70xx sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    sensor = new Si70xx(Device.CreateI2cBus());

    var consumer = Si70xx.CreateObserver(
        handler: result => 
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },                
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old) 
            { 
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5
                &&
                (result.New.Humidity.Value - old.Humidity.Value).Percent > 0.05
                ); 
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:F1}C");
        Console.WriteLine($"  Relative Humidity: {result.New.Humidity:F1}%");
    };

    ReadConditions().Wait();

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {result.Temperature?.Celsius:F1}C");
    Console.WriteLine($"  Relative Humidity: {result.Humidity:F1}%");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Samples/Sensors.Atmospheric.Si70xx_Sample)

### Wiring Example

To wire a Si7021 to your Meadow board, connect the following:

| Si7021 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Si70xx/Si7021_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




