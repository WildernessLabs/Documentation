---
title: Part 2 - Practicals of Electrical Theory
---

In part 1 of our electronics primer we got an understanding of the physical nature of electricity. In this part, we're going to start to look at some of the practical aspects that arise from the atomic behavior of electricity.

## Electromagnetism

<!--[field alignment comes from orbital motion AND spin of electrons]-->


[spin - another arbitrary naming for an intrinsic characteristic of subatomic particles. this is where the electromagnetic force comes from, along with the orbital motion of electrons]



[electrons are bound to the nucleus of the atom in orbits because of their attraction to positively charged protons. electromagnetic force]

[moving electrons; e.g. and electric current can extend this force at a distance]

[a wire in a coil, has a particuarly strong magnetic force. in fact, we can build an electromagnet very easily. Simply coil an insulated wire around a nail and run a charge through it:]

[illustration of an electromagnet with a battery and a nail]

### Induction

[magnetic field can _induce_ a current in a wire without touching it]
[can change the nature of a current with two coils]

[illustration of one coil inducting another to power an LED]

[we'll see later that this is important for a lot of stuff]

[a lot of electronic circuits use induction, and accidental induction is something that we need to concern ourselves in circuit design]

[Further reading on Magnetism](http://www.rpi.edu/dept/phys/ScIT/InformationStorage/faraday/magnetism_a.html)


## Measuring Electricity; Amount and Force

When talking about electricity and working with electronic circuits, there are two aspects that describe current that are important:

 * **Amperage** - Measured in amps, this is the quantity of electrons that are being moved.
 * **Voltage** - Measured in volts, this is the amount of force in which those electrons are be	ing moved.

Water is used as a common analogy here. Imagine a waterfall; the width of the waterfall determines the quantity of water that is moving, and the height of the waterfall determines the pressure, or force, of the water at the bottom.

[illustration of waterfall, height/width]

### Amperage (Amperes/Amps/A)

One of the simplest (though not actually the official) definitions of an [Ampere (amp)](https://en.wikipedia.org/wiki/Ampere) is 1 [_coulomb_](https://en.wikipedia.org/wiki/Coulomb) of charge carriers passing through a given location per second. 

One coulomb is equal to 6.242 x10^18 (6,242,000,000,000,000,000,000) charge carriers. A fantastically large number, but given the relative size of electrons, one can imagine that number of charges moving on a relatively modest wire. Consider household wiring, which is typically 14 or 12 gauge, and rated at carrying 10 or 15 amps (at 120 volts), respectively.

To get an idea of the amount of work that can be done with that number of electrons, consider the following household appliances and their amperage:

| Appliance                       | Amperage |
|---------------------------------|--------------|
| 60 Watt incandescent light bulb | 500mA (0.5A) |
| 10 Watt LED (60 Watt incandescent equivalent) | ~100mA (0.1A) |
| Hair Dryer | 15 amps |


### Electromagnetic Force/Potential (Voltage)

Force is relative. 

Potential difference

A 100' Waterfall at different altitudes is still a 100' waterfall.

Perhaps a pipe is a better analogy, because a vacuum means you can pull it

## Converting between Amps and Volts

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










## Semiconductors

Some materials, such as silicon, can be made to conduct or insulate rather well. This is usually done during manufacturing, through the use of adding, or _doping_, various materials, or even physically altering the structure of the material itself, to behave a particular way. 

[diodes can be made to only let electrons flow a certain way!]

[P-Type vs. N-Type]
[_majority_ carrier]
