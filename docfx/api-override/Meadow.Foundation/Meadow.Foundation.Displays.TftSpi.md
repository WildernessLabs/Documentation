---
uid: Meadow.Foundation.Displays.Tft
remarks: *content
---

| TftSpi        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" style="width: auto; height: -webkit-fill-available;" /></a> |

The Meadow.Foundation TftSpi package contains a selection of drivers for common color displays that use the SPI bus. This includes common TFT and color OLED displays.

These displays commonly include additional pins for Reset, Data control and Chip select. If your display doesn't include any of these pins, you can typically pass null for that pin.

Some displays require alternate SPI modes. If your display isn't working, try creating a `SpiClockConfiguration`, set the SPI mode, and pass it to the `SpiBus` during instantiation. See the `ST7789` sample for an example.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples)