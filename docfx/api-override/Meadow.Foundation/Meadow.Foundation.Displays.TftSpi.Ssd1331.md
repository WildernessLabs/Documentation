---
uid: Meadow.Foundation.Displays.Tft.Ssd1331
remarks: *content
---

| Ssd1331 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi.Ssd1331) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi.Ssd1331/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.Ssd1331.svg?label=Meadow.Foundation.Displays.TftSpi.Ssd1331" /></a> |

The **SSD1331** is a display controller used to drive 16bpp (RGB565) color OLED displays over SPI. These displays are commonly found with a resolution of 96x64.

### Code Example

```csharp
GraphicsLibrary graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    var config = new SpiClockConfiguration(12000, SpiClockConfiguration.Mode.Mode0);
    var spiBus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

    Console.WriteLine("Create display driver instance");

    var display = new St7796s
    (
        device: Device, 
        spiBus: spiBus,
        resetPin: Device.Pins.D00,
SelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        width: 320, height: 480
    );

    graphics = new GraphicsLibrary(display);

    graphics.CurrentFont = new Font8x8();
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);            
    graphics.DrawText(5, 5, "Meadow F7");
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi.Ssd1331/Samples/Displays.TftSpi.Ssd1331_Sample)

### Wiring Example

 To wire a Ssd1331 to your Meadow board, connect the following:

| Ssd1331 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | MOSI       |
| SCK     | SCK        |
| RESET   | D15        |
| A0      | D14        |
| CS      | D13        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.Ssd1331/Ssd1331_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

