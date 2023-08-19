---
layout: Hardware
title: PCB Stackups
subtitle: Understanding how PCB layering affect designs.
---

The simplest PCBs are 1 or 2 sided; that is, they have copper on one or both sides of a insulating substrate, usually fiberglass. This laminate, with copper on one or both sides is called _PCB Core_:

[Todo: Image or illustration of PCB Core]

During PCB fabrication, _traces_ or electrical connections are etched into the copper. On 2 sided PCBs, metal-filled holes, or _vias_ tie traces together between the two outside copper layers.

[TODO: image of a two layer PCB with a via called out]

## PCB Stackups

The composition of these layers, including the thickness of the insulating substrate and copper is called a _stackup_.

Multilayer PCBs are created by sandwiching PCB Core and _Prepreg_ layers together. Prepreg layers are resin layers that are hardened but not fully cured. When they are pressed togehter between the PCB Core layers, they eventually cure into similar properties of the PCB Core.

[TODO: illustration of PCB Core and Prepreg together]

Because multi-layered PCBs are made by sandwiching these layers, they almost always consist of an even number of layers. 2 and 4-layer PCBs are the most common, but more sophisticated and complex designs will need more layers to be properly routed. For instance, our Meadow boards are usually 6 or 8 layers. 

### Copper Weight

The copper thickness is typically described in terms of **weight**. For instance, two common thicknesses for copper are `1oz` and `2oz`. A `1oz` copper thickness means that the weight of that copper spread evenly over a square foot is equal to `1oz`, which works out to be `1.37mils` (thousandths of an inch), or `0.0347mm` thick. Generally, the thicker the copper is, the more current it can carry at any given trace width (because there's more copper for the electricity to travel through), but the further apart the traces must be.

### Insulation Substrate Thickness

The insulation layer in PCB Core and Prepreg have 

[thickness and fiberweave - affect dielectric constant]

[we'll explore below in controlled impedance.]

## 2-Layer Boards

Luckily, for most IoT solutions, the Meadow board handles the most design-intensive and complex routing. Therefore, when creating a PCB design that integrates a Meadow board with sensors and common peripherals, a 2 layer board is usually sufficient.

### 2-Layer Stackup

[signals and power on top]

[ground plane and additional routing on bottom.]

| Layer | Use |
|-------|-----|
| Top Copper  | Signal routing and power. |
| Core  | Insulation and susbrate. |
| Bottom Copper | Ground plane and additional routing. |

[TODO: Show some PCB images of top and bottom of a 2-layer board with routing and planes.]


## Controlled Impedance

Some signal traces need to control for a particular electrical characteristic called _impedance_. This is especially true for high speed signals such as ethernet or USB.

[might need to control for a particular electrical characteristic called impedance. Datasheets will tell you if certain signals need to be controlled for this.]

[DEFINE: impedance in the context of a PCB stackup]

### Common Impedance Values

* **USB** - `90Ω` differential pair.
* **Ethernet** - [different between MCU and PHY, and PHY and "Magnetics"]
 * **MCU <-> PHY** - `50Ω` differential pair.
 * **PHY <-> Magnetics** - `100Ω` differential pair.


## Typical 4-Layer Stackup

[talk about what goes in each layer]



### Designing for a Specific Impedance

[The stackup dielectric will determine what size of trace you need to use in order to conform to the particular impedance.]

[Start with stack up from you preferred PCB supplier.]

[use a calculator. TODO: link to a general calculator. and also to JLCPCB's impedance calculator for their stackup.]

* [JLCPCB Stackups](https://cart.jlcpcb.com/impedance)
* [JLCPCB Impedance Calculator](https://cart.jlcpcb.com/impedanceCalculation)

[Usually when you do controlled impedance, the PCB fabricator will supply an impedance _Coupon_ along with the PCBs. An impedance coupon is a sample board of the same stackup that has traces that can be measured to make sure the board conforms to within the specifications.]

