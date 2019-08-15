---
layout: ElectronicsTutorial
title: Calculating Simple Resistance
subtitle: Practice problems for single resistor circuits.
---

## Sample Circuit

Given the following circuit:

![](../Resistance_Calc_Circuit.svg){:standalone}

Which includes:

 * **Source Voltage** - A charged battery.
 * **Resistor** - A simple resistor.
 * **Voltmeter** - An instrument for measuring voltage.
 * **Ammeter** - An instrument for measuring amperage.

Let's calculate the circuit, in a variety of configurations.

### Simple Resistance Sample Problems

#### 1) Let's say we have a 1.5V battery, and the potentiometer set to 10ohms, how many amps will we have?

```
Given:
I = V/R

Therefore:
I = 1.5V/10Ω = 0.15A = 150mA
```

##### 1a) How much total power (wattage) would there be?

```
Given:
W = V*A

Therefore:
Power = 1.5V * 0.15A = 0.225W = 225mW
```

#### 2) 12V battery, and 1KΩ resistance?

```
I = 12V / 1,000Ω = 0.012A = 12mA
```

##### 1a) Total power?

```
Power = 12V * 0.012A = .144W = 144mW
```


#### 3) Now let's say that we have a 1.5v battery, and ammeter reads 15mA, how many ohms is the potentiometer set to?

```
Given: 
R = V/I

Therefore:
R = 1.5/0.015A = 100Ω
```

#### 4) What if we need to push 100mA through a 10Ω resistor, how much voltage would the battery need to have?

```
Given:
V = I * R

Therefore:
V = 0.100A * 10Ω = 1V
```

## [Next - Resistor Power Rating](../Resistor_Power_Rating)