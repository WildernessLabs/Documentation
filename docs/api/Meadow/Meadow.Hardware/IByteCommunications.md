---
title: Interface IByteCommunications
sidebar_label: IByteCommunications
description: Define a contract for general peripheral communications classes.
slug: /docs/api/Meadow/Meadow.Hardware/IByteCommunications
---
# Interface IByteCommunications
Define a contract for general peripheral communications classes.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L8)
```csharp title="Declaration"
public interface IByteCommunications
```
## Methods
### Read(Span&lt;byte&gt;)
Reads data from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L17)
```csharp title="Declaration"
void Read(Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read from the peripheral into. |

### ReadRegister(byte, Span&lt;byte&gt;)
Reads data from the peripheral starting at the specified address.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L27)
```csharp title="Declaration"
void ReadRegister(byte address, Span<byte> readBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |
| `System.Span<System.Byte>` | *readBuffer* |

### ReadRegister(byte)
Read a register from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L33)
```csharp title="Declaration"
byte ReadRegister(byte address)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to read. |

### ReadRegisterAsUShort(byte, ByteOrder)
Read an unsigned short from a register.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L41)
```csharp title="Declaration"
ushort ReadRegisterAsUShort(byte address, ByteOrder order = ByteOrder.LittleEndian)
```

##### Returns

`System.UInt16`: Value read from the register.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Register address of the low byte (the high byte will follow). |
| [Meadow.ByteOrder](../Meadow/ByteOrder) | *order* | Order of the bytes in the register (little endian is the default). |

### Write(byte)
Write a single byte to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L47)
```csharp title="Declaration"
void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | Value to be written (8-bits). |

### Write(Span&lt;byte&gt;)
Write an array of bytes to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L56)
```csharp title="Declaration"
void Write(Span<byte> writeBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *writeBuffer* | A buffer of byte values to be written. |

### WriteRegister(byte, byte)
Write data to a register in the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L63)
```csharp title="Declaration"
void WriteRegister(byte address, byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to. |
| `System.Byte` | *value* | Data to write into the register. |

### WriteRegister(byte, Span&lt;byte&gt;, ByteOrder)
Write data to a register in the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L74)
```csharp title="Declaration"
void WriteRegister(byte address, Span<byte> writeBuffer, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to. |
| `System.Span<System.Byte>` | *writeBuffer* | A buffer of byte values to be written. |
| [Meadow.ByteOrder](../Meadow/ByteOrder) | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, ushort, ByteOrder)
Write an unsigned short to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L82)
```csharp title="Declaration"
void WriteRegister(byte address, ushort value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt16` | *value* | Value to be written (16-bits). |
| [Meadow.ByteOrder](../Meadow/ByteOrder) | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, uint, ByteOrder)
Write an unsigned integer to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L90)
```csharp title="Declaration"
void WriteRegister(byte address, uint value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt32` | *value* | Value to be written. |
| [Meadow.ByteOrder](../Meadow/ByteOrder) | *order* | Indicate if the data should be written as big or little endian. |

### WriteRegister(byte, ulong, ByteOrder)
Write an unsigned long to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L98)
```csharp title="Declaration"
void WriteRegister(byte address, ulong value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to. |
| `System.UInt64` | *value* | Value to be written. |
| [Meadow.ByteOrder](../Meadow/ByteOrder) | *order* | Indicate if the data should be written as big or little endian. |

### Exchange(Span&lt;byte&gt;, Span&lt;byte&gt;, DuplexType)
Write data to followed by read data from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IByteCommunications.cs#L106)
```csharp title="Declaration"
void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *writeBuffer* | Data to write |
| `System.Span<System.Byte>` | *readBuffer* | Buffer where read data will be written. Number of bytes read is determined by buffer size. |
| [Meadow.Hardware.DuplexType](../Meadow.Hardware/DuplexType) | *duplex* | Whether the communication will happen in a half-duplex or full-duplex fashion. |

