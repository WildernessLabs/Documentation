---
layout: ElectronicsTutorial
title: AC Characteristics
subtitle: Describing the shape of alternating current.
---

## Characteristics

AC electricity is described in terms of _period_, _frequency_, and _amplitude_.

![Plotting of an alternating current wave starting at zero volts, rising to a labeled height of amplitude, dropping to a negative height, and returning to zero volts, labeled as period (one cycle).](../Support_Files/Alternating_Current.svg)

* **Period** - Period is the amount of time that it takes the waveform to make one complete cycle.
* **Frequency** - Measured in _hertz_ (`hz`), frequency is the number of times the waveform repeats itself in one second. This value is usually `60hz` in the United States and `50hz` in most of the rest of the world.
* **Amplitude** - This is the magnitude of the waveform and is usually measured in volts or amps.

## Other Waveforms

Alternating current is not always a perfect sine wave. In fact, alternating currents are often generated digitally by using triangle and square waves:

![Plotting of other waveforms: on the left is triangle waveform where the rise and fall to amplitude is linear over time, and on the right is square waveform where rise and fall is almost vertical with a plateau and valley being almost horizontal.](../Support_Files/Triangle_Square_AC_Waveforms.svg)

Sometimes, even more complex waveforms are generated, usually by adding other waveforms on top of an existing carrier wave, in what's known as [_modulation_](https://en.wikipedia.org/wiki/Modulation):

![Plotting of a complex AC waveform showing a rise and wave fluctuation at both positive and negative amplitude voltage levels.](../Support_Files/Complex_AC_Waveform.svg)

In fact, this is how radio transmissions work! A message signal is added to a carrier signal, for instance `107.7Mhz`, then a radio receiver "tunes" into that particular frequency of carrier signal, and then subtracts it from the transmission, leaving only the message signal.

## [Next - Review](../Review)