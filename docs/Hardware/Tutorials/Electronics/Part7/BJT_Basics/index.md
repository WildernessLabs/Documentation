---
layout: ElectronicsTutorial
title: BJT Basics
subtitle: Using Bi-polar Junction Transistors.
---

### Function


A small current applied to the base allows more current to flow from the collector to the emitter.

The ratio of the currents is called the Beta. So a beta of `10`, means that `10mA` of current at base means `100mA` can flow from collector to emitter. 


Beta is often notated as `h`<sub>`FE`</sub>. It also often varies based on the current at the collector (`I`<sub>`C`</sub>). A good guideline is to use a factor of 10 to drive the junction into saturation. 

Beta: `I`<sub>`C`</sub> = `I`<sub>`B` * `h`<sub>`FE`</sub>

Diode within the transistor has a voltage drop. ~`0.7V`. You can use more voltage, but it's best to provide it with the about that voltage, or a little more.

So we'd need to drop ~`2.6V` from `3.3V` to get to `0.7V`:

Resistor Value = `V`<sub>`R`</sub> / `I`<sub>`B`</sub> = `2.6V` / `I`<sub>`B`</sub>

To determine `I`<sub>`B`</sub> we need to determine how much current needed to drive the junction into saturation so the current flows.

### NPN vs. PNP

The simplest practical difference between a NPN and PNP type of transistor is that NPN is `OFF` (no current flow between collector and emitter) by default (when no current is applied to the base), and an NPN is `ON` by default. 

This is because a NPN transistor is effectively two diodes pointing out, and when the base region is saturated with current, it begins to conduct. Whereas [blah]

However, the underlying physics 

* NPN transistors _source_ current in to the base.
* PNP transistors _sink_ current into the base.

[need diagram of what this means]

NPN 

[many tutorials say that you can just swap the voltages and polarity and use a PNP instead of an NPN, but that's not really true. In fact, PNP is a little difficult to use in a modern circuit, in which logic levels are used to control larger voltages. Consider the following circuit:]

[incorrect PNP]

[No way to turn this off, and in fact, it'll blow the transistor]

### BJT Circuit Symbols


Transistor symbol has a diode within it. That can help to understand how to build circuits with it.


### Mnemonic

NPN = **N**ever **P**oints i**N**.
* PNP = "Points in proudly."


## nomenclature
 
 * `V`<sub>`C`</sub> = Voltage @ Collector
 * `I`<sub>`B`</sub> = Current at Base
 * `V`<sub>`BE`</sub> = Voltage from Base to Emitter

[Note: `VCC` comes from Common Voltage at all Collectors in an IC.]


 * **`V`<sub>`c`</sub>** - Voltage at the Collector
 * **`i`<sub>`B`</sub>** - Current at Base
 * **`V`<sub>`BE`</sub>** - Voltage from Base to Emitter

`VCC` = Voltage @ Common Collectors; positive supply voltage at all the collectors within a circuit.


### Terminology

===
* **Current Amplifier** - Also known as _active region_: `I`<sub>`C`</sub> `= I`<sub>`B`</sub> `* β`
* **Switched On** - Also known as _saturation_, transistor is fully "on:" `I`<sub>`C`</sub> `= I(saturation`
* **Switched Off** - Also known as _cut off_, transistor is fully "off:" `I`<sub>`C`</sub> `= 0`


# [Next - Basics of MOSFET Usage](../MOSFET_Basics)