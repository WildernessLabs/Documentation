---
title: Light Emitting Diodes (LEDs)
---

An [LED](https://www.wikiwand.com/en/Light-emitting_diode) is a diode (a component that attempts to let current flow only one way through it) that emits light when voltage is applied to it. On a circuit diagram, it looks like a Diode with two arrows (to indicate emitting photons) pointing away from it:

![LED Circuit Symbol](LED.svg)

Because it is a diode, it only works when a voltage is applied one way. For this reason, LEDs usually have one lead longer (the [Cathode](https://www.wikiwand.com/en/Cathode)) than the other (the [Anode](https://www.wikiwand.com/en/Cathode)), to indicate which leg should be hooked to the positive (`+`) side of a circuit:

[need image and diagram]

## Limiting Current

LEDs are extremely efficient light generators because they convert currently directly into photons. As such, it typically doesn't take very much current to power them. Too much current, and they burn out.

Because of this, the current that drives an LED is typically limited by one of two methods:

 * [A current limiting resistor](Driving_w_Resistor) - A resistor can be used to reduce the current. This is probably the most common way to drive an LED.
 * [Driving it with a Pulse Width Modulation (PWM) signal](Driving_w_PWM) - By using a PWM, the LED receives pulses of current that limit the overall current through the LED over time.

## Uses and More Information

[[Can also be used as a light sensor!](http://makezine.com/projects/make-36-boards/how-to-use-leds-to-detect-light/)]

[come in many colors, packages, and powers]

[RGB LEDs are super cool and can be used to produce any color of light in the visible spectrum]


# More Reading

[LED on Wikipedia](https://www.wikiwand.com/en/Light-emitting_diode)
