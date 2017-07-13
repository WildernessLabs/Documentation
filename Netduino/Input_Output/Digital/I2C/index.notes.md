---
title: I2C
---

[I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C)  is a communication protocol allowing bi-directional communication between two or more devices using only two signal wires plus the ubiquitous power and ground connections.

> Note: Word choice on 'ubiquitous;' I don't think that's what you're trying to communicate here. Maybe something like "using only two signal wires (in addition to power and ground).

> Missing: the _why_. Something like, "I2C has a benefit over similar protocols in that it can support multiple devices on the same communication wires, known as a _bus_."

This series of articles will:

> Let's call these guides. "This guide will cover:"

* Provide an overview of the I2C communication protocol
* Demonstrate [reading data from an I2C temperature sensor](Part1/)
* Reconfigure the I2C temperature sensor by [writing data to the I2C temperature sensor](Part2)

> Let's rename the /part1/ folder to /Reading/ and /Part2/ to /Writing/. It'll be much clearer and help with SEO. I think i'm going to have to do a similar thing with the electronics tutorial i'm working on. More work for us, but better for customers and google.

## Overview

Pictorially, a Netduino connected to two I2C devices looks like this:

> Maybe: "I2C devices are connected in serial to Netduino via the `SCK` and `SDA` pins, and are addressed via unique addresses on the communication bus. The following diagram illusrates a typical setup for I2C devices connected to a Netduino:"

![I2C Bus Master / Slave Illustration](I2CBusIllustration.svg)

Some important points to note:

> Maybe: "In this circuit:"

* The Netduino is a _master_ device talking to two other devices (known as _slaves_)
* Each _slave_ device has an address.  This allows the _master_ device to choose which of the _slaves_ it is communicating with
* The two signal (bus) wires used are usually labelled `SDA` (Data) and `SCK` (Clock)
* `SDA` and `SCK` are common to all devices on the bus
* [Pull up resistors](/Hardware/Reference/Resistors/PullUpAndPullDownResistors/) connect the signal lines to V<sub>cc</sub>

> Explain the pull up resistors in more detail in that doc you're working on, but here, i think it needs the briefest of comment on why they're needed.

I2C is normally used to connect low speed devices over short distances.  Compare this to the main characteristics of [SPI](../SPI/) and [Serial](../UART) communications:

| Protocol | Characteristics                                      |
|----------|------------------------------------------------------|
|   I2C    | Two wires<br/>Short distance<br/>Low speed           |
|   SPI    | Minimum of two wires, often more<br/>High speed      |
|  Serial  | Low speed</br>Used for communication between boards  |

> man, this is great. I wonder if we should bubble this up, and copy it to the [Digital IO page](http://developer.wildernesslabs.co/Netduino/Input_Output/Digital/), so folks have an overview up there, too.

### Clock Signal `SCK`

Typical clock speeds are 100KHz for low speed devices with speeds of 3.4MHz possible for high speed devices.  Common speeds encountered by hobbyists are 100KHz and 400KHz.

> just hobbyists? or is that just typical for most I2C stuff?

The clock signal determines the rate at which the bits can be transferred between the _master_ and _slave_ devices.

> bits is technically correct, but perhaps "data" would be more meaningful?

### Data Signal `SDA`

Both _master_ and _slave_ can transmit and receive on the bus.

## Communicating with I2C Devices

If it worth taking a short look the sequence of events in a message exchange between the _master_ and _slave_ device.  From a high level, the following events take place:

> tonally, i would drop the "it's worth taking a short look," and instead just right into something like: "I2C communication occurs via the following prototcol:" or something similar. 

* _Master_ device sends a start signal
* _Master_ transmits one byte on the bus.  This byte indicates the address of the _slave_ device it wishes to talk to and the mode of operation (read or write)
* _Master_ sends data to the _slave_ device
* If reading, the _salve_ will send data back to the _master_ device.  If writing then the _slave_ device will act upon the data received accordingly
* _Master_ sends a stop signal on the bus

The start and stop signals are taken care of by the .NET Microframework and are not considered in detail in this article.  A comprehensive description can be found in the Wikipedia article, [I2C (Inter-Integrated Circuit)](https://en.wikipedia.org/wiki/I%C2%B2C).

> I wonder if this is a good place for a code snippet? I haven't done any I2C stuff, but we found that including code snippets early, when doing conceptual explanations can really help folks to grok it. Use your judgement, but consider a snippet to clarify and make concrete.

### Device Addresses

The use of multiple devices on the single bus is made possible through device addresses.  Each _slave_ device on the bus is allocated a specific address by the manufacturer of the device.

The _master_ initiates communication with a _slave_ device by first transmitting the _slave_ device address on the data line (`SDA`).  The _slave_ device that has its address set to the address transmitted now knows that all data transmitted between now and the stop bit is intended for itself.

So what happens if two devices have the same address?  Both devices will interpret the sending of the start signal and the address as a signal to listen to the _master_ device.  Both devices are now reading the data when the _master_ only want to talk to one of them.  This is known as an address collision.

> Instead of "so what happens?" rhetoric, perhaps: "When two devices configured with the same address are connected on the same bus, an _address collision_ occurs. Both devices will interpret the sending of the start..."

In order to overcome this, some devices allow the address to be configured.  This is achieved using one or more _address pins_ which would be tied low or high depending upon the device and the address required.  Addresses are 7-bits in length.

> consider: "To prevent address collisions, some devices allow..."

```CSharp
I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
I2CDevice bme280 = new I2CDevice(new I2CDevice.Configuration(0x77, 50));
```

> I would append "Addresses are 7-bits in length" and this code to the first paragraph in this section.

The code above will be discussed in more detail in the following articles, [Reading Data from an I2C Temperature Sensor](Part1/) and [Writing Data to an I2C Temperature Sensor](Part2).

The use of seven bit addresses restricts the number of devices to 128 per bus.

> I would move that above, too. Also, in practice 128 is nary impossible, right? So maybe say something like, "The use of 7-bit addresses allows a theoretical limit of 128 unique addresses, and there for 128 devices on a single I2C bus. However, in practice, the upper limit is much lower, because of [impedance/capacitance/gnomes].."

### Read / Write Bit

A Master device will start the communication session by sending the address of the device it wishes to communicate with along with a single bit that indicates the mode of the communication: _read_ or _write_.  The combination of the 7-bit address and the single read / write bit gives an eight bit packet header.

> A little unclear on first glance, I would consider tying it to the previous section a little better by reversing the first part: "In addition to an address, the master device will start a communication session by sending either a _read_ or _write_ bit, to indicate its intended communication mode. The combination of 7-bit....."

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