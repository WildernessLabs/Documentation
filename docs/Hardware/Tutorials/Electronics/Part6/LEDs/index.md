---
layout: ElectronicsTutorial
title: LEDs
subtitle: Light Emitting Diodes.
---

# Overview

![](/Hardware/Reference/Components/LEDs/SomeLEDs.jpg)

![LED symbol which is a diode with two arrows coming out, indicating photon emission](/Common_Files/LED.svg)

## Physics

As electrons move into the holes in the P-Type lattice from the N-Type, they move from a higher energy orbit/state, known as the _conductance band_, to a lower energy orbit/state. When that transition happens, they lose energy. However, as the [first law of thermodynamics](https://en.wikipedia.org/wiki/First_law_of_thermodynamics) states; energy cannot be destroyed or created, only converted; so that energy is released in the form of photons (light particles):

![](../Support_Files/Photon_Emission.svg)

In silicon, the electron orbital drop is very small, so the light released is also low energy, and the photon escapes at a low frequency of vibration. Since the color of light depends on its frequency, the light emitted is in the infrared spectrum. 

[image of infrared and visible light spectrum]

Most diodes are designed in such a way that the P-N junction is hidden inside its casing, so these emissions are not visible. LEDs, however, are constructed in such a way that light can escape through them, and the materials used also have a much higher electron orbital energy drop when they combine with the holes:

[illustration of an LED cross-section]

Because they have a higher electron orbital energy transition, the photons released are at high energies, therefore at higher frequencies, usually in the visible light spectrum.

[visible light spectrum]

## LED Colors

What's interesting about this, is that in order to change the color of light emitted, differing voltage drops (`V`<sub>`f`</sub>) are needed. This voltage drop increases with the light frequency:

| Color  | V<sub>f</sub> (Voltage drop)| I<sub>fmax</sub> (max. current) |
|--------|---------------|------------------|
| Red    | 1.8V          | 15mA - 20mA      |
| Yellow | 2.0V          | 15mA             |
| Green  | 2.1V          | 20ma - 30mA      |
| Blue   | 2.7V - 3.6 V  | 20mA             |
| White  | 1.9V - 2.4V   | 30mA             |

White is actually created with three LEDs in one, using red, green, and, blue light in unison to create white. As such, the voltage drop is actually an average.

[or they use a blue LED with a coating that makes the light look white]

Powering Blue LEDs can be tricky on `3.3V` because many of them have a `3.3V`<sub>`f`</sub>, requiring them to be driven by a special circuit that increases voltages. However, it's much easier just to use blue LEDs with a smaller voltage drop. There are many that have as low as `2.65V`<sub>`f`</sub>. So if you're using `3.3V` to power your LEDs, make sure that you check the voltage drop on them when purchasing them.

## Using LEDs in Circuits

[two things to consider; 1 current limiting, and 2 the voltage drop]
[limiting current]
[turns out, most LEDs are actually too bright]

### Circuit Calculations


# [Next - LED Lab](../LED_Lab)