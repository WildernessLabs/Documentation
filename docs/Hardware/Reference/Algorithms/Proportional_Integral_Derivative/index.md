---
layout: Hardware
title: PID
subtitle: Proportional, Integral, Derivative (PID), the quintessential industrial control algorithm.
---

# PID Guides

This is a multipart series on understanding and using the Proportional, Integral, Derivative (PID) algorithm.

## Guide Parts

* **[Intro](Intro)** - Introduction to PID.
* **[Closed Loop Gain Controllers](Closed_Loop_Gain_Controllers)** - Basic controller theory.
* **[Ideal PID Algorithm](Ideal_PID_Algorithm)** - Understanding the canonical/textbook PID algorithm.
* **[Standard PID Algorithm](Standard_PID_Algorithm)** - Understanding a real world PID algorithm.
* **[Using PID](Using_PID)** - A real-world PID example.

## Netduino.Foundation

[Netduino.Foundation](http://Netduino.Foundation) has built in [PID](http://netduino.foundation/API/Controllers/PID/) support including:

* **[`StandardPIDController`](http://Netduino.Foundation/API/Controllers/PID/StandardPIDController/)** - Standard PID algorithm controller implementation.
* **[`IdealPIDController`](http://Netduino.Foundation/API/Controllers/PID/IdealPIDController/)** - Ideal PID algorithm controller implementation.
* **[`IPIDController`](http://Netduino.Foundation/API/Controllers/PID/IPIDController/)** - Interface describing a PID controller.
* **[`PIDControllerBase`](http://Netduino.Foundation/API/Controllers/PID/PIDControllerBase/)** - Base class implementation to aid in creating custom PID controllers.

# [Next - Introduction to PID](Intro)