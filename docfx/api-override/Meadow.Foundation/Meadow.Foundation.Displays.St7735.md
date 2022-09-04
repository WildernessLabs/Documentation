---
uid: Meadow.Foundation.Displays.St7735
remarks: *content
---

| ST7735 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **ST7735** is a display controller used to drive color displays over SPI using 12, 16 or 18 bbp. These displays require a backlight. These displays are commonly found with a resolution of 128x160.

The Meadow.Foundation ST7735 driver currently only supports 16bpp RGB565.

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    var spiBus = Device.CreateSpiBus(St7735.DefaultSpiBusSpeed);

    //note - you may need to adjust the DisplayType for your specific St7735
    var display = new St7735(
        device: Device,
        spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 128,
        height: 160,
        St7735.DisplayType.ST7735R);

    graphics = new MicroGraphics(display);

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawCircle(60, 60, 20, Color.Purple);
    graphics.DrawRectangle(10, 10, 30, 60, Color.Red);
    graphics.DrawTriangle(20, 20, 10, 70, 60, 60, Color.Green);

    graphics.DrawCircle(90, 60, 20, Color.Cyan, true);
    graphics.DrawRectangle(100, 100, 30, 10, Color.Yellow, true);
    graphics.DrawTriangle(120, 20, 110, 70, 160, 60, Color.Pink, true);

    graphics.DrawLine(10, 120, 110, 130, Color.SlateGray);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/St7735_Sample)

### Wiring Example

 To wire a ST7735 to your Meadow board, connect the following:

| ST7735 | Meadow Pin |
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

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.ST7735/ST7735_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




