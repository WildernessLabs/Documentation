---
uid: Meadow.Foundation.Displays.ePaper.Ssd1681
remarks: *content
---

| SSD1681 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper.SSD1681) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" /></a> |

The **Ssd1681** is a two-color display controller for ePaper displays. Data is sent to the controller via SPI and supports full screen updates only.

The Ssd1681 is paired with a wide range of two color ePaper display sizes and resolutions.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize ...");
 
    var display = new Ssd1681(device: Device,
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        busyPin: Device.Pins.D03,
        width: 200,
        height: 200);

    var graphics = new MicroGraphics(display);

   graphics.DrawRectangle(1, 1, 126, 32, Meadow.Foundation.Color.Black);

    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(2, 2, "SSD1681", Meadow.Foundation.Color.Black);
    graphics.DrawText(2, 20, "Meadow F7", Meadow.Foundation.Color.Black);

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/SSD1681_Sample)

### Wiring Example

 To control a Ssd1681 from Meadow, connect the following:

| Ssd1681 | Meadow Pin |
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

<img src="../../API_Assets/Meadow.Foundation.Displays.ePaper.Ssd1681/ePaper_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

