---
layout: ElectronicsTutorial
title: MOSFET High-Side Usage
---

Imagine that in your design, you needed to switch on the high-side. Perhaps you needed to provide a `HIGH` signal to a circuit to indicate it needed to do something:

![](../Support_Files/High-Side.png)

With an N-Channel MOSFET this wouldn't work because the `V`<sub>`GS`</sub> would be `0V`, due to Kirchhoff's Voltage Law.

## Kirchhoff's Voltage Law

Recall from Kirchhoff's second law, that as current flows from the positive voltage source to ground, it's voltage drops as it hits resistance:

![Diagram of a circuit with a voltage source connected to a series of resistors, starting at point A before resistor R1 with voltage drop V1, then to point B before resistor R2 with voltage drop V2, then to point C before resistor R3 with voltage drop V3, before returning to the voltage negative terminal.](../../Part5/Support_Files/Kirchhoffs_Voltage_Law.svg)

By the time it gets to the end at `GND`, then the voltage potential is effectively `0V`.

## High-Side

In the High-side circuit above, the main resistance in the circuit is the load. 