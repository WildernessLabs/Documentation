---
layout: Hardware
title: PCB Stackup
subtitle: Understanding PCB layers and how they affect designs.
---

[the composition of layers on a PCB are called a stackup.]

[alternating insulation material and copper sheets]

[almost always in even numbers of copper layers, e.g. 2, 4, 6 layers.]

[because copper is usually on two sides of a substrate, known as a core, then is sandwiched between "prepreg."]

[TODO ILLUSTRATION: stack up of core with copper and prepreg]

[simple designs are front and back - 2 layer.]

[more complicated designs are often 4 or more layers. 4, 6, and 8 layer boards are fairly common.]

[The Meadow boards are generally 8 layers.]


## Typical 2-Layer Stackup

[most common design for simple IoT solutions where a core-compute module handles all the complex routing and signals and the board connects additional sensors and such]

[signals and power on top]

[ground plane and additional routing on bottom.]

| Layer | Use |
|-------|-----|
| Top Copper  | Signal routing and power. |
| Core  | Insulation and susbrate. |
| Bottom Copper | Ground plane and additional routing. |

[TODO: Show some PCB images of top and bottom of a 2-layer board with routing and planes.]

## Typical 4-Layer Stackup

[talk about what goes in each layer]


## Controlled Impedance

[might need to control for a particular electrical characteristic called impedance. Datasheets will tell you if certain signals need to be controlled for this.]

[DEFINE: impedance in the context of a PCB]

### Designing for a Specific Impedance

[The stackup dialectric will determine what size of trace you need to use in order to conform to the particular impedance.]

[Start with stack up from you preferred PCB supplier.]

[use a calclator. TODO: link to a general calculator. and also to JLCPCB's impedance calculator for their stackup.]

* [JLCPCB Stackups](https://cart.jlcpcb.com/impedance)
* [JLCPCB Impedance Calculator](https://cart.jlcpcb.com/impedanceCalculation)

[Usually when you do controlled impedance, the PCB fabricator will supply an impedance _Coupon_ along with the PCBs. An impedance coupon is a sample board of the same stackup that has traces that can be measured to make sure the board conforms to within the specifications.]

