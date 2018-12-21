---
layout: ElectronicsTutorial
title: Diodes
subtitle: Stuff
---

# Notes:

* Need to condense this page a bit and make it more intro
* Explain the basic characteristics in which diodes are described
* Add a table of diode types, general characteristics, circuit symbol, and use
* [notes: https://www.rohm.com/electronics-basics/diodes/types-of-diodes]


# Intro

As we examined in the last section, a diode is basically just a P-N junction with leads attached to either side. The anode (`A`) is the lead attached to the P-type side, the cathode (`K`) is attached to the N-type side, and the preferential, or forward bias is when electrons flow from cathode to anode (which means anode is hooked to the positive voltage source):

![](../Support_Files/Diode_Forward_Bias.svg)

The symbol is a triangle pointing in the direction of current (hole-flow) connected to a perpendicular line:

![Diode symbol with a triangle pointing in the direction of current flow butting up against a line.](/Common_Files/Diode.svg)

There are a number of different types of diodes, but all of their circuit symbols are based on the one above.

# Common Diode Types and Their Uses

The Wikipedia diode page lists almost 20 different types of diodes, but in practice, most circuit design only uses a handful of them. As we explore more circuits, we'll also introduce additional, specialized diodes. 

Depending on how they're constructed, a diode can have some interesting behaviors. For general diodes, there are a number of characteristics that are used to describe how they work.

## Diode Characteristics

| Name          | Symbolization         | Description                                  |
|---------------|-----------------------|----------------------------------------------|
| **Forward Voltage** | `V`<sub>`f`</sub> | Amount of voltage drop, or the amount of voltage needed to enable current flow. |
| **Maximum Forward Current** | `I`<sub>`f(max)`</sub> | This is the maximum amount of current that the diode can safely conduct when forward-biased without breaking. |
| **_Maximum Reverse Voltage_** | `V`<sub>`R(max)`</sub> | Also known as _Peak Inverse Voltage_ (PIV), this is the maximum amount of voltage that can be applied in reverse bias without an avalanche breakdown. |
| **Total Power Dissipation** | `P`<sub>`D(max)`</sub> | A diode has some resistance, so some power is lost in the form of heat. As such, a diode usually has a maximum amount of power that it can safely conduct without overheating. Total power dissipation is based on the voltage of the junction potential, and the current: `P`<sub>`D`</sub> = `V`<sub>`f`</sub> * `I`. |
| **Reverse Recovery Time** | `Trr` | This is how quickly a diode can go from `OFF` to `ON`. It's generally only important in fast-switching circuits. |



 * **Forward Voltage (`V`<sub>`f`</sub>)** - This is the amount of voltage drop, or the amount of voltage needed to enable current flow. 
 * **Maximum Forward Current (`I`<sub>`f(max)`</sub>)** - This is the maximum amount of current that the diode can safely conduct when forward-biased without breaking.
 * **Peak Inverse Voltage (PIV) or _maximum reverse voltage_ (`V`<sub>`R(max)`</sub>)** - This is the maximum amount of voltage that can be applied in reverse bias without an avalanche breakdown.
 * **Total Power Dissipation (`P`<sub>`D(max)`</sub>)** - A diode has some resistance, so some power is lost in the form of heat. As such, a diode usually has a maximum amount of power that it can safely conduct without overheating. Total power dissipation is based on the voltage of the junction potential, and the current: `P`<sub>`D`</sub> = `V`<sub>`f`</sub> * `I`.
 * **Reverse Recovery Time (`Trr`)** - This is how quickly a diode can go from `OFF` to `ON`. It's generally only important in fast-switching circuits.

## Common General Diodes

| Diode Type | Circuit Symbol | Key Characteristics | Usage |
|------------|----------------|---------------------|-------|
| Switching  |   | Extremely fast recovery time     | Current Switching |
| Rectifier  |   | High current capacity, usually `1A` or more. | Rectification. Flywheel diodes. |

### Switching Diodes

[image of a switching diode]s

These are the most common type of diode. Typically, they have a `V`<sub>`f`</sub> (forward voltage) drop of `0.7v` and a low maximum current rating. The [1N4148](https://amzn.to/2OfaP2n) is a common signal diode with a `500mA` maximum forward current rating. 

[power switching]

### Power/Rectifier Diodes

Power (aka _rectifier_) diodes are similar to signal diodes but are designed to handle higher current. The [1N4001](https://amzn.to/2DECgyK) is a common rectifier diode and is capable of handling `1A`, but the `V`<sub>`f`</sub> (forward voltage) drop is `1.1V`. These are commonly used to protect certain parts of circuits from voltage spikes, as well as for conversion of AC to DC electricity.

#### Circuit Protection

Because diodes control the direction of current, they're often used to protect circuits from unwanted current, especially power spikes.

##### Flywheel Diodes

Flywheel diodes provide circuit protected from collapsing magnetic fields created by de-powering electric motors and other coils by feeding excess current back into the coil. We'll use a flywheel diode in a later chapter to safely control a relay.

##### Voltage Clamping

[Voltage clamping allows us to adapt an input signal to an acceptable range.]
[need a better explanation]

#### Rectifiers

Alternating Current (AC) electrical signals can be converted into Direct Current (DC) through a clever arrangement of diodes known as a _rectifier_. 

[illustration]

Rectifiers are used as the first stage in converting household mains AC current into smooth DC current for use in electronics in nearly all power AC power adapters. For example, the USB wall adapter that you plug your phone into to charge converts AC to DC using a rectifier. In fact, nearly every electronic around you that plugs into the wall use a rectifier someplace.

### Schottky Diodes

Schottky diodes have a very low voltage drop (`V`<sub>`f`</sub>) which makes them very fast and are often used to form simple circuit logic. 

#### Logic Gates

Diodes can be arranged in such a way called a _logic gate_ which provide logical operations in a circuit such as `AND` and `OR`. This allows you to determine if multiple inputs are all `ON` or `OFF` as well as if any of the inputs are `ON` or `OFF`. We'll explore how this can be useful in this chapter's labs.

[illustration of a simple OR gate]
 
### Zener Diodes

Zener diodes have a known, precise breakdown voltage, which as we'll explore, can make them very useful for providing a _reference voltage_.
   
#### Voltage Reference

Sometimes, a circuit needs a reference signal at a precise voltage [necessary for ADC conversions/comparators, and voltage regulators]

[zener diodes have a known, precise breakdown voltage]

[as long as you constrain the current, you can keep it within a precise band]

##### Water Analogy

Revisiting the water analogy, we can think of a forward biased diode as a one-way valve:

[illustration]

##### Reverse Biasing == Water Dam

# NOTE:
[Peak Inverse Voltage = maximum amount of voltage that can be applied in reverse bias before the diode breaks]

However, something interesting (and it turns out, very useful) happens when a diode is reverse biased. 

As the reverse bias voltage increases, the depletion region expands, which also increases the junction potential/voltage drop (`V`<sub>`f`</sub>), until it reaches its breakdown voltage. Many diodes are designed so that they're breakdown voltage is very high, so under their expected loads they're always a one way valve, but others are designed to reach that threshold at precise, lower voltages.

Another way to think of `V`<sub>`f`</sub> is that it "pushes back" at that force. So if a diode has a breakdown voltage of `5V`, this means that it holds back `5V` of force, and lets anything over `5V` flow past it.

In this sense, it acts like a water damn that's `5V` high:

[illustration of water going over a damn that's 5V high].

No matter how much voltage goes over it, there's always `5V` of pressure behind it. This has some interesting ramifications. Consider the following circuit:

![](../Support_Files/Zener_Voltage_Reference_Circuit.svg)

In this circuit, a special type of diode, known as a _zener diode_ is used. Zener diodes are designed in such a way that they have a very precise breakdown voltage. In the case of the circuit above, a zener with a `5V` breakdown voltage is being reverse biased with `9V`, which means that it's breakdown threshold has been reached, and will conduct current, with a `5V` voltage drop. Above the diode is a resistor to prevent too much current flowing and breaking the diode. There is also a line coming out between the resistor and the diode.

Recall the diode behavior chart from before, specifically the breakdown behavior:

[zoomed in version of the diode breakdown curve]

##### Voltage Reference

While this circuit looks a lot like a two resistor voltage divider, it's got a huge advantage over a divider; as long as the current is limited, no matter what amount of voltage is applied (within the diode's tolerance), the `VOUT` reference will always be the same. 

And while the limited amount of current prevents this from being a useful voltage regulator, it does serve as a reliable _voltage reference_, which as we'll explore in later circuits, is very useful indeed.


## Other Common Diodes

In addition to the diodes listed above that perform various circuit functions, diodes are [other uses]

### Light Emitting Diodes (LEDs)

LEDs are a type of diode that emit photons (light) as electrons flow through the P-N junction. These are awesome! 

#### Lights/Indicators/Screens

Who doesn't love LEDs? LEDs are used everywhere around us! They're used as lights, indicators, and even display screens. These bar graph displays use LEDs to indicate a battery charge or an operating value:

![](LED_Graph_Displays.jpg)

Many modern [displays](https://en.wikipedia.org/wiki/LED_display) also use LEDs to power their pixels, with each pixel containing three diodes; red, green, and blue. With each color brightness controlled individually to create nearly any color.


### Photodiodes

[image of a photo diode]

Photodiodes are the opposite of LEDs, when photons enter, they get converted into electrical energy. They're often used as light sensors and this is also how solar panels work. By the way, a fun fact about LEDs; though not as efficient, they can also be used as photodiodes!


### Solar Panels

Solar panels are really just big, flat P-N junctions!

[illustration]


# [Next - LEDs](../LEDs)