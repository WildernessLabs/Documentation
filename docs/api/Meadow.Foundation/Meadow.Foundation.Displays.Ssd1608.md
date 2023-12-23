---
uid: Meadow.Foundation.Displays.Ssd1608

---

| Ssd1608 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

The **SSD1608** is a two-color display controller for ePaper displays. Data is sent to the controller via SPI and supports full screen updates only.

The SSD1608 is paired with a wide range of two color ePaper display sizes and resolutions.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var display = new Ssd1608(spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        busyPin: Device.Pins.D03,
        width: 200,
        height: 200);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Black);

    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(2, 2, "SSD1608", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 20, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/SSD1608_Sample)

### Wiring Example

 To control a SSD1608 from Meadow, connect the following:

| SSD1608 | Meadow Pin |
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

![Wiring a SSD1608 to a Meadow F7](/docs/API_Assets/Meadow.Foundation.Displays.ePaper.SSD1608/ePaper_Fritzing.png)
