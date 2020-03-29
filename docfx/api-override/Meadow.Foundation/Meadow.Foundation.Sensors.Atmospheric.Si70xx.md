---
uid: Meadow.Foundation.Sensors.Atmospheric.Si70xx
remarks: *content
---

| SI70xx        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Si70xx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Si70xx.svg?label=Meadow.Foundation.Sensors.Atmospheric.Si70xx" style="width: auto; height: -webkit-fill-available;" /></a> |

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
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Si70xx si7021;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // configure our SI7021 on the I2C Bus
        var i2cBus = Device.CreateI2cBus();

        si7021 = new Si70xx(i2cBus);

        // get an initial reading
        ReadConditions().Wait();

        // start updating continuously
        si7021.StartUpdating();
    }

    protected async Task ReadConditions()
    {
        var conditions = await si7021.Read();
        Console.WriteLine("Initial Readings:");
        Console.WriteLine($"  Temperature: {conditions.Temperature}ºC");
        Console.WriteLine($"  Pressure: {conditions.Pressure}hPa");
        Console.WriteLine($"  Relative Humidity: {conditions.Humidity}%");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Si70xx/Samples/) 

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