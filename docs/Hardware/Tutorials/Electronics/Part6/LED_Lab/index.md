---
layout: ElectronicsTutorial
title: LED Lab
subtitle: Building practical LED circuits.
---

# Intro

In this lab, we're going to build a simple LED circuit that uses a resistor to limit the voltage and current, and is actuated by a push button.

[lab can be done in iCircuit, but is much more fun when actually built physically].

# Requirements

To do this lab, you'll need the following new items:

| Item                                     | Approximate Cost (USD) |
| ---------------------------------------- | ---------------------- |
| (2) LEDs, any color                      | < $1                   |
| (1) Push button     | |
| Resistor Kit      |  |
| 9V Battery Adapter  |
| 9V Battery  |


# Exercise 1: Single LED Circuit

[simple LED circuit with a ballast resistor and a push button to actuate]

## Step 1 - Design

[i like to design my circuits in iCircuit first, allows me to get values close to correct:]

![](../Support_Files/SS_iCircuit_Single_LED_Lab.png)

[very simple circuit we'll build on.]

[Manual calculation: single green LED. `2.1V`<sub>`f`, `20mA` max current]

```
R = V / I
R = 3.3V - 2.1V / 0.02A = 60Ω
```

Can start with a `68Ω` resistor.

## Step 1 - Build and Test



# Exercise 2: Series LED Circuit

[Button actuated, ballast resistor, but two LEDs, blue and red]

[3.3V and 2.1V voltage drop = 5.4V total. So we'll power with a 9V battery]

## Step 1 - Design

```
R = V / I
R = 9V - (3.3V + 2.1V) / 0.02A = 180Ω
```

## Step 2 - Build and Test



# [Next - Diode Logic Gate Lab](../Diode_Logic_Lab)