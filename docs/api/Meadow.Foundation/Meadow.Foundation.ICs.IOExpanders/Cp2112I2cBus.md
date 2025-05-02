---
title: Class Cp2112I2cBus
sidebar_label: Cp2112I2cBus
description: Represents an I2C bus implementation using the Cp2112 device.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Cp2112I2cBus
---
# Class Cp2112I2cBus
Represents an I2C bus implementation using the Cp2112 device.

###### **Assembly**: Cp2112.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L9)
```csharp title="Declaration"
public sealed class Cp2112I2cBus : II2cBus, IDisposable
```
**Implements:**  
`Meadow.Hardware.II2cBus`, `System.IDisposable`

## Properties
### BusSpeed
Gets or sets the bus clock speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L21)
```csharp title="Declaration"
public I2cBusSpeed BusSpeed { get; set; }
```
## Methods
### ~Cp2112I2cBus()
Finalizer for the Cp2112I2cBus class, used to release unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L34)
```csharp title="Declaration"
protected ~Cp2112I2cBus()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L40)
```csharp title="Declaration"
public void Dispose()
```
### Exchange(byte, Span&lt;byte&gt;, Span&lt;byte&gt;)
Writes data from the write buffer to a peripheral on the bus, then resets the bus
and reads the return data into the read buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L47)
```csharp title="Declaration"
public void Exchange(byte peripheralAddress, Span<byte> writeBuffer, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the I2C peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer to read data from. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read returning data into. |

### Read(byte, Span&lt;byte&gt;)
Reads bytes from a peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L54)
```csharp title="Declaration"
public void Read(byte peripheralAddress, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The I2C address to read. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer used for data reception. |

### Write(byte, Span&lt;byte&gt;)
Writes a number of bytes to the bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112I2cBus.cs#L60)
```csharp title="Declaration"
public void Write(byte peripheralAddress, Span<byte> writeBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the I2C peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to be written. |


## Implements

* `Meadow.Hardware.II2cBus`
* `System.IDisposable`
