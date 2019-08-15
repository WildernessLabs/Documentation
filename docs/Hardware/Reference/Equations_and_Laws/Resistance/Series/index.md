---
layout: Hardware
title: Series Resistance
subtitle: Calculating total resistance when resistors are connected end-to-end.
---

## Quick Reference

### Series Resistance Calculation

```
Total R = ∑(R1...Rn)
```

## More Info

Resistors can be placed in series (end to end), in a circuit like the following:

![](/Hardware/Tutorials/Electronics/Part4/Resistors_in_Series.svg){:standalone}

In this case, the total resistance is the _sum_ of each resistor. So for instance, given the following resistors:

 * **R1** - `100Ω`
 * **R2** - `5Ω`
 * **R3** - `1kΩ`

Then the total resistance would be:

```
Total Resistance = 1,000Ω + 100Ω + 5Ω = 1,105Ω
```

## Calculation

Therefore, the equation to calculate total series resistance is as follows:

```
Total R = ∑(R1...Rn)
```

## Common Current, Different Voltage

Resistors in a series share a common current, that is the amount of amps flowing through each one is the same, since there's only one path.

So for instance, given the previously calculated resistance of `1,105Ω`, if there is a `5V` supply of electrical force, Ohm's law can be used to calculate the current at any given point as:

```
I = 5V / 1,105Ω = 0.004A = 4mA
```

So no matter where in the circuit that current is measured, it would be `4mA`:

![](/Hardware/Tutorials/Electronics/Part4/Common_Current_w_Values.svg){:standalone}

### Power Calculation

The `P = I^2 * R` form of the power law can be used to calculate the power at any resistor (`n`) in a series:

```
Pn = I^2 * Rn
```

## Further Reading

For a more in-depth discussion about resistors and resistance, check out [Part 4 of the Electronics Tutorial](/Hardware/Tutorials/Electronics/Part4/Resistance/).
