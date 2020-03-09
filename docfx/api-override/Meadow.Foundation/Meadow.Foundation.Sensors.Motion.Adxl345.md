---
uid: Meadow.Foundation.Sensors.Motion.Adxl345
remarks: *content
---

| ADXL345       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl345) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl345/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl345.svg?label=Meadow.Foundation.Sensors.Motion.Adxl345" style="width: auto; height: -webkit-fill-available;" /></a> |

The **ADXL345** is a small, low power, triple axis acceleration sensor capable of measuring up to +/-16g with a resolution of 13-bits.

The ADXL345 is controlled via I2C.


The ADXL345 can operating in interrupt and polling mode. Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Purchasing

The ADXL345 is available on a small breakout board:

* [Sparkfun ADXL345 Breakout Board](https://www.sparkfun.com/products/9836)

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Adxl345 sensor;

    public MeadowApp()
    {
        sensor = new Adxl345(Device.CreateI2cBus(), 83, 0);

        sensor.SetPowerState(false, false, true, false, Adxl345.Frequency.EightHz);

        while (true)
        {
            sensor.Update();

            Console.WriteLine($"{sensor.X}, {sensor.Y}, {sensor.Z}");

            Thread.Sleep(500);
        } 
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl345/Samples/) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl345/Adxl345_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />