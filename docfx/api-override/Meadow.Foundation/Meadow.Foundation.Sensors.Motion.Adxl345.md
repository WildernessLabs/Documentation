---
uid: Meadow.Foundation.Sensors.Motion.Adxl345
remarks: *content
---

| ADXL345       |             |
|---------------|-------------|
| Status        | Working     |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl345) |
| NuGet package | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Adxl345.svg?label=NuGet) |
| | |

The ADXL345 is a small, low power, triple axis acceleration sensor capable of measuring up to +/-16g with a resolution of 13-bits.

## Purchasing

The ADXL345 is available on a small breakout board:

* [Sparkfun ADXL345 Breakout Board](https://www.sparkfun.com/products/9836)


The ADXL345 can operating in interrupt and polling mode.  Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Wiring Example

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.ADXL345/ADXL345.svg)