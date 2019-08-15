## Semiconductors Part 2 - The Transistor

### Transistors: BJTs and MOSFETs

* **BJT** = Bipolar Junction Transistor
* **MOSFET** = Metal-Oxide Semiconductor Field-Effect Transistors

Both are "transistors," however, BJTs are usually what people have historically thought of as transistors. They're the original transistor design and have been used for 70+ years. 

BJTs are fine, but for modern circuits, we use MOSFETs for nearly everything. They're inherently more power efficient, because as we will learn, they operate on voltage, rather than current.

Additionally, when working with larger current loads, you'll almost always want to use a MOSFET. 

### The Basics

Transistors act as logical switches or amplifiers. 

#### As a Logical Switch

Most often, we use transistors to digitally switch (logical `ON`/`OFF`) higher current or voltage loads with a smaller controlling current. For instance, if we wanted to control a `12V` DC motor  using the `3.3V` digital output on a Meadow board, we could use a transistor circuit that acts a sort of digital "switch" to allow `12V` from an external source to flow through the motor.

[diagram]

#### As an Amplifier

However, transistors can be used for more than just switching, in fact, they can also be used in an analog way to "amplify" a control signal, so that instead of just `ON` or `OFF`, it can be used to provide a gradient  of control over a large load using a small controlling signal. Son for instance, not only can you switch `ON` that DC motor, but you could potentially set it to `60%` power.

[diagram]

This versatility makes transistors one of the most powerful and commonly used components in our circuit toolbox. In fact, most circuits are comprised of some combination of transistors, resistors, and to a lesser degree, capacitors (which we'll dive into later).


#### Physical Configuration

Transistors almost always have three leads, and though they're called different things on a BJT and a MOSFET, they basically do the same thing:

| Lead Function | MOSFET Name | BJT Name  |
|---------------|-------------|-----------|
| Control       | Gate        | Base      |
| High Side     | Source      | Collector |
| Low Side      | Drain       | Emitter   |

[diagrams of MOSFETs and BJTs]

### Types N-Channel/NPN & P-Channel/PNP

Both MOSFETs and BJTs come in two common flavors (there are actually more types of MOSFETs, but they're specialized and we'll cover them later). These two flavors describe whether or not they allow electrons or holes to flow (N-Type and P-Type) through them easily.

In MOSFETs, the kind that allows electrons (negative charge carriers) to flow are called _N-Channel_, and the corresponding type in BJTs are called _NPN_ transistors. 

Negative type (N-Channel MOSFETs and NPN BJTs) are by far the most commonly used transistors, so we'll spend the majority of our time on them.

The other kind, that allow holes (positive charge carriers) to flow easily are known as _P-Channel_ when referring to MOSFETs, and _PNP_ when referring to BJTs.


### BJT Transistors


#### Function


A small current applied to the base allows more current to flow from the collector to the emitter.

The ratio of the currents is called the Beta. So a beta of `10`, means that `10mA` of current at base means `100mA` can flow from collector to emitter. 


Beta is often notated as `h`<sub>`FE`</sub>. It also often varies based on the current at the collector (`I`<sub>`C`</sub>). A good guideline is to use a factor of 10 to drive the junction into saturation. 

Beta: `I`<sub>`C`</sub> = `I`<sub>`B` * `h`<sub>`FE`</sub>

Diode within the transistor has a voltage drop. ~`0.7V`. You can use more voltage, but it's best to provide it with the about that voltage, or a little more.

So we'd need to drop ~`2.6V` from `3.3V` to get to `0.7V`:

Resistor Value = `V`<sub>`R`</sub> / `I`<sub>`B`</sub> = `2.6V` / `I`<sub>`B`</sub>

To determine `I`<sub>`B`</sub> we need to determine how much current needed to drive the junction into saturation so the current flows.

#### NPN vs. PNP

The simplest practical difference between a NPN and PNP type of transistor is that NPN is `OFF` (no current flow between collector and emitter) by default (when no current is applied to the base), and an NPN is `ON` by default. 

This is because a NPN transistor is effectively two diodes pointing out, and when the base region is saturated with current, it begins to conduct. Whereas [blah]

However, the underlying physics 

* NPN transistors _source_ current in to the base.
* PNP transistors _sink_ current into the base.

[need diagram of what this means]

NPN 

[many tutorials say that you can just swap the voltages and polarity and use a PNP instead of an NPN, but that's not really true. In fact, PNP is a little difficult to use in a modern circuit, in which logic levels are used to control larger voltages. Consider the following circuit:]

[incorrect PNP]

[No way to turn this off, and in fact, it'll blow the transistor]


#### Mnemonic

NPN = **N**ever **P**oints i**N**.



#### High-Side vs. Low-Side

#### Nomenclature

Beta = 
 
 * `V`<sub>`C`</sub> = Voltage @ Collector
 * `I`<sub>`B`</sub> = Current at Base
 * `V`<sub>`BE`</sub> = Voltage from Base to Emitter

`VCC` = Voltage @ Common Collectors; positive supply voltage at all the collectors within a circuit.

### Notes

Transistor symbol has a diode within it. That can help to understand how to build circuits with it.

### Flywheel Diode

If using a Transistor or MOSFET to power a motor other things with a coil, such as a relay, you need to use a flywheel diode which prevents the BJT from receiving a current dump when the magnetic field in the coil collapses.

`1N4001` is a decent one to use

### MOSFETs

Two types:
* **Depletion** - Current flows by default. Applying a negative voltage causes the current flow to stop.
* **Enhancement** - Comes in N-channel and P-channel types. N-channel MOSFETs are the ones you'll use most often.

#### Parts

* **Gate** - Like the base on a BJT. Controlling voltage lead.
* **Drain** - 
* **Source** - 

#### Operation

When voltage is at gate (`V`<sub>`G`</sub>), then current flows from Drain to Source.

Work like a variable resistor, in which the amount of resistance between drain and source is controlled by the gate voltage. The great thing about MOSFETs, is that unlike BJTs, which require current at the base, a MOSFET just needs Voltage, and actually uses almost no current!

#### Nomenclature

* **Threshold Voltage** - `V`<sub>`GS`</sub> Threshold. The amount of voltage necessary at the gate to allow current to flow between source and drain. 
* **`R`<sub>`DS`</sub>`ON`** - Resistance between the drain and the source.

Logic-level MOSFETs allow you to control them with "logical-level" voltages, or <`5V`. F1P30N06L is a common one.

#### Heat Dissipation

MOSFETs are variable resistors. So in high-current situations, you may need a heat-sink to dissipate the heat away from the MOSFET to protect it from overheating.

`P` = `R` x `I`<sup>`2`</sup>

`R`<sub>`DS`</sub> * `I`<sup>`2`</sup>

## Example Sources

* [Hackster Motor Speed Control with Transistor](https://www.hackster.io/Marcazzan_M/motor-speed-control-with-one-transistor-0921a8?utm_campaign=new_projects&utm_content=1&utm_medium=email&utm_source=hackster&utm_term=project_name)