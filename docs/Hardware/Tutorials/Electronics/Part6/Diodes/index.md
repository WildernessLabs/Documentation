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

## Water Analogy

* **Forward Biased** - [One way valve]
* **Reverse Biased** - [A dam]

[dam illustration]

## Common Types of Diodes

 * **Discrete Signal/Switching Diodes** - These are the most common type of diode. Typically, they have a `V`<sub>`f`</sub> (forward voltage) drop of `0.7v` and a low maximum current rating. The [1N4148](https://amzn.to/2OfaP2n) is a common signal diode with a `500mA` maximum forward current rating. We'll use these diodes a lot in circuits to ensure the intended logic of our circuits are sound.
 * **Power/Rectifier Diodes** - Power (aka _rectifier_) diodes are similar to signal diodes but are designed to handle higher current. The [1N4001](https://amzn.to/2DECgyK) is a common rectifier diode and is capable of handling `1A`, but the `V`<sub>`f`</sub> (forward voltage) drop is `1.1V`. These are commonly used to protect certain parts of circuits from voltage spikes, as well as for conversion of AC to DC electricity.
 * **Light Emitting Diodes (LEDs)** - LEDs are a type of diode that emit photons (light) as electrons flow through the P-N junction. These are awesome!
 * **Photodiodes** - Photodiodes are the opposite of LEDs, when photos enter, they get converted into electrical energy. They're often used as light sensors and this is also how solar panels work.
 * **Schottky Diodes** - [low `V`<sub>`f`</sub> and fast for switching]
 * **Zener Diodes** - [known breakdown voltage]
   
By the way, a fun fact about LEDs; though not as efficient, they can also be used as photodiodes!

## Diode Uses

Even though they're so simple, diodes are incredibly common in circuit design. Here are just a few common uses:

### Lights/Indicators/Screens

Who doesn't love LEDs? LEDs are used everywhere around us! They're used as lights, indicators, and even display screens. These bar graph displays use LEDs to indicate a battery charge or an operating value:

![](LED_Graph_Displays.jpg)

Many modern [displays](https://en.wikipedia.org/wiki/LED_display) also use LEDs to power their pixels, with each pixel containing three diodes; red, green, and blue. With each color brightness controlled individually to create nearly any color.

### Logic Gates

Diodes can be arranged in such a way called a _logic gate_ which provide logical operations in a circuit such as `AND` and `OR`. This allows you to determine if multiple inputs are all `ON` or `OFF` as well as if any of the inputs are `ON` or `OFF`. We'll explore how this can be useful in this chapter's labs.

[illustration of a simple OR gate]

### Rectifiers

Alternating Current (AC) electrical signals can be converted into Direct Current (DC) through a clever arrangement of diodes known as a _rectifier_. 

[illustration]

Rectifiers are used as the first stage in converting household mains AC current into smooth DC current for use in electronics in nearly all power AC power adapters. For example, the USB wall adapter that you plug your phone into to charge converts AC to DC using a rectifier. In fact, nearly every electronic around you that plugs into the wall use a rectifier someplace.

### Circuit Protection

Because diodes control the direction of current, they're often used to protect circuits from unwanted current, especially power spikes.

#### Flywheel Diodes

Flywheel diodes provide circuit protected from collapsing magnetic fields created by de-powering electric motors and other coils by feeding excess current back into the coil. We'll use a flywheel diode in a later chapter to safely control a relay.

#### Voltage Clamping

[Voltage clamping allows us to adapt an input signal to an acceptable range.]
[need a better explanation]

### Voltage Reference

Sometimes, a circuit needs a reference signal at a precise voltage [necessary for ADC conversions/comparators, and voltage regulators]

[close up of the breakdown curve]

[dam analogy]

[maybe move this to previous page?]
[when you reverse bias a diode, you expand the depletion region, and therefore the junction potential. so if a zener has a known breakdown at say `5V` - that means that the junction potential/`Vf` is `5V` at that point, so that means, if you were feeding it `8V`, it basically becomes a voltage divider (because of Kircchoff’s voltage law), allowing `3V` through.]

[zener diodes have a known, precise breakdown voltage]

[as long as you constrain the current, you can keep it within a precise band]

### Solar Panels

Solar panels are really just big, flat P-N junctions!

[illustration]


# [Next - LEDs](../LEDs)