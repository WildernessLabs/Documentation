---
layout: ElectronicsTutorial
title: Kirchhoff's Current Law
subtitle: What goes in, must come out.
---

## Intro

Kirchhoff's first law states that the amount of current flowing into a point is the same as the amount flowing out:

![Diagram showing a junction of two incoming currents, I1 and I2, and two outgoing currents, I3 going through a resistor and I4 with the equation I1 plus I2 equal to I3 plus I4.](../Support_Files/Kirchhoffs_Current_Law.svg)

This law is also known as _Kirchhoff's current law_, _Kirchhoff's point rule_, or _Kirchhoff's junction rule_. Sometimes this is also called the _conservation of charge_; current cannot be lost here because it has nowhere to go. This might seem like common sense, given what we know about the physics of electricity, but at the time he discovered this (1845), very little was actually known about the underlying physics. 

<!--

[algebraic Σ I<sub>IN</sub> = Σ I<sub>OUT</sub>]

[current in are +, currents leaving are -]

-->

### Branching Circuits

When circuits branch off at a node, they're known as _branching circuits_. Consider the following parallel branching circuit:

![Diagram of a circuit with a 12-volt source wired to a 10-ohm resistor with input point A and output point D and a parallel 1.5-ohm resistors with input B and output C.](../Support_Files/Current_Law_Parallel_Circuit.svg)

Using Kirchhoff's current law, in conjunction with Ohm's law, we can determine the total amount of current flowing through the circuit. First, let's calculate the amount of current flowing through each resistor (circuits `A -> D` and `B -> C`):

```
Given:
I = V / R

Therefore:
I (at Resistor A-D) = 12V / 10Ω = 1.2A
I (at Resistor B-C) = 12V / 1.5Ω = 8A
```

Given Kirchhoff's current law which states the sum of currents entering a junction is equal to the sum of the currents leaving a junction, we can determine that the current entering junction `A` is equal to the amount of current flowing from `A -> D` plus `B -> C`:

```
Current at Junction A = 1.2A + 8A = 9.2A
```

Additionally, the current flowing in and out of `D` is also `9.2A`.


## [Next - Kirchhoff's Voltage Law](../Kirchhoffs_Voltage_Law)
