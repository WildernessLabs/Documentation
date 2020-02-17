---
uid: Meadow.Foundation.Sensors.Atmospheric.Bmp085
remarks: *content
---

| BMP085        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp085) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bmp085/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bmp085.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bmp085" style="width: auto; height: -webkit-fill-available;" /></a> |

The **BMP085** is a high-precision, low-power barometric pressure sensor. The BMP085 offers a measuring range of 300 to 1100 hPa with an absolute accuracy of down to 0.03 hPa. It's based on piezo-resistive technology for EMC robustness, high accuracy and linearity as well as long term stability. This sensor supports a voltage supply between 1.8 and 3.6VDC. It is designed to be connected directly to a micro-controller via the I2C bus.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bmp085 bmp085;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // configure our BME280 on the I2C Bus
        var i2c = Device.CreateI2cBus();
        bmp085 = new Bmp085(i2c);   

        // Example that uses an IObersvable subscription to only be notified
        // when the temperature changes by at least a degree, and humidty by 5%.
        // (blowing hot breath on the sensor should trigger)
        bmp085.Subscribe(new FilterableObserver<AtmosphericConditionChangeResult, AtmosphericConditions>(
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
        bmp085.Updated += (object sender, AtmosphericConditionChangeResult e) => {
            Console.WriteLine($"  Temperature: {e.New.Temperature}°C, Pressure: {e.New.Pressure}hPa");
        };

        // get an initial reading
        ReadConditions().Wait();

        // start updating continuously
        bmp085.StartUpdating();
    }

    protected async Task ReadConditions()
    {
        var conditions = await bmp085.Read();
        Console.WriteLine($"Temperature: {conditions.Temperature}°C, Pressure: {conditions.Pressure}hPa");
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp085/Samples/Sensors.Atmospheric.Bmp085_Sample) 

### Wiring Example

To wire a BMP085 to your Meadow board, connect the following:

| BMP085  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.BMP085/BMP085.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />