---
title: Interface ISerialMessageController
sidebar_label: ISerialMessageController
description: Contract for devices that expose `ISerialMessagePort(s)`.
slug: /docs/api/Meadow/Meadow.Hardware/ISerialMessageController
---
# Interface ISerialMessageController
Contract for devices that expose `ISerialMessagePort(s)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISerialMessageController.cs#L6)
```csharp title="Declaration"
public interface ISerialMessageController
```
## Methods
### CreateSerialMessagePort(SerialPortName, byte[], bool, int, int, Parity, StopBits, int)
Initializes a new instance of the `ISerialMessagePort` class that
listens for serial messages defined byte[] message termination suffix.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISerialMessageController.cs#L29)
```csharp title="Declaration"
ISerialMessagePort CreateSerialMessagePort(SerialPortName portName, byte[] suffixDelimiter, bool preserveDelimiter, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *portName* | The 'SerialPortName` of port to use. |
| `System.Byte[]` | *suffixDelimiter* | A `byte[]` of the delimiter(s) that
    denote the end of the message. |
| `System.Boolean` | *preserveDelimiter* | Whether or not to preserve the
    delimiter tokens when passing the message to subscribers. |
| `System.Int32` | *baudRate* | Speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | Number of data bits expected in the serial
    message frame. Default is `8`. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | `Parity` enum describing what type of
    cyclic-redundancy-check (CRC) bit, if any, should be expected in the
    serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | `StopBits` describing how many bits should be
    expected at the end of every character in the serial message frame.
    Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | Size, in bytes, of the read buffer. Default
    is 512. |

### CreateSerialMessagePort(SerialPortName, byte[], bool, int, int, int, Parity, StopBits, int)
Initializes a new instance of the `ISerialMessagePort` class that
listens for serial messages defined by a `byte[]` prefix, and a
fixed length.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISerialMessageController.cs#L62)
```csharp title="Declaration"
ISerialMessagePort CreateSerialMessagePort(SerialPortName portName, byte[] prefixDelimiter, bool preserveDelimiter, int messageLength, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *portName* | The 'SerialPortName` of port to use. |
| `System.Byte[]` | *prefixDelimiter* | A `byte[]` of the delimiter(s) that
    denote the beginning of the message. |
| `System.Boolean` | *preserveDelimiter* | Whether or not to preserve the
    delimiter tokens when passing the message to subscribers. |
| `System.Int32` | *messageLength* | Length of the message, not including the
    delimiter, to be parsed out of the incoming data. |
| `System.Int32` | *baudRate* | Speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | Number of data bits expected in the serial
    message frame. Default is `8`. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | `Parity` enum describing what type of
    cyclic-redundancy-check (CRC) bit, if any, should be expected in the
    serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | `StopBits` describing how many bits should be
    expected at the end of every character in the serial message frame.
    Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | Size, in bytes, of the read buffer. Default
    is 512. |

