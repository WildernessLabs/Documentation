---
layout: ElectronicsTutorial
title: Resistor Power Rating
subtitle: Understanding and calculating safe resistor current loads.
---

## Power Rating

In addition to amount of resistance, resistors have another other important characteristic that describe them: _power rating_.

When power flows through a resistor, some of the energy is converted into heat. The amount of heat a resistor can safely dissipate is characterized by its power rating, and is specified in wattage.

Most common resistors have a power rating between 1/8 watt (0.125W), and 1 watt. Resistors with higher power ratings are usually referred to as _power resistors_, and used specifically to dissipate power.

<!-- TODO: get some power resistor images in here -->

## Power Calculation when only Voltage or Amperage and Resistance is Known

On the last page, we learned how to calculate the amount of power (in wattage) passes through a resistor circuit by first using Ohm's law to calculate both voltage and amperage, and then calculate the power from that. However, we can use a couple of power calculation laws to calculate power if we only know amperage and resistance, or voltage and resistance.

### Power Calculation when Amperage and Resistance is Known

Recall that the definition of the `watt` is `amps * volts`, and `I` is historically used to stand in for amps, and `P` means (p)ower in wattage, so we can state: 

```
Power = I(in amps) * Voltage
 - or - 
P = I * V
```

And Ohm's law, solved for voltage, is:

```
V = I * R 
```

We can substitute Ohm's law (`I * R` for `V`), into the watt/power definition:

```
P = I * (I * R) = I^2 * R
```

Therefore, if we know amperage and resistance, we can calculate power in a circuit as:

```
P = I^2 * R
```

### Power Calculation when Voltage and Resistance is Known:

We can also solve for power if we only know voltage and resistance. 

Starting with Ohm's law, solved for amperage:

```
I = V / R
```

We can substitute that into the watt definition

```
P = Watts = V * I = V * (V / R) = V^2 / R
```

Therefore, if we know voltage and resistance, we can calculate power in a circuit as:

```
P = V^2 / R
```

### Power Rating Practice Problems

Recalling the simple resistant circuit:

![](../Ohms_Circuit.svg){:standalone}

And our power calculation shortcuts:

```
P = I^2 * R
P = V^2 / R
```

Let's walk through some sample problems:

#### 1) If the current is 100mA, and the resistance is 20Ω, what power rating must the resistor have?

```
P = 0.100A ^2 * 20Ω = 0.2W
```

The nearest power rating to `0.2` would usually be a 1/4 watt.

#### 2) If the source voltage is 5V, and the resistance is 100Ω, what minimum power rating must the resistor have?

```
P = 5^2 / 100Ω = 0.25W = 1/4 watt.
```

We can test this by doing the long hand, as well. First, let's use Ohm's law to solve for current/amperage:

```
Given:
I = V / R

Therefore:
I = 5V / 100Ω = 0.05A
```

And then solving for power:

```
P = 5V * 0.05A = 0.25W = 1/4 watt
```

## [Next - Series Resistance](../Series_Resistance)