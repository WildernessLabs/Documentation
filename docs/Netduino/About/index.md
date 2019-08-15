---
layout: Netduino
title: About Netduino
subtitle: Features of Netduino, pinout, and power requirements.
---

## Overview

Netduino is an [open source](/Source/) hardware platform that runs applications built with the .NET MicroFramework. Applications can be built on Windows (with Visual Studio), or on Mac OS (with either Visual Studio for Mac or Xamarin Studio).  Netduino can be used to build nearly any _Connected Thing_ you can dream up.

It's similar in concept to the [Arduino](http://arduino.cc) platform, but is generally more powerful and instead of writing applications in C/C++ or _Wiring_ (essentially, C++ without header files), applications are written in C#, which brings powerful, high-level language constructs to the toolbox such as threading, event handling, automatic garbage collection, and more.

Netduino provides a robust hardware reference platform that allows easy experimentation and rapid prototyping for hobbyists and professionals alike. Netduino has been used by folks to build home automation gadgets, industrial machinery like CNCs, and more.  

The Netduino family consists of the Netduino 3, Netduino 2, and the original Netduino 1 lines. The original Netduino (1st generation) and Netduino Mini (also 1st generation), have been replaced by the much nore powerful Netduino 2 and 3 lines.

### [Netduino.Foundation](http://Netduino.Foundation)

In addition to the core .NET MicroFramework API, Wilderness Labs has created a powerful framework called [Netduino.Foundation](http://Netduino.Foundation) that adds a massive library of peripheral drivers for things such as sensors, LCD screens, motor controllers, and more, as well as a handcrafted API for accessing them. Netduino.Foundation allows you to build hardware without having to worry about low-level hardware dealings.

## Netduino Models

### Netduino 3

Netduino 3 is offered in 3 different models, the N3 base model, N3 Ethernet model, and the N3 WiFi model; which vary by their internet connectivity mode and their code/flash storage size. The various models and links to buy them can be found at [wildernesslabs.co/netduino](http://www.wildernesslabs.co/Netduino)

#### Features + Pinout

##### Features

All N3 models support [persistent storage](../Input_Output/File_Storage) with SD cards up to 2GB. Both the Ethernet and WiFi models have a Micro SD slot built in to the board. The base model can use SD cards via most [Arduino SD Card add-on shields](https://www.google.com/search?q=arduino+SD+shield&rlz=1C5CHFA_enUS724US724&oq=arduino+SD+shield&aqs=chrome..69i57j0l5.5394j0j7&sourceid=chrome&ie=UTF-8).

The N3 technical specifications are as follows:


| Model       | MCU                | Flash   | RAM     | Network |
|-------------|--------------------|---------|---------|---------|
| N3          | Cortex-M4 @ 168MHz | 384KB   | 164+ KB | n/a     |
| N3 Ethernet | Cortex-M4 @ 168MHz | 1408KB  | 164+ KB | 10/100Mbs Ethernet |
| N3 WiFi     | Cortex-M4 @ 168MHz | 1408KB  | 164+ KB | 802.11b/g/n with SSL/TLS 1.2 Support |

##### Pinout Diagram

For compatibility with Arduino hardware, Netduino has the same header and pin configuration as Arduino. The following diagram illustrates which features are available on which header/pin, as well as the location of major components:

![N3 Pinout Diagram](Netduino3_Pinout.svg){:standalone}


### Netduino 2

Netduino 2 is offered in 2 different models, the N2 base model as well as the N2+, which adds 10Mb Ethernet, The various models and links to buy them can be found at [wildernesslabs.co/netduino](http://www.wildernesslabs.co/Netduino)

#### Features + Pinout

##### Features

Both N2 models support [persistent storage](../Input_Output/File_Storage) with SD cards up to 2GB, and the N2+ has a micro SD slot built-in. The base model can use SD cards via most [Arduino SD Card add-on shields](https://www.google.com/search?q=arduino+SD+shield&rlz=1C5CHFA_enUS724US724&oq=arduino+SD+shield&aqs=chrome..69i57j0l5.5394j0j7&sourceid=chrome&ie=UTF-8).

The N2 technical specifications are as follows:


| Model  | MCU                | Flash   | RAM     | Network |
|--------|--------------------|---------|---------|---------|
| N2     | Cortex-M3 @ 120MHz | 192KB   | 60 KB   | n/a     |
| N2+    | Cortex-M4 @ 168MHz | 384KB   | 100+ KB | 10Mbs Ethernet |

##### Pinout Diagram

For compatibility with Arduino hardware, Netduino has the same header and pin configuration as Arduino. The following diagram illustrates which features are available on which header/pin, as well as the location of major components:

![N2 Pinout Diagram](Netduino2_Pinout.svg){:standalone}


## Powering Netduino

Netduino can be powered either via the built-in USB adapter or the power barrel (VIN). If VIN is present, then that power is used, otherwise, it must be powered via USB.

N3 will accept VIN of 5v to 12v. N2 will accept VIN of 5v to 9v.
