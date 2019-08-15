---
layout: ElectronicsTutorial
title: Voltage Division
subtitle: Reducing voltage by dividing into two paths using a series resistor circuit.
---

## Rewriting the Voltage Division Equation

Using a little algebra, we can rewrite our `Vout = (Vs / (R1 + R2)) * R2` equation from before:

```
Vout = (Vs / (R1 + R2)) * R2

// multiply R2:
Vout = (Vs * R2) / (R1 + R2) 

// pull out Vs (transitive property of multiplication):
Vout = Vs * (R2 / R1 + R2)
```

The final formulation; `Vout = Vs * (R2 / (R1 + R2))`, is usually how the voltage divider equation is written in textbooks and other reference material:

![](Voltage_Divider_Equation.svg){:standalone}

This is, presumably, because it more intuitively represents the solution to the problem. Namely; that the output voltage is a product of the division ratio. So for example, if we had `5V` input, and we needed to divide such that we got `3V` output, then we need to multiply `5` by `3 / 5`:

```
Given:
Vout = Vs * (R2 / R1 + R2)

Therefore:
5V * (3 / 5) = 3V
```

## Current

This reveals another interesting fact about voltage division; the voltage drop in a circuit is determined by the ratio of resistances, not the overall resistance. Therefore, any resistor combination that fulfilled that ratio, would provide `3V` out. 

Consider that if we took the exact same circuit as before (`R1 = 8Ω, R2 = 12Ω`), but this time used resistors that were 10x more resistive, we'd still get the same exact voltage drop:

```
Given: 
R1 = 8Ω * 10
R2 = 12Ω * 10

Therefore:
Vout = 5V * (80Ω / 200Ω) = 5V * .6 = 3V
```

Even though the resistances were multiplied by 10, the voltage is the same. However, if we change the overall resistance, then the amount of current that passes through the circuit changes. When we calculate the current using Ohm's law `(I = V/R)` of the two different overall resistances, we see that just as there was a 10x difference in resistance, there is also a 10x difference in power passing through the voltage divider:

```
Given:
I = V / R

Therefore:
I = 5V / 20Ω = 0.25A = 250mA      // smaller resistors, more current
I = 5V / 200Ω = 0.025A = 25mA    // larger resistors, less current
```

### Current at Vout

We can also calculate the maximum amount of current available to a load hooked to `Vout` in those two divider circuits by calculating it at the first resistor:

```
Given:
I = V / R

Therefore:
I @ R1 = 5V / 8Ω = 0.625A
I @ R1 = 5V / 80Ω = 0.0625A
``` 

A load attached to `Vout` could potentially draw up to `625mA` of current from the divider circuit that had smaller resistors, and `62.5mA` from the divider circuit with larger resistors.

### Power Draw

Consider the two voltage divider circuits described above:

| Voltage Divider ## | R1   | R2   | ∑(R1 + R2) | Total Current Draw | Current @ Vout |
|-------------------|------|------|------------|--------------------|----------------|
| 1                 | 8Ω   | 12Ω  | 20Ω        | 250mA              | 625mA          |
| 2                 | 80Ω  | 120Ω | 200Ω       | 25mA               | 62.5mA         |

If these were hooked to a `5V` battery that had `1000mAh` of charge, we can calculate the amount of time (in theory, with a perfect battery) that it would take to drain that battery for each circuit:

```
Circuit 1 (total R: 20Ω) Battery Time = 1000mAh / 250mA = 4 hours.
Circuit 2 (total R: 200Ω) Battery Time = 1000mAh / 25mA = 40 hours.
```

As we can see, the voltage divider with more resistance is much more power efficient than the voltage divider with less resistance because it lets less current through. We might then be tempted to think that we should always use high resistance in a voltage divider, but in reality, things are a little more complicated. In order to understand why, we must consider the circuit as a whole.

## [Next - Practical Considerations and Use of Voltage Dividers](../Voltage_Divider_Practicals)