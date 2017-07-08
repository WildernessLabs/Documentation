---
title: SMD Packages and Sizes
---

Surface Mounted Devices 

package standards specified by the Joint Electron Device Engineering Council (JEDEC) Solid State Technology Association.


# Common Passive Rectangular Components

[Resistors and capacitors]

[numbers are width * height, so in imperial, an 0402 is 0.04" x 0.02". The metric equivalent of 1005 is 1.0mm x 0.5mm]

[Make sure when buying them that you know whether Imperial or Metric is being specified, since 0402, and 0603 are found in both Imperial and Metric codes, but specify different sizes of components]

![sizes](Component_Sizes.svg)

[1812 and 1206 (Imperial) are specialized sizes, most commonly used for components that require heat dissipation]

[smaller tends to be cheaper]

# Tantalum Capicitors (SMD)

| Package Size | Imperial Dimensions (EIA Standard) | Metric Dimensions (mm) |
|--------------|------------------------------------|-------------------------|
| Size A | EIA 3216-18 | 3.2 x 1.6 x 1.6 |
| Size B | EIA 3528-21 | 3.5 x 2.8 x 1.9 |
| Size C | EIA 6032-28 | 6.0 x 3.2 x 2.2 |
| Size D | EIA 7343-31 | 7.3 x 4.3 x 2.4 |
| Size E | EIA 7343-43 | 7.3 x 4.3 x 4.1 |

# Semiconductors

## Transitors & Diodes

Transistors and diodes are usually packaged the same way. Even though a diode only requires two leads, they are given three so they can be oriented properly.

Most popular:

 * **SOT-23 (Small Outline Transistor)** - (3 leads for diodes or transistors, but some ICs can come in this form factor too, and have more pins. 3 x 1.75 x 1.3mm.
 * **SOT-223 (Small Outline Tansistor)** - (for high powered devices, 6.7 x 3.7 x 1.8Mmm. Usually 3 leads plus a large one that acts as a heat-sink/transfer pad)

## IC Packages

### Small Outline Integrated Circuit (SOIC)

### Small Outline Package (SOP)

 * **TSOP (Thin Small Outline Package)** - (0.5mm pin spacing, thinner than SOIC)
 * **SSOP (Shrink Small Outline Package)** - (0.635mm pin spacing)
 * **TSSOP (Thin Shrink Small Outline Package)** - 
 * **QSOP (Quarter-size Small Outline Package)** - (0.635mm pin spacing)
 * **VSOP (Very Small Outline Package)** - (0.4, 0.5, or 0.65mm pin spacing and smaller than QSOP)

### Quad Flat Pack (QFP)
(generic square, flat package)
 
 * **LQFP (Low-profile Quad Flat Pack)** - (pins on all four sides, height is 1.4mm, pin spacing varies)
 * **PQFP (Plastic Quad Flat Pack)** - (pins on all four sides. Usually narrow spacing with 44 or more pins for [VLSI](https://www.wikiwand.com/en/Very-large-scale_integration) circuits such as CPUs.)
 * **CQFP (Ceramic Quat Flat Pack)** - Same as PQFP but ceramic construction.
 * **TQFP (Thin Quad Flat Pack)** - PQFP, but thinner.

### Ball Grid Array (BGA)

[array of solder balls on the bottom of the chip, instead of pins]
[usually glued afterward]
[typically 1.27mm ball spacing]

### Plastic Leaded Chip Carrier
Square carrier that chips sit in. For removable chips.
[typically 1.27mm pin spacing]
[J-Lead pins]

# Further Reading

https://www.jedec.org/

http://www.radio-electronics.com/info/data/smt/smt_packages.php

https://www.wikiwand.com/en/Surface-mount_technology

https://www.wikiwand.com/en/Through-hole_technology

http://www.topline.tv/SizeChart.html