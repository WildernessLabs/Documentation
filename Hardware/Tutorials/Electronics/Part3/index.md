---
title: Part 3 - Resistance and Ohm's Law
---

In part two, we learned about the relationship between amperage (quantity) and voltage (force) of electricity. In this part, we're going to explore another pieces of that fundamental relationship, resistence, and how that relationship is codified in _Ohm's Law_.


## Resistors

Some materials let electrons flow in a moderate manner. They are neither excellent conductors, nor absolute insulators. These materials _resist_ the flow of electrical current, but don't impede it completely. Carbon, for instance, is one of these materials. And by mixing in other materials with it, such as clay, the resistance can be changed. By precisely controlling material mixes, resistors can be made that reduce electrical current by specific amounts.

We measure resistance in **Ohms**, which are often expressed in _ohms per unit length_, such as `80 ohms per meter`, or similar, and often, the Greek letter for Omega (`Ω`) is used as the abbreviation. 

From a physical standpoint, resistance occurs because some electrons get [deflected when passing through the atomic lattice of the resistor](https://en.wikipedia.org/wiki/Free_electron_model). Some of these electrons bounce off and are converted to heat energy, radiating away from the resistor.

The heat that a resistor can safely dissipate is dependent on the amount of current that passes through it. So resistors are _rated_ for different amounts of power, measured in watts. 


### Symbol

In an electronic circuit schematic, a resistor is typically symbolized as the following:

![](/Common_Files/Resistor.svg)


## Ohms Law

Going back to the water analogy, we can think of resistance as the valve at the bottom of the water tank:

![](../Resistor_Valve.svg)

Given a constant water pressure (voltage), if we put in a valve that was half the size of the pipe, we would expect that the amount of water that flows through would also be divided, proportionally, in half.

This relationship holds true for electricity as well, and is codified in [_Ohm's Law_](https://en.wikipedia.org/wiki/Ohm%27s_law); as more resistance is added to a constant voltage circuit, fewer electrons can make it through. The equation for this relationship can be expressed as:

```
Amperage = Voltage / Resistance
```

For historical reasons, Amperage is often labeled `I`, and sometimes Voltage is labeled `E`.  The most common labeling for Ohm's law is usually:

```
I = V/R
```

Consider the following circuit diagram that includes a battery and a resistor:

![](../Ohms_Circuit.svg)

If the battery is `1.5V`, and the resistance is `50ohms`, we can calculate the amount of amps that can make it through the circuit as:

```
Amps = 1.5V / 50Ω = 0.3A
```

From that, we can also calculate the wattage as `(watts = amps * volts)`:

```
Wattage = 1.5V * 0.3A = 0.045W
```

### Other Forms of Ohm's Law

Using algebra, we can solve the equation of Ohm's law for resistance, or voltage:

#### Solved for Resistance (R)

```
R = V / I
ohms = volts / 
```

#### Solved for Voltage (V)

```
V = I * R
```

### Ohm's Law Pyramid

The _Ohm's Law triangle_, also known as the _power triangle_ is helpful in remembering the various solutions of Ohm's law:

![](../Ohms_Law_Pyramid.svg)

It roughly represents the mathematical relationship of Ohm's law; it's divided vertically by a line that indicates division (below `V`), and horizontally, with a line that stands for multiplication (between `I` and `R`).

So to read it, choose any given unit as the solution, and then use the division/multiplication rules of the lines.

Therefore, starting with a solution for `V`, we have:

```
V = I * R
volts = amps * ohms
```

Solving for `I`:

```
I = V / R
amps = volts / ohms
```

And finally, solving for `R`:

```
R = V / I
ohms = volts / amps
```

## Calculating Resistance


## Reading Resistors


[rating - 1/4watt, so forth, is for the amount of heat it can dissipate]

## See Also
 
 * [Ohm's Law Calculator](http://www.ohmslawcalculator.com/ohms-law-calculator)

<!--
 
# Things to add

 * [Derating and Temperature Coefficient](https://www.digikey.com/en/maker/blogs/a8c993213afd48c3b08b65d2e372197c)

-->