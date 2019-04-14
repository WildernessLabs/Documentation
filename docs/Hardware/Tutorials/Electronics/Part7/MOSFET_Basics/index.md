---
layout: ElectronicsTutorial
title: MOSFET Basics
subtitle: Using Metal-Oxide Semiconductor Field-Effect Transistors
---

## MOSFET

Two types:
* **Depletion** - Current flows by default. Applying a negative voltage causes the current flow to stop.
* **Enhancement** - Comes in N-channel and P-channel types. N-channel MOSFETs are the ones you'll use most often.

### Parts

* **Gate** - Like the base on a BJT. Controlling voltage lead.
* **Drain** - 
* **Source** - 

### Operation

When voltage is at gate (`V`<sub>`G`</sub>), then current flows from Drain to Source.

Work like a variable resistor, in which the amount of resistance between drain and source is controlled by the gate voltage. The great thing about MOSFETs, is that unlike BJTs, which require current at the base, a MOSFET just needs Voltage, and actually uses almost no current!

### Nomenclature

* **Threshold Voltage** - `V`<sub>`GS`</sub> Threshold. The amount of voltage necessary at the gate to allow current to flow between source and drain. 
* **`R`<sub>`DS`</sub>`ON`** - Resistance between the drain and the source.

Logic-level MOSFETs allow you to control them with "logical-level" voltages, or <`5V`. F1P30N06L is a common one.

### Heat Dissipation

MOSFETs are variable resistors. So in high-current situations, you may need a heat-sink to dissipate the heat away from the MOSFET to protect it from overheating.

`P` = `R` x `I`<sup>`2`</sup>

`R`<sub>`DS`</sub> * `I`<sup>`2`</sup>
