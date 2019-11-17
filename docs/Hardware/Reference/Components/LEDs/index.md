---
layout: Hardware
title: LEDs
subtitle: Light Emitting Diodes
---

## Overview

An [LED](https://en.wikipedia.org/wiki/Light-emitting_diode) is a [diode](/Hardware/Circuits/Diodes/) (a component that attempts to let current flow only one way through it) that emits light when voltage is applied to it. On a circuit diagram, it looks like a Diode with two arrows (to indicate emitting photons) pointing away from it:

![LED Circuit Symbol](LED.svg){:standalone}

Because it is a diode, it only works when a voltage is applied one way. For this reason, LEDs usually have one lead longer (the [Cathode](https://en.wikipedia.org/wiki/Cathode)) than the other (the [Anode](https://en.wikipedia.org/wiki/Anode)). The cathode (longer leg) indicates that it should be hooked to the positive (`+`) side of a circuit.

## Types of LEDs

LEDs are an incredibly common component that come in a variety of packages here are just a few:

![Some LED Packages](SomeLEDs.jpg){:standalone}

The above shows, starting from the left, Red, Green, Yellow, Blue, RGB, Infrared, Bar LED (actually 10 independent LEDs in a single package) and a Seven Segment display with decimal point.

## LED Characteristics

LEDs have two fundamental properties that the electronics designer should take into consideration, namely the forward voltage (V<sub>f</sub>) and the maximum current (I<sub>fmax</sub>) it can conduct.  Typical values for V<sub>F</sub> and I<sub>fmax</sub> are:

| Color  | V<sub>f</sub> | I<sub>fmax</sub> |
|--------|---------------|------------------|
| Red    | 1.8V          | 15mA - 20mA      |
| Green  | 2.1V          | 20ma - 30mA      |
| Blue   | 3.4V - 3.6 V  | 20mA             |
| Yellow | 2.0V          | 15mA             |
| White  | 1.9V - 2.4V   | 30mA             |

These values may vary between suppliers and the data sheet for the component purchased will provide the appropriate values.

## Forward Voltage

LEDs require a minimum voltage drop across the LED in order for it to open it's _PN-gate_ and light up. This threshold is called the _forward voltage_ (V<sub>f</sub>). However once that voltage is met, there is a limited operating range of voltage that is safe for the LED.


## Maximum Current

Maximum current (I<sub>fmax</sub>) rating is the maximum current that can flow through the diode without burning out the component.  Lower currents can be applied, these will just result in a dimmer output from the LED. Exceeding the maximum current rating for an LED by very much will usually burn out an LED quite quickly.


## LED Colors

LEDs are available in a variety of colors, the most common of which are red, green, yellow, white and blue.

RGB (Red, Green and Blue) LEDs are capable of displaying a wide variety of colors.  These LEDs are actually three LEDs, one red, one green and one blue in a single package (see the LED with four legs in the above image).  The wide variety of colors they are capable of displaying comes from the intensity of each of the three LEDs.

LEDs can also emit light in the infrared spectrum.  These LEDs are used in remote controls for devices such as televisions and cameras.

## LED Power

LEDs are extremely efficient and have a wide variety of uses.  Consumer electronics and hobbyist projects use LEDs to indicate the status of a system, if the power on, if the circuit connected to a network, etc.

Higher power LEDs are used in modern-day lighting.  Such applications often require the use of a [heatsink](https://en.wikipedia.org/wiki/Heat_sink) in order to prevent the LED from destroying itself through overheating.

## Limiting Current

LEDs are extremely efficient light generators because they convert currently directly into photons. As such, it typically doesn't take very much current to power them. Too much current (exceeding I<sub>fmax</sub>), and they burn out.

Because of this, the current that drives an LED is typically limited by one of two methods:

 * [A current limiting resistor](Driving_w_Resistor) - A resistor can be used to reduce the current. This is probably the most common way to drive an LED.
 * [Driving it with a Pulse Width Modulation (PWM) signal](Driving_w_PWM) - By using a PWM, the LED receives pulses of current that limit the overall current through the LED over time.

## Construction and Physics

An LED is actually an exotic mix of materials that result in a [PN junction](https://en.wikipedia.org/wiki/P%E2%80%93n_junction).  Normally, electric current flowing through the LED causes it to emit light.  However, photons hitting the PN junction can also cause a tiny current flow and, as [Forrest Mims shows here](http://makezine.com/projects/make-36-boards/how-to-use-leds-to-detect-light/), you can detect this current and use the LED as a light sensor.

## Netduino.Foundation

Netduino.Foundation includes a number of classes that make driving LEDs easy.

### `PwmLed` Class

The [`PwmLed`](http://netduino.foundation/API/LEDs/PwmLed/) class represents an LED whose voltage (and brightness) is controlled by the duty-cycle of a PWM signal. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

### `RgbPwmLed` Class

The [`RgbPwmLed`](http://netduino.foundation/API/LEDs/RgbPwmLed/) class represents an RGB LED whose color is controlled by the duty-cycle of three PWM signals. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

### `TypicalForwardVoltage` Class

The [`TypicalForwardVoltage`](http://netduino.foundation/API/LEDs/TypicalForwardVoltage/) class defines typical forward voltages for LEDs. Useful when creating a `PwmLed` or `RgbPwmLed` to limit the maximum PWM duty cycle to an average voltage that won’t burn out the LED.

## Digital LEDs

In recent years a number of digital RGB LEDs have become available.  These products are RGB LEDs in combination with a small current controller IC.  The most prevalent of these are:

* [NeoPixel](https://www.adafruit.com/product/1655) - WS8211 LEDs
* [DotStar](https://www.adafruit.com/product/3341) - APA102 LEDs

These devices are available as single units as well as flexible strips, straight PCB and full or quarter circular PCBs.

The driver in the WS8211 LEDs requires precise timing control in order to be able to set the colour of the LED.  The APA102 is more forgiving as this uses a basic serial protocol (data and clock only).  The APA102 chips are better suited to the Netduino.

## Further Information

[LED on Wikipedia](https://en.wikipedia.org/wiki/Light-emitting_diode)
