---
uid: Meadow.Foundation.Displays.Tm1637
remarks: *content
---

| TM1637  |             |
|---------|-------------|
| Status  | Working     |
| Source code        | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Tm1637)            |
| NuGet package      | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Tm1637.svg?label=NuGet)
| | |

### Circuit Example

 To wire a TM1637 to your Meadow board, connect the following:

| TM1637 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. The driver currently only supports I2C displays. Wiring for the I2C interface is as follows:

![](../../API_Assets/Meadow.Foundation.Displays.Tm1637/TM1637_Frizzing.png)
