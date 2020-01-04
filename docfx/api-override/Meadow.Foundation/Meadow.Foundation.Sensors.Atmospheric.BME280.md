---
uid: Meadow.Foundation.Sensors.Atmospheric.Bme280
remarks: *content
---

| BME280        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bme280/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bme280.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bme280" style="width: auto; height: -webkit-fill-available;" /></a> |

The **BME280** is a combined temperature, pressure and humidity sensor controlled via I2C.

## Purchasing

The BME280 sensor is available as a breakout board from the following suppliers:

* [SparkFun BME280](https://www.sparkfun.com/products/13676)
* [Adafruit BME280](https://www.adafruit.com/product/2652)

The BME280 can operating in polling and interrupt mode.  By default, this sensor operates in interrupt mode.

### Interrupt Mode

When the driver is operating in interrupt mode, the driver will periodically check the sensor reading.  An interrupt will be generated if the difference between the last reported reading and the current reading is greater than a threshold value.

The sensor operates in interrupt mode by default.

The following application will generate interrupts when changes to any one of the temperature, humidity or pressure readings exceed their threshold values:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bme280 bme280;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // configure our BME280 on the I2C Bus
        var i2c = Device.CreateI2cBus();
        bme280 = new Bme280 (
            i2c,
            Bme280.I2cAddress.Adddress0x77 //default
        );

        bme280.Subscribe(new FilterableObserver<AtmosphericConditionChangeResult, AtmosphericConditions>(
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
        bme280.Updated += (object sender, AtmosphericConditionChangeResult e) => 
        {
            Console.WriteLine($"  Temperature: {e.New.Temperature}ºC");
            Console.WriteLine($"  Pressure: {e.New.Pressure}hPa");
            Console.WriteLine($"  Relative Humidity: {e.New.Humidity}%");
        };

        // get chip id
        Console.WriteLine($"ChipID: {bme280.GetChipID():X2}");            

        // get an initial reading
        ReadConditions().Wait();

        // start updating continuously
        bme280.StartUpdating();
    }

    protected async Task ReadConditions()
    {
        var conditions = await bme280.Read();
        Console.WriteLine("Initial Readings:");
        Console.WriteLine($"  Temperature: {conditions.Temperature}ºC");
        Console.WriteLine($"  Pressure: {conditions.Pressure}hPa");
        Console.WriteLine($"  Relative Humidity: {conditions.Humidity}%");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme280/Samples/) 

### Polling Mode

In polling mode, it is the responsibility of the main application to check the sensor readings ona periodic basis.  The following application creates an instance of the `BME280` class using the I2C interface.  The temperature, pressure and humidity are read every second and the readings displayed using the debugger.

The sensor is put into polling mode by setting the `updateInterval` to `0` in the constructor.

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        // Create a new BME280 object and put the sensor into polling
        // mode (update interval set to 0ms).
        Bme280 sensor = new Bme280(updateInterval: 0);

        string message;
        while (true)
        {
            // Make the sensor take new readings.
            sensor.Update();

            // Prepare a message for the user and output to the debug console.
            message = "Temperature: " + sensor.Temperature.ToString("F1") + " C\n";
            message += "Humidity: " + sensor.Humidity.ToString("F1") + " %\n";
            message += "Pressure: " + (sensor.Pressure / 100).ToString("F0") + " hPa\n\n";
            Console.WriteLine(message);

            // Sleep for 1000ms before repeating the process.
            Thread.Sleep(1000);
        }
    }
}
```

### Wiring Example

The BME280 can be connected using I2C or SPI.  Only 4 wires are required when using I2C:

* 3.3V
* Ground
* SDA
* SCL

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.BME280/BME280.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

It should be noted that the Sparkfun board is supplied with pull-up resistors enabled by default.  The Adafruit board does not have any pull-up resistors onboard.  It is therefore necessary to add two pull-up resistors (`4.7 K` should be adequate for a single device) between 3.3V and SDA and 3.3V and SCL.