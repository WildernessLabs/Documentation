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

### Ground and Power

In addition to `TX` and `RX`, serial devices will also have ground and power pins/leads. Ground will need to be connected to `GND` on the Meadow board. The power lead will need to be connected either to the Meadow board's `3.3V` rail or `5V` rail, depending on what the device needs are.

If the device is powered by an external power supply, you must make sure the external power's ground is connected to the Meadow `GND` so that their voltages are the same.


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

## Creating and Opening a Serial Port

To use serial in Meadow, first create an [`ISerialPort`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html) from the [`IIODevice`](/docs/api/Meadow/Meadow.Hardware.IIODevice.html) you're using, using the port name, and the desired speed (baud rate), and then call `Open()` to establish a connection with a peripheral:

```csharp
var serialPort = Device.CreateSerialPort(Device.SerialPortNames.Com4, 115200);
serialPort.Open();
```

Optionally, you can also specify the number of data bits in a message frame, parity, and number of stop bits. The datasheet on your serial peripheral should specify what those values should be. The most common is `8n1`, which means `8` data bits, no parity check, or `Parity.None`, and one stop bit, or `StopBits.One`. These are the defaults for the `SerialPort` constructor, but you can specify something different as well:

```csharp
var serialPort = Device.CreateSerialPort(Device.SerialPortNames.Com4, 9600, 7, Parity.Even, StopBits.Two);
serialPort.Open();
```


## Reading and Writing

Once the `SerialPort` is opened, communication is done via reads and writes which pass `byte[]` messages.

### Writing to the Peripheral

To write, call the [`Write(byte[] buffer)`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Write_System_Byte___) method and pass in the bytes to send to the peripheral:

```csharp
var buffer = new byte[] { 0x00, 0x0F, 0x01 };
serialPort.Write(buffer);
```

### Reading from the Receive Buffer

When data from the peripheral is received, it's placed in an internal [circular recieve buffer](https://en.wikipedia.org/wiki/Circular_buffer). The simplest way to read the data from that buffer is to call the [`Read(byte[] buffer, int offset, int count)` method](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Read_System_Byte___System_Int32_System_Int32_), passing in a buffer to read the bytes into, as well as the start index and the number of bytes to read. 

For example, the following code will read 7 bytes from the buffer:

```csharp
byte[] response = new byte[7];
this.serialPort.Read(response, 0, 7);
```

Read will also remove (dequeue) those bytes from the buffer. If you want to read from the buffer without removing the data, you can use the [`Peek()` method](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Peek).

#### ReadToToken()

If the received data is separated by a known token, such as a new line indicator (`/n`), you can use the [`ReadToToken(byte token)`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_ReadToToken_System_Byte_) method to automatically read the bytes until the token is found.

#### Receive Buffer

By default, the `SerialPort` is created with a `4,096` byte receive buffer, but that size can be set during port construction.

### Event Notifications

The `SerialPort` also has a [`DataReceived` event](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_DataReceived) that is raised when data is present.

**However, that functionality is currently broken, so for now, you must manually poll the buffer to see if there is data.**

### Additional APIs

There are a number of other APIs available on serial ports, please see the [`ISerialPort` API documentation](http://beta-developer.wildernesslabs.co/docs/api/Meadow/Meadow.Hardware.ISerialPort.html) for more details.
