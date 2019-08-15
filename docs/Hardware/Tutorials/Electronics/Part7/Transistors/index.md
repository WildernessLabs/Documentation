---
layout: ElectronicsTutorial
title: Transistors
subtitle: Bipolar Junction Transistors (BJT); amplifiers, switches, and the fundamental building blocks of modern electronics.
---

## Bipolar Junction Transistors

Transistors are P-N Junctions with an additional P-Type or N-Type semiconductor sandwiched on the opposite end to make a two pole, P-N-P junction. Their long-form name is _bipolar junction transistors_, but are often referred to as "BJTs" or just transistors. [The origin of the term "transistor" is somewhat ambiguous](https://en.wikipedia.org/wiki/History_of_the_transistor#Origin_of_the_term).

Putting two diodes end to end like this seems a little non-intuitive, as there's no way the electricity can flow through without a reverse breakdown:

![](../Sketches/PNP_No_Base.png){:standalone}

However, things become a little clearer when we add a lead to the center, where current can be sent:

![](../Sketches/PNP_w_Base.png){:standalone}

In this configuration, 

### PNP and NPN



### Forward Voltage

[Still have to overcome the 


### Operation

* **Current Amplifier** - Also known as _active region_: `I`<sub>`C`</sub> `= I`<sub>`B`</sub> `* β`
* **Switched On** - Also known as _saturation_, transistor is fully "on:" `I`<sub>`C`</sub> `= I(saturation`
* **Switched Off** - Also known as _cut off_, transistor is fully "off:" `I`<sub>`C`</sub> `= 0`


### Base, Collector, Emitter

![](../Sketches/BJT_diagrams.png){:standalone}


 * **`V`<sub>`c`</sub>** - Voltage at the Collector
 * **`i`<sub>`B`</sub>** - Current at Base
 * **`V`<sub>`BE`</sub>** - Voltage from Base to Emitter

 
[Note: `VCC` comes from Common Voltage at all Collectors in an IC.]

### Beta (β)

Relationship between Base current and current flowing from Collector to Emitter.

Also known as `HFE`.

`I`<sub>`C`</sub> `= I`<sub>`B`</sub> `* β`


### NPN and PNP

Mnemonics:

* NPN = "Not pointing in."
* PNP = "Points in proudly."

### Power Ratings

## [Next - Transistor Lab](../Transistor_Lab)