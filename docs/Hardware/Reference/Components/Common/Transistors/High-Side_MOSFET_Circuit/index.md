---
layout: Hardware
title: High-Side MOSFET Circuit
---

## P-Channel MOSFET

High-Side MOSFET circuits must be switched with a P-Channel MOSFET, which can be controlled by an N-Channel MOSFET:

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/High-SIde-P-Channel_w_N-Channel_Control.png)

When the N-Channel gate is pulled `LOW`, it's off, and nothing flows through it. When the gate is pulled `HIGH`, then electrons are allowed to flow from `GND` to the P-Channel gate, and it turns on, in turn, energizing the load.