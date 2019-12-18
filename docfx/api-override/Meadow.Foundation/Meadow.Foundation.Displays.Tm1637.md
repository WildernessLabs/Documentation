---
uid: Meadow.Foundation.Displays.Tm1637
remarks: *content
---

OLED displays based upon the TM1637 chip set are small, high contrast, single color displays. These displays generate their own light; no backlight is required.

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
    protected TM1637 display;
    protected GraphicsLibrary graphics;

    public MeadowApp()
    {            
        var i2CBus = Device.CreateI2cBus();         
        display = new TM1637(i2CBus, 60, TM1637.DisplayType.OLED128x32);
        graphics = new GraphicsLibrary(display);

        Console.WriteLine("Test display API");
        TestRawDisplayAPI();
        Thread.Sleep(1000);

        Console.WriteLine("Create Graphics Library");
        TestDisplayGraphicsAPI();
    }

    void TestRawDisplayAPI()
    {
        display.Clear(true);

        for (int i = 0; i < 30; i++)
        {
            display.DrawPixel(i, i, true);
            display.DrawPixel(30 + i, i, true);
            display.DrawPixel(60 + i, i, true);
        }

        display.Show();
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

### Circuit Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. The driver currently only supports I2C displays. Wiring for the I2C interface is as follows:

![](../../API_Assets/Meadow.Foundation.Displays.Tm1637/TM1637_Frizzing.png)
