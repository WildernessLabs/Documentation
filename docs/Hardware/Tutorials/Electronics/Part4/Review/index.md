---
title: Review
---


We're going to dive deeper into resistors and resistor networks later, but: 

 * _Resistors_ are electronic components made of materials that restrict the flow of electricity.
 * Resistance is measured in _ohms_, often denoted as `Ω`.
 * _Ohm's law_ states that the resistance provides a proportional reduction of current flow and is codified as:
   * `Voltage = Amperage * Resistance` or `V = I*R` 
   * `Amperage = Voltage / Resistance` or `I = V/R`
   * `Resistance = Voltage / Amperage` or `R = V/I`
   * Where `I` is amps, `R` is ohms, and `V` is voltage.
 * Resistors have a _power rating_ which specifies the amount of power (wattage) they can safely handle.
 * In addition to the standard definition of a watt (`volts * amps`), power can be calculated when only volts or amps and resistance is known:
   * When amperage (current) and resistance is known: `P = I^2 * R`
   * When voltage (force) and resistance is known: `P = V^2 / R`
 * Resistors wired in _series_ (end-to-end) have a total resistance which is the sum of the resistance of each resistor.
 * _Conductance_ is the reciprocal of resistance, `(1/R)`, and is measured in siemens (S), but most often abbreviated as `G`.
 * Resistors wired in _parallel_ have a total resistance which is the sum of the conductance (in siemens) of each resistor, and then converted back to resistance.
 * Axial resistors are color coded to aid in identifying them. See [this chart](/Hardware/Reference/Components/Resistors/Reading/) for reference.
 * Resistors have a tolerance which specifies a range that their actual resistance falls into.
 * Resistors come in a set of values that covers the range of possible values, adjusted for tolerance, with only small overlap.
 * _Breadboards_ reduce prototyping complexity by allowing you to create circuits without soldering.

## [Part 5 - DC Circuit Analysis](../../Part5/DC_Circuits)
