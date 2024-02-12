---
layout: Hardware
title: Low-Side MOSFET Circuit
---

## Using an N-Channel MOSFET as a Low-Side Switch

Let's say we wanted to control a load such as a DC motor. A very simple and efficient design would be via a low-side, N-Channel MOSFET:

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/LOW-Side.png)

In this case, the voltage between the `Gate` and `Source` is +3.3V. It enables the `Gate` to fill with positively charged holes, which attract the minority charge carriers from the surrounding P-Channel semiconductor, in this case, the negatively charged electrons to create an N-Channel conductor between `Drain` and `Source`:

![](/Hardware/Tutorials/Electronics/Part7/Support_Files/MOSFET_Gate_Double_Voltage.svg)