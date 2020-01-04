---
uid: Meadow.Foundation.Sensors.Atmospheric.Hih6130
remarks: *content
---

| HIH6130       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Hih6130/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Hih6130.svg?label=Meadow.Foundation.Sensors.Atmospheric.Hih6130" style="width: auto; height: -webkit-fill-available;" /></a> |

The **HIH6130** sensor allows the reading of the relative humidity and temperature via I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Hih6130 sensor;

    public MeadowApp()
    {
        sensor = new Hih6130(Device.CreateI2cBus());

        sensor.StartUpdating();

        sensor.Updated += Sensor_Updated;
    }

    private void Sensor_Updated(object sender, Meadow.Peripherals.Sensors.Atmospheric.AtmosphericConditionChangeResult e)
    {
        Console.WriteLine($"Humidity: {e.New.Humidity}, Temperature: {e.New.Temperature}");
    }
}

```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Hih6130/Samples/) 

## Purchasing

The HIH6130 sensor is available on a breakout board from Sparkfun.

* [Sparkfun HIH6130 Breakout Board](https://www.sparkfun.com/products/11295)

Example:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
    {

        Hih6130 sensor;

        public MeadowApp()
        {
            Initialize();

            sensor.StartUpdating();

            sensor.Updated += Sensor_Updated;
        }

        private void Sensor_Updated(object sender, Meadow.Peripherals.Sensors.Atmospheric.AtmosphericConditionChangeResult e)
        {
            Console.WriteLine($"Humidity: {e.New.Humidity}, Temperature: {e.New.Temperature}");
        }

        public void Initialize()
        {
            Console.WriteLine("Init...");

            sensor = new Hih6130(Device.CreateI2cBus());
        }
    }
```

### Wiring Example

The HIH6130 requires only four connections between Meadow and the breakout board.

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | Vcc            | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Blue       |
| SD           | SDC            | White      |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.HIH6130/HIH6130.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />