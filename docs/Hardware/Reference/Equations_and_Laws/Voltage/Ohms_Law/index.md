---
layout: Hardware
title: OHM's Law
subtitle: The fundamental law of electricity.
---

## Quick Reference

### Ohm's Law Calculations

```
V = I * R
R = V / I
I = V / R
```

### Power Triangle:

![Illustration of a triangle divided into three sections with volts in the top and the bottom divided again with amps on the left and ohms on the right](/Hardware/Tutorials/Electronics/Part4/Ohms_Law_Pyramid.svg){:standalone}

## More Info

The amount of current flowing through a conductor is proportional to the voltage applied across the conductor.  This is true of all conductors with the exception of super-conductors.  Mathematically this is stated as:

```
V = k * I
```

Where:

- `V` is the voltage (in volts) drop across the conductor.
- `I` (for _Intensity_), the current (in amps) flowing through the conductor.
- `k` is the constant of proportionality.

### Ohm's Law

This relation is codified in [_Ohm's Law_](https://en.wikipedia.org/wiki/Ohm%27s_law), where, `k` is replaced by resistance (in ohms) of the conductor. The equation becomes:

```
V = I * R
```

For historical reasons, amperage is often labeled `I` (for intensity), and sometimes voltage is labeled `E` (for electromotive force). So, while the most common labeling for Ohm's law is typically uses `V` for volts, `I` for amps, and `R` for resistance, sometimes the following is seen:

```
E = I * R
```

Where `E` is voltage.

### Other Forms of Ohm's Law

Using algebra, Ohm's law can also be solved for resistance (`R`) or (`I`):

#### Solved for Resistance (R)

```
R = V / I
ohms = volts / amps
```

#### Solved for Voltage (V)

```
I = V / R
amps = volts / ohms
```

### Ohm's Law Pyramid

The _Ohm's Law triangle_, also known as the _power triangle_ is helpful in remembering the various solutions of Ohm's law:

![Illustration of a triangle divided into three sections with volts in the top and the bottom divided again with amps on the left and ohms on the right](/Hardware/Tutorials/Electronics/Part4/Ohms_Law_Pyramid.svg){:standalone}

It roughly represents the mathematical relationship of Ohm's law; it's divided vertically by a line that indicates division (below `V`), and horizontally, with a line that stands for multiplication (between `I` and `R`).

To read it, choose any given unit as the solution, and then use the division/multiplication rules of the lines.

Therefore, starting with a solution for `V`, it's read as:

```
V = I * R
```

## Further Reading

For a more in-depth discussion about Ohm's law and resistance, check out [Part 4 of the Electronics Tutorial](/Hardware/Tutorials/Electronics/Part4/Resistance/).

### Other Resources

* [Ohm's Law article on Wikipedia](https://en.wikipedia.org/wiki/Ohm%27s_law)
* [Resistors](/Hardware/Reference/Equations_and_Laws/Resistance/)
* [Ohm's Law Calculator](http://www.ohmslawcalculator.com/ohms-law-calculator)
