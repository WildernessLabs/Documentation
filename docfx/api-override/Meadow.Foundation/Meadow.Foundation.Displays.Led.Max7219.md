---
uid: Meadow.Foundation.Displays.Led.Max7219
remarks: *content
---

| MAX7219 |             |
|---------|-------------|
| Status  | Working     |
| Source code        | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Led.Max7219)            |
| NuGet package      | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Led.Max7219.svg?label=NuGet)
| | |

The **MAX7219** is an LED display driver capable of driving 64 outputs. As well, the MAX7219 contains an 2-wire data bus allowing multiple MAX7219 chip to be connected together and controlled by a single I2C interface.

Although the MAX7219 can be used as a general purpose IO expander, it almost exclusively used to drive either 2-dimensional LED arrays (commonly 8x8) or an array of multi-segment displays (commonly 8 7-segment displays). The MAX7219 contains specific logic to display pre-configured characters when driving 7 segment displays, specifically: 0-9, E, H, L, P and -.

As it's most commonly used to as a display controller, you'll find it in the Meadow.Foundation.Displays namespace.