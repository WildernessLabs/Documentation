---
uid: Meadow.Foundation.Displays.Ssd1309
remarks: *content
---

| SSD1306       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Ssd1306) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.SSD1306/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd1306.svg?label=Meadow.Foundation.Displays.Ssd1306" style="width: auto; height: -webkit-fill-available;" /></a> |

The **SSD1309** is a display controller used to control small, low resolution, single color OLED displays. OLED displays generate their own light - no backlight is included or required.

SSD1309 displays can be found supporting both I2C and SPI and come in resolutions of 32x128, 64x128, 16x96 and 64x96.

You may find mutlicolor variants, however, the color is achieved by placing one or more color filter over the single color display.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    GraphicsLibrary graphics;
    Ssd1309 display;

    public MeadowApp()
    {
        CreateSpiDisplay();
        //CreateI2CDisplay();

        display.Clear(true);

        Console.WriteLine("Create Graphics Library");
        TestDisplayGraphicsAPI();
    }

    void CreateSpiDisplay()
    {
        Console.WriteLine("Create Display with SPI...");

        var config = new Meadow.Hardware.SpiClockConfiguration(12000, Meadow.Hardware.SpiClockConfiguration.Mode.Mode0);

        var bus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

        display = new Ssd1309
        (
            device: Device,
            spiBus: bus,
            chipSelectPin: Device.Pins.D02,
            dcPin: Device.Pins.D01,
            resetPin: Device.Pins.D00
        );
    }

    void CreateI2CDisplay()
    {
        Console.WriteLine("Create Display with I2C...");

        display = new Ssd1309
        (
            i2cBus: Device.CreateI2cBus(),
            address: 60
        );
    }

    void TestDisplayGraphicsAPI()
    {
        graphics = new GraphicsLibrary(display);

        graphics.Clear();
        graphics.CurrentFont = new Font12x16();
        graphics.DrawText(0, 0, "MeadowB3.7");
        graphics.DrawText(0, 24, "4-8x faster");
        graphics.DrawText(0, 48, "86x IO perf");

        graphics.Show();
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Ssd1306/Samples) 

### Wiring Example

 To wire a Ssd1309 to your Meadow board using I2C, connect the following:

| Ssd1309 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. Wiring for the I2C interface is as follows:

<img src="../../API_Assets/Meadow.Foundation.Displays.Ssd1309/SSD1309_Frizzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />