---
title: Electromotive Force (EMF) and Voltage (V)
---

<!--

TODO:

for the voltage differential, show two batteries/water towers side by side with varying voltages


-->

In order for a current to exist, charge carriers must be motivated to move.

Returning to our water tower analogy, gravity acting on the difference in height of the top water to the bottom, generates a potential force that can be exploited to move water and turn the water wheel.

This pressure at the valve is known as _electromotive force (EMF)_ and is expressed as a difference between the top and bottom of the water path and represents a potential for work.

### Relative Voltage

When water (or charge carriers) is flowing through the valve, the amount of force is expressed in _volts_ (V).

It's important to note that this force is relative; even if the water towers were at different altitudes, the pressure at the valve is still dependent on the _voltage drop_ from the top of the water to the ground.

![](../Water_Tower_Relative_Voltages.svg)

Consider the following two simple circuits:

[circuit diagrams of 10v and 20v with a drop of 5v across both to 5v/15v respectively]

While both circuits have different source and load voltages, in both cases, the voltage drop is 5v, since the source minus the load is 5v, meaning that the force of electricity in both cases is actually the same.

A minor, technical point, is that while EMF exists whether curent is flowing or not, voltage only applies when a current exists. 

### Common Source Voltages

Voltage amounts vary greatly around the world, and for different uses, consider the following sources:


| Source                          | Voltage      |
|---------------------------------|--------------|
| High power transmission lines   | 230kV - 500kV |
| North American Household Mains  | ~117V (110 nominal) |
| European Household Mains        | ~220V (230 nominal) |
| AA Battery                      | 1.5V |
| USB Power                       | 5V   |
| Netduino Digital IO             | 3.3V |
| Low-power Peripherals           | 1.8V |

For most of the circuits that we'll explore here, voltages of 5V and 3.3V are the most common. However, many logic circuits control higher voltage circuits that power motors, heaters, and other loads that do heavy lifting and are typically powered by household mains of 110V and 220V.

## [Next - Source, Load, and Ground](../Source_Load_and_Ground)

<br/>