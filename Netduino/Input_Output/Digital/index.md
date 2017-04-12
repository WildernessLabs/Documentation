---
title: Digital I/O
---

Digital ports are useful for binary communication in which the port is either high/on (powered at 3.3v) or low/off (grounded at 0v). High represents a digital 1, and low represents 0. 

Digital ports can also be set to stand at a high or low, in what's knows as pulling them high, or pulling them low. So for instance, a digital port that is pulled high will be powered at 3.3v, until it is modified, whereas a port pulled low will be at 0v.



[example code for pulling high/low]


Additionally, Netduion provides built-in support for a host of different types of common digital communication protocols via the digital ports. 

* [I2C (CAN)](Digital/CAN/) - [explain]
* [PWM](Digital/PWM/) - [signal pulses for analog-like functionality]
* [SPI](Digital/SPI/) - 
* [UART (Serial)](Digital/UART/)

[available via different pins on the board:]

![](../../About/Netduino3_Pinout.svg)

## Input

There are two ways to 
[events vs. reading]

sample projects:

 * events: (button press)
 * constant reading

## Output
 * lighting an LED
 * 
 