---
title: Resistive Sensors
---

There is a class of sensors, called resistive sensors, that have a variable resistance based on various input such as light or heat. [Photoresistors](https://www.wikipedia.com/en/Photoresistor), for instance, provide less resistance the more light that they receive. Similarly, [thermistors](https://en.wikipedia.org/wiki/Thermistor) change their resistance (either more resistance or less resistance, depending on the type), as their temperature changes.

Resistance can't be measured directly with a Netduino, but voltage can be measured by the Analog to Digital Converter (ADC) via the analog input pins. By placing a resistive sensor in a voltage divider with another resistor of known value, we can measure the voltage output and use Ohm's law to calculate the resistance of the resistive sensor. The following circuit schematic is the exact same as our voltage divider from before, except now, `R2` is a resistive sensor, in this case, it's a photoresistor:

![](../Resistive_Sensor_Circuit.svg)

## Photoresistor Lab

In this section, we're going to build a sample circuit that uses a photoresistor to measure the amount of light available.

### Component Sourcing

To build a photoresistor sensor circuit, we need to start with a photoresistor. Photoresistors usually look something like the following, and can usually be [sourced for less than USD$1](http://www.mouser.com/ProductDetail/Adafruit/161/?qs=%2fha2pyFadugRELlGV3EJvhiJsyG6%2fjztqGMot59Rgn9%2fJAtRYbFvdw%3d%3d):

![](../Photoresistor.jpg)

There are several major component supply websites that serve the majority of the world. The most common ones we use are:

 * [Mouser](https://www.mouser.com)
 * [Digikey](https://www.digikey.com)
 * [Arrow](https://www.arrow.com)
 * [SparkFun](https://www.sparkfun.com)
 * [Adafruit](https://www.adafruit.com)
 * [Alibaba](https://www.alibaba.com)

### Datasheets

Components usually have a [_datasheet_](http://www.mouser.com/ds/2/737/photocells-932884.pdf) that describes their characteristics and they will often give sample circuits that describe how to wire them up. When building circuits, a lot of time is actually spent looking at datasheets to understand the behavior of various components and how to connect them together. Manufacturers want people to use their components, so it's in their best interest to provide good documentation and schematics to make them easier to use.

In the case of my photoresistor, I found it in a pile of components, so I'm not sure if it conforms to the values in the above datasheet, since I'm not sure it's the same component. That's not a problem, however, with a simple resistive sensor like this, however, because I can just measure the resistance with a multimeter under varying conditions to determine its characteristics. To test it, we just need a [multimeter](https://en.wikipedia.org/wiki/Multimeter). 

### Multimeters

A multimeter is a must-have tool for hardware developers. A decent multimeter doesn't cost very much, usually less than USD$20, but when purchasing one, I recommend finding one with the following features:

* **Auto-Ranging** - An auto-ranging multimeter simplifies reading values by not requiring you to set the approximate range of reading. So if when reading resistance, it's just one setting, without having to know the amount of resistance that's being measured.
* **Small** - There's little need for a multimeter to be large, and pocket sized multimeters are much easier to carry around.
* **Digital** - Analog (those with a physical gauge) multimeters are nice because they can more effectively show change, but I find that digital multimeters (those with an LCD screen) are much easier to read and use.

[Here is a great multimeter from Amazon](https://www.amazon.com/gp/product/B072XH5SJ7/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072XH5SJ7&linkCode=as2&tag=ilderneabs-20&linkId=a5c314e3ce625c8bee20f98f7e4827f3) that costs about USD$15.

### Measuring Resitance

To measure the resistance of a photoresistor, set the multimeter to its resistance setting, which is usually denoted by the ohm (`Ω`) symbol, and put the multimeter leads on each of the photoresistor leads. It might be helpful to put the photoresistor in a breadboard to keep it still:

![](../Photoresistor_Measuring.jpg)

If using a breadboard, make sure each leg of the photoresistor is on opposite sides of the center well, so the leads aren't connected (each 5-wide hole strip is connected together to make prototyping without soldering possible).

I measured the resistance of my photoresistor in varying light conditions and came up with the following range:

```
~30kΩ in dark
~1kΩ in sunlight
```

The datasheet for the Adafruit photoresistor gave a range of `200kΩ - 10kΩ`, so I'm glad I measured mine.

### Calculating the Fixed Resistor Value

Netduino has an onboard Analog to Digital Converter (ADC) that reads voltage values from `0V` - `3.3V` in 1,024 steps, which means it will give a value from `0` to `1023` that represents the voltage. For the best resolution therefore, we want the total resistance when it's very bright to be near the ADC max of `3.3V`. And when it's low, it should be near `0V`. This ensures that we are using the biggest range possible.

The easiest way to do this is to choose a resistor that splits the difference between the high and low resistance values of the resistive sensor:

```
(High Value - Low Value) / 2 = Fixed Resistor Value
```

In the case of my photoresistor, that would be `~15.5kΩ`, since `(30kΩ - 1kΩ) / 2 = 15.5kΩ`. In the case of the Adafruit photoresistor, a `195kΩ` resistor would be more appropriate, given `(400kΩ - 10kΩ) / 2 = 195kΩ`.

`15.5kΩ` isn't a common resistor value, but `22kΩ` is, so using the voltage divider equation (`Vout = (Vin * R2) / (R1 + R2)`), we can calculate the expected spread of values:

| Light Level | R1 Value | Sensor Resistance (R2) | Total Resistance | Vin   | Vout  |
|-------------|----------|------------------------|------------------|-------|-------|
| Very Bright | 22kΩ     | 1kΩ                    | 23kΩ             | 5V    | 0.21V |
| Moderate    | 22kΩ     | 5kΩ                    | 27kΩ             | 5V    | 0.93V |
| Dark        | 22kΩ     | 30kΩ                   | 52kΩ             | 5V    | 2.89V |

Therefore, our circuit would look something like this:

![](../Photoresistor_Circuit.svg)

`0.21V - 2.89V` is a pretty wide spread, which will give good resolution for reading the values.

# Practical Circuit

To build this circuit on a breadboard, wire it similar to the following:

![](../Photoresistor_Circuit_bb.svg)

The following code illustrates creating a new `AnalogInput` on pin 3, and reading the voltage to get the value of the light hitting the photoresistor:


```csharp
using System;
using System.Threading;
using Microsoft.SPOT;
using SecretLabs.NETMF.Hardware;
using SecretLabs.NETMF.Hardware.Netduino;

namespace Photoresistor_Reading
{
    public class Program
    {
        public static void Main()
        {
            var photoresistor = new AnalogInput(Pins.GPIO_PIN_A3);

            while (true)
            {
                Debug.Print("Photoresistor reading: " + photoresistor.Read().ToString());
                Thread.Sleep(250);
            }
        }
    }
}
```
In a later part this tutorial, we'll examine reading analog signals and digital communication in a more depth.


## Breadboards

Breadboards simplify prototyping by creating connections without soldering. In the illustration above, the breadboard is sideways, but each row of 5 pins (they're numbered in the illustration, and most good breadboards also have numbering) are connected, and the well or division down the middle of the board divides the two sides, so components can be placed across it, like the photoresistor in the illustration. Additionally, many breadboards, such as the one pictured above, have power busses along the edges that are connected the whole way down. So for instance, one side of the photoresistor is connected to the wire in row 14 that then connects to the ground rail. And the other side of the photoresistor is connected to analog 3 in, and our second resistor.

## [Next - Level Shifting with a Voltage Divider](../Level_Shifting)

<br/>