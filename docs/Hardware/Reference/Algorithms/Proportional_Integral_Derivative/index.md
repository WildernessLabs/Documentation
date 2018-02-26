---
layout: Hardware
title: PID
subtitle: Proportional, Integral, Derivative (PID), the quintessential industrial control algorithm.
---

# Intro

Of all the various algorithms used in controlling systems; probably the most common, the most versatile, and most useful algorithm is the _Proportional_, _Integral_, _Derivative_ (PID) method. PID is a mathematical tool for efficiently affecting change in a system to get it to a particular target state, and keeping it there, harmoniously. 

It's the algorithm that keeps drones balanced in the air, your car at the right speed when cruise control is on, and ships on the right heading with variable winds. It's also the algorithm that can efficiently heat a cup of coffee to the perfect temperature and keep it there.

Consider the following graph of heating a cup of coffee from room temp to 75ºC. The green line represents the ideal, that is, we decide that our coffee which sits at 22ºC (72ºF) is too cold to drink, and so we want it instantly heated to 75º. This "ideal value" is also known as the _reference_, _target_, or _setpoint_ (SP) signal. And the blue line represents an efficient realization of the reference signal in the real world; in which it takes time to heat the coffee to that temp:

![](PID_Reference_and_Ideal.svg)

In this idealized example, the coffee is quickly brought up _just past_ the target temperature, and then stabilized. 

The PID algorithm is a tool to heat the coffee just as illustrated above: _efficiently_.  That is, with only a small amount of error, defined as the area between the reference temperature and the actual temperature. 

## PID Controller in Netduino.Foundation

[Netduino.Foundation has a [PID controller](Link) integrated into the core, so you don't have to write the algorithm yourself, but in order to use it, it's helpful to understand how it works]

[check out the Netduino.Foundation PID controller documentation for an overview of how to use it. For a more detailed understanding of PID, read on]

## Simple Control

To understand why PID is so useful, we must examine what happens without it. 

Probably the easiest and most intuitive way to heat up a cup of coffee sitting on a hotplate is to create a loop that continuously monitors the temp of the coffee, and if the temperature is too low, start another loop that turns on the hot plate, waits until the coffee reaches the desired temperature, and then turns the hot plate off. That loop then finishes and when the master loop detects that the coffee has gone below the target temperature, it stars the heat up loop again.

This is a very simple algorithm, but it leads to a lot of error. Consider the following graph, which is the likely outcome of that the aforementioned loop, in which the orange line represents the actual temperature:

![](PID_Binary.svg)

While the actual temperature of the coffee will eventually get close to the target temperature, most of the time there will be a lot of error, due to the _oscillation_ of the actual temperature. Each time a control signal is changed, for instance, when the hotplate is turned off, there is some lag as all of the components of the system recover from the inertia of the previous control signal. 

In order to correct for this, at a minimum, the algorithm needs to take into account the _rate of change_ of the temperature and predict control changes _before_ the target is reached. Enter, the PID algorithm.

## PID Controller Algorithm

The PID algorithm can be described, visually, in the following block diagram:

![](PID_Block_Diagram.svg)

The inputs include:

 * **Reference Signal** - Represents the ideal target state and is sometimes called the _set point_ (SP),. I.e., 75ºC, the desired temp of coffee.
 * **Actual Signal** - Represents the actual measured state (sometimes called the _process variable_ (PV)).  I.e., current temp of coffee, say for instance, 25ºC.

The output is the _control signal_, or _control variable_ (CV), which is used to control the agent of change in the system, such as the hot plate.

In the case of heating up a cup of coffee, the idea here is that when given the target temperature of the coffee, as well as the current actual temperature of the coffee, the algorithm calculates the amount of power to give the hotplate to the appropriate temperature, efficiently. The PID algorithm is then called repeatedly, usually in a loop, to provide continuous control adjustments based on the input.

### Closed Loop Gain Controller

This type of control system is sometimes called a _closed loop gain_, because the control output is fed back into the system and the controller is then given the response to its previous control signal and can react appropriately to the change and further refine the output:

![](Closed_Loop_Gain_Controller.svg)

