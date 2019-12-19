---
uid: Meadow.Foundation.Displays.ePaper.Il0373
remarks: *content
---

| ePaper        |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=NuGet) |
| | |

The **IL0373** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and supports partial screen updates.

The IL0373 is commonly paired with 1.54", 2.13" or 2.9" dual or tri-color ePaper displays of various resolutions. 

### Wiring Example

 To control a ILI0373 from Meadow, connect the following:

| IL0373  | Meadow Pin |
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
