---
title: Level Shifting with a Voltage Divider Circuit
---

In addition to resistive sensors, a common use of voltage divider circuits is to _level shift_. Sometimes, two circuits operate at different voltage levels (sometimes called _voltage domains_), yet they need to communicate. A voltage in one circuit might need to be shifted down to communicate with another that runs on a lower voltage, or vice-versa. When shifting downwards, from a higher voltage to a lower voltage, a voltage divider can be used to "divide" a higher voltage signal into a lower voltage signal to resolve this incompatibility. To level shift upwards, a different circuit is needed, which we'll examine later.

[digital vs. analog level shifting]


One of the most common places to run into a voltage incompatibility like this is when dealing with sensors. The microcontroller at the heart of a Netduino uses 3.3V (lower voltage is actually better for a myriad of reasons, including speed and power efficiency), but many older sensors operate at 5V (or even other voltages).

Consider the following circuit:

![](../Voltage_Divider_Circuit.svg)

Though this might look different, it's actually 

[not equivalent, but similar to the divider from before, this time we've separated Vin because it might be in a different voltage domain]

[need a diagram here showing a sensor being powered by the 5V rail]




the equivalent of the voltage divider circuit we were examining before:

![](../Voltage_Divider_Network_2.svg)

In the case of the first schematic, `Vin` means "voltage in" and is the equivalent of the positive side of the voltage source. `Vout` means "voltage out", and represents the divided voltage. The ground symbol represents the negative pole of the voltage source. 



## Calculating Voltage Division with a Third Leg

Following steps:

1. Calculate R1 resistance based on how much power Vout needs
2. Figure out the necessary division ratio, e.g. 5/3.3 for 5V to 3.3V
3. Solve individual resistors by multiplying ratio by total R
4. Subtract the ADC resistance from R2 in the solution

### Step 1: Calculate R1 resistance, based on power requirements.

Netduino ADC needs `0.3mA`. 

[remember, this is the third leg, so Vout, not total R]

[so we need to calculate the R1 from that]

```
Given:
R = V / I

Therefore:
R1 = 3.3V / 0.0003A = 11kΩ
```

### Step 2: Division Ratio

```
3.3V / 5V = 0.66
```

```
5V / 1.7V = 2.
```

### Step 3: 

[we know that R1 must be `11kΩ`]

[we know that bottom half, R2 + ADC, must be a ratio of that]

```
Bottom half (R2 + ADC) = 11,000 / (3.3 / 5) = 16,666

Bottom half (R2 + ADC) = 11,000 / (2.7 / 5) = 16,666
```

verify:

```
Given:
Vout = Vs * (R2 / (R1 + R2))


Therefore:
Vout = 5V * (16,666 / (11,000 + 16,666)) = 3.0V = WRONG



3.3  = 5 * (x / (11,000 + x))
x = 21,352


```

### Step 4: 

[remove the ADC resistance from the bottom half to get the leftover resistance needed for R2]




## 5V Sensor Lab




### OLD Calculating Voltage Division with Load



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







In order to calculate a voltage divider circuit for level shifting down, we have to first determine how much power that we need to output to the Netduino. According to the [random places on the internet, ugh], the microcontroller chips that power Netduino have an acceptable current input range of `4 - 20mA`. Let's pick a safe target value somewhere in the middle, like `10mA`. 


### Step 1: Calculate total resistance needed.

Now we know current and voltage, we can use Ohm's law solved for resistance to figure out how much total resistance we need in our circuit divider:

```
R = V / I
R = 5V / 10mA = 5V / 0.010A = 500Ω
```

We need a voltage divider with a total resistance of `500Ω`.

### Step 2: Calculate division ratio.

Recall from earlier, that voltage division is proportionate to the resistors, so we need to calculate the ratio of resistance needed to divide 3.3V from 5V:

```
3.3V / 5V = .66
```

That means that one of the resistors has to be `.66 * Total Resistance`, and the other needs to be `.34 * Total Resistance` (the leftovers of `1 - .66 = .34`).

### Step 3: Calculate individual resistors.

Using a bit of intuition, we can also figure that the first resistor needs to be the smaller one, since we need to remove 1.7V from 5V, so our solution looks like the following:

```
R1 = 500Ω * .34 = 170Ω
R2 = 500Ω * .66 = 330Ω
```

Therefore, our `5V` to `3.3V` voltage divider circuit would look like the following:

![](../Voltage_Divider_Circuit_Calculated.svg)
```

### Online Voltage Divider Calcuator

There is a fantastic voltage divider calculator online [here](http://www.ohmslawcalculator.com/voltage-divider-calculator)


## Practical Example

[Analog to Digital Converter (ADC) can measure voltage]

[5v sensor + schematic + code]


## [Next - Circuit Software](../Circuit_Software)

<br/>