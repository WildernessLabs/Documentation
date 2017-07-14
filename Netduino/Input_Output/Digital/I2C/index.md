---
title: I2C
---

[I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C)  is a communication protocol allowing bi-directional communication between two or more devices using only two signal wires (in addition to power and ground).

> Missing: the _why_. Something like, "I2C has a benefit over similar protocols in that it can support multiple devices on the same communication wires, known as a _bus_."

This guide will cover:

* Provide an overview of the I2C communication protocol
* Demonstrate [reading data from an I2C temperature sensor](Reading/)
* Reconfigure the I2C temperature sensor by [writing data to the I2C temperature sensor](Writing/)

## Overview

I2C devices are connected in serial to Netduino via the `SCL` and `SDA` pins, and are addressed via unique addresses on the communication bus. The following diagram illustrates a typical setup for I2C devices connected to a Netduino:

![I2C Bus Master / Slave Illustration](I2CBusIllustration.jpg)

In this circuit:

* The Netduino is a _master_ device talking to two other devices (known as _slaves_)
* Each _slave_ device has an address.  This allows the _master_ device to choose which of the _slaves_ it is communicating with
* The two signal (bus) wires used are usually labelled `SDA` (Data) and `SCL` (Clock)
* `SDA` and `SCL` are common to all devices on the bus
* `SDA` and `SCL` are [open drain outputs](https://en.wikipedia.org/wiki/Open_collector) and so require [pull up resistors](/Hardware/Reference/Components/Resistors/PullUpAndPullDownResistors/) to connect the two lines to V<sub>cc</sub>

I2C is normally used to connect low speed devices over short distances.  Compare this to the main characteristics of [SPI](../SPI/) and [Serial](../UART) communications:

| Protocol | Characteristics                                                                                            |
|----------|------------------------------------------------------------------------------------------------------------|
|   I2C    | Two wires<br/>Short distance<br/>Low speed                                                                 |
|   SPI    | Minimum of two wires, often more<br/>High speed                                                            |
|  Serial  | Low speed<br/>Used for communication between boards<br/>Can be used to communicate on to on board devices  |

### Clock Signal `SCL`

Typical clock speeds are 100KHz for low speed devices with speeds of 3.4MHz possible for high speed devices.  Common speeds encountered are 100KHz and 400KHz.

The clock signal determines the rate at which data can be transferred between the _master_ and _slave_ devices.

### Data Signal `SDA`

Both _master_ and _slave_ can transmit and receive on the bus.

## Communicating with I2C Devices

If it worth taking a short look the sequence of events in a message exchange between the _master_ and _slave_ device.  From a high level, the following events take place:

> tonally, i would drop the "it's worth taking a short look," and instead just right into something like: "I2C communication occurs via the following prototcol:" or something similar. 

1. _master_ device sends a start signal
2. _master_ transmits one byte on the bus.  This byte indicates the address of the _slave_ device it wishes to talk to and the mode of operation (read or write)
3. _master_ sends data to the _slave_ device
4. _slave_ acts or responds to the _master_
	* If reading, the _slave_ will send data back to the _master_ device
	* If writing then the _slave_ device will act upon the data received accordingly
5. _master_ sends a stop signal on the bus

The start and stop signals are taken care of by the .NET Microframework and are not considered in detail in this article.  A comprehensive description can be found in the Wikipedia article, [I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C).

> I wonder if this is a good place for a code snippet? I haven't done any I2C stuff, but we found that including code snippets early, when doing conceptual explanations can really help folks to grok it. Use your judgement, but consider a snippet to clarify and make concrete.

### Device Addresses

The use of multiple devices on the single bus is made possible through 7-bit device addresses.  Each _slave_ device on the bus is allocated a specific address by the manufacturer of the device.

The _master_ initiates communication with a _slave_ device by first transmitting the _slave_ device address on the data line (`SDA`).  The _slave_ device that has its address set to the address transmitted now knows that all data transmitted between now and the stop bit is intended for itself.

If two devices have the same address both devices will interpret the sending of the start signal and the address as an indication to listen to the _master_ device.  Both devices are now reading the data when the _master_ only want to talk to one of them.  This is known as an address collision.

To prevent address collision, some devices allow the address to be configured.  This is achieved using one or more _address pins_ which would be tied low or high depending upon the device and the address required.

```CSharp
I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
I2CDevice bme280 = new I2CDevice(new I2CDevice.Configuration(0x77, 50));
```

The code above will be discussed in more detail in the following articles, [Reading Data from an I2C Temperature Sensor](Reading/) and [Writing Data to an I2C Temperature Sensor](Writing/).

The use of seven bit addresses restricts the number of devices to 128 per bus although in practice the number of devices connected to the bus is much lower.

### Read / Write Bit

In addition to the 7 address bits, the _master_ device will also send a single bit that indicates the mode of the communication: _read_ or _write_.  The combination of the 7-bit address and the single read / write bit gives an eight bit packet header.

## Pull-up Resistors

Both of the bus lines (`SDA` and `SCL`) require [pull up resistors](/Hardware/Reference/Components/Resistors/PullUpAndPullDownResistors/) to be connected to them.  The value of the pull-up resistor will depend upon the capacitance of the bus.  The number of components on the board, type of substrate used will all influence the bus capacitance.

Most I2C breakout boards are supplied with pull-up resistors already on the breakout board.  In the case where one is not supplied, then a 4.7 K&Omega; resistor is usually good enough for prototyping.

For a more in depth discussion on why pull-up resistors are important and how to determine ideal resistance value, see the [Effects of Varying I2C Pull-Up Resistor (external link)](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors) article.

## Netduino I2C Pins

The Netduino has two pins allocated for the I2C protocol.  These pins are labelled **SD** (for `SDA`) and **SC** (for `SCL`) and can be found above the 14 digital pins on the right of the board as viewed below:

![N3 Pinout Diagram](/Common_Files/Netduino3_Pinout.svg)

# Reading Data

The next section in this guide will put the above into practice by [Reading the Temperature from an I2C Temperature Sensor](Reading/).

# Further Information

* [This Wikipedia article](https://en.wikipedia.org/wiki/I%C2%B2C) contains a description of the protocol, the various modes and the bus characteristics.
* [Pull up resistors](/Hardware/Reference/Components/Resistors/PullUpAndPullDownResistors/)
* [Effects of Varying I2C Pull-Up Resistor (external link)](http://dsscircuits.com/articles/effects-of-varying-i2c-pull-up-resistors)