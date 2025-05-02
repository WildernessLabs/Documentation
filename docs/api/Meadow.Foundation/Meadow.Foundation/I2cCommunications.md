---
title: Class I2cCommunications
sidebar_label: I2cCommunications
description: 'Helper class for I2C communications, handles registers, endian, etc.'
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/I2cCommunications
---
# Class I2cCommunications
Helper class for I2C communications, handles registers, endian, etc.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L9)
```csharp title="Declaration"
public class I2cCommunications : II2cCommunications, IByteCommunications
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Pca9671](../Meadow.Foundation.ICs.IOExpanders/Pca9671), [Meadow.Foundation.Leds.SparkFunQwiicLEDStick](../Meadow.Foundation.Leds/SparkFunQwiicLEDStick)

**Implements:**  
`Meadow.Hardware.II2cCommunications`, `Meadow.Hardware.IByteCommunications`

## Properties
### Address
The I2C address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L14)
```csharp title="Declaration"
public byte Address { get; protected set; }
```
### Bus
The I2C bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L19)
```csharp title="Declaration"
public II2cBus Bus { get; protected set; }
```
### WriteBuffer
Internal write buffer - used in methods in which the buffers aren't
passed in.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L25)
```csharp title="Declaration"
protected Memory<byte> WriteBuffer { get; }
```
### ReadBuffer
Internal read buffer - used in methods in which the buffers aren't
passed in.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L30)
```csharp title="Declaration"
protected Memory<byte> ReadBuffer { get; }
```
## Methods
### Read(Span&lt;byte&gt;)
Reads data from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L54)
```csharp title="Declaration"
public void Read(Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read from the peripheral into. |

### ReadRegister(byte, Span&lt;byte&gt;)
Reads data from the peripheral starting at the specified address.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L64)
```csharp title="Declaration"
public virtual void ReadRegister(byte address, Span<byte> readBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |
| `System.Span<System.Byte>` | *readBuffer* |

### ReadRegister(byte)
Read a register from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L74)
```csharp title="Declaration"
public virtual byte ReadRegister(byte address)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to read. |

### ReadRegisterAsUShort(byte, ByteOrder)
Read an unsigned short from a register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L87)
```csharp title="Declaration"
public virtual ushort ReadRegisterAsUShort(byte address, ByteOrder order = ByteOrder.LittleEndian)
```

##### Returns

`System.UInt16`: Value read from the register.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Register address of the low byte (the high byte will follow). |
| `Meadow.ByteOrder` | *order* | Order of the bytes in the register (little endian is the default). |

### Write(byte)
Write a single byte to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L105)
```csharp title="Declaration"
public virtual void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | Value to be written (8-bits). |

### Write(Span&lt;byte&gt;)
Write an array of bytes to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L115)
```csharp title="Declaration"
public virtual void Write(Span<byte> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *data* | Values to be written. |

### WriteRegister(byte, byte)
Write data a register in the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L122)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to. |
| `System.Byte` | *value* | Data to write into the register. |

### WriteRegister(byte, ushort, ByteOrder)
Write an unsigned short to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L135)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, ushort value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt16` | *value* | Value to be written (16-bits). |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, uint, ByteOrder)
Write an unsigned integer to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L147)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, uint value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt32` | *value* | Value to be written. |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, ulong, ByteOrder)
Write an unsigned long to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L159)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, ulong value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt64` | *value* | Value to be written. |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, Span&lt;byte&gt;, ByteOrder)
Write data to a register in the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L171)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, Span<byte> writeBuffer, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to. |
| `System.Span<System.Byte>` | *writeBuffer* | A buffer of byte values to be written. |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian. |

### Exchange(Span&lt;byte&gt;, Span&lt;byte&gt;, DuplexType)
Exchanges data with an I2C device through a specified write and read buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/I2cCommunications.cs#L210)
```csharp title="Declaration"
public virtual void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *writeBuffer* | A span of bytes that represents the data to be written to the device |
| `System.Span<System.Byte>` | *readBuffer* | A span of bytes where the data read from the device will be stored |
| `Meadow.Hardware.DuplexType` | *duplex* | An optional parameter that specifies the duplex type of the communication.
    It defaults to half-duplex. |


##### Exceptions

`System.ArgumentException`  
Thrown when duplex is set to full-duplex, as I2C only supports half-duplex communication

## Implements

* `Meadow.Hardware.II2cCommunications`
* `Meadow.Hardware.IByteCommunications`
