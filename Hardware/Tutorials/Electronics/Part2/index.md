---
title: Part 2 - Quantifying Electriciy; Amps, Volts, and Watts
---

In part 1 of our electronics primer we got an understanding of the physical nature of electricity. In this part, we're going to start to look at some of the practical aspects that arise from the atomic behavior of electricity.


## Measuring Electricity's Ability to do Work; Amount and Force

Electricity is useful because of its ability to do work. We can heat with electricity, generate light, and use the magnetic force of electricity to turn electric motors that propel our cars, vacuum our houses, and mix our smoothies.

In order to describe the amount of work that electricity can do, we use two characteristics:

 * **Amperage** - Measured in amps, this is the quantity of electrons that are being moved.
 * **Voltage** - Measured in volts, this is the amount of force in which those electrons are being moved.

Water is used as a common analogy to relate these characteristics. Imagine a water tower full of water, and a pipe extending down to the ground below it:

![](../Water_Tower_Battery.svg)

In this analogy, we can think of the water tower as a battery. 

Now imagine, at the bottom of the pipe is a valve that can release water and a water wheel that spins when water flows over it.

![](../Water_Tower_w_Wheel.svg)

The water tower has a quantity of water in it, and the gravity pulling from the water down to the ground, generates a force to move that water. When water is flowing over our water wheel, the molecules of water (analogous to our charge carriers) are causing the water wheel to move, and gravity acting on the difference in height from the top of the water to the bottom of the water to generate a force to push those water molecues and do work.

In order for electricity to be useful, we must have both a quantity of charge carriers (amps), and force to move them (volts). Imagine a water tower full of water, but the pipe outflow is the same height as the top of the water stored in the tank:

![](../Water_in_Equilibrium.svg)


Even though charge carriers exist, there is no different in height to create a potential, or force to move them.

Similarly, even with a very tall, but empty tower, if there are no charge carriers to move, there can be no work done, even though gravity could be acting over a large height difference.

This system, taken as a whole, is analgous to something like a cordless electric drill, in which the battery is our water tower, and the electric motor is the water wheel, and the trigger is the valve that let's water flow:

[illustration of electric drill]


### Amperage (Amperes/Amps/A)

One of the simplest (though not actually the official) definitions of an [ampere (amp)](https://en.wikipedia.org/wiki/Ampere) is 1 [_coulomb_](https://en.wikipedia.org/wiki/Coulomb) of charge carriers passing through a given location per second. 

One coulomb is equal to 6.242 x10^18 (6,242,000,000,000,000,000,000) charge carriers. A fantastically large number, but given the relative size of electrons, one can imagine that number of charges moving on a relatively modest wire. Consider household wiring, which is typically 14 or 12 gauge, and rated at carrying 10 or 15 amps (at 120 volts), respectively.

#### Common Amperages

To get an idea of the amount of work that can be done with that number of electrons, consider the following household appliances and their amperage:

| Appliance                       | Amperage |
|---------------------------------|--------------|
| 60 Watt incandescent light bulb | 500mA (0.5A) |
| 10 Watt LED (60 Watt incandescent equivalent) | ~100mA (0.1A) |
| Hair Dryer | 15 amps |

#### Amp Hours (Ah)

When describing the quantity of charge either available, or used, amp hours (Ah), are used. An amp hour is an hour's worth of amps, or 3600 coulombs (since there are 3600 seconds in an hour).

In our water tower analogy, the quantity of water flowing over our water wheel at any given second is measured in Amps, and the quantity of water stored in the water tower (battery), is described in amp hours.

[illustration of water tower with labels of Remaining Charge, measured in Ah, amount of current flowing, measured in A, and force of water, measured in V]

Amp hours are often expressed in milliampere hours (mAh), which is one-thousandth of an amp hour, or 3.6 coulombs. For reference, a typical AA NiMH rechargeable battery will have ~2500 mAh (2.5Ah), and a D NiMH rechargeable has ~10,000 mAh (10 Ah).

### Electromotive Force (EMF) and Voltage

In order for a current to exist, charge carriers must be motivated to move.

Returning to our water tower analogy, gravity acting on the difference in height of the top water to the bottom, generates a potential force that can be exploited to move water and turn the water wheel.

This pressure at the valve is known as _electromotive force (EMF)_ and is expressed as a difference between the top and bottom of the water path and represents a potential for work.

#### Relative Voltage

When water (or charge carriers) is flowing through the valve, the amount of force is expressed in _volts (V)_.

It's important to note that this force is relative; even if the water towers were at different altitudes, the pressure at the valve is still dependent on the _voltage drop_ from the top of the water to the ground.

![](../Water_Tower_Relative_Voltages.svg)

Consider the following two simple circuits:

[circuit diagrams of 10v and 20v with a drop of 5v across both to 5v/15v respectively]

While both circuits have different source and load voltages, in both cases, the voltage drop is 5v, since the source minus the load is 5v, meaning that the force of electricity in both cases is actually the same.

A minor, technical point, is that while EMF exists whether curent is flowing or not, voltage only applies when a current exists. 

#### Common Source Voltages

| Source                       | Voltage |
|---------------------------------|--------------|
| North American Household Electricity | ~117v (110 nominal) |
| European Household Electricity | ~220v (230 nominal) |
| AA Battery | 1.5v |
| USB Power | 5v |
| Netduino Digital IO | 3v |

## Common and Ground






## Relationship of Amps & Volts

[North American and European household electricity have different voltages, but have essentially the same amount of work that they can do because european household electricity has a fewer amps.]

[US 15A circuit (rated at 12A), UK 6A circuit]

[through induction]

[pipe analogy]


## Wattage

Because in order to properly describe the amount of work that electrical current can do you need to use both Amperage and Voltage, we have a convenience unit called a [Watt](https://en.wikipedia.org/wiki/Watt) that can be described as follows:

```
Watts = Volts * Current
```




100 watts = 120 volts * x Amps

5/6 amp = 100 watts @ 120 volts

iPad Charger = 2 amps @ 5v (10 Watts)
Netduino @ 5volts = 125 milliamps (maximum), 30-40ma (normal)



Most of the voltages we'll work with will be 5v or 3.3v for DC, or 120v/240v for AC


# [Part 3 - Resistance and Ohm's Law](../Part3/) 

<br/>









