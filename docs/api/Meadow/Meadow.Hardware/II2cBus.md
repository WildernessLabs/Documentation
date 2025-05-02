---
title: Interface II2cBus
sidebar_label: II2cBus
description: Represents an I2C bus.
slug: /docs/api/Meadow/Meadow.Hardware/II2cBus
---
# Interface II2cBus
Represents an I2C bus.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cBus.cs#L8)
```csharp title="Declaration"
public interface II2cBus : IDisposable
```
## Properties
### BusSpeed
Gets or sets the bus clock speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cBus.cs#L13)
```csharp title="Declaration"
I2cBusSpeed BusSpeed { get; set; }
```
## Methods
### Read(byte, Span&lt;byte&gt;)
Reads bytes from a peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cBus.cs#L20)
```csharp title="Declaration"
void Read(byte peripheralAddress, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The I2C address to read. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer used for data reception. |

### Write(byte, Span&lt;byte&gt;)
Writes a number of bytes to the bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cBus.cs#L27)
```csharp title="Declaration"
void Write(byte peripheralAddress, Span<byte> writeBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the I2C peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to be written. |

### Exchange(byte, Span&lt;byte&gt;, Span&lt;byte&gt;)
Writes data from the write buffer to a peripheral on the bus, then resets the bus
and reads the return data into the read buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/II2cBus.cs#L36)
```csharp title="Declaration"
void Exchange(byte peripheralAddress, Span<byte> writeBuffer, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the I2C peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer to read data from. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read returning data into. |

