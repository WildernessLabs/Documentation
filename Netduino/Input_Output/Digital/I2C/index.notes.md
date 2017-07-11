---
title: I2C
---

[I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C)  is a communication protocol allowing bi-directional communication between two or more devices using only two signal wires plus the ubiquitous power and ground connections.

This series of articles will:

* Provide an overview of the I2C communication protocol
* Demonstrate [reading data from an I2C temperature sensor](Part1/)
* Reconfigure the I2C temperature sensor by [writing data to the I2C temperature sensor](Part2)

## Overview

Pictorially, a Netduino connected to two I2C devices looks like this:

![I2C Bus Master / Slave Illustration](I2CBusIllustration.svg)

Some important points to note:

* The Netduino is a _master_ device talking to two other devices (known as _slaves_)
* Each _slave_ device has an address.  This allows the _master_ device to choose which of the _slaves_ it is communicating with
* The two signal (bus) wires used are usually labelled `SDA` (Data) and `SCK` (Clock)
* `SDA` and `SCK` are common to all devices on the bus
* [Pull up resistors](/Hardware/Reference/Resistors/PullUpAndPullDownResistors/) connect the signal lines to V<sub>cc</sub>

I2C is normally used to connect low speed devices over short distances.  Compare this to the main characteristics of [SPI](../SPI/) and [Serial](../UART) communications:

| Protocol | Characteristics                                      |
|----------|------------------------------------------------------|
|   I2C    | Two wires<br/>Short distance<br/>Low speed           |
|   SPI    | Minimum of two wires, often more<br/>High speed      |
|  Serial  | Low speed</br>Used for communication between boards  |

### Clock Signal `SCK`

Typical clock speeds are 100KHz for low speed devices with speeds of 3.4MHz possible for high speed devices.  Common speeds encountered by hobbyists are 100KHz and 400KHz.

The clock signal determines the rate at which the bits can be transferred between the _master_ and _slave_ devices.

### Data Signal `SDA`

Both _master_ and _slave_ can transmit and receive on the bus.

## Communicating with I2C Devices

If it worth taking a short look the sequence of events in a message exchange between the _master_ and _slave_ device.  From a high level, the following events take place:

* _Master_ device sends a start signal
* _Master_ transmits one byte on the bus.  This byte indicates the address of the _slave_ device it wishes to talk to and the mode of operation (read or write)
* _Master_ sends data to the _slave_ device
* If reading, the _salve_ will send data back to the _master_ device.  If writing then the _slave_ device will act upon the data received accordingly
* _Master_ sends a stop signal on the bus

The start and stop signals are taken care of by the .NET Microframework and are not considered in detail in this article.  A comprehensive description can be found in the Wikipedia article, [I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C).

### Device Addresses

The use of multiple devices on the single bus is made possible through device addresses.  Each _slave_ device on the bus is allocated a specific address by the manufacturer of the device.

The _master_ initiates communication with a _slave_ device by first transmitting the _slave_ device address on the data line (`SDA`).  The _slave_ device that has its address set to the address transmitted now knows that all data transmitted between now and the stop bit is intended for itself.

So what happens if two devices have the same address?  Both devices will interpret the sending of the start signal and the address as a signal to listen to the _master_ device.  Both devices are now reading the data when the _master_ only want to talk to one of them.  This is known as an address collision.

In order to overcome this, some devices allow the address to be configured.  This is achieved using one or more _address pins_ which would be tied low or high depending upon the device and the address required.  Addresses are 7-bits in length.

```CSharp
I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
I2CDevice bme280 = new I2CDevice(new I2CDevice.Configuration(0x77, 50));
```

The code above will be discussed in more detail in the following articles, [Reading Data from an I2C Temperature Sensor](Part1/) and [Writing Data to an I2C Temperature Sensor](Part2).

The use of seven bit addresses restricts the number of devices to 128 per bus.

### Read / Write Bit

A Master device will start the communication session by sending the address of the device it wishes to communicate with along with a single bit that indicates the mode of the communication: _read_ or _write_.  The combination of the 7-bit address and the single read / write bit gives an eight bit packet header.

## Pull-up Resistors

Both of the bus lines (`SDA` and `SCK`) require [pull up resistors](/Hardware/Reference/Resistors/PullUpAndPullDownResistors/) to be connected to them.  The value of the pull-up resistor will depend upon the capacitance of the bus.  The number of components on the board, type of substrate used will all influence the bus capacitance.

Most I2C breakout boards are supplied with pull-up resistors already on the breakout board.  In the case where one is not supplied, then a 4.7 K&Omega; resistor is usually good enough for prototyping.

For a more in depth discussion on why pull-up resistors are important and how to determine ideal resistance value, see the [Effects of Varying I2C Pull-Up Resistor (external link)](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors) article.

## Netduino I2C Pins

The Netduino has two pins allocated for the I2C protocol.  These pins are labelled **SD** (for `SDA`) and **SC** (for `SCK`) and can be found above the 14 digital pins on the right of the board as viewed below:

![N3 Pinout Diagram](/Common_Files/Netduino3_Pinout.svg)

# Reading Data

The next article in this series will put the above into practice by [Reading the Temperature from an I2C Temperature Sensor](Part1).

# Further Information

* [This Wikipedia article](https://en.wikipedia.org/wiki/I%C2%B2C) contains a description of the protocol, the various modes and the bus characteristics.
* [Pull up resistors](/Hardware/Reference/Resistors/PullUpAndPullDownResistors/)
* [Effects of Varying I2C Pull-Up Resistor (external link)](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors)