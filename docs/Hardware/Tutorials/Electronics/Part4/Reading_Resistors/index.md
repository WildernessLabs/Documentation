---
layout: ElectronicsTutorial
title: Reading Axial Resistor Values
subtitle: Determining a resistor's value from its band markings.
---

## Axial Resistor Colored Bands

Axial resistors, the kind that is most often used when prototyping, have color coded bands that specify the resistance value and tolerance of the resistor. They usually come in 4 or 5 band flavors, with 5 band resistors being more precise.

To read a banded resistor, align it so that the three (or four) closely spaced bands are on the left, and the furthest spaced band is on the right. Then, use the following chart to determine the values from left to right:

![Chart of translating 4-band resistor color bands into a resistor value and tolerance (with four bands for value and 1 band for tolerance), where the left three closely spaced bands translate to unit values, the fourth closely space band translates to a multiplier value, and the furthest spaced band translates to a tolerance percent.](/Common_Files/Reading_Axial_Resistors.svg)

The first 2 (or 3 bands, on a 5-band resistor) specify the resistance value, and the 3rd (or 4th) specify the magnitude multiplier. 

### Sample Reading

For example, the resistor shown above has the following values:

* Brown = `1`
* Blue = `6`
* Black = `0`
* Orange = `1k` Magnitude Multiplier
* Gold = `5%` Tolerance

Therefore, the resistor has `160Ω * 1k = 160kΩ`, with a tolerance of `±5%`.


## [Next - Resistor Tolerance](../Resistor_Tolerance)