---
uid: Meadow.Foundation.Displays.TftSpi.Ili9163
remarks: *content
---

| Ili9163 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi.Ili9163) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" /></a> |

The **ILI9163** is a display controller used to drive color displays over SPI using 12, 16 or 18 bbp. These displays require a backlight.

The Meadow.Foundation ILI9163 driver currently only supports 16bpp RGB565.

### Purchasing

You can get ILI9163 displays from the following suppliers:

* [1.8 Inch 128X160 ILI9163/ST7735](https://www.ebay.com/itm/1-8-Inch-128X160-Ili9163-ST7735-TFT-LCD-Module-With-PCB-Baseboard-SPI-Serial-Por/123860977338?hash=item1cd6b086ba:g:jWAAAOSwvdxdQ~qo)
* [128x160 ILI9163 / ST7735 TFT Module LCD](https://www.amazon.fr/ILS-Pouces-128x160-ILI9163-Plinthe/dp/B07M7DWWD5)

### Code Example

```csharp
GraphicsLibrary graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    var config = new SpiClockConfiguration(12000, SpiClockConfiguration.Mode.Mode0);
    var spiBus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

    Console.WriteLine("Create display driver instance");

    var display = new Ili9163
    (
        device: Device, 
        spiBus: spiBus,
        resetPin: Device.Pins.D00,
SelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        width: 128, height: 160
    );

    graphics = new GraphicsLibrary(display);

    graphics.CurrentFont = new Font8x8();
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
    graphics.DrawText(5, 5, "Meadow F7");
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi.Ili9163/Samples/Displays.TftSpi.Ili9163_Sample)

### Wiring Example

 To wire a Ili9163 to your Meadow board, connect the following:

| Ili9163 | Meadow Pin |
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

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.Ili9163/Ili9163_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




