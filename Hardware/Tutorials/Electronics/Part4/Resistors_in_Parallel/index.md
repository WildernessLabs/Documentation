---
title: Resistors in Parallel
---

Resistors are often arranged in parallel:

![](../Resistors_in_Parallel.svg)

By dividing the current among more than resistor, the overall power that the resistors can handle is higher. Going back to our water analogy, imagine that a parallel resistor network is the equivalent of splitting the output pipe into several pipes, each of which has a pressure limiting valve:

[illustration of multiple pipes]

#### Conductance; the Siemens (S)

In order to calculate the resistance of a parallel resistor network, we actually need to add up the conductivity of each path, add them together, and then convert that conductance back to resistance.

Conductance, measured in _siemens_ (S), is just the reciprocal of resistance: 

`Siemens = 1 / Resistance in Ω`

The letter `G` is often used to denote conductance/siemens, so the units calculate as follows:

```
G = 1/R
R = 1/G
```

Let's consider the same resistor values we had in series, and calculate them in parallel:

 * R1 - 100Ω
 * R2 - 5Ω
 * R3 - 1KΩ

First, we need to convert each value to siemens:

```
G1 = 1/100Ω = .01 S
G2 = 1/5Ω = .2 S
G3 = 1/1KΩ = 1/1000Ω = 0.001 S
```

Once we have their conductance, we add them to get the total conductance:

```
.01 + .2 + .001 = .211 S
```

Converting from `.211` siemens to ohms:

``` 
Resistance = .211 S = 1/.211 = 4.74Ω
``` 

Total resistance with the same resistors as we had in series is now `4.7Ω` in parallel.

#### Parallel Resistor Banks

Sometimes, resistors in parallel come in banks of the same resistor values. In this case, there's a shortcut to calculate the total resistance:

```
Total Resistance = Resistance of Each Resistor / Number of Resistors
```

Therefore, (10), 5KΩ resistors in parallel would be:

```
5,000Ω / 10 = 500Ω
```

## [Next - Resistor Circuit Comparison](../Resistor_Circuit_Comparison)

<br/>