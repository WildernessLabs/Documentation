---
layout: ElectronicsTutorial
title: Resistor Tolerance and Preferred Values
subtitle: Resistor manufacturing precision and common resistor values.
---

## Resistor Manufacturing Variance 

Resistors are mass produced components that have slight variances from one to another. These variances effect how much resistance they actually have, which can vary up to a certain amount from their stated resistance. For this reason, resistors have a _tolerance_ rating which represents the percent error that the actual resistance can deviate from the stated resistance.

For example, a `570Ω` resistor with a 10% tolerance can have an actual resistance ± `57Ω`, since `570 * .10 = 57`. Most common resistors have a tolerance of 5% or 10%, but some resistors can have a tolerance precision as low as 0.1%, or as high as 20%. Resistors with a tolerance lower than 2% are called precision resistors and are usually more expensive than resistors with higher tolerances.

The tolerance needed depends on the circuit being designed. We'll explore which kinds of circuits need which tolerances later, when we start looking at various circuit designs.

## Preferred Values

Resistors common in values from 1Ω to many mega (million) Ω values. Because of the wide range of values that resistors could possibly come in, and the fact that due to tolerances, most stated resistor values would realistically have overlapping actual values, they come in what is known as [_preferred values_](https://en.wikipedia.org/wiki/Preferred_number#E-series). 

For example, for resistors with a tolerance of 20%, which are known as _E6_ series resistors, come in magnitudes of the following preferred set of 6 values:

```
1.0, 1.5, 2.2, 3.3, 4.7, 6.8
```

Those values are then available in magnitudes of 1 to 1,000,000. This means that for E6 resistors, there are resistors of the `1.5` preferred value with stated values of:

```
1.5 x 1 = 1.5Ω
1.5 x 10 = 15Ω
1.5 x 100 = 150Ω
1.5 x 1,000 = 1.5kΩ
1.5 x 10,000 = 15.0kΩ
1.5 x 100,000 = 150kΩ
1.6 x 1,000,000 = 1.5MΩ
```

These preferred values are designed so that each resistor series have actual values (accounting for tolerances) that will slightly overlap with each other, so the range of possible resistances are covered with the fewest possible components.

Resistor series that have a higher tolerance need more preferred values to cover the potential resistances:

| Series | Tolerance | Preferred Values |
|--------|-----------|------------------|
| E6     | 20%       | 1.0, 1.5, 2.2, 3.3, 4.7, 6.8 |
| E12    | 10%       | 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2 |
| E24    | 5%        | 1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.2, 8.2, 9.1 |

<!--| E96    | 1%        | 1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76 |-->

It continues on from there as well. The E96 series has a tolerance of 1%, so it has 96 preferred values, and there's even an E192 series that has a huge set of 192 possible values per magnitude. Given that there are 7 possible magnitudes (ranging from 1 to 1,000,000), that means that the E192 series has 1,344 (`192 * 7`) different resistor values!


## [Next - Resistor Lab](../Resistor_Lab)
