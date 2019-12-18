---
uid: Meadow.Foundation.Sensors.Atmospheric.HIH6130
remarks: *content
---

The HIH6130 sensor allows the reading of the relative humidity and temperature providing the data over an I2C interface.

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

![](../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.HIH6130/HIH6130.svg)