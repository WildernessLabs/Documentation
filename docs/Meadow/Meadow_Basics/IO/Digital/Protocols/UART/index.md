---
layout: Meadow
title: Serial/UART
subtitle: Serial communications over UART/RS-232.
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

When using an RS-232 peripheral, the signal voltages must be level-shifted and inverted (high voltage in RS-232 signifies `0`, whereas low-voltage at TTL signifies `0`) in order to communicate. Fortunately there are low cost ICs (Integrated Circuits) that do this, such as the MAX232 chip.

Additionally, [Sparkfun has an RS-232 to TTL Shifter breakout board](https://www.sparkfun.com/products/449) that not only converts RS-232 to TTL levels, but also includes an onboard RS-232 connector:

![](SparkFun_RS232_Shifter.svg){:standalone}

## Meadow Serial Ports

The Meadow F7 Micro has two exposed serial ports, named `COM4` and `COM1` with the following pinout:

 * **COM4** - `D00` = `RX`, `D01` = `TX`
 * **COM1** - `D13` = `RX`, `D12` = `TX`

![Illustration of a Meadow F7 Micro board with COM4 on pins D00 and D01, and COM1 on pins D12 and D13](/Common_Files/Meadow_F7_Micro_Pinout.svg){:standalone}

# Using the Meadow Serial API

Because serial is a legacy technology, working with it can be a little tricky. In fact, because of this, we have two serial port classes that you can use for serial communications:

 * **`ISerialMessagePort`** - This is a modern, asynchronous take on serial communications that is thread-safe and asynchronous in nature. This is the recommended way to use serial on Meadow for nearly all use cases.
 * **`ISerialPort`** - For legacy uses, this works like traditional serial ports, it's not thread-safe, and care must be taken to make sure that the communications buffer is used appropriately if there are multiple subscribers to its events.

For both classes, creating, opening, and writing to the underlying serial port is effectively the same, but the `ISerialMessagePort` handles reads in an asynchronous fashion, and bundles them into _messages_ that can provide a much easier way of reading data coming in. In contrast, the class `ISerialPort` class must be manually read from when data comes in.

## `ISerialMessagePort`

`ISerialMessagePort` treats incoming data as messages, and will raise a `MessageReceived` event when they arrive. Messages are defined one of two ways:

* **Suffix** - Defines a message as having an unconstrained length, but terminating with a sequence of bytes.
* **Prefix & Length** - Defines a message as starting with a particular sequence of bytes, and having a specified length.

The `ISerialMessagePort` is configured in its constructor to operate in either of those two modes.


### Suffix Delimited Messages

Often times, serial peripherals send varying length messages that are terminated by a sequence. For instance, GPS recievers send NMEA sentences of 
indeterminate length, but each sentence ends with the "newline" suffix of carriage-return and line-feed characters (`\r\n`) as in the following:

```
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPRMC,000049.799,V,,,,,0.00,0.00,060180,,,N*48
$GPVTG,0.00,T,,M,0.00,N,0.00,K,N*32
$GPGGA,162254.00,3723.02837,N,12159.39853,W,1,03,2.36,525.6,M,-25.6,M,,*65
```

#### Instantiating an `ISerialMessagePort` using Suffix Delimited Messages

In this case, the serial message port should be created using the following constructor from the `IIODevice`:

```csharp
ISerialMessagePort CreateSerialMessagePort(SerialPortName portName, byte[] suffixDelimiter, 
    bool preserveDelimiter, int baudRate, int dataBits = 8, Parity parity = Parity.None, 
    StopBits stopBits = StopBits.One, int readBufferSize = 4096);
```

For instance, if we wanted to create a serial port on `COM4` (pins `D00` and `D01` on the F7 Micro) that defines `\r\n` as its suffix delimiter, we 
can use the following code:

```csharp
Device.CreateSerialMessagePort(Device.SerialPortNames.Com4, 
    suffixDelimiter: Encoding.UTF8.GetBytes("\r\n"), preserveDelimiter: true);
```

### Fixed-length, Prefix Delimited Messages

Sometimes, serial peripherals will send fixed-length messages that have a common prefix as in the following:

```
$0480880
$0420029
$2083992
```

#### Instantiating an `ISerialMessagePort` using Prefix Delimited Messages

In this case, the serial message port should be created using the following constructor from the `IIODevice`:

```csharp
ISerialMessagePort CreateSerialMessagePort(SerialPortName portName, byte[] prefixDelimiter,
    bool preserveDelimiter, int messageLength, int baudRate = 9600, int dataBits = 8,
    Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 4096);

```

For instance, if we wanted to create a serial port on `COM4` (pins `D00` and `D01` on the F7 Micro) that defines `$` as its prefix delimiter, and has
a 6 byte message length, we can use the following code:

```csharp
Device.CreateSerialMessagePort(Device.SerialPortNames.Com4, 
    prefixDelimiter: Encoding.UTF8.GetBytes('$'), messageLength: 8, preserveDelimiter: true);
```

## Legacy `ISerialPort`

To use the classic Serial Port in Meadow, first create an [`ISerialPort`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html) from the [`IIODevice`](/docs/api/Meadow/Meadow.Hardware.IIODevice.html) you're using, passing the `SerialPortName`:

```csharp
var serialPort = Device.CreateSerialPort(Device.SerialPortNames.Com4, 115200);
```

## Opening a Serial Port

Once either an `ISerialMessagePort` or `ISerialPort` is created, call the `Open()` method to establish a connection with a peripheral:

```csharp
serialPort.Open();
```

### Data Protocol Structure Configuration

Optionally, you can also specify the number of data bits in a message frame, parity, and number of stop bits. The datasheet on your serial peripheral should specify what those values should be. The most common is `8n1`, which means `8` data bits, no parity check, or `Parity.None`, and one stop bit, or `StopBits.One`. 8n1 is the default for the serial port constructor, but you can specify something different as well:

```csharp
var serialPort = Device.CreateSerialMessagePort(Device.SerialPortNames.Com4, 9600, 7, Parity.Even, StopBits.Two);
serialPort.Open();
```

## Writing to a Serial Port

Once the serial port is opened, communication with peripherals is possible and done with `byte[]` data.

To write, call the [`Write(byte[] buffer)`](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Write_System_Byte___) method and pass in the bytes to send to the peripheral:

```csharp
var buffer = new byte[] { 0x00, 0x0F, 0x01 };
serialPort.Write(buffer);
```

### Encoding and Decoding Serial Port Messages

Note that serial ports deal in `byte` arrays, rather than strings or characters, so any strings need to be converted to bytes. Typically, you'll want
to use `Encoding.UTF8` or `Encoding.ASCII` encoding. 

To turn a string into a `byte[]`, you can use the following call:

```csharp
Encoding.UTF8.GetBytes("\r\n")
```

## Reading from a Serial Port

`ISerialPort` and `ISerialMessage` port diverge greatly in their behavior in regards to reading from them. Serial is a legacy protocol technology 
in which data comes in asynchronously and unlike messages in SPI or I2C, there is no standard message protocol. Typically, in legacy serial port 
implementations the consumer is expected to either continuously poll the serial port buffer and pull off new data bytes, or wait for a serial
data received event notification, and then pull bytes off the receive buffer.

Both of these approaches have massive drawbacks. Polling a serial port is processor intensive, as it relies on a loop that constantly checks for 
new data. Waiting for an event to read from the buffer is more efficient, but both methods can be extremely problematic when actualy reading from 
the buffer. The issue is that a serial port has a single receive buffer, and reading from that buffer removes the data from it. If multiple actors
are reading from the buffer, then the each actor might only get fragments of the intended data, rendering the data invalid. Additionally, because
messages are indeterminate in their termination, when the data received event comes in, the entire message data may not have arrived, so a data
consumer would need to either continuously poll for more data until it can be determined that all the data has come in, or use advanced threading
techniques to resume the reading thread when additional data has come in.

### Reading Messages via `ISerialMessagePort`

It is for this reason that we created the `ISerialMessagePort`, which handles all of the underlying concurrency issues on the receive buffer 
and takes an asynchronous approach to serial messages. Simply define your message type during construction and then listen for incoming message 
notifications. In this way, multiple consumers can listen for new data without concurrency issues, and all reading is handled efficiently, under
the hood.

#### `MessageReceived` Event

When a fully formed message arrives, the `ISerialMessagePort` raises a `MessageReceived` event that can be subscribed to:

```csharp
serialPort.MessageReceived += SerialPort_MessageReceived;
```

The `MessageReceived` event passes a `SerialMessageData` object that has a contains a copy of the message in a `Message` property, but if you need
a string, it includes a `GetMessageString()` method that takes a `System.Text.Encoding` class and will automatically convert for you:

```csharp
void SerialPort_MessageReceived(object sender, SerialMessageData e)
{
    Console.WriteLine($"{e.GetMessageString(Encoding.UTF8)}");
    ...
}
```

## Reading from the Receive Buffer via `ClassicSerialPort`

When data from the peripheral is received, it's placed in an internal [circular recieve buffer](https://en.wikipedia.org/wiki/Circular_buffer). The simplest way to read the data from that buffer is to call the [`Read(byte[] buffer, int offset, int count)` method](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Read_System_Byte___System_Int32_System_Int32_), passing in a buffer to read the bytes into, as well as the start index and the number of bytes to read. 

For example, the following code will read 7 bytes from the buffer:

```csharp
byte[] response = new byte[7];
this.serialPort.Read(response, 0, 7);
```

Read will also remove (dequeue) those bytes from the buffer. If you want to read from the buffer without removing the data, you can use the [`Peek()` method](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_Peek).

### `DataReceived` Event

As data is received by the serial port, a [`DataReceived` event](/docs/api/Meadow/Meadow.Hardware.ISerialPort.html#Meadow_Hardware_ISerialPort_DataReceived) is raised.

### `Read()` Warning

Because the receive buffer is shared, and a single message might arrive in multiple chunks, each chunk associated with a `DataReceived` event, 
care must be taken that there is only one consumer of the buffer, and that any reads are done in a critical section (i.e., C#'s `lock(object) { ... }` syntax).


### Additional APIs

There are a number of other APIs available on serial ports, please see the [`ISerialPort` API documentation](http://beta-developer.wildernesslabs.co/docs/api/Meadow/Meadow.Hardware.ISerialPort.html) for more details.
