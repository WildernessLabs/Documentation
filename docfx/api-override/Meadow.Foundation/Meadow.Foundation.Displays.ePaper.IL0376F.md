---
uid: Meadow.Foundation.Displays.ePaper.Il0376F
remarks: *content
---

| IL0376F | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper.IL0376F) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper.IL0376F/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.IL0376F.svg?label=Meadow.Foundation.Displays.ePaper.IL0376F" /></a> |

The **IL0376F** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and only supports full screen updates.

The IL0376F is most commonly paired with a a tri-color 1.54" 200x200 pixel display.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize ...");
 
    var display = new Il0376F(device: Device,
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        busyPin: Device.Pins.D03,
        width: 200,
        height: 200);

    var graphics = new GraphicsLibrary(display);

    //any color but black will show the ePaper alternate color 
    graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Red, false);

    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(2, 2, "IL0376F", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 20, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper.IL0376F/Samples/Displays.ePaper.IL0376F_Sample)

### Wiring Example

 To control a IL0376F from Meadow, connect the following:

| IL0376F | Meadow Pin |
|---------|------------|
| BUSY    | D15        |
| RST     | D14        |
| DC      | D13        |
| CS      | D12        |
| CLK     | SCK        |
| DIN     | MOSI       |
| GND     | GND        |
| VCC     | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).

<img src="../../API_Assets/Meadow.Foundation.Displays.ePaper.IL0373/ePaper_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

