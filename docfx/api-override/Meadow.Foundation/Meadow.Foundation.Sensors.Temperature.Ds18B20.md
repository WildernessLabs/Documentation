---
uid: Meadow.Foundation.Sensors.Temperature.Ds18B20
remarks: *content
---

| Ds18B20 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/InProgress-yellow" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Ds18B20/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Ds18B20/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Ds18B20.svg?label=Meadow.Foundation.Sensors.Temperature.Ds18B20" /></a> |

The **DS18B20** is a 1-Wire temperature sensor manufactured by Maxim.  The sensor can operate in 9, 10, 11 or 12 bit precision and has a range of -55&deg;C to 125 &deg;C.

Each sensor has a 64-bit unique identifier built in.  This allows multiple sensors to be connected to the same 1-Wire bus.  So for instance, a project could measure internal and external temperature using a single GPIO pin.

# Purchasing

DS18B20 sensors are available in TO-92 packaging and also in a waterproof version from the following suppliers:

* [Adafruit DS18B20 TO-92 Package with Pull-up Resistor](https://www.adafruit.com/product/374)
* [Adafruit Waterproof DS18B20](https://www.adafruit.com/product/381)
* [Sparkfun DS18B20 TO-92 Package](https://www.sparkfun.com/products/245)
* [Sparkfun Waterproof DS18B20](https://www.sparkfun.com/products/11050)

Note that when purchasing a DS18B20 you will require a 4K7 pull-up resistor if one is not already supplied with the sensor.

The driver for the DS18B20 temperature sensor can operate in interrupt or polling mode.

### Code Example

Sample not available at the moment.

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Temperature.Ds18B20/Ds18B20_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




