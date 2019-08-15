---
layout: ElectronicsTutorial
title: Resistance & Resistors
subtitle: Limiting the flow of electrical current.
---

## Intro

In part two, we learned about the relationship between amperage (quantity) and voltage (force) of electricity. In this part, we're going to explore another pieces of that fundamental relationship; _resistance_, and how that relationship is codified in _Ohm's Law_.

Some materials let electrons flow in a moderate manner. They are neither excellent conductors, nor absolute insulators. These materials _resist_ the flow of electrical current, but don't impede it completely. Carbon, for instance, is one of these materials. And by mixing in other materials with it, such as clay, the resistance can be changed. By precisely controlling material mixes, resistors can be made that reduce electrical current by specific amounts.

Resistors are probably the most commonly used component in circuits. In fact, resistors can be found in nearly all practical circuits and have a multitude of uses.

When prototyping, the most commonly used resistors are axial-lead resistors that have a wire coming out of each end and are [color coded](/Hardware/Reference/Components/Resistors/Reading) which specifies the amount of resistance that they have:

![Picture of a few axial lead resistors](../Resistors_Cropped.jpg){:standalone}


### General Application of Resistance

In addition to resistors as discrete components, the phenomenon of resistance is an important one in circuit design because all loads have some resistance that usually needs to be accounted for. That means even in a circuit that doesn't have any discrete resistors in it, still has resistance. 

In fact, for the purposes of circuit analysis, nearly all circuits can be reduced or simplified to a source voltage, and a single resistance value that represents that rest of the circuit. This reduction is codified in both [Thévenin's Theorem](https://en.wikipedia.org/wiki/Th%C3%A9venin%27s_theorem) and [Norton's Theorem](https://en.wikipedia.org/wiki/Norton%27s_theorem), which we'll learn how to use later to analyze and design circuits.

### Ohms

Resistance is measured in **Ohms**, which are often expressed in _ohms per unit length_, such as `80 ohms per meter`, or similar, and often, the Greek letter for Omega (`Ω`) is used as the abbreviation. 

From a physical standpoint, resistance occurs because some electrons get [deflected when passing through the atomic lattice of the resistor](https://en.wikipedia.org/wiki/Free_electron_model). Some of these electrons bounce off and are converted to heat energy, radiating away from the resistor.

The heat that a resistor can safely dissipate is dependent on the amount of current that passes through it. So resistors are _rated_ for different amounts of power, measured in watts. 

### Circuit Symbol

In an electronic circuit schematic, a resistor is typically symbolized as the following:

![Circuit symbol for a resistor; a zig zag line with leads extending from both ends.](/Common_Files/Resistor.svg){:standalone}


## [Next - Ohm's Law](../Ohms_Law)
