---
title: Interface ISerialPort
sidebar_label: ISerialPort
description: Represents a port that is capable of serial (UART) communications.
slug: /docs/api/Meadow/Meadow.Hardware/ISerialPort
---
# Interface ISerialPort
Represents a port that is capable of serial (UART) communications.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L15)
```csharp title="Declaration"
public interface ISerialPort : IDisposable
```
## Properties
### BaudRate
Gets or sets the serial baud rate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L20)
```csharp title="Declaration"
int BaudRate { get; set; }
```
### BytesToRead
Gets the number of bytes of data in the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L25)
```csharp title="Declaration"
int BytesToRead { get; }
```
### DataBits
Gets or sets the standard length of data bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L30)
```csharp title="Declaration"
int DataBits { get; set; }
```
### IsOpen
Gets a value indicating the open or closed status of the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L35)
```csharp title="Declaration"
bool IsOpen { get; }
```
### Parity
Gets or sets the parity-checking protocol.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L40)
```csharp title="Declaration"
Parity Parity { get; set; }
```
### PortName
Gets the port name used for communications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L45)
```csharp title="Declaration"
string PortName { get; }
```
### ReceiveBufferSize
The size, in bytes, of the receive buffer that caches message data from
the attached peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L51)
```csharp title="Declaration"
int ReceiveBufferSize { get; }
```
### ReadTimeout
The time required for a time-out to occur when a read operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L57)
```csharp title="Declaration"
TimeSpan ReadTimeout { get; set; }
```
### WriteTimeout
The time required for a time-out to occur when a write operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L63)
```csharp title="Declaration"
TimeSpan WriteTimeout { get; set; }
```
### StopBits
Gets or sets the standard number of stopbits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L68)
```csharp title="Declaration"
StopBits StopBits { get; set; }
```
## Methods
### Close()
Closes the port connection and sets the IsOpen property to false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L83)
```csharp title="Declaration"
void Close()
```
### ClearReceiveBuffer()
Discards data from the serial driver's receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L88)
```csharp title="Declaration"
void ClearReceiveBuffer()
```
### Open()
Opens a new serial port connection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L93)
```csharp title="Declaration"
void Open()
```
### Peek()
Returns the next available byte in the input buffer but does not consume it.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L99)
```csharp title="Declaration"
int Peek()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if there is no data available in the input buffer.### Read(byte[], int, int)
Reads a number of bytes from the SerialPort input buffer and writes those bytes into a byte array at the specified offset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L108)
```csharp title="Declaration"
int Read(byte[] buffer, int offset, int count)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L114)
```csharp title="Declaration"
byte[] ReadAll()
```

##### Returns

`System.Byte[]`
### ReadByte()
Synchronously reads one byte from the SerialPort input buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L120)
```csharp title="Declaration"
int ReadByte()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if the end of the stream has been read.### ToString()
Returns a friendly string descriptor of the SerialPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L126)
```csharp title="Declaration"
string? ToString()
```

##### Returns

`System.String`
### Write(byte[])
Writes data to the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L134)
```csharp title="Declaration"
int Write(byte[] buffer)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *buffer* |

### Write(byte[], int, int)
Writes a specified number of bytes to the serial port using data from a buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L144)
```csharp title="Declaration"
int Write(byte[] buffer, int offset, int count)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L73)
```csharp title="Declaration"
event SerialDataReceivedEventHandler DataReceived
```
##### Event Type
[Meadow.Hardware.SerialDataReceivedEventHandler](../Meadow.Hardware/SerialDataReceivedEventHandler)
### BufferOverrun
Indicates that the internal data buffer has overrun and data has been lost.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialPort.cs#L78)
```csharp title="Declaration"
event EventHandler BufferOverrun
```
##### Event Type
`System.EventHandler`
