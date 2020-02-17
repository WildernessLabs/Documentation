---
uid: Meadow.Foundation.Sensors.Light.Bh1745
remarks: *content
---

| Bh1745        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1745/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1745.svg?label=Meadow.Foundation.Sensors.Light.Bh1745" style="width: auto; height: -webkit-fill-available;" /></a> |

The BH1745 is a RGB color and luminance sensor that communicates over I2C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Bh1745 sensor;
    RgbPwmLed rgbLed;

    public MeadowApp()
    {
        sensor = new Bh1745(Device.CreateI2cBus());
        rgbLed = new RgbPwmLed(
            Device,
            Device.Pins.OnboardLedRed,
            Device.Pins.OnboardLedGreen,
            Device.Pins.OnboardLedBlue,
            CommonType.CommonAnode);

        Thread.Sleep((int)sensor.MeasurementTime);

        Console.WriteLine("Read color values");

        Color color;

        while (true)
        {
            color = sensor.GetColor();

            Console.WriteLine($"Color: {color.R}, {color.G}, {color.B}");

            //quantize color for RGB to make color detection more obvious
            color = new Color(GetQuantizedValue(color.R),
                                GetQuantizedValue(color.G),
                                GetQuantizedValue(color.B));
            
            rgbLed.SetColor(color);

            Thread.Sleep(100);
        }
    }

    public double GetQuantizedValue(double value)
    {
        if (value < 0.3)
            return 0;
        if (value < 0.8)
            return 0.5;
        return 1;
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Samples/Sensors.Light.Bh1745_Sample) 

### Wiring Example

To wire a Bh1745 to your Meadow board, connect the following:

| Bh1745  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Light.Bh1745/Bh1745_Frizzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />