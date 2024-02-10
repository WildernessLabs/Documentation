---
layout: ElectronicsTutorial
title: Depletion-Mode MOSFETs
---


So far we've examined _Enhancement Mode_ MOSFETs, that is, MOSFETs that will NOT conduct electricity until the `V`<sub>`GS`</sub> reaches a particular threshold.

However, something interesting when you rotate the leads around the internal structure of a MOSFET so that the `Source` and `Drain` are connected through the main channel, and the `Gate` is put on both sides of that channel:

[illlustration of N-Chan and P-Chan depletion mode MOSFETs]

## Depletion Mode

In this design, by default, when no voltage potential is applied to the `Gate`, the MOSFET will already be conductive:

[illustration of current flowing]

However, if you apply voltage to the `Gate`, now the field created between the two internal `Gate` structures when the minority charge particles congreate between the `Gate`s will cut off the flow of current!

[illustration of current stopped because minority charge particles are in the way]

These types of MOSFETs are known as _Depletion Mode_ MOSFETs and using them is the exact same as _Enhancement Mode_ MOSFETs, except that whether or not they conduct is opposite.

Depletion Mode MOSFETs are particularly useful when the default state of a circuit should be to conduct (be `ON`), and only when voltage is applied to the Gate, does the circuit turn `OFF`.

# [Next - MOSFET Motor Control Lab.](../Motor_Control_Lab/)