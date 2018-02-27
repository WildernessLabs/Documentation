---
layout: ElectronicsTutorial
title: P-N Junctions
subtitle: Fundamental building block of modern electronics.
---

# Combining P-Type and N-Type Semiconductors

By sandwiching a piece of P-Type and N-Type semiconductor together into what's known as a _P-N Junction_, interesting electrical properties arise from the underlying atomic drama. The behavior of P-N Junctions is well understood and the P-N Junction is the probably the single most important structure in electronics and is the heart of many common semiconductor components such as Diodes, Transistors, Integrated Circuits, Solar Cells, and more. 

When P-Type and N-Type semiconductors are joined, the free electrons from the N-Type side _diffuse_ into the P-Type side to fill the holes:

![](../Sketches/PN_Electron_Diffusion.png)

What remains are the positively and negatively charged ions along the junction boundary, since they have been stripped of the free particles that were attempting to keep them neutral. This region is called the _depletion region_ and [half a dozen other names](https://en.wikipedia.org/wiki/Depletion_region):

![](../Sketches/PN_Depletion_Zone.png)

## Junction Electric Field

The depletion region gives rise to an electric field because there's a electromagnetic force (voltage) differential between the negatively and positively charged ions:

![](../Sketches/Junction_potential.png)

This electric field is known as the _Junction Potential_ and is usually between `600mV - 700mV (0.6V - 0.7V)` in silicon, and `200mV - 300mV` in germanium.

## Anode + Cathode

Putting metal connectors on either side of the P-N Junction creates what are known as an Anode (A) and a Cathode (K). The anode is on the P-Type side, and the cathode is on the N-Type side. This effectively creates a component called a _Diode_:

![Anode and Cathode](../Sketches/Anode_cathode.png)

## Forward Biasing

Putting a positive current to the Anode and a negative current to the cathode side is a preferential _bias_, because the positive hole charge carriers and negative electrons are pushed towards the junction, thus shrinking the depletion zone. This voltage application, in the preferential direction of current flow is called _forward biasing_:

![](../Sketches/Forward_bias_under_Fv.png)

In order for charge carriers (current) to pass through the electric field, they must have greater electromotive force (EMF, in voltage) than the junction potential to overcome the electric field. Meaning that it takes greater than `0.7V` of EMF to get them through. In the process, they actually lose the same amount of EMF of the junction potential. 

[note: remove depletion region lines:]

![](../Sketches/Forward_bias_over_Fv.png)

This is known as the _forward voltage_ (`V`<sub>`f`</sub>), or _voltage drop_, because if charge carriers are pushed through this region at `1.0V`, when they come out on the other side they will only have `0.3V` (`1.0V` - `0.7V`) of EMF.

## Reverse Biasing

_Reverse biasing_ is when a voltage is applied in the opposite direction of preferential current flow. This causes the holes in the P-Type side to be attracted to the Anode, and the electrons in the N-Type side to be attracted to the Cathode, causing the depletion region to widen:

![](../Sketches/Reverse_bias.png)

When this happens, the depletion region wides, which greatly increases the junction potential.

### Leakage Current/Reverse Saturation Current

However, while the junction potential is actually much higher when reverse biased, some minuscule amount of current current will actually flow because the the polarity of the depletion region is opposite to the small amount of minority carriers that are present. So holes can flow from P-Type to N-Type, and electrons can flow from N-Type to P-Type. This current, however, is negligible, usually in the range of nano-amperes (`nA`). A nano amp is `1 / 1,000,000,000A`.

### Breakdown Voltage and Avalanche Current

While the a reverse biased P-N Junction (diode) will resist the overwhelming majority of current flow in the reverse direction, at a high enough voltage, known as the _reverse breakdown voltage_, an _avalanche breakdown_ will occur, in which electrons will flow so quickly that they knock other electrons out of their holes, which leads them to knocking out more, and so on, causing an "avalanche" of electron flow.

Some diodes are specifically designed with this behavior in mind, and we'll examine them in the next section.

## Voltage and Current Response Characteristics

The current response to forward and reverse bias currents is described in the following graph:

![](../Sketches/Diode_response_graph.png)

The right half of the graph represents forward bias current, that is, positive current applied to the anode. Until the voltage reaches the forward voltage (`V`<sub>`f`</sub>), almost zero current makes it through, but once that threshold is reached, the P-N junction readily conducts electricity.

The left half of the graph represents a reverse bias current, that is, negative current applied to the anode. Virtually no current (nano amps) is allowed to flow through, until the voltage reaches the reverse breakdown voltage, and an electron avalanche occurs, reducing the resistance of the diode to almost zero and making it an almost pure conductor.

# [Next - Diodes](../Diodes)
