---
title: Class SerialPortNameExtensions
sidebar_label: SerialPortNameExtensions
description: Extension methods for the SerialPortName class
slug: /docs/api/Meadow/Meadow/SerialPortNameExtensions
---
# Class SerialPortNameExtensions
Extension methods for the SerialPortName class

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortNameExtensions.cs#L9)
```csharp title="Declaration"
public static class SerialPortNameExtensions
```
## Methods
### CreateSerialPort(SerialPortName, int, int, Parity, StopBits, int)
Creates an [Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort) directly from a [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) using the current [Meadow.IMeadowDevice](../Meadow/IMeadowDevice)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortNameExtensions.cs#L21)
```csharp title="Declaration"
public static ISerialPort CreateSerialPort(this SerialPortName name, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 1024)
```

##### Returns

[Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *name* |
| `System.Int32` | *baudRate* |
| `System.Int32` | *dataBits* |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* |
| `System.Int32` | *readBufferSize* |

### CreateSerialMessagePort(SerialPortName, byte[], bool, int, int, Parity, StopBits, int)
Creates an [Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort) directly from a [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) using the current [Meadow.IMeadowDevice](../Meadow/IMeadowDevice)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortNameExtensions.cs#L45)
```csharp title="Declaration"
public static ISerialMessagePort CreateSerialMessagePort(this SerialPortName name, byte[] suffixDelimiter, bool preserveDelimiter, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *name* |
| `System.Byte[]` | *suffixDelimiter* |
| `System.Boolean` | *preserveDelimiter* |
| `System.Int32` | *baudRate* |
| `System.Int32` | *dataBits* |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* |
| `System.Int32` | *readBufferSize* |

### CreateSerialMessagePort(SerialPortName, byte[], bool, int, int, int, Parity, StopBits, int)
Creates an [Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort) directly from a [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) using the current [Meadow.IMeadowDevice](../Meadow/IMeadowDevice)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/SerialPortNameExtensions.cs#L72)
```csharp title="Declaration"
public static ISerialMessagePort CreateSerialMessagePort(this SerialPortName name, byte[] prefixDelimiter, bool preserveDelimiter, int messageLength, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.SerialPortName](../Meadow.Hardware/SerialPortName) | *name* |
| `System.Byte[]` | *prefixDelimiter* |
| `System.Boolean` | *preserveDelimiter* |
| `System.Int32` | *messageLength* |
| `System.Int32` | *baudRate* |
| `System.Int32` | *dataBits* |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* |
| `System.Int32` | *readBufferSize* |

