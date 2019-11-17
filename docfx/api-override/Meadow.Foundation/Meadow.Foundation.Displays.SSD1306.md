---
uid: Meadow.Foundation.Displays.SSD1306
remarks: *content
---

OLED displays based upon the SSD1306 chip set are small, high contrast, single color displays. These displays generate their own light; no backlight is required.

### Purchasing

There are a number of breakout board available using these displays. This driver has been tested with the following:

* [Diymall 0.96" 128x64 pixel OLED Display](https://www.amazon.co.uk/gp/product/B0156CO67O/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)
* [HALJIA 0.91 128x32 pixel OLED Display](https://www.amazon.co.uk/gp/product/B071Z18R1M/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

Board are also available from [Adafruit](www.adafruit.com).

### Code Example

The following example shows how to initialize a TEA5767 and look for radio stations:

```csharp
using System;
using System.Threading;
using Meadow;

namespace SSD1306_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : AppBase<F7Micro, MeadowApp>
    {
        protected SSD1306 display;
        protected GraphicsLibrary graphics;

        public MeadowApp()
        {            
            var i2CBus = Device.CreateI2cBus();         
            display = new SSD1306(i2CBus, 60, SSD1306.DisplayType.OLED128x32);
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
}
```

### Circuit Example

 To wire a SSD1306 to your Meadow board, connect the following:

| SSD1306 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. The driver currently only supports I2C displays. Wiring for the I2C interface is as follows:

![](../../API_Assets/Meadow.Foundation.Displays.SSD1306/SSD1306_Frizzing.png)
