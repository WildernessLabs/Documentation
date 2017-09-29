---
title: Voltage Division
---

Examining Ohm's law in the context of Kirchhoff's voltage law revealed an interesting fact about the voltage drop after each resistor in a series; the ratio of resistances determines how much the voltage is reduced at each interval. Consider the following schematic which illustrates a _voltage divider_ circuit:

![Voltage Divider Circuit Illustration](../Voltage_Divider_Network_2.svg)

## Voltage Divider Equation

In a voltage divider circuit like this, because there are only two resistors, and we know that the current drop is proportionate to the resistance provided, we can greatly simplify our equation from before by calculating the proportion or resistance of R2, which is `(R2 / Total Resistance)`, and then multiplying by the voltage source to get the leftover voltage:

```
Vout = Vs * (R2 / (R1 + R2))
```

### Example

Let's say that the voltage source is `5V` and the two resistors are `8Ω` and `12Ω`, respectively.

Therefore, we can calculate the voltage at `Vout` as:

```
Vout = 5V * (12Ω / 20Ω) = 5V * .6 = 3V
```

So the voltage at `V1` would be `3V`.

<!-- is this necessary? -->
We can also verify that using the more wieldy equation from before:

```
Vn = Vs - (Vs * (∑(R...Rn) / Total R))
V1 = 5V - (5V * (8Ω / 20Ω)) = 5V - 2V = 3V
```

## Current

The voltage drop in a circuit is determined by the ratio of resistances, not the overall resistance. This means, that if we took the exact same circuit as before, but this time used resistors that were 10x more resistive, we'd still get the same exact voltage drop:

```
Vout = 5V * (80Ω / 200Ω) = 5V * .6 = 3V
```

However, if we change the overall resistance, then the amount of current that passes through the circuit changes. When we calculate the current using Ohm's law `(I = V/R)` of the two different overall resistances, we see that just as there was a 10x difference in resistance, there is also a 10x difference in power:

```
I = 5V / 20Ω = .25A = 250mA
I = 5V / 200Ω = 0.025A = 25mA
```

### Power Efficiency and Practical Usage

Ok, so does it make sense to recommend that you use the largest total resistance that still allows for the necessary current the ADC needs?

In my case, I'm using an STM32F4 chip, and the data sheet says that the ADC has the following characteristics:

ADC Sampling Switch Resistance : 6KΩ
External Input Impedance : 50kΩ
Internal Sample and Hold Capacitor : 4pF

So the peak current draw would be:

```
I = V / R
I = 3.3 / 6000 = 0.0006 = .6mA
```

Therefore, 

```
R = V / I
R = 3.3V / 0.0006A = 5,500Ω = 5.5kΩ
```

But then the problem I see there is that the total resistance is less than the sampling resistance. Wouldn't that blow my voltage divider math out of the water?



## Power Efficiency and Practical Usage

I think we need to step back a bit and resolve some more fundamental questions I have.

If i have two divider circuits, let's say:

```
Voltage Divider 1: 
 R1 = 8Ω, R2 = 12Ω
 ∑ = 20Ω
 Total I = 5V / 20 = 0.25A = 250mA
 I @ R1 = 5V / 8Ω = 0.625A

Voltage Divider 2: 
 R1 = 80Ω, R2 = 120Ω; 
 ∑ = 200Ω; 
 Total I = 5V / 200 = 0.025A
 I @ R1 = 5V / 80Ω = 0.0625A
``` 

So first, if I understand correctly, then the max I can draw on Vout is 625mA in circuit 1, and 63mA in circuit 2. Since that's the max amount of current that can get through R1 at that voltage. Is that correct?

Second, what about power loss? For this question, let's forget it's a voltage divider network and just assume it's a serial resistance. Let's say I'm running this off an 5V battery (assuming it's an idea voltage source) that has 1000mAh. In circuit 1, I can expect to have 1000mAh/250mA = 4hrs. In circuit 2, I would have 40 hrs of charge (1000/25). Yeah?

Is that right? Or am I misunderstanding how resistors work, because I've read that the excess power is dissipated. but i'm not sure what that really means. 






Voltage dividers are used extensively in modern circuits, but they are inefficient; each resistor is consuming power, and the "bottom half" (the half of the resistor pair that 

Voltage dividers are inherently inefficient; the 

[use the largest resistance while still providing the necessary current, so as to be power efficient]

[don't use as a voltage regulator. it's inefficient and Vout is dependent on Vin]

## [Next - Level Shifting with a Voltage Divider](../Level_Shifting)

<br/>