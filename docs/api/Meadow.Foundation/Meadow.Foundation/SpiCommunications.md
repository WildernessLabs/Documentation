---
title: Class SpiCommunications
sidebar_label: SpiCommunications
description: >-
  Helper class for SPI communications, handles registers, endian, etc. This
  encapsulates and synchronizes the SPI bus and chip select ports
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/SpiCommunications
---
# Class SpiCommunications
Helper class for SPI communications, handles registers, endian, etc.
This encapsulates and synchronizes the SPI bus and chip select ports

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L11)
```csharp title="Declaration"
public class SpiCommunications : ISpiCommunications, IByteCommunications
```
**Implements:**  
`Meadow.Hardware.ISpiCommunications`, `Meadow.Hardware.IByteCommunications`

## Properties
### ChipSelect
The SPI chip select port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L16)
```csharp title="Declaration"
public IDigitalOutputPort? ChipSelect { get; }
```
### Bus
the ISpiBus object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L26)
```csharp title="Declaration"
public ISpiBus Bus { get; }
```
### BusSpeed
SPI bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L31)
```csharp title="Declaration"
public Frequency BusSpeed { get; set; }
```
### BusMode
SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L36)
```csharp title="Declaration"
public SpiClockConfiguration.Mode BusMode { get; set; }
```
### WriteBuffer
Internal write buffer. Used in methods in which the buffers aren't
passed in.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L42)
```csharp title="Declaration"
protected Memory<byte> WriteBuffer { get; }
```
### ReadBuffer
Internal read buffer. Used in methods in which the buffers aren't
passed in.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L47)
```csharp title="Declaration"
protected Memory<byte> ReadBuffer { get; }
```
## Methods
### Read(Span&lt;byte&gt;)
Reads data from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L89)
```csharp title="Declaration"
public virtual void Read(Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read from the peripheral into. |

### ReadRegister(byte, Span&lt;byte&gt;)
Reads data from the peripheral starting at the specified address.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L101)
```csharp title="Declaration"
public virtual void ReadRegister(byte address, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | The register address |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to hold the data |

### ReadRegister(byte)
Does a half-duplex read of a single byte from the specified address of the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L114)
```csharp title="Declaration"
public virtual byte ReadRegister(byte address)
```

##### Returns

`System.Byte`: The byte read
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to read |

### ReadRegisterAsUShort(byte, ByteOrder)
Reads a single ushort value from the specified address of the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L129)
```csharp title="Declaration"
public virtual ushort ReadRegisterAsUShort(byte address, ByteOrder order = ByteOrder.LittleEndian)
```

##### Returns

`System.UInt16`: The value read
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the read |
| `Meadow.ByteOrder` | *order* | Endianness of the value read |

### Write(byte)
Writes a single byte to the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L146)
```csharp title="Declaration"
public void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | Value to write |

### Write(Span&lt;byte&gt;)
Write a span of bytes to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L158)
```csharp title="Declaration"
public virtual void Write(Span<byte> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *data* | Data to be written. |

### WriteRegister(byte, byte)
Writes a single byte to the specified address of the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L170)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | The target write register address |
| `System.Byte` | *value* | Value to write |

### WriteRegister(byte, ushort, ByteOrder)
Writes a single ushort value to a target register address on the peripheral (i.e. [address][ushort])
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L185)
```csharp title="Declaration"
public virtual void WriteRegister(byte address, ushort value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | The target write register address |
| `System.UInt16` | *value* | Value to write |
| `Meadow.ByteOrder` | *order* | Endianness of the value to be written |

### WriteRegister(byte, uint, ByteOrder)
Write an unsigned integer to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L198)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L210)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L222)
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
Exchange data over the SPI bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/SpiCommunications.cs#L273)
```csharp title="Declaration"
public virtual void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer holding the data to write |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to receive data |
| `Meadow.Hardware.DuplexType` | *duplex* | The duplex mode - half or full |


## Implements

* `Meadow.Hardware.ISpiCommunications`
* `Meadow.Hardware.IByteCommunications`
