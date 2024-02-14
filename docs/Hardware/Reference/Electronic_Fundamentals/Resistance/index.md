---
layout: Hardware
title: Resistance
---

## Overview

 * Resistance is measured in _ohms_, often denoted as `Ω`.
 * _Resistors_ are electronic components made of materials that restrict the flow of electricity.
 * _Ohm's law_ states that the resistance provides a proportional reduction of current flow and is codified as:
   * `Voltage = Amperage * Resistance` or `V = I*R` 
   * `Amperage = Voltage / Resistance` or `I = V/R`
   * `Resistance = Voltage / Amperage` or `R = V/I`
   * Where `I` is amps, `R` is ohms, and `V` is voltage.
 
### Power Rating and Calculations
 
 * Resistors have a _power rating_ which specifies the amount of power (wattage) they can safely handle.
 * In addition to the standard definition of a watt (`volts * amps`), power can be calculated when only volts or amps and resistance is known:
   * When amperage (current) and resistance is known: `P = I^2 * R`
   * When voltage (force) and resistance is known: `P = V^2 / R`
 
### Calculating Resistance in Resistor Circuits

Resistors can be connected in parallel (side-by-side) or series (end-to-end) arrangements. The following reference guides explain the calculation in their respective configuration:

* [Series Resistance Calculation](Series)
* [Parallel Resistance Calculation](Parallel)

### Resistors as Components
 
 * Axial resistors are color coded to aid in identifying them. See [this chart](/Hardware/Circuits/Components/Resistors/Reading/) for reference.
 * Resistors have a tolerance which specifies a range that their actual resistance falls into.
 * Resistors come in a set of values that covers the range of possible values, adjusted for tolerance, with only small overlap.

### Pull-Up and Pull-Down Resistors

 * A _pull-up_ resistor provides a default `HIGH` value at an input in a circuit by connecting the input to a voltage source and allowing a small amount of current to flow.
 * A _pull-down_ resistor is the opposite of a pull-up, and provides a default value of `LOW` at an input in a circuit.
 * Pull-up and pull-down resistors are one of the most common tools in circuit design.
 * Pull-ups and pull-downs with smaller resistance values are known as _strong_ pull-ups and pull-downs, and act quicker than _weak_ pull-ups and pull-downs, which have a larger resistance value.