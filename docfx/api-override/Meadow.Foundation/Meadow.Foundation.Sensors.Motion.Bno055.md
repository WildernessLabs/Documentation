---
uid: Meadow.Foundation.Sensors.Motion.Bno055
remarks: *content
---

| BNO055        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055) |
| NuGet package | <img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Bno055.svg?label=Meadow.Foundation.Sensors.Motion.Bno055" style="width: auto; height: -webkit-fill-available;" /> |

**BNO055** is a 9-axis absolute orientation sensor. The three sensors (accelerometer, gyroscope and magnetometer) are measured with a 32-bit cortex M0 microcontroller. The BNO055 is controlled via I2C.

### Purchasing
* [Tindie BNO-055 9-axis motion sensor with fusion hardware](https://www.tindie.com/products/onehorse/bno-055-9-axis-motion-sensor-with-hardware-fusion/)

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bno055 sensor;

    public MeadowApp()
    {
        InitHardware();

        while (true)
        {
            sensor.Read();

            Console.WriteLine($"{sensor.Temperature}");

            Thread.Sleep(1000);
        }
    }

    public void InitHardware()
    {
        sensor = new Bno055(Device.CreateI2cBus(), 0x28);

        sensor.DisplayRegisters();
        sensor.PowerMode = Bno055.PowerModes.Normal;
        sensor.OperatingMode = Bno055.OperatingModes.ConfigurationMode;
        sensor.OperatingMode = Bno055.OperatingModes.InertialMeasurementUnit;
        sensor.DisplayRegisters();
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Bno055/Samples/) 

### Wiring Example

The following diagram shows the BNO055 configured for bas

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Bno055/Bno055_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />