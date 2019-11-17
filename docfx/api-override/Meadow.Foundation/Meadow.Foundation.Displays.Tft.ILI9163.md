---
uid: Meadow.Foundation.Displays.Tft.ILI9163
remarks: *content
---

### Purchasing

You can get ILI9163 displays from the following suppliers:

* [1.8 Inch 128X160 ILI9163/ST7735](https://www.ebay.com/itm/1-8-Inch-128X160-ILI9163-ST7735-TFT-LCD-Module-With-PCB-Baseboard-SPI-Serial-Por/123860977338?hash=item1cd6b086ba:g:jWAAAOSwvdxdQ~qo)
* [128x160 ILI9163 / ST7735 TFT Module LCD](https://www.amazon.fr/ILS-Pouces-128x160-ILI9163-Plinthe/dp/B07M7DWWD5)

### Code Example

The following example shows how to initialize a ILI9163 display and draw three lines using `DrawPixel` method:

```csharp
using System;
using System.Threading;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Displays.Tft;
using Meadow.Hardware;

namespace ILI9163_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : AppBase<F7Micro, App>
    {
        protected ISpiBus spiBus;
        protected ILI9163 iLI9163;

        public MeadowApp ()
        {
            spiBus = Device.CreateSpiBus();

            iLI9163 = new ILI9163(device: Device, spiBus: spiBus,
                chipSelectPin: Device.Pins.D02,
                dcPin: Device.Pins.D01,
                resetPin: Device.Pins.D00,
                width: 128, height: 160);
            iLI9163.ClearScreen(31);
            iLI9163.Refresh();

            Console.WriteLine("Clear display");
            iLI9163.ClearScreen(250);
            iLI9163.Refresh();

            Console.WriteLine("Draw lines");
            for (int i = 0; i < 30; i++)
            {
                iLI9163.DrawPixel(i, i, true);
                iLI9163.DrawPixel(30 + i, i, true);
                iLI9163.DrawPixel(60 + i, i, true);
            }

            iLI9163.Show(); 
        }
    }
}
```

### Circuit Example

 To wire a ILI9163 to your Meadow board, connect the following:

| ILI9163 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | MOSI       |
| SCK     | SCK        |
| RESET   | D00        |
| A0      | D01        |
| CS      | D02        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

![](../../API_Assets/Meadow.Foundation.Displays.Tft.ILI9163/ILI9163_Frizzing.png)