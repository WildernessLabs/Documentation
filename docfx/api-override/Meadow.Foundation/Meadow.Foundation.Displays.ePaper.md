---
uid: Meadow.Foundation.Displays.ePaper
remarks: *content
---

| ePaper        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" style="width: auto; height: -webkit-fill-available;" /></a> |

The Meadow.Foundation.Displays.ePaper package contains a collection of two and three color ePaper display drivers controlled via SPI.

| Display | Meadow Pin |
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

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)