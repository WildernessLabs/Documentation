---
uid: Meadow.Foundation.Sensors.Motion.Adxl377
remarks: *content
---

| ADXL337       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl337) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl377/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl337.svg?label=Meadow.Foundation.Sensors.Motion.Adxl337" style="width: auto; height: -webkit-fill-available;" /></a> |

The **ADXL377** is a low power accelerometer capable of measuring +/- 200g of acceleration along three axes. The ADXL377 is controlled via I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Adxl377 sensor;

    public MeadowApp()
    {
        sensor = new Adxl377(Device, Device.Pins.A01, Device.Pins.A02, Device.Pins.A03, 500);

        sensor.AccelerationChanged += Sensor_AccelerationChanged;
    }

    void Sensor_AccelerationChanged(object sender, Meadow.Foundation.Sensors.SensorVectorEventArgs e)
    {
        Console.WriteLine($"X: {e.CurrentValue.X}, Y: {e.CurrentValue.Y}, Z: {e.CurrentValue.Z}");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl377/Samples/) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl377/Adxl377_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />