---
layout: ElectronicsTutorial
title: Review
subtitle: Semiconductor, P-N Junction, and Diode reference.
---

## Important Concepts

This chapter introduced the most fundamental structure in modern electronics; the semiconductor P-N junction, and did a thorough examination of diodes. We also built some more practical circuits, and got familiar with the all important LED.

Along the way we covered probably more ground than any other chapter. Take a moment for a quick review before tackling the next chapter on transistors:


### Semiconductor Basics

 * **Semiconductors** are materials that will conduct electricity, but are designed to have very specific conductive qualities.
 * **Intrinsic semiconductors** like silicon can be **doped** with impurities that change the atomic nature of them, for instance to have extra free electrons, or too few electrons (and therefore an abundance of holes). Once doped, they're called **extrinsic semiconductors**.
 * **P-type** semiconductors don't have enough electrons to fill the valence shells of all the atoms, which creates holes that electrons want to fill. The abundance of holes (positive charge carriers) gives it the name P-type, for Positive-type.
 * **N-Type** semiconductors have extra electrons (negative charge carriers) which gives rise to the name N-type, for Negative-type.

### P-N Junctions and Diodes

 * **P-N junctions** are created when P-type and N-type semiconductors are sandwiched together. The extra electrons from the N-type travel to fill the nearby P-type holes along the junction, causing an electric potential along the **depletion zone**.
 * The electric field created in the depletion zone is called the **junction potential** and is the amount of electromagnetic force (EMF) in volts, needed to to push current through.
 * This amount of force doesn't make it through the P-N junction, which acts like a dam, and is known as the **voltage drop (`V`<sub>`f`</sub>)**.

#### Diode Basics
 
 * A P-N junction is the fundamental structure of a **diode**, which is similar to a one way valve, in which it tries to only let conventional current (hole) flow in the preferential direction; from **anode** to **cathode**.
 * **Forward biasing** is when voltage is applied in this preferential direction, and **reverse biasing** is when voltage is applied from cathode to anode.
 * When a diode is reverse-biased, the junction potential increases, requiring more force to make it through, hence the one-way valve analogy.
 * At enough voltage, known as the **breakdown-voltage**, a reverse-biased diode will begin to conduct current because of the condition known as an **avalanche breakdown**.
 * Diodes have a marking on one end that denotes polarity. The marking is on the cathode side of the diode, which denotes which side should be hooked to the ground side of a circuit.

#### Diode Types

 * The most common non-light-related diodes are **switching diodes**, **rectifier/power diodes**, **Schottky diodes**, and **zener diodes**.
 * Switching diodes are good for switching current.
 * Power diodes can handle a lot of current.
 * Schottky diodes have a very low voltage drop and are good for circuit logic.
 * Zener diodes are meant to be used in a reverse-bias configuration because they have a precise breakdown voltage, and are great for voltage reference.

#### Light-Related Diodes

 * Light-related diodes take advantage of the inherit photon reactivity of a P-N junction.
 * **LEDs** are awesome and efficiently convert voltage to photons when electrons lose energy and move from the conductive energy band to the valence band.
 * **Photodiodes** work just the opposite; photons striking them cause them to liberate from their valence shells and make them "free" to conduct.
 * **Solar panels** are just big, flat photodiodes. They're also awesome.

#### LEDs

 * LEDs need their current limited, otherwise they will fail. Usually a **ballast resistor** or a **PWM signal** is used to limit current.
 * Resistor-only LED configurations only allow you to turn an LED `ON`/`OFF`, whereas a PWM signal can finely control the brightness, allowing them to "pulse" `ON`/`OFF`.
 * To calculate the resistance needed to limit current through an LED, you can use Ohm's law solved for `R`, and remove the voltage drop of the LED from the voltage source; `R = (Vs - Fv) / I`.
 * To wire **LEDs in series**, their voltage drops need to be added up and removed from the voltage source; `R = (Vs - (Vf1 + Vfn...)) / I`
 * Series LEDs share the same amount of current, and therefore should have the same or similar current limits in order to shine at a similar brightness.
 * **LEDs should generally not be wired in parallel with a single resistor**, because they're likely to fail in succession due to slightly different voltage drops.

## Next Chapter - Transistors (Coming Soon)