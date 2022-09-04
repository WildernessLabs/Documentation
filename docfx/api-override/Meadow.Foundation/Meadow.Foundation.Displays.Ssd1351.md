---
uid: Meadow.Foundation.Displays.Ssd1351
remarks: *content
---

| Ssd1351 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for TftSpi" /></a> |

The **SSD1351** is a display controller used to drive 16bpp (RGB565) color OLED displays over SPI. These displays are commonly found with a resolution of 128x128.

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initializing ...");
  
    var spiBus = Device.CreateSpiBus(Ssd1351.DefaultSpiBusSpeed);

    var display = new Ssd1351(
               device: Device, 
               spiBus: spiBus,
               chipSelectPin: Device.Pins.D02,
               dcPin: Device.Pins.D01,
               resetPin: Device.Pins.D00,
               width: 128, height: 128)
    {
        IgnoreOutOfBoundsPixels = true
    };

    var graphics = new MicroGraphics(display);
    graphics.CurrentFont = new Font8x12();

    graphics.Clear();

    graphics.DrawCircle(80, 80, 40, Meadow.Foundation.Color.Cyan, false);

    int indent = 0;
    int spacing = 10;
    int y = indent;

    graphics.DrawText(indent, y, "Meadow F7 (SSD1351)");

    graphics.DrawText(indent, y += spacing, "Red", Meadow.Foundation.Color.Red);
    graphics.DrawText(indent, y += spacing, "Purple", Meadow.Foundation.Color.Purple);
    graphics.DrawText(indent, y += spacing, "BlueViolet", Meadow.Foundation.Color.BlueViolet);
    graphics.DrawText(indent, y += spacing, "Blue", Meadow.Foundation.Color.Blue);
    graphics.DrawText(indent, y += spacing, "Cyan", Meadow.Foundation.Color.Cyan);
    graphics.DrawText(indent, y += spacing, "LawnGreen", Meadow.Foundation.Color.LawnGreen);
    graphics.DrawText(indent, y += spacing, "GreenYellow", Meadow.Foundation.Color.GreenYellow);
    graphics.DrawText(indent, y += spacing, "Yellow", Meadow.Foundation.Color.Yellow);
    graphics.DrawText(indent, y += spacing, "Orange", Meadow.Foundation.Color.Orange);
    graphics.DrawText(indent, y += spacing, "Brown", Meadow.Foundation.Color.Brown);

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ssd1351_Sample)

### Wiring Example

 To wire a Ssd1351 to your Meadow board, connect the following:

| Ssd1351 | Meadow Pin |
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

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.Ssd1351/Ssd1351_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