In this context, [_gain_](https://en.wikipedia.org/wiki/Gain_(electronics)) is the output signal and can be either positive or negative. 

#### Hysteresis

Additionally, this control algorithm relies on the history of the 

[lagging behind]

[gah, reword this. hysteresis is the dependence of the system on its history, and causes a lag between control and actual]
The lag between the 
This type of system causes a condition called [_hysteresis_](https://en.wikipedia.org/wiki/Hysteresis), in which the change 

### Calculation Steps

The actual algorithm has three steps to it:

 1. Calculate the current error, which is the difference between the desired target, _reference_ state and the current _actual_ state.
 2. Calculate the corrections needed to change the system state to the desired state, by multiplying the current error by the _Proportional_, _Integral_, and _Derivative_ corrective action calculations.
 3. Add together all three corrective actions into a single change quantity.

The output might then be a value such as `0.75`, which specifies that the hotplate needs to be set to 75% power, in order to arrive at the desired temperature, based on the current conditions

### Individual Correction Gains and Tuning

Each correction action is usually a property on the controller and is specific to the particular system (more specifically, the system's response to change) and is called the _gain_ factor. For instance, on the [Netduino.Foundation PIDController](link) the Proportional correction factor is exposed as the `ProportionalGain` property, and the Integral and Derivative correction factors are exposed as the `IntegralGain` and `DerivativeGain` properties. 

This allows for the PID controller instance to be tuned to the particular system that it's used on. For instance, systems that require big control inputs to change, might have a high `ProportionalGain` value.

In order to understand how to use these factors, it's important to understand what each one is and what its effect is on the control output. PID relies on calculus to calculate the various corrections in step 2 and each corrective term is calculated as follows.

#### Error

The error is simply the difference between the target value value and the actual value. For instance, if the target value is `75ºC`, and the coffee is currently at `50ºC`, then the error is `25`.

#### Proportional Corrective Action

The proportional calculation is the simplest of all; it simply multiplies the error factor by a specified proportion multiplier. For instance, if the error is `25`, and the `ProportionGain` is set to `0.8`, then the output gain would be adjusted by `25 * 0.8`, or `20`. 

##### Effect of the Proportional Correction

Changing the 	`ProportionalGain` generally affects how strongly the controller responds to error. A higher `ProportionalGain` means that the controller will send a larger power change in response to a system change away from target. Systems that are resistant to change and therefore need stronger inputs will require a higher value, but systems that change easily may require subtle changes and will do better with smaller values.

The following graph illustrates the reaction of a sample system to various `ProportionGain` (K). A higher gain means that the system gets to the target state faster, but has much more error. Whereas a lower gain means less error, but it takes longer to affect change:

[![PID varyingP](https://upload.wikimedia.org/wikipedia/commons/a/a3/PID_varyingP.jpg)](https://commons.wikimedia.org/wiki/File%3APID_varyingP.jpg)

When tuning the `ProportionalGain`, a good starting place for the value is `1`.


#### Integral Corrective Action

In calculus, the _integral_ is defined as the area under the graph of a function between two particular _x_ coordinates. For example, it could be the blue area in the following graph of our coffee :

![](PID_Integral.svg)

If we knew the exact definition of the brown curve, as a mathematical function, we could use some calculus to tell us exactly what the derivative was between any two given _x_ (time) coordinates. 

However, in real life systems, we almost never know that, so we sample the actual value (_y_) of the thing we're trying to control (coffee temp) at regular intervals, and approximate the area by multiplying `y` by the time interval (`x`), which provides the bounds of a rectangle. For example, if we sampled our coffee temp every minute, the area graph might look like the following:

![](PID_Integral_Approximation.svg)

If the readings were: `{ 24º, 38º, 70º, 86º, 97º, 98º, 97º, 88º, 80º, 73º }`, we would add each one, multiplied by the time interval (`1minute`) to get the signal integral:

```
Given T1 ... T10:
(24*1)+(38*1)+(70*1)+(86*1)+(97*1)+(98*1)+(97*1)+(88*1)+(80*1)+(73*1) = 751

Therefore:
∑(T1 ... T10) = 751
```

The resolution of the integral gets better as the number of data points increases, which is accomplished by reducing the interval time.


**from PID for dummies:**

> The way to adjust how much Integral Action you have is by adjusting a term called “minutes per repeat”. Not a very intuitive name is it?

> So where does this strange name come from? It is a measure of how long it will take for the Integral Action to match the Proportional Action.

> In other words, if the output of the proportional box on the diagram above is 20%, the repeat time is the time it will take for the output of the Integral box to get to 20% too.

>And the important point to note is that the “bigger” integral action, the quicker it will get this 20% value. That is, it will take fewer minutes to get there, so the “minutes per repeat” value will be smaller.

>In other words the smaller the “minutes per repeat” is the bigger the integral action.

> To make things a bit more intuitive, a lot of controllers use an alternative unit of “repeats per minute” which is obviously the inverse of “minutes per repeat”.

> The nice thing about “repeats per minute” is that the bigger it is - the bigger the resulting Integral action is.

##### Effect of the Integral Correction

While the proportional action will attempt to correct based on any instantaneous error, by using an integral calculation, the PID controller can adjust for error _over time_. It tracks the accumulated error offset and attempts to either increase or decrease the rate of change. So while using the Proportional control alone will provide a somewhat symmetrical oscillation into the target value, the Integral action accelerates the change to target.

[![PID Change with Integral](https://upload.wikimedia.org/wikipedia/commons/c/c0/Change_with_Ki.png)](https://commons.wikimedia.org/wiki/File%3AChange_with_Ki.png)


#### Derivative Correction Action

The Derivative action calculates the _rate of change_, which is defined as the slope of the line and uses that to predict how quickly the system will change. 

[greatly affected by noise]
[not often used (1/4 of systems)]

## Variations on PID

PID is a powerful algorithm, but it doesn't need to be used in its entirety to be effective. In fact, most uses of PID only use the PI component. 

### PI Controllers

Because the Derivative is so adversely affected by input signal noise, in most real world systems, it's omitted entirely. For many needs a PI controller (Proportional and Integral only), will suffice. 

### PD Controllers

PD controllers, those that use the Proportional and Derivative corrective actions only, are less common, but are sometimes used to control servos when very precise movements are needed. Servos can provide very precise data on their rotation, so in conjunction with Proportional power control, a PD controller can drive a servos into not incredibly precise alignment, but do so very quickly.

# Code Implementation


# PID Tuning (Coming Soon)


