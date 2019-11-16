---
layout: Meadow
title: Standard Serial 
subtitle: Serial communications over RS-232/UART.
---

Standard serial, typically referred to as RS-232 or UART (Universal Asynchronous Receiver Transmitter) is a moderate-speed, reliable, old-school, digital protocol used to communicate with a single device, using two wires:

![](Serial(UART)_Circuit.svg){:standalone}

Depending on the hardware involved, serial can be used in extremely noisy industrial environments, over long distances; up to 60 meters (200 feet). 

## Hardware

Standard serial uses two lines for communication; a transmit (`TX`) line for sending messages to the peripheral, and a receive (`RX`) for listening to messages sent from the peripheral. 

### Meadow TX => Peripheral RX, Meadow RX => Peripheral TX

It's important to note that the `TX` pin on the Meadow board should connect to the `RX` pin on the peripheral, and the `RX` pin on the Meadow board should connect to the `TX` pin on the peripheral.


### UART/TTL vs RS-232

The RS-232 specification is a complete specification that includes hardware designs, electrical characteristics, and protocol specifications. 

However, within that specification are generally two different flavors that describe the electrical characteristics of the protocol; UART/TTL & RS-232.

Serial has been around for a long time; before USB, it used to be a standard way for computers to talk to various peripherals such as keyboards and mice and connected to the serial port on a computer via an RS-232 cable with a connector like this:

![](RS232_Cable.svg){:standalone}

And many industrial peripherals that use standard serial communications still use RS-232 connectors. 

#### Voltage Difference

RS-232 specifies that the voltages that signify `0` can be anywhere from `3V` to `15V`, and voltages that signify a `1` can range from `-3V` to `-15V`.

However, most modern microcontrollers have UART chips that operate at a TTL (Transistor-Transistor Logic) level of voltages that typically use `OV` to signify `0`, and either `3.3V` or `5V` to signify `1`.

**Attempting to interface an RS-232 voltage level with a TTL level microcontroller will usually lead to the quick destruction of that port on the microcontroller, or even the entire microcontroller.**

#### TTL/RS-232 Converters

Fortunately, many modern serial peripherals operate on TTL voltage levels. However, most industrial serial peripherals still use RS-232, which allows them to operate in noisy environments.

When using an RS-232 peripheral, the signal voltages must be level-shifted and inverted (high voltage in RS-232 signifies `0`, whereas low-voltage at TTL signifies `0`) in order to communicate. Fortunately there are low cost ICs (Integrated Circuits) that do this, such as the [MAX232](https://octopart.com/search?q=max232) chip.

Additionally, [Sparkfun has an RS-232 to TTL Shifter breakout board](https://www.sparkfun.com/products/449) that not only converts RS-232 to TTL levels, but also includes an onboard RS-232 connector:

![](SparkFun_RS232_Shifter.svg){:standalone}

## Meadow Serial Ports

The Meadow F7 Micro has two exposed serial ports, named `COM4` and `COM1` with the following pinout:

 * **COM4** - `D00` = `RX`, `D01` = `TX`
 * **COM1** - `D13` = `RX`, `D12` = `TX`

![Illustration of a Meadow F7 Micro board with COM4 on pins D00 and D01, and COM1 on pins D12 and D13](/Common_Files/Meadow_F7_Micro_Pinout.svg){:standalone}

# Using the Meadow Serial API

## Creating a Serial Port

To use serial in Meadow, first create an [`ISerialPort`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html) from the [`IIODevice`](/docs/api/Meadow/Meadow.Hardware.IIODevice.html) you're using, using the port name, and the desired speed:

```csharp
var serial = Device.CreateSerialPort(Device.SerialPortNames.Com4, 115200);
```

## Reading and Writing

[need to talk about the API hotness]


