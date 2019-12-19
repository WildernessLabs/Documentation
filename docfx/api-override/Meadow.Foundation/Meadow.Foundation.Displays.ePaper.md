---
uid: Meadow.Foundation.Displays.ePaper
remarks: *content
---

| ePaper        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=NuGet) |
| | |

The Meadow.Foundation.Displays.ePaper package contains a collection of two and three color ePaper display drivers controlled via SPI.

| Display | Meadow Pin |
|---------|------------|
| BUSY    | Dxx        |
| RST     | Dxx        |
| DC      | Dxx        |
| CS      | Dxx        |
| CLK     | SCK        |
| DIN     | MOSI       |
| GND     | GND        |
| VCC     | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)