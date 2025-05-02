---
title: Interface ISerialController
sidebar_label: ISerialController
description: Contract for devices that provide serial communication capabilities.
slug: /docs/api/Meadow/Meadow.Hardware/ISerialController
---
# Interface ISerialController
Contract for devices that provide serial communication capabilities.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISerialController.cs#L6)
```csharp title="Declaration"
public interface ISerialController
```
## Methods
### CreateSerialPort(SerialPortName, int, int, Parity, StopBits, int)
Initializes a new instance of an `ISerialPort`.
When parsing text data, we recommend using the more modern, thread-safe `ISerialMessagePort`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISerialController.cs#L19)
```csharp title="Declaration"
ISerialPort CreateSerialPort(SerialPortName portName, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 1024)
```

##### Returns

[Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort): The created serial port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *portName* | The `SerialPortName` of the port to use. |
| `System.Int32` | *baudRate* | The speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | The number of data bits expected in the serial message frame. Default is 8. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | The `Parity` enum describing what type of cyclic-redundancy-check (CRC) bit, if any, should be expected in the serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | The `StopBits` describing how many bits should be expected at the end of every character in the serial message frame. Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | The size, in bytes, of the read buffer. Default is 1024. |

