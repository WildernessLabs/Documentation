---
uid: Meadow.Foundation.Sensors.Atmospheric.Bmp180
remarks: *content
---

| Bmp180        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp180) |
| NuGet package | <img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bmp180.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bmp180" style="width: auto; height: -webkit-fill-available;" /> |

The BMP180 is a high-precision, low-power barometric pressure sensor. The BMP180 offers a measuring range of 300 to 1100 hPa with an absolute accuracy of down to 0.03 hPa. It's based on piezo-resistive technology for EMC robustness, high accuracy and linearity as well as long term stability. It is designed to be connected directly to a micro-controller via the I2C bus.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bmp180 bmp180;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // configure our BME280 on the I2C Bus
        var i2c = Device.CreateI2cBus();
        bmp180 = new Bmp180(i2c);

        // Example that uses an IObersvable subscription to only be notified
        // when the temperature changes by at least a degree, and humidty by 5%.
        // (blowing hot breath on the sensor should trigger)
        bmp180.Subscribe(new FilterableObserver<AtmosphericConditionChangeResult, AtmosphericConditions>(
            h => {
                Console.WriteLine($"Temp and pressure changed by threshold; new temp: {h.New.Temperature}, old: {h.Old.Temperature}");
            },
            e => {
                return (
                    (Math.Abs(e.Delta.Temperature) > 1)
                    &&
                    (Math.Abs(e.Delta.Pressure) > 5)
                    );
            }
            ));

        // classical .NET events can also be used:
        bmp180.Updated += (object sender, AtmosphericConditionChangeResult e) => {
            Console.WriteLine($"Temperature: {e.New.Temperature}°C, Pressure: {e.New.Pressure}hPa");
        };

        // get an initial reading
        ReadConditions().Wait();

        // start updating continuously
        bmp180.StartUpdating();
    }

    protected async Task ReadConditions()
    {
        var conditions = await bmp180.Read();
        Console.WriteLine($"Temperature: {conditions.Temperature}°C, Pressure: {conditions.Pressure}hPa");
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp180/Samples/Sensors.Atmospheric.Bmp180_Sample) 

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