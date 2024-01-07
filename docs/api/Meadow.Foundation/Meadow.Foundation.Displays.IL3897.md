---
uid: Meadow.Foundation.Displays.Il3897
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.IL3897
---

| Il3897 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

The **IL3897** is a dual-color display controller for ePaper displays. Data is sent to the controller via SPI and supports full screen updates only.

The IL3897 is commonly paired with a 2.13" two color ePaper display.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Il3897(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        busyPin: Device.Pins.D03,
        width: 122,
        height: 250);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Red, false);

    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(2, 2, "IL0373", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 20, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/IL3897_Sample)

### Wiring Example

 To control a IL3897 from Meadow, connect the following:

| IL3897  | Meadow Pin |
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

