---
layout: Hardware
title: Voltage Division
subtitle: Calculating
---

## Quick Reference

![](/Hardware/Tutorials/Electronics/Part5/Voltage_Division/Voltage_Divider_Equation.svg){:standalone}

### Voltage Division Calculations

#### Solved for `Vout`

```
Vout = Vs * (R2 / R1 + R2)
```

#### Solved for Bottom-half of Divider (`R2`)

```
R2 = (R1 * Vout) / (Vs - Vout)
```

#### Current at `Vout`

```
I = V / R1
```

Where `R1` is the top-half of the divider.

### Netduino Characteristics

#### Analog-to-Digital Convert (ADC) Impedance

The Netduino ADC has an impedance value of approximately `11kΩ`.


#### 5V to 3.3 Voltage Divider Resistor Values

When level-shifting to a `5V` voltage domain to a `3.3V` voltage domain for use with the Netduino ADC, the following resistor values are recommended:

```
R1 = 1kΩ
R2 = 2.2kΩ
```

## More Info

Voltage division is a complex topic, and covered much more in-depth in [part 5 of the electronics tutorial](/Hardware/Tutorials/Electronics/Part5/DC_Circuits/).
