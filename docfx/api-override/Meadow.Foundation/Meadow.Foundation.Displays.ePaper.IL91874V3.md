---
uid: Meadow.Foundation.Displays.ePaper.Il91874V3
remarks: *content
---

| ePaper        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=NuGet) |
| | |

The **IL91874V3** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL91874V3 is paired with a wide range of three color ePaper display sizes and resolutions.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Wiring Example

 To control a IL91874V3 from Meadow, connect the following:

| IL91874V3 | Meadow Pin |
|-----------|------------|
| BUSY      | Dxx        |
| RST       | Dxx        |
| DC        | Dxx        |
| CS        | Dxx        |
| CLK       | SCK        |
| DIN       | MOSI       |
| GND       | GND        |
| VCC       | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).