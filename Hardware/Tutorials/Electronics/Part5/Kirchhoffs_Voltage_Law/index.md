---
title: Kirchhoff's Voltage Law
---

In part 4, we learned from Ohm's law that resistance reduces the amount of current that flows through a circuit, but it turns out, voltage is also reduced.

In fact, _Kirchhoff's voltage law_ states that the sum of all voltage drops around a circuit loop is equal to the sum of all voltage sources. In other words, if we had a circuit loop as in following illustration, with a `5V` voltage source, the total drop in voltage across all the resistors would be `5V`:

![](../Kirchhoffs_Voltage_Law.svg)

Algebraically, we can express this as:

```
Vs = V1 + V2 + V3
```
Where `V1` represents the voltage drop at `R1`, and so forth.

This means that at point `A`, the voltage would be `5V`, and at point `D`, the voltage is `OV`. It turns out, that the voltage through each resistor is proportionate to that resistors part of the overall resistance. So if that resistance represents one half of the total resistance, then the voltage drop through that resistor will also be half of the total voltage drop, or `2.5V`, since `5V * .5 = 2.5V`.

## Deriving from Ohm's Law

We can calculate Kirchhoff's voltage law from Ohm's law.

Recall that in a series resistance, each resistor experiences the same amount of current:

![](../VoltageLaw_Calculation_Circuit.svg)

In this case, the total resistance (series resistances are additive), is `20Ω`, therefore the current is:

```
I = 5V / 20Ω = 0.25A = 250mA
```

Now, recalling Ohm's law solved for voltage (`V = I * R`), we can calculate the voltage drop for that current at each resistor:

```
R1 Voltage = 0.25A * 2Ω = 0.5V
R2 Voltage = 0.25A * 6Ω = 1.5V
R3 Voltage = 0.25A * 12Ω = 3V
```

If we add each of these voltage drops up:

```
Total voltage drops = 0.5V + 1.5V + 3V = 5V = Voltage Source
```

The total amount of voltage drop is the exact same amount as the voltage source!

## Voltage Drop

Revisiting the previous circuit, if we put a voltmeter between points B, C, D, and ground, we'd get `2V`, `.5V`, and `0V`, respectively:

![](../VoltageLaw_Calculated_Circuit.svg)

This is because the voltage drop is removed from the source voltage to get the output voltage after each resistor:

```
B -> Common/Ground = 5V - 3V = 2V
C -> Common = 2V - 1.5V = .5V
D -> Common = .5V - .5V = 0V
```

### Forward Voltage

Voltage drop is often referred to as _forward voltage_ (V<sub>f</sub>). In many components, their voltage drop is actually the same amount of voltage that they require to work. For example, lights such as LEDs require a particular forward voltage to be met in order for them to have enough energy to work.

### Calculating Voltage Drop

We can calculate the voltage drop at any given resistor by using Ohm's law to calculate the drop at each resistor and adding up the previous voltage drops from each resistor that came before it. However, we can shortcut these calculations by considering all previous resistances as a single value, and express that as a ratio in the overall resistance:

```
Voltage Drop @ Rn = Vs * (sum of resistance up to Rn / Total Resistance)
```

In the case above, if we wanted to calculate the voltage drop (V<sub>f</sub>) at `C`, it would be:

```
Vf = 5V * ((12Ω + 6Ω) / (12Ω + 6Ω + 2Ω)) = 5V * (18Ω / 20Ω) = 4.5V
```

From there, we can remove the forward voltage from the voltage source (V<sub>s</sub>), to determine how much voltage exists at point `C`:

```
Vn = Vs - Vf = 5V - 4.5V = .5V
```

And of course, we can combine these two formulas to create a formula to directly calculate the voltage at any given point.  Note that the sigma (∑) symbol means mathematical sum, and `R...Rn` means `R` through `Rn`:

```
Vn = Vs - (Vs * (∑(R...Rn) / Total R))
```

In this case, it would be:

```
Vn = 5v - (5V * (18Ω / 20Ω)) = .5V
```

As we can see from this, the voltage drop at any given point in a circuit is proportionate to the resistance at that point to the overall resistance.

## [Next - Voltage Division](../Voltage_Division)

<br/>