---
uid: Meadow.Foundation.Sensors.Motion.Adxl337
remarks: *content
---

| ADXL337       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl337) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Adxl337/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl337.svg?label=Meadow.Foundation.Sensors.Motion.Adxl337" style="width: auto; height: -webkit-fill-available;" /></a> |

The **ADXL337** is a low power accelerometer capable of measuring +/- 3g of acceleration along three axes. The ADXL337 is controlled via I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Adxl337 sensor;

    public MeadowApp()
    {
        sensor = new Adxl337(Device, Device.Pins.A01, Device.Pins.A02, Device.Pins.A03, 500);

        sensor.AccelerationChanged += Sensor_AccelerationChanged;
    }

    private void Sensor_AccelerationChanged(object sender, Meadow.Foundation.Sensors.SensorVectorEventArgs e)
    {
        Console.WriteLine($"X: {e.CurrentValue.X}, Y: {e.CurrentValue.Y}, Z: {e.CurrentValue.Z}");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl337/Samples/) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adx337/Adx337_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />