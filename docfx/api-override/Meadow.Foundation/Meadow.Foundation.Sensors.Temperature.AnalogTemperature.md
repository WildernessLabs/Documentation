---
uid: Meadow.Foundation.Sensors.Temperature.AnalogTemperature
remarks: *content
---

| AnalogTemperature |             |
|-------------------|-------------|
| Status            | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code       | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Temperature)  |
| NuGet package     | <img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /> |

The analog temperature sensor driver can be used with any sensor that has a linear voltage response. It has been tested with the following series of temperature sensors:

* TMP35
* TMP36
* TMP37
* LM35

These sensors exhibit a linear change in the analog voltage for each degree centigrade. This is often presented in the datasheet as follows:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogSensorLinearResponse.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

This driver should work with any sensor of this type.

### Purchasing

TMP36 sensors can be purchased from a number of suppliers including:

* [Adafruit](https://www.adafruit.com/product/165)
* [Sparkfun](https://www.sparkfun.com/products/10988)

The following application demonstrates how to use the TMP36 in interrupt mode. The sensor will be read every second and changes in values greater than +/- 0.1C will generate and interrupt:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    AnalogTemperature analogTemperature;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        analogTemperature = new AnalogTemperature (
            device: Device,
            analogPin: Device.Pins.A00,
            sensorType: AnalogTemperature.KnownSensorType.LM35
        );

        var consumer = AnalogTemperature.CreateObserver(
            handler: result => {
                Console.WriteLine($"Observer filter satisfied: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
            },
            filter: result => {
                if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
                    return (result.New - old).Abs().Celsius > 0.5; // returns true if > 0.5°C change.
                } return false;
            }
        );
        analogTemperature.Subscribe(consumer);

        analogTemperature.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> result) => {
            Console.WriteLine($"Temp Changed, temp: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
        };

        ReadTemp().Wait();

        analogTemperature.StartUpdating();
    }

    async Task ReadTemp()
    {
        var temperature = await analogTemperature.Read();
        Console.WriteLine($"Initial temp: {temperature.New.Celsius:N2}C");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples/Sensors.Temperature.AnalogTemperature_Sample) 

### Wiring Example

To wire a TMP36 to your Meadow board, connect the following:

| TMP36 | Meadow Pin |
|-------|------------|
| GND   | GND        |
| IN    | A1         |
| VCC   | 5V         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogTemperature_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />
