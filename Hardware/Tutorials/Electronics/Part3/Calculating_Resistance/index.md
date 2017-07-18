---
title: Calculating Resistance
---

Given the following circuit:

![](../Resistance_Calc_Circuit.svg)

Which includes:

 * **Source Voltage** -  A charged battery.
 * **Variable Resistor (Potentiometer)** - Potentiometer is a resistor that provides varying resistance as the knob is turned.
 * **Voltmeter** - An instrument for measuring voltage.
 * **Ammeter** - An instrument for measuring amperage.

Let's calculate the circuit, in a variety of configurations.

### Simple Resistance Sample Problems

#### 1) Let's say we have a 1.5V battery, and the potentiometer set to 10ohms, how many amps will we have?

```
I = V/R
I = 1.5V/10Ω = 0.15A = 150mA
```

##### 1a) How much total power (wattage) would there be?

```
W = V*A = 1.5V * 0.15A = 0.225W = 225mW
```

#### 2) 12V battery, and 1KΩ resistance?

```
I = V/R
I = 12V / 1,000Ω = 0.012A = 12mA
```

##### 1a) Total power?

```
12V * 0.012A = .144W = 144mW
```


#### 3) Now let's say that we have a 1.5v battery, and ammeter reads 15mA, how many ohms is the potentiometer set to?

```
R = V/I
R = 1.5/.015A = 100Ω
```

#### 4) What if we need to push 100mA through a 10Ω resistor, how much voltage would the battery need to have?

```
V = I*R
V = .100A * 10Ω = 1V
```

### Resistance in Series

Resistors can be placed in series (end to end), in a circuit like the following:

![](../Resistors_in_Series.svg)

In this case, the total resistance is the _sum_ of each resistor. So for instance, given the following resistors:

 * R1 - 100Ω
 * R2 - 5Ω
 * R3 - 1KΩ

Then the total resistance would be:

```
Total Resistance = 1,000Ω + 100Ω + 5Ω = 1,105Ω
```

### Resistance in Parallel

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

## [Next - Review](../Review)

<br/>