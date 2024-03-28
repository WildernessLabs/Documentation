---
uid: Meadow.Foundation.Displays.Ssd1351
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1351
---

| Ssd1351 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **SSD1351** is a display controller used to drive 16bpp (RGB565) color OLED displays over SPI. These displays are commonly found with a resolution of 128x128.

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    var display = new Ssd1351(
        spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 128, height: 128);

    graphics = new MicroGraphics(display)
    {
        CurrentFont = new Font8x12(),
        IgnoreOutOfBoundsPixels = true
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawCircle(80, 80, 40, Color.Cyan, false);

    int indent = 0;
    int spacing = 10;
    int y = indent;

    graphics.DrawText(indent, y, "Meadow F7 (SSD1351)");

    graphics.DrawText(indent, y += spacing, "Red", Color.Red);
    graphics.DrawText(indent, y += spacing, "Purple", Color.Purple);
    graphics.DrawText(indent, y += spacing, "BlueViolet", Color.BlueViolet);
    graphics.DrawText(indent, y += spacing, "Blue", Color.Blue);
    graphics.DrawText(indent, y += spacing, "Cyan", Color.Cyan);
    graphics.DrawText(indent, y += spacing, "LawnGreen", Color.LawnGreen);
    graphics.DrawText(indent, y += spacing, "GreenYellow", Color.GreenYellow);
    graphics.DrawText(indent, y += spacing, "Yellow", Color.Yellow);
    graphics.DrawText(indent, y += spacing, "Orange", Color.Orange);
    graphics.DrawText(indent, y += spacing, "Brown", Color.Brown);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ssd1351_Sample)

### Wiring Example

 To wire a Ssd1351 to your Meadow board, connect the following:

| Ssd1351 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | COPI       |
| SCK     | SCK        |
| RESET   | D15        |
| A0      | D14        |
| CS      | D13        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

![Wiring a Ssd1351 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tft.Ssd1351/Ssd1351_Fritzing.png)
