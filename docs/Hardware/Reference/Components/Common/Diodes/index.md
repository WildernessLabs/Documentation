---
layout: Hardware
title: Diodes
---

## Intro

The symbol for a diode is a triangle pointing in the direction of current (hole-flow) connected to a perpendicular line which represents the junction:

![Diode symbol with a triangle pointing in the direction of current flow butting up against a line.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Diode.svg)

There are a number of different types of diodes, but all of their circuit symbols are based on the one above.

The [Wikipedia diode entry](https://en.wikipedia.org/wiki/Diode) lists almost 20 different types of diodes, but in practice, most circuit design only uses a handful of them. As we explore more circuits, we'll also introduce additional, specialized diodes.

### Polarity

To differentiate which end of a diode is the anode and which is the cathode, they usually have a marking on the end denoting the **cathode**. The following photo shows four different diodes, each with their cathode mark on the right:

![Photo of four diodes showing a colored band on each diode indicating the cathode side.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Diodes_Cropped.jpg)

Recall that positive charge carriers (holes) flow preferentially from anode to cathode, so the diodes above are in the same orientation as the circuit symbol below:

![Illustration of a diode with the anode indicated by a plus sign and the cathode indicated by a minus sign.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Diode_Polarity.svg)

### Diode Characteristics

Depending on how they're constructed, a diode can have some interesting behaviors. For general diodes, there are a number of characteristics that are used to describe how they work:

 * **Forward Voltage (`V`<sub>`f`</sub>)** - This is the amount of voltage drop, or the amount of voltage needed to enable current flow.
 * **Maximum Forward Current (`I`<sub>`f(max)`</sub>)** - This is the maximum amount of current that the diode can safely conduct when forward-biased without breaking.
 * **Peak Inverse Voltage (PIV) or _maximum reverse voltage_ (`V`<sub>`R(max)`</sub>)** - This is the maximum amount of voltage that can be applied in reverse bias without an avalanche breakdown.
 * **Total Power Dissipation (`P`<sub>`D(max)`</sub>)** - A diode has some resistance, so some power is lost in the form of heat. As such, a diode usually has a maximum amount of power that it can safely conduct without overheating. Total power dissipation is based on the voltage of the junction potential and the current: `P`<sub>`D`</sub> = `V`<sub>`f`</sub> * `I`.
 * **Reverse Recovery Time (`Trr`)** - This is how quickly a diode can go from `OFF` to `ON`. It's generally only important in fast-switching circuits.

## Common Diodes

 * **[Light-Emitting Diodes (LEDs)](Light-Emitting_Diodes)** - LEDs are a type of diode that emit photons (light) as electrons flow through the P-N junction and are used for displays, lights, etc.
 * **[Photodiodes](Photodiodes)** - Photodiodes are the opposite of LEDs, when photons enter, they get converted into electrical energy, enabling them to be used as switches based on light.
 * **[Switching Diodes](Small-Signal_Diodes)** - Also known as _small signal_ diodes, they have an extremely fast `Trr`, and are used for fast current switching.
 * **[Rectifier/Power Diodes](Power_Diodes)** - High current capacity, usually `1A` or more. Used for converting AC to DC and protection of circuits from power spikes.
 * **[Schottky Barrier Diodes](Schottky_Diodes)** - Have a very low voltage drop, so they can be used in a clever way to get to a digital `0`/`OFF`. Also very fast. Used for basic logic control.
 * **[Zener Diodes](Zener_Diodes)** - Have a precise breakdown voltage. Typically used in a reverse bias configuration to provide a voltage reference.

## Diode Uses

### Flywheel Diodes

Flywheel diodes protect circuits from collapsing magnetic fields created by de-powering electric motors and other coils by feeding excess current back into the coil. Typically, a power diode is used as a flywheel diode.

### Voltage Clamping

Voltage clamping refers to clipping a signal to a maximum/minimum value to prevent it from going outside a particular range, or shifting an entire AC signal wave above or below `0V`.

![Diagram of two graphs that illustrate how a diode restricts output voltage to a reduced range.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Voltage_Clamping.svg)

### Rectifiers

Alternating Current (AC) electrical signals can be converted into Direct Current (DC) through a clever arrangement of diodes known as a _rectifier_:

![Diagram of four diodes arranged in square pattern to form a rectifier.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Rectification_Circuit.svg)

The above circuit will transform a two-phase AC wave form into positive and ground voltages:

![Illustration of how a rectifier changes a two-phase AC wave that varies between -110v to +110v into a wave that varies between 0v and +110v.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Rectification_Transform.svg)

With some additional components, the DC wave output above can be transformed into a smooth, level DC signal.

Rectifiers are used as the first stage in converting household mains AC current into DC current for use in electronics in nearly all AC power adapters. For example, the USB wall adapter that you use to charge your phone converts AC to DC using a rectifier. In fact, nearly every electronic device around you that plugs into the wall contains a rectifier circuit.

### Reverse Current Protection

Because diodes act like one-way valves, they can prevent reverse current from happening in situations where a battery is plugged in the wrong way. Schottky diodes are ideal for this because their low `V`<sub>`f`</sub> means that it doesn't cost much battery voltage to protect the circuit.

#### Voltage Reference

Sometimes, a circuit needs a reference signal at a precise voltage. By utilizing the breakdown voltage of a reverse-biased Zener in a circuit, its `V`<sub>`f`</sub> back-pressure can provide that voltage reference. Consider the following circuit:

![Illustration of a circuit utilizing a Zener diode to provide a 5V voltage from a 9V source.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Zener_Voltage_Reference_Circuit.svg)

In the circuit above, a Zener with a `5V` breakdown voltage is being reverse biased with `9V`, which means that it's breakdown threshold has been reached, and will conduct current, with a `5V` voltage drop. Since the voltage drop acts like a dam, no matter how much voltage is applied, `5V` of back pressure will always be present:

![Illustration of the analogy of a Zener diode acting like a dam for water flow.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Voltage_Reference.svg)

As long as the current is limited, in this case with a resistor, it will stay within that precise operating band. Recall the diode behavior chart from before, specifically the breakdown behavior:

![Illustration of the diode breakdown curve.](/Hardware/Tutorials/Electronics/Part6/Support_Files/Diode_Reverse_Behavior.svg)

While this circuit looks a lot like a two resistor voltage divider, it's got a huge advantage over a divider; as long as the current is limited, no matter what amount of voltage is applied (within the diode's tolerance), the `V`<sub>`out`</sub> reference will always be the same.

And while the limited amount of current prevents this from being a useful voltage regulator, it does serve as a reliable voltage reference, which is used in ADC conversions, voltage regulator circuits, and more.


