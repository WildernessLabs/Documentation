---
layout: Hardware
title: Transistors
---

## Intro

There is probably no singular component in electronics that is more important, or more prevalent in electronics than the transistor.

## MOSFETs vs. BJTs

While Wikipedia lists [52 different types of transistors](https://en.wikipedia.org/wiki/Category:Transistor_types?sa=X&ved=0ahUKEwiMvbG4l8zhAhWBsJ4KHdwtBvUQ1i8IJzAh), the two most common types of transistors used in modern digital circuits, _MOSFETs_, and _BJTs_.

* **MOSFET** = Metal-Oxide Semiconductor Field-Effect Transistor
* **BJT** = Bipolar Junction Transistor

#### MOSFETs are _voltage_ devices.

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/Transistor_Water_Valves.png)

MOSFETs operate on voltage, meaning that they act like a pressure switch, as voltage is applied, it controls the valve.

BJTs on the other hand, operate on _current_, meaning that while voltage is applied to the gate to control curret flow, it actually uses the current through the gate!

This means that MOSFETs are much more power efficent.

#### MOSFETS handle large current loads better.

Due to the way they work, they're also far better at handling larger current loads while wasting less energy as heat. As such; when working with larger current loads, you'll almost always want to use a MOSFET.

## Operation

One of the interesting behaviors of transistors is that they can act both as an electronic switch, and as a signal amplifier.   

### As a Logical Switch

Most often, we use transistors to digitally switch (logical `ON`/`OFF`) higher current or voltage loads with a smaller controlling current or voltage. For instance, if we wanted to control a `6V` DC motor using a `3.3V` digital output on a Meadow board, we could use a transistor circuit that acts a sort of digital "switch" to allow `6V` from an external source to flow through the motor:

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/Transistor_as_Switch.svg)

### As an Amplifier

If you apply an intermediary amount of voltage, you can control how much current is let through. This pattern of usage is called _signal amplification_ because you're typically using a smaller signal (the controlling voltage to the gate) to control a large signal (the current between source and drain). So for instance, not only can you switch `ON` a DC motor, but you could potentially set it to `60%` power.

In this regard, BJTs are actually better for traditional analog circuit amplifiers because their control signal to switching behavior is linear, whereas MOSFETs have a logarithmic behavior, making it more difficult to have fine-grain control over the amplification.

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/Transitors_as_Amplifiers.png)

## Low-Side vs. High-Side

When using transistors, they are place on either the `HIGH` side or the `LOW` side of the load they're controlling. If the switch is on side that is closer to the higher voltage, it's said to be on the `HIGH` side, and if it's closer to the lower voltage (typically `GND`), then it's on the `LOW` side:

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/HIGH-SIDE_LOW-SIDE.png)



* [Low-Side MOSFET Circuit](High-Side_MOSFET_Circuit)
* [High-Side MOSFET Circuit](Low-Side_MOSFET_Circuit)
