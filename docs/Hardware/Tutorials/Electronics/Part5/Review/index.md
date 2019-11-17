---
layout: ElectronicsTutorial
title: Review
subtitle: Important points on basic DC circuit analysis.
---

## Important Concepts

This was a big chapter of the tutorial. Along the way, we learned about Kirchhoff's laws, which are as foundational as Ohm's law and are key to analyzing, understanding, and designing circuits. We also built our first practical circuits, learned to solder, and integrated those circuits with Netduino.

 * _Kirchhoff's current law_ states that the current flowing into a junction is the same as the current flowing out.
 * _Kirchhoff's voltage law_ states that voltage drops in proportion to the resistance at any point in a circuit, and the sum of all voltage drops is equal to the voltage source.
 * Voltage division can be calculated using the equation `Vout = Vs * (R2 / (R1 + R2))`, where `R2` represents the bottom half (closest to ground) and `R1` represents the top half of the voltage divider.
 * Voltage divider circuits are useful for using resistive sensors and level shifting from a higher voltage domain to a lower voltage domain. Potentiometers also use voltage division internally to control their output voltage.
 * Voltage dividers should never be used as a voltage regulator.
 * Level shifting is the process of changing the the voltage of a signal.
 * Netduino can measure a voltage signal from `0V` to `3.3V` using the onboard Analog to Digital Converter (ADC) and reports that voltage as a digital value from `0` to `1023`.
 * Complex circuits can be understood by considering them as collection of smaller circuits and analyzing the smaller sub-circuits.
 * Datasheets are published for nearly every component and contain important information about how they work, how they should be wired up, etc.
 * Soldering is the process of melting solder to make permanently connections.
 * There are lots of different software applications to help design and analyze circuits. Some of the most common and accessible apps are Fritzing, iCircuit, Eagle CAD and KiCad.


## Part 6 - Coming Soon!