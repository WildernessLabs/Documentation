---
uid: Meadow.Foundation.Displays.Il0398
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.IL0398
---

| Il0398 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

The **IL0398** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL0398 is commonly paired with 4.2" 400x300 tri-color ePaper display.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
Il0398 display;
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    display = new Il0398(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D03,
        dcPin: Device.Pins.D02,
        resetPin: Device.Pins.D01,
        busyPin: Device.Pins.D00);

    graphics = new MicroGraphics(display)
    {
        Rotation = RotationType._270Degrees
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    for (int i = 0; i < 100; i++)
    {
        graphics.DrawPixel(i, i, Color.Black);
    }

    graphics.DrawRectangle(10, 40, 160, 60, Color.Black, true);
    graphics.DrawRectangle(20, 80, 200, 90, Color.Yellow, true);

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(2, 20, "Meadow F7", Color.Black);
    graphics.DrawText(30, 50, "Yellow", Color.Yellow);
    graphics.DrawText(50, 90, "Black", Color.Black);
    graphics.DrawText(50, 120, "White", Color.White);

    graphics.Show();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/IL0398_Sample)

### Wiring Example

 To control a IL0398 from Meadow, connect the following:

| IL0398  | Meadow Pin |
|---------|------------|
| BUSY    | D15        |
| RST     | D14        |
| DC      | D13        |
| CS      | D12        |
| CLK     | SCK        |
| DIN     | MOSI       |
| GND     | GND        |
| 3V3     | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).

![Wiring a IL0398 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.ePaper.IL0398/ePaper_Fritzing.png)
