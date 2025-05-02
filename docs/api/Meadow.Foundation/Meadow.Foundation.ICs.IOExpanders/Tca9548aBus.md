---
title: Class Tca9548aBus
sidebar_label: Tca9548aBus
description: Tca9548a I2C bus
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Tca9548aBus
---
# Class Tca9548aBus
Tca9548a I2C bus

###### **Assembly**: Tca9548a.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L9)
```csharp title="Declaration"
public class Tca9548aBus : II2cBus, IDisposable
```
**Implements:**  
`Meadow.Hardware.II2cBus`, `System.IDisposable`

## Properties
### BusSpeed
I2C bus frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L24)
```csharp title="Declaration"
public I2cBusSpeed BusSpeed { get; set; }
```
## Methods
### WriteData(byte, params byte[])
Write data to the bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L31)
```csharp title="Declaration"
public void WriteData(byte peripheralAddress, params byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Byte[]` | *data* | Data to write |

### Write(byte, Span&lt;byte&gt;)
Write data to the bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L65)
```csharp title="Declaration"
public void Write(byte peripheralAddress, Span<byte> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Span<System.Byte>` | *data* | Data to write |

### Exchange(byte, Span&lt;byte&gt;, Span&lt;byte&gt;)
Exchange data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L85)
```csharp title="Declaration"
public void Exchange(byte peripheralAddress, Span<byte> writeBuffer, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Span<System.Byte>` | *writeBuffer* | Buffer with data to write |
| `System.Span<System.Byte>` | *readBuffer* | Buffer to receive data |

### ReadData(byte, int)
Read data from the I2C bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L105)
```csharp title="Declaration"
public byte[] ReadData(byte peripheralAddress, int numberOfBytes)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Int32` | *numberOfBytes* | Number of bytes to read |

### WriteData(byte, Span&lt;byte&gt;, int)
Write data to the bus from a span
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L127)
```csharp title="Declaration"
public void WriteData(byte peripheralAddress, Span<byte> data, int length)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Span<System.Byte>` | *data* | Data to write |
| `System.Int32` | *length* | Length of data to write |

### ExchangeData(byte, Span&lt;byte&gt;, int, Span&lt;byte&gt;, int)
Exchange data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L149)
```csharp title="Declaration"
public void ExchangeData(byte peripheralAddress, Span<byte> writeBuffer, int writeCount, Span<byte> readBuffer, int readCount)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Span<System.Byte>` | *writeBuffer* | Buffer with data to write |
| `System.Int32` | *writeCount* | Number of bytes to write |
| `System.Span<System.Byte>` | *readBuffer* | Buffer to receive data |
| `System.Int32` | *readCount* | Number of bytes to read |

### Dispose()
Dispose
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L166)
```csharp title="Declaration"
public void Dispose()
```
### Read(byte, Span&lt;byte&gt;)
Read data from the bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548ABus.cs#L175)
```csharp title="Declaration"
public void Read(byte peripheralAddress, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | Device address |
| `System.Span<System.Byte>` | *readBuffer* | Buffer to receive data |


## Implements

* `Meadow.Hardware.II2cBus`
* `System.IDisposable`
