---
layout: ElectronicsTutorial
title: Diodes
subtitle: Stuff
---

# Intro

As we examined in the last section, a diode is basically just a P-N junction:

[Note: Add Anode/Cathode labels to legs]

![](../Sketches/Diode.png)

The symbol is a triangle pointing in the direction of current (hole-flow) connected to a perpendicular line:

![Diode symbol with a triangle pointing in the direction of current flow butting up against a line.](/Common_Files/Diode.svg)

There are a number of different types of diodes, but all of their circuit symbols are based on the one above.

Depending on how they're constructed, a diode can have some interesting behaviors. The Wikipedia diode page lists almost 20 different types of diodes, but in practice, most circuit design only uses a handful of them.

## Common Types of Diodes

 * **Discrete Signal/Switching Diodes** - These are the most common type of diode. Typically, they have a `V`<sub>`f`</sub> (forward voltage) drop of `0.7v` and a low maximum current rating. The [1N4148](https://amzn.to/2OfaP2n) is a common signal diode with a `500mA` maximum forward current rating. We'll use these diodes a lot in circuits to ensure the intended logic of our circuits are sound.
 * **Power/Rectifier Diodes** - Power (aka _rectifier_) diodes are similar to signal diodes but are designed to handle higher current. The [1N4001](https://amzn.to/2DECgyK) is a common rectifier diode and is capable of handling `1A`, but the `V`<sub>`f`</sub> (forward voltage) drop is `1.1V`. These are commonly used to protect certain parts of circuits from voltage spikes, as well as for conversion of AC to DC electricity.
 * **Light Emitting Diodes (LEDs)** - LEDs are a type of diode that emit photons (light) as electrons flow through the P-N junction. These are awesome!
 * **Photodiodes** - Photodiodes are the opposite of LEDs, when photos enter, they get converted into electrical energy. They're often used as light sensors and this is also how solar panels work.
 * **Other Common Diodes** - Two other types of diodes that are also fairly common in circuit designs are Zener diodes and Schottky diodes, which we'll examine later.

By the way, a fun fact about LEDs; though not as efficient, they can also be used as photodiodes!

## Diode Uses

Diodes are incredibly common in circuit design. Here are just a few common uses:

### Lights/Indicators/Screens

LEDs are probably the second most common type of diode in use. They're used as lights, indicators, and even display screens. 

![](LED_Graph_Displays.jpg)

https://en.wikipedia.org/wiki/LED_display

OLED

### Rectifiers

[turning AC electricity into DC]

### Flywheel Diodes

[circuit protection from collapsing magnetic fields in motors and other inductors]

### Voltage Clamping

[protecting circuits from higher than intended voltages]


### Voltage Reference

voltage reference - using zener diodes

### Logic Gates


Let's actually put some diodes to use.

# [Next - LEDs](../LEDs)