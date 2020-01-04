---
uid: Meadow.Foundation.Displays.ePaper.Il91874V3
remarks: *content
---

| IL91874V3     |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" style="width: auto; height: -webkit-fill-available;" /></a> |

The **IL91874V3** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL91874V3 is paired with a wide range of three color ePaper display sizes and resolutions.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Wiring Example

 To control a IL91874V3 from Meadow, connect the following:

| IL91874V3 | Meadow Pin |
|-----------|------------|
| BUSY      | D15        |
| RST       | D14        |
| DC        | D13        |
| CS        | D12        |
| CLK       | SCK        |
| DIN       | MOSI       |
| GND       | GND        |
| VCC       | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).

<img src="../../API_Assets/Meadow.Foundation.Displays.ePaper.IL91874V3/ePaper_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />