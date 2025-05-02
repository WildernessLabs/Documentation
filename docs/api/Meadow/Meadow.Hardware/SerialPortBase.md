---
title: Class SerialPortBase
sidebar_label: SerialPortBase
description: >-
  Represents a port that is capable of serial (UART) communications. Preserved
  for legacy API compatibility. For a more modern approach, use
  `SerialMessagePort`.
slug: /docs/api/Meadow/Meadow.Hardware/SerialPortBase
---
# Class SerialPortBase
Represents a port that is capable of serial (UART) communications.
Preserved for legacy API compatibility. For a more modern approach, use
`SerialMessagePort`.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L12)
```csharp title="Declaration"
public abstract class SerialPortBase : ISerialPort, IDisposable
```
**Implements:**  
[Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort), `System.IDisposable`

## Properties
### PortName
Gets the port name used for communications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L124)
```csharp title="Declaration"
public string PortName { get; }
```
### IsOpen
Gets a value indicating the open or closed status of the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L129)
```csharp title="Declaration"
public bool IsOpen { get; }
```
### Parity
Gets or sets the parity-checking protocol.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L134)
```csharp title="Declaration"
public Parity Parity { get; set; }
```
### DataBits
Gets or sets the standard length of data bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L149)
```csharp title="Declaration"
public int DataBits { get; set; }
```
### StopBits
Gets or sets the standard number of stop bits per byte.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L165)
```csharp title="Declaration"
public StopBits StopBits { get; set; }
```
### ReadTimeout
The time required for a time-out to occur when a read operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L181)
```csharp title="Declaration"
public TimeSpan ReadTimeout { get; set; }
```
### WriteTimeout
The time required for a time-out to occur when a write operation does not finish.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L187)
```csharp title="Declaration"
public TimeSpan WriteTimeout { get; set; }
```
### BytesToRead
Gets the number of bytes of data in the receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L192)
```csharp title="Declaration"
public int BytesToRead { get; }
```
### BaudRate
Gets or sets the serial baud rate.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L197)
```csharp title="Declaration"
public int BaudRate { get; set; }
```
### ReceiveBufferSize
The buffer size, in bytes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L235)
```csharp title="Declaration"
public int ReceiveBufferSize { get; }
```
## Fields
### _readThread
Thread responsible for reading from the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L23)
```csharp title="Declaration"
protected Thread? _readThread
```
### _baudRate
The baud rate for the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L28)
```csharp title="Declaration"
protected int _baudRate
```
### _accessLock
Lock object for thread synchronization when accessing critical sections of code.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L33)
```csharp title="Declaration"
protected object _accessLock
```
## Methods
### SetHardwarePortSettings(IntPtr)
Sets the hardware port settings for the specified handle.
This method is intended to configure the hardware settings of the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L40)
```csharp title="Declaration"
protected abstract void SetHardwarePortSettings(IntPtr handle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IntPtr` | *handle* | The handle to the hardware port. |

### OpenHardwarePort(string)
Override this method to open a hardware (OS) serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L47)
```csharp title="Declaration"
protected abstract IntPtr OpenHardwarePort(string portName)
```

##### Returns

`System.IntPtr`: The resulting port handle
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *portName* | The name of the port |

### CloseHardwarePort(IntPtr)
Override this method to close a hardware (OS) serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L53)
```csharp title="Declaration"
protected abstract void CloseHardwarePort(IntPtr handle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IntPtr` | *handle* | The port handle |

### WriteHardwarePort(IntPtr, byte[], int)
Override this method to write data to a hardware serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L62)
```csharp title="Declaration"
protected abstract int WriteHardwarePort(IntPtr handle, byte[] writeBuffer, int count)
```

##### Returns

`System.Int32`: The number of bytes actually written
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IntPtr` | *handle* | The handle to the port |
| `System.Byte[]` | *writeBuffer* | The source data buffer |
| `System.Int32` | *count* | The number of bytes to write |

### ReadHardwarePort(IntPtr, byte[], int)
Override this method to read data from a hardware serial port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L71)
```csharp title="Declaration"
protected abstract int ReadHardwarePort(IntPtr handle, byte[] readBuffer, int count)
```

##### Returns

`System.Int32`: The actual number of bytes read
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IntPtr` | *handle* | The handle to the port |
| `System.Byte[]` | *readBuffer* | The buffer to write the data to |
| `System.Int32` | *count* | The number of bytes to read |

### GetSupportedBaudRates()
Gets an array of supported baud rates
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L215)
```csharp title="Declaration"
public int[] GetSupportedBaudRates()
```

##### Returns

`System.Int32[]`
### ToString()
Returns a string that represents the current [Meadow.Hardware.SerialPortBase](../Meadow.Hardware/SerialPortBase).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L265)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A string that represents the current [Meadow.Hardware.SerialPortBase](../Meadow.Hardware/SerialPortBase).### Dispose()
Releases the resources used by the [Meadow.Hardware.SerialPortBase](../Meadow.Hardware/SerialPortBase).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L280)
```csharp title="Declaration"
public void Dispose()
```
### ClearReceiveBuffer()
Discards data from the serial driver's receive buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L288)
```csharp title="Declaration"
public void ClearReceiveBuffer()
```
### Open()
Opens a new serial port connection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L296)
```csharp title="Declaration"
public void Open()
```
### Close()
Closes the port connection and sets the IsOpen property to false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L315)
```csharp title="Declaration"
public void Close()
```
### Write(byte[])
Writes data to the serial port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L329)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L342)
```csharp title="Declaration"
public int Write(byte[] buffer, int index, int count)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The byte array that contains the data to write to the port. |
| `System.Int32` | *index* | The zero-based byte offset in the buffer parameter at which to begin copying bytes to the port. |
| `System.Int32` | *count* | The number of bytes to write. |

### Peek()
Returns the next available by in the input buffer but does not consume it.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L449)
```csharp title="Declaration"
public int Peek()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if there is no data available in the input buffer.### ReadByte()
Synchronously reads one byte from the SerialPort input buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L460)
```csharp title="Declaration"
public int ReadByte()
```

##### Returns

`System.Int32`: The byte, cast to an Int32, or -1 if the end of the stream has been read.### ReadAll()
Reads the entire serial port buffer into an array of bytes. Before
calling, make sure that your buffer is large enough by checking
`BytesToRead` property. If your buffer isn't large enough, this will
leave bytes in the serial port buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L475)
```csharp title="Declaration"
public byte[] ReadAll()
```

##### Returns

`System.Byte[]`
### Read(byte[], int, int)
Reads a number of bytes from the SerialPort input buffer and writes those bytes into a byte array at the specified offset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L589)
```csharp title="Declaration"
public int Read(byte[] buffer, int index, int count)
```

##### Returns

`System.Int32`: The number of bytes read.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The byte array to write the input to. |
| `System.Int32` | *index* | The offset in buffer at which to write the bytes. |
| `System.Int32` | *count* | The maximum number of bytes to read. Fewer bytes are read if count is greater than the number of bytes in the input buffer. |


##### Exceptions

`System.TimeoutException`  
No bytes were available to read.
## Events
### DataReceived
Indicates that data has been received through a port represented by the SerialPort object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L114)
```csharp title="Declaration"
public event SerialDataReceivedEventHandler DataReceived
```
##### Event Type
[Meadow.Hardware.SerialDataReceivedEventHandler](../Meadow.Hardware/SerialDataReceivedEventHandler)
### BufferOverrun
Indicates that the internal data buffer has overrun and data has been lost.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Communications/SerialPortBase.cs#L119)
```csharp title="Declaration"
public event EventHandler BufferOverrun
```
##### Event Type
`System.EventHandler`

## Implements

* [Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort)
* `System.IDisposable`
