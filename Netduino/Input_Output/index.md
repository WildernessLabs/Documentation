---
title: I/O (Input & Output)
---

Netduino is equipped with a varied set of Input and Output (I/O) ports that can be accessed from your application to read sensors, listen to button presses, light LEDs, drive motors, communicate with other systems, and lots more.

Netduino IO ports are divided into two categories; _Digital_ and _Analog_. 

![N3 Pinout Diagram](../About/Netduino3_Pinout.svg)

## General Purpose Input/Output (GPIO) Ports

### [Digital](Digital/)

The Digital ports can be set to be high (powered at 3.3v), or low (grounded at 0v) which correspond to digital 1 and 0, respectively. Additionally, they have built-in support for a host of different types of common digital communication protocols:

* [I2C (CAN)](Digital/CAN/)
* [PWM](Digital/PWM/)
* [SPI](Digital/SPI/)	
* [UART (Serial)](Digital/UART/)

### [Analog Ports](Analog/)

Analog ports can operate at a range of voltages between 0 and 3.3v, which is especially useful when reading analog sensors that supply their data as a voltage reading, rather than a digital signal.

### Current Tolerance and Output

 * **Maximum GPIO Current** - 25mA/pin.
 * **Maximum MCU Output Current** - 125mA.
 * **Digital I/O** - 3.3V nominal, but tolerant up to 5V.
 * **IOREF** - 3.3V (for shield compatibility).


## [Onboard Button & LED](Onboard_Button_+_LED)

In addition to the Analog and Digital Headers, the Netduino has an LED and a Button built into it that you can access from code.

## [SD Card](File_Storage)

Netduino 2 and 3 can access up to 2GB of storage on a Micro SD Card. Some models have an SD card slot on the board, but models that don't have one built in can use an SD Card Shield. 