---
uid: Meadow.Foundation.Sensors.Motion.Adxl362
remarks: *content
---

| ADXL362       |             |
|---------------|-------------|
| Status        | Not Tested  |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl362) |
| NuGet package | Not published |

**ADXL362** is an ultra-low power, 3-axis MEMS accelerometer that consumes less than 2 μA at a 100 Hz output data rate and 270 nA when in motion triggered wake-up mode. 

The ADXL362 is controlled via I2C.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl362/Samples/) 

## Purchasing

The ADXL362 is available on a small breakout board:

* [Sparkfun ADXL362 Breakout Board](https://www.sparkfun.com/products/11446)

### Usage

The ADXL362 can operating in interrupt and polling mode.  Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl362/Adxl362_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />