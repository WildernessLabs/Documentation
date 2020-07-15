---
layout: Meadow
title: Input/Output (IO)
subtitle: Meadow Basics
---

# Input/Output (IO)

IO is a big part of what makes Meadow magical. Meadow boards expose a wide variety of ways to control and interact with external peripherals and hardware via _Input/Output_ (IO) ports.

## Pins + Connectors

IO ports are exposed physically on the board via pins and other connectors. These physical connections can be accessed from your application code to read sensors, listen to button presses, light LEDs, drive motors, communicate with other systems, and lots more.

Many of the pins on a Meadow board are multifunction, which means that they can serve as different types of IO, depending on how they're configured in code.

## Types of IO

Meadow IO ports are generally divided into two categories: _Digital_ and _Analog_. There is also another type of IO, _Power_, which is discussed in the [power guide](Power).

Digital and analog refer to the type of electrical signal used; either `HIGH`/`LOW` for digital, or a range of voltages for analog, and they're used for different things.

### [Digital IO](/Meadow/Meadow_Basics/IO/Digital/)

Digital IO is often referred to as _General Purpose, Input/Output_ or GPIO.

Digital ports can be set to be `HIGH` (powered at `3.3V`), or `LOW` (grounded at `0V`) which correspond to digital `1` and `0`, respectively. They can also be setup as input ports which can read signal inputs to know if they're `HIGH`, `LOW`, and can also raise notifications on change, via _interrupts_.

#### Digital Communications Protocols

Additionally, the digital ports have built-in support for a host of different types of common digital [communication protocols](/Meadow/Meadow_Basics/IO/Digital/Protocols/) including:

* **[I2C](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C)** (Inter Integrated Circuit)
* **[SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI)** (Serial Peripheral Interface)
* **[UART](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART)** (Serial)
* **[CAN](/Meadow/Meadow_Basics/IO/Digital/Protocols/CAN)** (Controller Area Network)
* **[I2S](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2S)** (Integrated Inter-IC Sound Bus)

<!--
| Protocol | Characteristics                                                |
|----------|----------------------------------------------------------------|
|   I2C    | Two wires<br/>Short distance<br/>Low speed<br/>Can support multiple devices. |
|   SPI    | Minimum of two wires, often more<br/>High speed<br/>Can support multiple devices. |
|  Serial  | Low speed<br/>Used for communication between boards<br/>Can be used to communicate with on board devices<br/>Generally supports only one device per COM channel.  |
-->

### [Pulse-Width-Modulation (PWM)](/Meadow/Meadow_Basics/IO/Digital/PWM/)

Additionally, digital output ports can be used to generate a _Pulse-Width-Modulation_ (PWM) signal, which approximates an intermediate voltage between `LOW` or `HIGH` by switching between ON and OFF very quickly. PWM signals are frequently used to control the brightness of LEDs, as well as serve as the control signal for precision motors such as servos and stepper motors.

### [Analog IO](/Meadow/Meadow_Basics/IO/Analog/)

Analog ports can operate at a range of voltages between `0V` and `3.3V`, which is especially useful when reading analog sensors that supply their data as a voltage reading, rather than a digital signal. For instance an analog temperature sensor that is able to detect temperatures from `0ºC` to `100ºC` might output a voltage of `1.6V` (halfway between `0V` and `3.3V`) for `50º`.

### I/O Power Tolerance

**Important:**

Both the digital and analog I/O on the Meadow F7 board nominally operate at a range of `0V` to `3.3V`. However, when they are configured for _digital_ operation, they are `5V` _tolerant_; meaning that they can accept input voltages up to `5V`. When they are configured for _analog_ operation, they are only `3.3V` tolerant, and any input voltages higher than that, may burn out that I/O, and or damage the chip.

For reading analog voltages higher than `3.3V`, see the [analog I/O guide](/Meadow/Meadow_Basics/IO/Analog/)


### F7 Micro IO Pinout

GPIO ports are available via pins (as well as the onboard LED) on the Meadow F7 Micro, and many of these pins are actually overloaded to support multiple functions, as shown below:

![Meadow pinout diagram showing pins used for multiple functions](/Common_Files/Meadow_F7_Micro_Pinout.svg){:standalone}

The function that they serve depends on how they are configured when a _port_ is instantiated on one of the pins. For instance, pin `D00` can be configured to be used a digital input or output, or as the `RX` (receive) half of a Serial UART port available as "COM4".


### Pins, Ports, and ChannelInfos

When working with IO in Meadow, there are three different terms/concepts to be aware of:

