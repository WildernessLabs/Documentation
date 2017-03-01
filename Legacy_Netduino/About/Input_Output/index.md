---
title: I/O (Input & Output)
---

Netduino is equipped with a varied set of Input and Output (I/O) ports that can be accessed from your application to read sensors, listen to button presses, light LEDs, drive motors, communicate with other systems, and lots more.

Netduino IO ports are divided into two categories; _Digital_ and _Analog_. 


## [Digital](Digital/)

The Digital ports can be set to be high (powered at 3.3v), or low (grounded at 0v) which correspond to digital 1 and 0, respectively. Additionally, they have built-in support for a host of different types of common digital communication protocols:

* [I2C (CAN)](Digital/CAN/)
* [PWM](Digital/PWM/)
* [SPI](Digital/SPI/)	
* [UART (Serial)](Digital/UART/)

## [Analog Ports](Analog/)

Analog ports can operate at a range of voltages between 0 and 3.3v, which is especially useful when reading analog sensors that supply their data as a voltage reading, rather than a digital signal.

## [Onboard Button & LED](Onboard_Button_+_LED)

In addition to the Analog and Digital Headers, the Netduino has an LED and a Button built into it that you can access from code.

