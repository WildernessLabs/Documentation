---
layout: ElectronicsTutorial
title: MOSFET Practical Details
---

Now that we understand how to use both N-Channel and P-Channel MOSFETs in both Low-Side and High-Side switching circuits from a conceptual perspetive, let's dig into the technical specifications and practical details of MOSFETs that will aid us in finding appropriate parts when designing circuits.

## Gate Sensitivity

MOSFETs have notoriously sensitive gates to Electro-Static Discharges (ESD). This means that static buildup that hits the Gate can cause the MOSFET to fail. For this reason, many modern MOSFET designs have built in Transient-Voltage Suppression (TVS) diodes built in to the gate.

For example, we use the [DMG1012UW](https://octopart.com/search?q=DMN2046UW) N-Channel MOSFET in a lot of our designs, and if you look at its symbol from the datasheet, it has a built-in TVS _gate protection diode_. 

![](../Support_Files/Protected_MOSFET.png)

When sourcing MOSFETs, we generally recommend looking for ones that have gate protection diodes.

You might have also noticed that it has a diode from `Source` to `Drain`. It's called a _body diode_ and is just part of how MOSFETs work. They will conduct backwards if installed or wired incorrectly.

## Important Switching Specifications

There are a number of important parameters and ratings around the switching characteristics when choosing a MOSFET, the main ones are:

 * `Vdss`
 * `Vgs(th)`
 * `Rds(on)`
 * `Id(max)`

These ratings can be found in the MOSFET's datasheet and can also be used when searching for components on Octopart, Digikey, etc. Though, confusingly, they may not always be named exactly as above. Let's dive into each one of these, using images from the `DMG1012UW` datasheet.

### Maximum Voltage Ratings

Examining the _Maximum Ratings_ table, we can see the maximum voltages that the device can handle:

![](../Support_Files/MOSFET_Datasheet_Max_Ratings.png)

#### `V`<sub>`DSS`</sub>

The first is the `Drain` to `Source` voltage. This is the maximum voltage that the MOSFET can carry between its `Drain` and `Source`. This should be greater than the amount of voltage your load needs. For example, if you're expecting to control a `6V` motor, the `Vdss` should be at least `6V`, but better if it were a little higher.

It might also be called `BVdss` which means _Drain-Source Breakdown Voltage_.

#### `V`<sub>`GS`</sub>

Maximum `Voltage` between `Gate` and `Source` that the MOSFET can handle. Make sure this is higher than the logic level you're using to control it. For instance this MOSFET can handle a control signal up to `12V`.

### Switching Behavior/`ON` Characteristics

Now examining the `ON` characteristics, it tells us how the device behaves as a switch:

![](../Support_Files/MOSFET_Datasheet_Electrical_Characteristics.png)

#### `V`<sub>`GS(TH)`</sub>, `R`<sub>`DS(ON)`</sub>, & `I`<sub>`D`</sub>

* **`Vgs`** - Sometimes abbreviated as `V`<sub>`TH`</sub>, the `Gate` to `Source` threshold voltage is the minimum voltage needed to _begin_ conducting current on the channel between `Gate` and `Source`.
* **`Rds(on)`** - Resistance between `Drain` and `Source` when `ON`.
* **`Id`** - This is the `Drain` current, or the amount of current that can flow through the MOSFET channel.

These three parameters are used in conjunction to describe how the MOSFET conducts. The `Vgs` states that at a given voltage to the `Gate`, the `Rds(on)` will lower enough that the MOSFET will start letting current flow. Usually in a datasheet, the `Rds(on)` will be listed with one or more values because how well it conducts is a function of the `Vgs`. In the image above, we can see that:
* The MOSFET starts to conduct somewhere between `0.4V` and `1.4V` `Vgs`. Note that this wide range is just an artifact of how MOSFETs work.
* At a `Vgs` of `4.5V`, the channel resistance (`Rds(on)`) is typically around `50mΩ`, which is `50` _milli_-ohms, a very small amount of resistance. And at a `Vgs` of `2.5V` it is still _very_ low at `60mΩ`.
* At a `Vgs` of `4.5V`, the channel will typically conduct up to `3.6A`, and at a `Vgs` of `2.5`, it'll typically conduct up to `3.1A`.

This means that this MOSFET is effectively fully on at `2.5V` to the `Gate`. MOSFETs that operate at `5V` or less `Vgs` are referred to as _Logic-Level_ MOSFETs, because you can control them with typical digital logical circuits that nominally run at `5V` or `3.3V`. 

This becomes even more apparent if we look down further in the datasheet and see the graph that tells us what the `Rds(on)` is at varying `Vgs` levels:

![](../Support_Files/MOSFET_Datasheet_Rdson_Graph.png)

As we can see, the MOSFET actually turns fully on at less than `2V`!

## Temperature and Power

You'll notice that the specifications are given at _Ambient Temperature_ (`Ta`) of `25°C`/`77°F`:

![](../Support_Files/MOSFET_Datasheet_MaxRatings_Ta.png)

This means, that these ratings are good for operations at room temperature, and are the maximum values the device can handle without the need for external cooling such as a heatsink. Many MOSFETs that are meant for switching large loads are designed with a built in plate that can be attached to a copper area on a PCB or a heatsink, and doing so will enable the MOSFET to dissipate more heat and carry a larger load.

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

## Packages

* **PTH** - 
* **SMT** - [Small Outline Transistor (SOT)](https://en.wikipedia.org/wiki/Small-outline_transistor)

# [Next - Depletion Mode MOSFETs.](../Depletion_MOSFETs)