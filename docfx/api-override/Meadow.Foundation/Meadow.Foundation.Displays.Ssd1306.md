---
uid: Meadow.Foundation.Displays.Ssd1306
remarks: *content
---

| Ssd1306 |             |
|---------|-------------|
| Status  | Working     |
| Source code        | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Ssd1306)            |
| NuGet package      | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd1306.svg?label=NuGet)
| | |

OLED displays based upon the Ssd1306 chip set are small, high contrast, single color displays. These displays generate their own light; no backlight is required.

### Purchasing

There are a number of breakout board available using these displays. This driver has been tested with the following:

* [Diymall 0.96" 128x64 pixel OLED Display](https://www.amazon.co.uk/gp/product/B0156CO67O/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)
* [HALJIA 0.91 128x32 pixel OLED Display](https://www.amazon.co.uk/gp/product/B071Z18R1M/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

Board are also available from [Adafruit](www.adafruit.com).

### Code Example

The following example shows how to initialize a TEA5767 and look for radio stations:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Ssd1306 display;
    GraphicsLibrary graphics;

    public MeadowApp()
    {            
        var i2CBus = Device.CreateI2cBus();         
        display = new Ssd1306(i2CBus, 60, Ssd1306.DisplayType.OLED128x32);
        graphics = new GraphicsLibrary(display);

        TestDisplayGraphicsAPI();
    }

    void TestDisplayGraphicsAPI() 
    {
        graphics.Clear();

        graphics.CurrentFont = new Font8x12();
        graphics.DrawText(0, 0, "Meadow F7");
        graphics.DrawRectangle(5, 14, 30, 10, true);

        graphics.Show();
    }  
}
```

[Source code available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Ssd1306/Samples/Displays.Ssd1306_Sample) 

### Wiring Example

 To wire a Ssd1306 to your Meadow board using I2C, connect the following:

| Ssd1306 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. Wiring for the I2C interface is as follows:

![](../../API_Assets/Meadow.Foundation.Displays.Ssd1306/Ssd1306_Frizzing.png)
