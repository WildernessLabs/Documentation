---
uid: Meadow.Foundation.Displays.Il0373

---

| Il0373 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |

The **IL0373** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL0373 is commonly paired with 1.54", 2.13" or 2.9" dual or tri-color ePaper displays of various resolutions. 

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Il0373(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D03,
        dcPin: Device.Pins.D02,
        resetPin: Device.Pins.D01,
        busyPin: Device.Pins.D00,
        width: 400,
        height: 300);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    //any color but black will show the ePaper alternate color 
    graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Black, false);

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(2, 2, "IL0373", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 30, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/IL0373_Sample)

### Wiring Example

 To control a ILI0373 from Meadow, connect the following:

| IL0373  | Meadow Pin |
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

<img src="/docs/API_Assets/Meadow.Foundation.Displays.ePaper.Il0373/ePaper_Fritzing.png" style={{ width: "60%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
