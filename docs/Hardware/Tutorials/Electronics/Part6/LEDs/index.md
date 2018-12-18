---
layout: ElectronicsTutorial
title: LEDs
subtitle: Light Emitting Diodes.
---

# Overview

LEDs come in a variety of packages and combinations. Many packages have an arrangement of multiple LEDs in one, such as bar graphs and _7 segment_ displays that are often used to show levels or digit characters, respectively:

![](/Hardware/Reference/Components/LEDs/SomeLEDs.jpg)

However, no matter what they look like, they're all basically the same to use and there are only practical circuit concerns; first, making sure the _polarity_ is correct, and second, limiting the current through them so they don't burn out.

The circuit symbol for an LED is a diode with arrows coming out of it, signifying the photon emission:

![LED symbol which is a diode with two arrows coming out, indicating photon emission](/Common_Files/LED.svg)

## Physics

As electrons move into the holes in the P-Type lattice from the N-Type, they move from a higher energy orbit/state, known as the _conductance band_, to a lower energy orbit/state. When that transition happens, they lose energy. However, as the [first law of thermodynamics](https://en.wikipedia.org/wiki/First_law_of_thermodynamics) states; energy cannot be destroyed or created, only converted; so that energy is released in the form of photons (light particles):

![](../Support_Files/Photon_Emission.svg)

In silicon, the electron orbital drop is very small, so the light released is also low energy, and the photon escapes at a low frequency of vibration. Since the color of light depends on its frequency, the light emitted is in the infrared spectrum, which is just below the frequency energies of the visible light spectrum.

Most diodes are designed in such a way that the P-N junction is hidden inside its casing, so these emissions are not visible. LEDs, however, are constructed in such a way that light can escape through them, and the materials used also have a much higher electron orbital energy drop when they combine with the holes. Typical through-hole LEDs have a flat spot on the cathode side, and a longer anode leg, signifying how to wire them up with the correct polarity:

![](../Support_Files/LED_Components.svg)

Through-hole RGB LEDs will have a "common" leg that's longer than the rest, which could be anode or cathode, depending on if they're "common anode" or "common cathode":

[picture of an RGB LED]

Because they have a higher electron orbital energy transition, the photons released are at high energies, therefore at higher frequencies, usually in the visible light spectrum:

![](../Support_Files/Linear_visible_spectrum.svg)

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

[simple LED circuit:]

![](../Support_Files/LED_Resistor_Circuit.svg)

[RGB LED wiring:]

[RGB wiring diagram]

[two things to consider; 1 current limiting, and 2 the voltage drop]
[limiting current]
[turns out, most LEDs are actually too bright, as well]

[back to ohm's law; solved for resistance]

```
R = V / I
ohms = volts / amps
```

[However, we have to account for the voltage drop, because the total voltage available to power has to take into account the push back]


[Resistance calculation accounting for voltage drop:]

```
R = (Vs - Fv) / I
```

## Example

For example, let's say that we have a red LED that has a maximum current rating of `20mA`, and a `V`<sub>`f`</sub> of `1.8V`, that we're driving from a `5V` voltage source. Solving for `R` then:

```
R = (5V - 1.8V) / 0.020A = 160Ω
```

The circuit would need at least a `160Ω` resistor to safely drive the LED.

[However, in practice, we typically use a much larger resistor value because at the maximum current, LEDs tend to be far too bright, and therefore need to be dimmed.]

## Reducing Current with a PWM Signal

[Resistors are typically used to current limit LEDs that are used statically; that is are used in an `OFF` or `ON`, state. However, if you want to be able to "pulse" an LED, that is gradually dim it on or off, you'd either need a complicated circuit, or use a Pulse-Width-Modulation (PWM) signal. 

PWM is a way of controlling voltage digitally to emulate an [analog signal. In this case, a 

--

A PWM signal generated by a Netduino is a square wave.  The two key parameters under the control of the developer are the _frequency_ and the _duty cycle_.

![PWM 50% Duty Cycle](../Support_Files/PWM_50p_DutyCycle.svg)

In the above diagram, the time where the signal is high is the same as the time where the signal is low.  The percentage of time the signal is on (high) is called the duty cycle.  So, in the above, the signal is high 50% of the one cycle and so the duty cycle is 50%.

![50% and 25% Duty Cycle](../Support_Files/PWM_50p_v_25p_DutyCycle.svg)

In the above diagram, the frequency is the same in both cases (note how the rising edges of the signal are aligned to the same point in time).  However, the lower signal is high for only 25% of the time compared to 50% for the upper trace.

So the frequency is the same but the duty cycle is different.

[for more information see]


# [Next - LED Lab](../LED_Lab)