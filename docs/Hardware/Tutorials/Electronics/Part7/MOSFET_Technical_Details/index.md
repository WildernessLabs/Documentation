---
layout: ElectronicsTutorial
title: MOSFET Technical Details
---

Now that we understand how to use both N-Channel and P-Channel MOSFETs in both Low-Side and High-Side switching circuits from a conceptual perspetive, let's dig into the technical specifications and details of MOSFETs that will aid us in finding appropriate parts for our circuits.


[talk about the VGS, RDSON, etc. and the practicailities of how to choose MOSFETs]

## Important Specifications

### `V`<sub>`GS`</sub>

`Voltage` between `Gate` and `Source`. 

### `V`<sub>`GS(TH)`</sub>

`V`<sub>`GS`</sub> Threshold voltage

_Logic-Level_ MOSFETs typically operate at `5V` or less (CMS/TTL)

### `R`<sub>`DS(ON)`</sub>

Resistance between `Drain` and `Source` when `ON`. Typically given in a datasheet in a range, because it changes depending on the amount of voltage difference of `V`<sub>`GS`</sub>

### `R`<sub>`ΘJA`</sub>

Junction to ambient coefficient
`X°C/Watt`

## 




## Power Rating and Dissipation

### Calculating the Maximum Power it can dissipate

* `P`<sub>`D`</sub> - Maximum it can dissipate without a heatsink.
* `Max`<sub>`TJ`</sub> - Maxmimun junction temperature it can withstand (175°C for example)
* `T`<sub>`A`</sub> - Ambient temperature.
* Thermal Resistance

Equation:
`P`<sub>`D`</sub> = (`Max`<sub>`TJ`</sub> - `T`<sub>`A`</sub>) / `R`<sub>`ΘJA`</sub>

Example:
```
Pd = (175°C - 25°C) / (62.5°C/Watt)
Pd = 150/62.5
Pd = 2.5Watts
```

Then calculate the power you'll actually use:

Recall power law is `P = RI^2`

`P = R`<sub>`DS(ON)`</sub>`* I^2`

Where `I` is the current your load will draw.

For example, if your MOSFET `RDS`<sub>`(ON)`</sub> is `20mΩ` and your load draws `2A` of current:

```
Power = 20mΩ * 2A^2
P = 20mΩ * 4A
P = 40mW
```

`40mW` is way less than `2.5W`, therefore, no heat sink needed.

Also a maximum power dissipation assuming you can keep it to x°

# [Next - Depletion Mode MOSFETs.](../Depletion_MOSFETs)