* **[IPin](/docs/api/Meadow/Meadow.Hardware.IPin.html)** - Represents a physical connection point on a device, such as pin `D01`.
* **[IPort](/docs/api/Meadow/Meadow.Hardware.IPort.html)** - Represents the underlying IO feature that allows communication, such as a `Meadow.Hardware.DigitalInputPort` which reads digital input signals on a particular pin.
* **[IChannelInfo](/docs/api/Meadow/Meadow.Hardware.IChannelInfo.html)** - Describes the capabilities of a particular pin or port, for instance, whether or not a pin supports digital interrupts (a notification when the state changes).

### IIODevice

A device that supports IO (such as the F7 Micro device itself, or an external IO Expander) is represented by an @"Meadow.Hardware.IIODevice", which exposes a collection of @"Meadow.Hardware.IPin" objects.

IO Devices are self describing with a mapping of `Device` > `Pins` > `Channels`. For instance, the following Meadow [sample code](https://github.com/WildernessLabs/Meadow_Samples/tree/master/Source/MeadowSamples/GpioInterrogation) enumerates all the pins and what type of IO is possible for each pin:

```csharp
foreach(var pin in Device.Pins.AllPins) {
   Console.WriteLine("Found pin: " + pin.Name);
   foreach (var channel in pin.SupportedChannels) {
            Console.WriteLine("Contains a " + channel.GetType()
            + "channel called: " + channel.Name + ".");
   }
}
```

Here's an excerpt from the output the above code returns:

```bash
Found pin: A05
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PC1.
Contains a Meadow.Hardware.AnalogChannelInfochannel called: ADC1_IN11.

Found pin: D00
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PI9.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_RX.

Found pin: D01
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PH13.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM8_CH1N.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_TX.
```

With these [`IChannelInfo`](xref:Meadow.Hardware.IChannelInfo) objects, the IO is also self-documenting, and you can see what kind of ports are available from each pin without having to refer to the IO pinout diagram.

### Creating Ports

When interacting with peripherals, the actual control and interaction happens via @"Meadow.Hardware.IPort" objects, which are typically created via the device from one or more pins:

```csharp
IDigitalOutputPort redLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLedRed);
```

#### Meadow F7 Micro Pinout Table

The following table lists all the accessible pins on the Meadow F7 Micro dev board and their functions:

| Meadow Pin Name | MCU Pin Name | Digital Channel | Analog Channel | PWM Timer Channel | Interrupt Group |
|-----------------|--------------|-----------------|----------------|-------------------|------------|
| A00 | PA4 | PA4 | AC1_IN4 | | 4 |
| A01 | PA5 |  PA5 | ADC1_IN5 | | 5 |
| A02 | PA3 |  PA3 | ADC1_IN3 | | 3 |
| A03 | PA7 |  PA7 | ADC1_IN7 | | 7 |
| A04 | PC0 |  PC0 | ADC1_IN10 | | 0 |
| A05 | PC1 |  PC1 | ADC1_IN11 | | 1 |
| SCK | PC10 |  PC10 |   | | |
| MOSI | PB5 |  PB5 |   | | 5 |
| MISO | PC11 |  PC11 |   | | 11 |
| D00 | PI9 |  PI9 |   |  | 9 |
| D01 | PH13 |  PH13 |   |  |  |
| D02 | PC6 |  PC6 |   | 1 | 6 |
| D03 | PB8 |  PB8 |   | 3 | 8 |
| D04 | PB9 |  PB9 |   | 4 | 9 |
| D05 | PC7 |  PC7 |   | 2 | 7 |
| D06 | PB0 |  PB0 | ADC1_IN8 | 3 | 0 |
| D07 | PB7 |  PB7 |   | 2 | 7 |
| D08 | PB6 |  PB6 |   | 1 | 6 |
| D09 | PB1 |  PB1 | ADC1_IN9 | 4 | 1 |
| D10 | PH10 |  PH10 |   | 1 |  |
| D11 | PC9 |  PC9 |   | 4 | 9 |
| D12 | PB14 |  PB14 |   | 1 | 14 |
| D13 | PB15 |  PB15 |   | 2 | 15 |
| D14 | PG3 |  PG3 |   |   | 3 |
| D15 | PE3 |  PE3 |   |   | 3 |
| OnboardLedRed | PA2 |  PA2 |   | 3 | |
| OnboardLedGreen | PA1 |  PA1 |   | 2 | |
| OnboardLedBlue | PA0 |  PA0 |   | 1 | |


## Meadow.Foundation

When building Meadow applications, most of the time, you'll use high-level peripheral drivers via Meadow.Foundation instead of interacting with ports directly, as we'll explore in the next section.

## [Next - Meadow.Foundation](/Meadow/Meadow.Foundation/)
