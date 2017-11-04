---
title: Level Shifting with a Voltage Divider Circuit
---

One of the most common reasons to use a voltage divider circuit is to _level shift_. Sometimes, two circuits operate at different voltage levels (sometimes called _voltage domains_), yet they need to communicate. A voltage in one circuit might need to be shifted down to communicate with another that runs on a lower voltage, or vice-versa. When shifting downwards, from a higher voltage to a lower voltage, a voltage divider can be used to "divide" a higher voltage signal into a lower voltage signal to resolve this incompatibility. To level shift upwards, a different circuit is needed, which we'll examine later.

One of the most common places to run into a voltage incompatibility like this is when dealing with sensors. The microcontroller at the heart of a Netduino uses 3.3V (lower voltage is actually better for a myriad of reasons, including speed and power efficiency), but many sensors operate at 5V (or even other voltages).

Consider the following circuit:

![](../Voltage_Divider_Circuit.svg)

Though this might look different, it's actually the equivalent of the voltage divider circuit we were examining before:

![](../Voltage_Divider_Network_2.svg)

In the case of the first schematic, `Vin` means "voltage in" and is the equivalent of the positive side of the voltage source. `Vout` means "voltage out", and represents the divided voltage. The ground symbol represents the negative pole of the voltage source. 

## Calculating 

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