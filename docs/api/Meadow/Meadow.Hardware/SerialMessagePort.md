---
title: Class SerialMessagePort
sidebar_label: SerialMessagePort
description: >-
  Represents a port that is capable of serial (UART) communications.

  Has a streamlined API over class SerialPort that deals in messages.

  This is a modern, asynchronous take on serial communications that is
  thread-safe and asynchronous in nature. This is the recommended way to use
  serial on Meadow for nearly all use cases.
slug: /docs/api/Meadow/Meadow.Hardware/SerialMessagePort
---
# Class SerialMessagePort
Represents a port that is capable of serial (UART) communications.

Has a streamlined API over class SerialPort that deals in messages.

This is a modern, asynchronous take on serial communications that is
thread-safe and asynchronous in nature. This is the recommended way to
use serial on Meadow for nearly all use cases.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L16)
```csharp title="Declaration"
public class SerialMessagePort : SerialMessageProcessor, ISerialMessagePort
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.SerialMessageProcessor](../Meadow.Hardware/SerialMessageProcessor)

**Implements:**  
[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

## Properties
### BaudRate
Gets or sets the serial baud rate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L21)
```csharp title="Declaration"
public int BaudRate { get; set; }
```
### PortName
Gets the port name used for communications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L30)
```csharp title="Declaration"
public string PortName { get; }
```
### IsOpen
Gets a value indicating the open or closed status of the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L35)
```csharp title="Declaration"
public bool IsOpen { get; }
```
### Parity
Gets or sets the parity-checking protocol.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L40)
```csharp title="Declaration"
public Parity Parity { get; set; }
```
### DataBits
Gets or sets the standard length of data bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L45)
```csharp title="Declaration"
public int DataBits { get; set; }
```
### StopBits
Gets or sets the standard number of stop bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L50)
```csharp title="Declaration"
public StopBits StopBits { get; set; }
```
## Fields
### classicSerialPort
The underlying classic serial port used for communication.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L55)
```csharp title="Declaration"
protected ISerialPort classicSerialPort
```
## Methods
### From(ISerialPort, byte[], bool)
Creates a new instance of [Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort) using the specified parameters for suffix-based message processing.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L64)
```csharp title="Declaration"
public static SerialMessagePort From(ISerialPort commsPort, byte[] suffixDelimiter, bool preserveDelimiter)
```

##### Returns

[Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort): A new instance of [Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort) | *commsPort* | The underlying serial port. |
| `System.Byte[]` | *suffixDelimiter* | The suffix delimiter for message termination. |
| `System.Boolean` | *preserveDelimiter* | Flag indicating whether to preserve the delimiter in the received message. |

### From(ISerialPort, byte[], bool, int)
Creates a new instance of [Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort) using the specified parameters for prefix-based message processing.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L80)
```csharp title="Declaration"
public static SerialMessagePort From(ISerialPort commsPort, byte[] prefixDelimiter, bool preserveDelimiter, int messageLength)
```

##### Returns

[Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort): A new instance of [Meadow.Hardware.SerialMessagePort](../Meadow.Hardware/SerialMessagePort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort) | *commsPort* | The underlying serial port. |
| `System.Byte[]` | *prefixDelimiter* | The prefix delimiter for message parsing. |
| `System.Boolean` | *preserveDelimiter* | Flag indicating whether to preserve the delimiter in the received message. |
| `System.Int32` | *messageLength* | The expected message length (excluding the prefix delimiter). |

### Init()
Initializes the buffer and underlying serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L132)
```csharp title="Declaration"
protected void Init()
```
### Open()
Opens a new serial port connection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L149)
```csharp title="Declaration"
public void Open()
```
### Close()
Closes the port connection and sets the IsOpen property to false
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L157)
```csharp title="Declaration"
public void Close()
```
### Write(byte[])
Writes data to the serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L167)
```csharp title="Declaration"
public int Write(byte[] buffer)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *buffer* |

### Write(byte[], int, int)
Writes a specified number of bytes to the serial port using data from a buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L179)
```csharp title="Declaration"
public int Write(byte[] buffer, int offset, int count)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The byte array that contains the data to write to the port. |
| `System.Int32` | *offset* | The zero-based byte offset in the buffer parameter at which to begin copying bytes to the port. |
| `System.Int32` | *count* | The number of bytes to write. |

### ClearReceiveBuffer()
Discards all data from the receive buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialMessagePort.cs#L187)
```csharp title="Declaration"
public void ClearReceiveBuffer()
```

## Implements

* [Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)
