---
title: Voltage Dividers Uses and Practical Considerations
---

Voltage dividers are useful circuits that have a variety of uses, but for the type of practical circuitry that we're concerned with, they serve two primary functions; level shifting, and reading resistive sensors.


### Reading Resistive Sensors

Another, perhaps non-obvious, usage is for reading resistive sensors. Resistive sensors are specialized resistors that have a variable resistance depending on whatever input they're sensing. For instance, a photoresistor may have `30kΩ` of resistance in the dark, but only `1kΩ` of resistance in bright sunlight. There's no way to measure resistance directly with a Netduino, but if the resistive sensor is put in place of one of the resistors in a voltage divider circuit, the `Vout` voltage can be read, and the sensor's resistance can be calculated based on the known resistance of the other resistor in series:

![](../Resistive_Sensor_Circuit.svg)

### Level Shifting

As the name implies, one of the primary uses they have is to adjust, through division, the level of a signal to a lower level. For instance, a 5V analog sensor may output 0V to 5V, depending on the input level of what it's sensing; a 5V temperature sensor may output a voltage of 5V at the highest temp it can sense, and 0V at the lowest temperature. However, Netduino has analog inputs that can read voltage from 0V to 3.3V. So in order to convert (or _level shift_) the signal from a 5V sensor to a 3.3V analog input, it needs to be divided. 

[an illustration of 5V -> 3.3V would be cool]

In practice, very few sensors are 5V anymore (lower voltage is faster and can be used on smaller circuits; most modern CPUs run at 1.2V or less, internally), but occasionally you might find an older 5V sensor that you want to use

### Potentiometers

In addition to the divider circuits used in level shifting and resistive sensors, voltage division is used internally in potentiometers, which are knobs or sliders that provide a variable voltage. Potentiometers are often used on electronic devices to provide user input, for example, the volume on a stereo is often controlled by a potentiometer.

[image]

[explain]

## Practical Considerations

Whether voltage dividers are used to level shift or read resistive sensors, there are some practical considerations that must be understood before they can be used effectively.

### Load and the Third Leg

When a load is attached to `Vout`, the values of the voltage divider circuit change. This is because a load has resistance, and that means that `R2` + `Load` become a parallel resistance circuit:

![](../Voltage_Divider_Third_Leg.svg)

Therefore, when calculating the divider resistance, the resistance of the load must also be considered.

For instance, if we were to use the voltage divider discussed earlier (in which `R1 = 8Ω` and `R2 = 12Ω`), and the load had a fixed resistance of `3Ω`, we can calculate the total resistance of the bottom half of the divider by adding together the conductance of `R2` and `RLoad` (recall that parallel resistance is calculated by adding together the conductance, or _G_, in siemens (S), which is the reciprocal of resistance): 

```
Given: 
Conductance (G) = 1 / R
G of R2 = (1 / 12Ω) = 0.083S
G of RLoad = (1 / 3Ω) = 0.33S

Therefore:
Total G = 0.083S + 0.33S = .42 S
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

As illustrated above, a `3Ω` resistance in the load made a big difference; In this case, the load would only see `0.23V`! And because the total resistance has changed, the amount of power would have also changed.


### Netduino Analog to Digital Converter (ADC) Load

In both the level shifting and the resistive sensor, the values are read by Netduino via the _Analog to Digital Converter_ (ADC) on the STM32F microcontroller, which is the main processing chip. An ADC reads voltage signals and converts them to a digital value that describes the input voltage level (`0V` to `3.3V`) in 1,024 steps of precision (values `0` through `1,023`).

Netduino has 6 analog inputs and the following code illustrates reading a voltage input level on Analog Pin 3: 

```
AnalogInput analog3 = new AnalogInput(Pins.GPIO_PIN_A3)
int value = analog3.Read();
```

A value of `0` means that it read `0V`, and a value of `1,023` means that the voltage was at or above `3.3V`. The steps in between are linear, meaning that a value of `511` (`1,023 / 2`) indicates it was reading `1.65V` (`3.3V / 2`).

The maximum voltage level that can be read is `3.3V`, but the analog input ports are `5V` tolerant, meaning they can accept up to `5V` without overloading the chip and possibly destroying it. However, to be able to read any voltage above `3.3V`, a voltage divider must be used.

#### ADC Resistance and Load

The ADC is a complex and clever circuit and getting very accurate reads from it requires special considerations which will be covered in a later part of this tutorial. However, for prototyping purposes, we can ignore those complexities and design with simple concepts in mind.

When using a voltage divider with Netduino's analog input, we have to consider that the ADC has some resistance, and requires a certain amount of current to work.

For prototyping purposes, we can assume that the ADC will provide about `11kΩ` in resistance (actually _impedance_, which we'll learn about later). Using Ohm's law, we can calculate then that it will require up to `0.3mA` of current:

```
Given:
I = V / R
V = 3.3V
R = 11kΩ

Therefore:
I = 3.3V / 11,000Ω = 0.0003 = 0.3mA
```

### Calculating Voltage Division with Load

[total of the R2 and Load is the sum of the conductance, converted back into resistance:]

```
Conductance (G) = (1 / R2) + (1 / Rload)
R = 1 / G
R = 1 / (1 / R2) + (1 / Rload)
```

```
Given voltage division:
Vout = Vs * (R2 / (R1 + R2))

and parallel resistance:
Total R2 + Load = 1 / (1 / R2) + (1 / RLoad)

Vout = Vs * ( (1 / (1 / R2) + (1 / RLoad)) / (R1 + (1 / (1 / R2) + (1 / RLoad))
```


### Variable Load Resistance

The consideration of load resistance gets much more complex when the resistance of that load can change over time. [As a sub circuit on the Vout's current load changes, it resistance must also change, since current is a function of resistance.]

[to get around this, you can 10x the power by reducing the voltage dividing resistors, but 

[If divider resistors are small, then the resistance of the load really affects the equation. also lots of power is wasted]

[but if divider resistors are large, then they aren't affected by the load as much, but very little power can make it through.]

[pick the smallest resistors that the sensor can drive]

### Never use a Divider as a Voltage Regulator

[would waste a pile of power and it wouldn't be very regular]


### Power Efficiency

[picking the smallest resistors means that lots of power is just wasted]

[balance between minimum amount of power needed by the sub circuit and the 

1,000,000


## Calculating Voltage Division with a Third Leg

[do we need to modify the voltage division equation here?]

* Step 1: Figure out the necessary division ratio, e.g. 5/3.3 for 5V to 3.3V
* Step 2: Calculate total resistance based on how much power is needed
* Step 3: Solve individual resistors by multiplying ratio by total R
* Step 4: Subtract the ADC impedance from R2 in the solution




## [Next - Resistive Sensors](../Resistive_Sensors)

<br/>