---
layout: ElectronicsTutorial
title: Alternating Current (AC)
subtitle: Alternating electron flow (polarity) current.
---

## Overview

[Alternating current (AC)](https://en.wikipedia.org/wiki/Alternating_current) is a type of current in which the direction of flow of electrons (polarity), alternates over a period of time. 

Household wall outlets deliver AC and so most appliances are designed to use alternating current. However, nearly all electronic logic circuits use DC, so internally, many appliances convert AC to DC through _rectification_, which we'll learn about later. Laptops and some other devices actually convert AC to DC using an external power adapter. These AC to DC power adapters can be made very small, depending on the amount of current needed. For example, small phone chargers that plug into the wall and have USB plugs usually convert 110V or 220V AC into 5V DC.

When building connected things, AC is usually used to power motors, heaters, and other things, while a DC circuit acts as the brain, or logic controller, which determines when the AC power is switched on for various loads. For example, a connected coffee maker might have a microcontroller (such as a Netduino) that controls when the power to the boiler is turned on to heat water and make coffee. The AC portion of an appliance like that is usually on a separate circuit and controlled through _relays_, which are electro-mechanical switches that typically use a small current to control a larger one. 

### AC Circuits

Designing AC circuits is a little more complicated than DC, but for most work involving connected things, we can keep it pretty simple, and we'll explore it in more depth later.

### AC Power Source Symbol

The symbol for an AC power source looks similar to the DC power source, but instead of `+` and `-` polarity indicators, it has a wave in it, symbolizing the cycle of voltage polarity:

![AC Power Source Symbol; A circle with a wave inside it.](/Common_Files/AC_Power.svg){:standalone}

## [Next - AC Power Generation](../AC_Generation)
