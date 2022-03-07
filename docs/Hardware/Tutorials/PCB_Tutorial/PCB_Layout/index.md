---
layout: Hardware
title: PCB Layout
subtitle: Designing the physical Printed Circuit Board layout.
---

<p><iframe width="640" height="360" src="https://www.youtube.com/embed/apVZykbD8no" frameborder="3" allowfullscreen></iframe></p>


## General Process

When laying out a PCB, the general process is to:

 * **Place all components** - Starting with the most important, biggest, and most complex groups, lay out the components in logical groups, approximately where you want them.
 * **Size Board** - Sketch a rough board outline (if not already specified), add mounting holes, etc.
 * **Route Important Signals** - Route the most important signals first. Signals requiring controlled impedance, special routing, differential pairs, etc.
 * **Route the Rest** - Route the rest of the signals, not including power.
 * **Lay Power and Ground Planes** - "Pour" copper to fill in the rest of the PCB with power and ground planes.
 * **Add Vias for Power and Ground** - Finish routing power and ground by placing vias to connect parts to ground, and if more than a two-layer board, place power vias as well.

<!-- TODO: add back in when that section is done -->

<!--
## Further Reading

 * [PCB Stackup](/Hardware/Design/PCB_Design_and_Assembly/PCB_Design_Tutorial/PCB_Layout/Stackup) - 

-->
 
## [Next: Part 3 - PCB Assembly](/Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/)



