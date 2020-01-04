---
uid: Meadow.Foundation.Sensors.Atmospheric.Mpl115a2
remarks: *content
---

| MPL115A2      |             |
|---------------|-------------|
| Status        | Untested    |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.MPL115A2) |
| NuGet package | Not published |

The **MPL115A2** is a low cost device for reading barometric pressure.

* I2C digital interface (address: `0x60`)
* Resolution: 1.5 hPa
* Range: 100-1150 hPa up to 10Km

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Mpl115A2/Samples/) 

## Purchasing

The MPL115A2 sensor is available on a breakout board from Adafruit

* [Adafruit MPL115A2 Breakout Board](https://www.adafruit.com/product/992)

The application below connects the MPL115A2 to two interrupt handlers.  These interrupt handlers (events) will display the `Temperature` and `Pressure` properties when the handlers are triggered.  The sensor is checked every 500 milliseconds.

### Wiring Example

Connecting the MPL115A2 to Meadow requires four connections:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Barometric.MPL115A2/MPL115A2.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

In this diagram, the shutdown (`SDWN`) and reset (`RST`) pins have been left floating.  Both of these pins are active low and can be tied to V<sub>cc</sub> in normal operation.

Note that the Adafruit breakout board has `10K` pull-up resistors on the `SDA` and `SCK` lines.