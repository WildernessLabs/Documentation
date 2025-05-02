---
title: Interface ISerialMessagePort
sidebar_label: ISerialMessagePort
description: Contract for a serial port that provides predictable messaging.
slug: /docs/api/Meadow/Meadow.Hardware/ISerialMessagePort
---
# Interface ISerialMessagePort
Contract for a serial port that provides predictable messaging.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L7)
```csharp title="Declaration"
public interface ISerialMessagePort
```
## Properties
### BaudRate
Gets or sets the serial baud rate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L12)
```csharp title="Declaration"
int BaudRate { get; set; }
```
### DataBits
Gets or sets the standard length of data bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L17)
```csharp title="Declaration"
int DataBits { get; }
```
### IsOpen
Gets a value indicating the open or closed status of the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L22)
```csharp title="Declaration"
bool IsOpen { get; }
```
### Parity
Gets or sets the parity-checking protocol.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L27)
```csharp title="Declaration"
Parity Parity { get; }
```
### StopBits
Gets or sets the standard number of stop bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L32)
```csharp title="Declaration"
StopBits StopBits { get; }
```
### PortName
Gets the port name used for communications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L37)
```csharp title="Declaration"
string PortName { get; }
```
### ReceiveBufferSize
The size, in bytes, of the receive buffer that caches message data from
the attached peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L43)
```csharp title="Declaration"
int ReceiveBufferSize { get; }
```
## Methods
### Close()
Closes the port connection and sets the IsOpen property to false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L59)
```csharp title="Declaration"
void Close()
```
### Open()
Opens a new serial port connection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L64)
```csharp title="Declaration"
void Open()
```
### Write(byte[])
Writes data to the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L72)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L82)
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

### ClearReceiveBuffer()
Discards all data from the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L87)
```csharp title="Declaration"
void ClearReceiveBuffer()
```
## Events
### MessageReceived
Indicates that a message has been received through a port represented
by the SerialMessagePort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISerialMessagePort.cs#L49)
```csharp title="Declaration"
event EventHandler<SerialMessageData> MessageReceived
```
##### Event Type
`System.EventHandler<Meadow.Hardware.SerialMessageData>`
