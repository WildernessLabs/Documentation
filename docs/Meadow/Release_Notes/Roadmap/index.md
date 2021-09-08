---
layout: Meadow
title: Meadow Roadmap
subtitle: Planned features and functionality for Meadow v1.0 and beyond.
---

## Meadow v1.0 Roadmap

These are the high priority features that we're working on for v1.0, which we anticipate shipping in Q3 (Fall) of this year. These features will be rolled out in point-betas between now and v1.0.

As we roll out these features, they'll be deleted from this list.

 * **SMT Production Module** - Meant for high-volume device integration, the SMT production module provides the same core compute of the F7 developer module, in a smaller, SMT form factor. It removes USB and power, assuming those will be provided by a breakout board in the production device. It also adds additional ethernet and SD card support.
   * **Ethernet Support** - Dual-port ethernet for industrial daisy chaining.
   * **SD Card Support** - Integrated SD card support.
 * **Debugging** - Step-by-step debugging integration will be available in VS for Windows, VS for Mac, VS Code, and at the command line.
 * **Configuration Files** - The ability to ship device and application configuration files, in YAML, alongside the application code to provide automatic configuration of WiFi, device name, app settings, etc.
 * **Push Messaging** - The ability to send secure, reliable messages from the CLI and Meadow.Cloud to specific or groups of devices.
 * **Over-the-Air (OtA) Updates** - Reliably and securely update a Meadow with a new Firwmare/OS/Application build in the field touch-free.
 * **SSL** - While we currently have client SSL working, we are working on client certificate validation, and also SSL Server functionality so you can run an SSL enabled web site or web API on the device.
 * **Final Meadow.Foundation Cleanup** - Meadow.Foundation is about 95% of the way to v1.0, but there are a few remaining drivers and bits to clean up for v1.0.
 * **Final Meadow.Core API Cleanup** - Meadow.Core is also nearly to v1.0, but there are few small remaining API clean ups to do to make it 100% internally consistent.
 * **File Linking** - Currently, when you deploy a Meadow application, we don't do any linking (AKA "Tree-Shaking") to remove unused portions of code, so deployed dlls are large. We're working on integrating the Mono/DotNET linker to cleanout the cruft and to reduce both deployed code size and speed up deployment.
 
### v1.0 Bonus Features

In addition to the features above, which are all gating for a v1.0 release, these features below may either ship by v1.0, or shortly after, depending on the timing of v1.0.
 
 * **.NET 6.0 Support** - We plan on starting our move to .NET 6 from .NET Standard 2.1 later this summer. Depending on the stability of .NET 6, we may ship it before v1.0.
 * **Power & Sleep APIs** - The ability to put the device to sleep and wake up on schedule, or from an external interrupt.
 * **CAN Bus** - Controller-Area-Network (CAN) bus support. Used in vehicles and less-commonly, in industrial hardware.
 * **Partial Ahead-of-Time (AoT) Compilation** - Our first step toward full-AoT will likely involve shipping pre-AoT compiled binares of mscorlib, Meadow.Core, etc. However, we have some investigation to do here to see if there will be interop costs.
 * **Meadow.OS TimeZone Support** - In order to fully support TimeZones in Meadow.OS we need to add TimeZone support to NuttX and then expose it in a POSIX way to Mono.

## Post v1.0 Roadmap

Once v1.0 has shipped, we will be able to turn our attention to other high-priority features such as BLE client APIs, full-AoT, and a slew of IO features.

 * **Bluetooth Client APIs** - While BLE server support is up, in order to support scanning and connection to other Meadow and Bluetooth servers.
 * **Full AoT Compilation** - This includes AoT compilation of all managed code, including user application, etc. Full AoT backend support is nearly complete already, but there is a lot of work to do around compilation tooling, as it will require us to ship `clang` as part of Meadow.CLI and call that during build time to take the LLVM outputs from the Mono-AoT compiler into Thumb2 for our microcontroller.

In addition to the above, we have a number of hardware IO specific features that we'd like to expose to managed code for use-case specific needs.

### IO Features
 * **IO Direct-Memory-Access (DMA)** - DMA will add a significant performance increase for interrupts and bus operations, especially when large amounts of data are pushed over SPI.
 * **DMA2D/Hardware Accelerated 2D Graphics** - In additional to general DMA, the F7 chip has hardware accelerated graphics operations that we'd like to expose to provide faster 2D drawing capabilities.
 * **Frequency Timer** - We already have PWM output exposed, but we'd also like to expose the F7's ability to sample incoming frequencies. This can be used for hall sensors, and the like.
 * **Low Power Timer/Pulse Counter** - The F7 also has the ability to count pulses, even when in low-power mode, and we'd like to expose this as a specalized port.
 * **Quadrature Encoding/Capture-Compare** - While rotary encoders work excellent today, we'd like to expose the underlying quadrature encoding functionality to have realtime support for encoding motors running at high speed.
 * **UART over USB** - Currently, we use UART/Serial over USB for deployment, debugging, etc., but we'd like to expose a second UART over USB channel so that user applications can communicate with a USB host via UART/serial.
 * **Inter-IC Sound (I2S)** - The F7 has advanced support for I2S, which provides a bus interface for sound input and output. We'd like to expose this as a specialized port.


## Need Other Features? Need a feature accelerated?

While there's a lot on this roadmap, we understand that we may not have your specific needs addressed, or a particular feature needs to be accelerated to support your commercial interest.

If there is a feature that you need that's not on this list, please file an issue at the [Meadow_Issues repo](https://github.com/WildernessLabs/Meadow_Issues/issues) and explain, with as much detail as possible, what feature you need, as well as the use case.

If you have a commercial project and you need a feature moved up in the timeline, please reach out to us via [email](mailto:sales@wildernesslabs.co) and let us know the same.