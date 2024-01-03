---
title: Class Sc16is7x2.Sc16is7x2Channel
sidebar_label: Sc16is7x2.Sc16is7x2Channel
description: "Encapsulates a channel of the SC16IS7x2 peripheral as an ISerialPort"
---
# Class Sc16is7x2.Sc16is7x2Channel
Encapsulates a channel of the SC16IS7x2 peripheral as an ISerialPort

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L13)
```csharp title="Declaration"
public class Sc16is7x2.Sc16is7x2Channel : ISerialPort, IDisposable
```
**Implements:**  
`Meadow.Hardware.ISerialPort`, `System.IDisposable`

## Properties
### BytesToRead
Gets the number of bytes of data in the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L27)
```csharp title="Declaration"
public int BytesToRead { get; }
```
### IsOpen
Gets a value indicating the open or closed status of the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L29)
```csharp title="Declaration"
public bool IsOpen { get; }
```
### PortName
Gets the port name used for communications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L32)
```csharp title="Declaration"
public string PortName { get; }
```
### ReceiveBufferSize
Size of the receive buffer (FIFO).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L38)
```csharp title="Declaration"
public int ReceiveBufferSize { get; }
```
### ReadTimeout
The time required for a time-out to occur when a read operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L41)
```csharp title="Declaration"
public TimeSpan ReadTimeout { get; set; }
```
### WriteTimeout
The time required for a time-out to occur when a write operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L44)
```csharp title="Declaration"
public TimeSpan WriteTimeout { get; set; }
```
### BaudRate
Gets or sets the serial baud rate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L79)
```csharp title="Declaration"
public int BaudRate { get; set; }
```
### DataBits
Gets or sets the standard length of data bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L86)
```csharp title="Declaration"
public int DataBits { get; set; }
```
### Parity
Gets or sets the parity-checking protocol.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L97)
```csharp title="Declaration"
public Parity Parity { get; set; }
```
### StopBits
Gets or sets the standard number of stopbits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L108)
```csharp title="Declaration"
public StopBits StopBits { get; set; }
```
## Methods
### ReadByte()
Synchronously reads one byte from the SerialPort input buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L132)
```csharp title="Declaration"
public int ReadByte()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if the end of the stream has been read.### Read(byte[], int, int)
Reads a number of bytes from the SerialPort input buffer and writes those bytes into a byte array at the specified offset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L145)
```csharp title="Declaration"
public int Read(byte[] buffer, int offset, int count)
```

##### Returns

`System.Int32`: The number of bytes read.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The byte array to write the input to. |
| `System.Int32` | *offset* | The offset in buffer at which to write the bytes. |
| `System.Int32` | *count* | The maximum number of bytes to read. Fewer bytes are read if count is greater than the number of bytes in the input buffer. |

### ReadAll()
Reads all currently available bytes from the SerialPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L182)
```csharp title="Declaration"
public byte[] ReadAll()
```

##### Returns

`System.Byte[]`
### ClearReceiveBuffer()
Discards data from the serial driver's receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L191)
```csharp title="Declaration"
public void ClearReceiveBuffer()
```
### Close()
Closes the port connection and sets the IsOpen property to false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L197)
```csharp title="Declaration"
public void Close()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L203)
```csharp title="Declaration"
public void Dispose()
```
### Open()
Opens a new serial port connection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L209)
```csharp title="Declaration"
public void Open()
```
### Peek()
Returns the next available byte in the input buffer but does not consume it.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L215)
```csharp title="Declaration"
public int Peek()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if there is no data available in the input buffer.### Write(byte[])
Writes data to the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L222)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L228)
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

## Events
### DataReceived
Indicates that data has been received through a port represented by the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L16)
```csharp title="Declaration"
public event SerialDataReceivedEventHandler DataReceived
```
##### Event Type
`Meadow.Hardware.SerialDataReceivedEventHandler`
### BufferOverrun
Indicates that the internal data buffer has overrun and data has been lost.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Sc16is7x2Channel.cs#L19)
```csharp title="Declaration"
public event EventHandler BufferOverrun
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Hardware.ISerialPort`
* `System.IDisposable`
