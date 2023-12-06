---
layout: Hardware
title: Breadboarding, Modules, and Simulation.
subtitle: Taking the first steps in hardware design with early breadboard prototyping and simulation.
---

While we usually bias towards spinning a custom PCB for anything of complexity, breadboarding is a great way to design, build, and validate parts of circuits.

![Photo of a Meadow board connected to a breadboard with a display and three buttons with resistors.](Breadboard_Prototype.jpg)

## Attacking the Problem; Break it Apart

In fact, the first step in designing a hardware solution (or software for that matter) is to examine the challenge you're trying to solve and breaking it into pieces. In making a list of the constituent parts and then attacking them individually, you can reduce overall complexity and get a better handle on the scope of the project.

## Starting with Pre-made Modules

Fortunately these days, you can find high-quality, breadboard-friendly, pre-made _modules_ and _breakouts_ for most IoT peripherals and the hardware scenarios that they address. For instance, [SparkFun](https://www.sparkfun.com/) and [Adafruit](https://www.adafruit.com/) are industry leaders in such hardware and have a vast library of sensors, displays, motor drivers, GNSS (GPS) sensors, servos, and nearly anything else you'll need. 

For instance, the picture below comes from on of our [Hackster Projects](https://www.hackster.io/wilderness-labs/make-a-basic-level-with-an-mpu6050-four-leds-and-meadow-53a883) and illustrates a breadboard version of a GY521 Gyroscopic sensor breakout:

![Video of a Meadow board connected to a breadboard with a gyroscopic sensor that controls four LEDs, based on how the board is tilted.](https://hackster.imgix.net/uploads/attachments/1025194/gif-191126_145108_zBZOkanNw3.gif)

These modules typically have all necessary support circuitry to support the particular peripheral already on the board, and they will typically have a header that is sized perfectly to fit into a breadboard.

### Source Files and Documentation

Additionally, they almost always have published schematic and design sources, so that when you do decide to integrate the components directly into your custom circuit, you can use the module designs as a reference. Adafruit, SparkFun, and others also have excellent documentation.

### Robotics, Motors, and More

There are also providers like [DFRobot](https://www.dfrobot.com/) and [Pololu](https://www.pololu.com/) that specialize in robotics, motors, and other components.

### Asian (Chinese) Suppliers

Reasonable facsimiles of many of these modules can be found cheaper (and in bulk) from Asian (primarily Chinese) suppliers on [AliExpress](https://www.aliexpress.com/). 

A word of caution, however; while we've had almost no issues with high-quality modules from Adafruit, Sparkfun, or other reputable designer/suppliers, if you're buying in bulk from Chinese suppliers, make sure to first order a small quantity and test them first. They're typically of acceptable quality, but you can find the occasional low-quality part that will cause grief. Additionally, if you're shipping anywhere outside of China, the shipping costs will almost always exceed the price difference on low quantities.

## Circuit Simulation

Another aspect of the early stage of hardware design is circuit simulation. This can be especially useful if you're spinning logic circuits that control or amplify power and you want to quickly test a design before you actually build it.

![Screenshot of an example circuit schematic diagramed in the iCircuit simulation software.](../../../Tutorials/Electronics/Part5/Circuit_Software/iCircuit.png)

For this, there are a number circuit simulators available, a couple very good ones are:

 * **[iCircuit App](http://icircuitapp.com/)** - Commercial, yet affordable, high quality, easy to use circuit simulator available for iOS, macOS, Windows, and Android.
 * **[LTSpice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html)** - A free circuit simulator for Windows and macOS.

## [Next: Printed Circuit Boards](/Hardware/Fundamentals/Introduction_to_Hardware_Design/Printed_Circuit_Boards_(PCBs))