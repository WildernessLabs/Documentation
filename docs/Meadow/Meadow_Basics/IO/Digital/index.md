---
layout: Meadow
title: Digital IO
subtitle: Meadow Basics
---

# Digital IO

Digital IO is often referred to as _General Purpose, Input/Output_ or GPIO.

Digital ports can be set to be `HIGH` (powered at `3.3V`), or `LOW` (grounded at `0V`) which correspond to digital `1` and `0`, respectively. 

## [Pulse-Width-Modulation PWM](/Meadow/Meadow_Basics/IO/Digital/PWM/)

Digital output ports can be used to generate a _Pulse-Width-Modulation_ (PWM) signal, which approximates an intermediate voltage between `LOW` or `HIGH` by switching between ON and OFF very quickly: 

![](/Meadow/Meadow_Basics/IO/Digital/PWM/PWM_Signal.svg){:standalone}

PWM signals are frequently used to control the brightness of LEDs, as well as serve as the control signal for precision motors such as servos and stepper motors.

## [Communication Protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/)

Digital IO also includes built-in support for a host of different types of common digital [communication protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/) including:

* **[I2C](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C)** 
* **[SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI)** (Serial Peripheral Interface)
* **[UART](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART)** (Serial) 
* **[CAN](/Meadow/Meadow_Basics/IO/Digital/Protocols/CAN)** 
* **[I2S](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2S)** (Integrated Inter-IC Sound Bus)

