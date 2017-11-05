---
title: Voltage Dividers Uses and Practical Considerations
---

Voltage dividers are useful circuits that have a variety of uses, but for the type of practical circuitry that we're concerned with, they serve two primary functions; level shifting, and reading resistive sensors.

Additionally, [potentiometers]

### Level Shifting

As the name implies, one of the primary uses they have is to adjust, through division, the level of a signal to a lower level. For instance, a 5V analog sensor may output 0V to 5V, depending on the input level of what it's sensing. For example a 5V temperature sensor may output a voltage of 5V at the highest temp it can sense, and 0V at the lowest temperature. However, Netduino has analog inputs that can read voltage from 0V to 3.3V. So in order to convert (or _level shift_) the signal from a 5V sensor to a 3.3V analog input, it needs to be divided.

### Reading Resistive Sensors

Another, perhaps non-obvious, usage is for reading resistive sensors. Resistive sensors are specialized resistors that have a variable resistance depending on whatever input they're sensing. For instance, a photoresistor may have `30kΩ` of resistance in the dark, but only `1kΩ` of resistance in bright sunlight. There's no way to measure resistance directly with a Netduino, but if the resistive sensor is put in place of one of the resistors in a voltage divider circuit, the `Vout` voltage can be read, and the sensor's resistance can be calculated based on the known resistance of the other resistor in series:

![](../Resistive_Sensor_Circuit.svg)

### Potentiometers

[explain]

## Practical Considerations

Whether voltage dividers are used to level shift or read resistive sensors, there are some practical considerations that must be understood before they can be used effectively.

### Load and the Third Leg

When a load is attached to Vout, the values of the voltage divider circuit changes. This is because a load has resistance, and that means that `R2` + `Load` become a parallel resistance circuit:

![](../Voltage_Divider_Third_Leg.svg)

This means that when calculating the divider resistance, the resistance of the load must also be considered.

For instance, if we were to use the voltage divider discussed earlier (in which `R1 = 8Ω` and `R2 = 12Ω`), and the load had a fixed resistance of `3Ω`, we can calculate the total resistance of the bottom half of the divider by adding together the conductance of `R2` and `RLoad` (recall that parallel resistance is calculated by adding together the conductance, or _G_, in siemens (S), which is the reciprocal of resistance): 

```
Given: 
G = 1 / R
G of R2 = (1 / 12Ω) = 0.083 S
G of RLoad = (1 / 3Ω) = 0.33 S

Therefore:
Total G = .42 S
Total Resistance of Load and R2 =  1 / 0.42 = 2.4Ω
```

So instead of getting `3V` to the load, if we calculate `Vout`, we'd actually get something much smaller:

```
Given:
Vout = Vs * (R2 / (R1 + R2))

And:
R2 now = R2 + RLoad

Therefore:
Vout = 5V * (2.4Ω / 10.4Ω)) = 0.23V
```

In this case, the load would only see `0.23V`! And because the total resistance has changed, the amount of power would have also changed.

<!-- unnecessarily complicates things? -->
<!--
### Variable Load Resistance

The consideration of load resistance gets much more complex when the resistance of that load can change over time. 
-->

### Power Efficiency

[balance between minimum amount of power needed by the sub circuit and the 

### Netduino Analog to Digital Converter (ADC) Load

In both the level shifting and the resistive sensor, the values are read by Netduino via the Analog to Digital Converter (ADC) on the MCU. 

[explain what an analog to digital converter is]

[give the known impedance for calculations]

Netduino reads 

[sample and hold capacitor fills the capacitor with the same voltage as the input signal]
[one ADC cycles through all the analog input sample and holds and converts them to a digital value representing the voltage]
[sampling too fast means that the capacitor doesn't have enough time to reach the charge of the input, and so the reads will be inaccurate]

## Calculating Voltage Division with a Third Leg

Step 1: Figure out the necessary division ratio, e.g. 5/3.3 for 5V to 3.3V
Step 2: Calculate total resistance based on how much power is needed
Step 3: Solve individual resistors by multiplying ratio by total R
Step 4: Subtract the ADC impedance from R2 in the solution




## [Next - Resistive Sensors](../Resistive_Sensors)

<br/>