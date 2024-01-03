---
title: Class Ft232I2cBus
sidebar_label: Ft232I2cBus
description: "Represents an I2C bus using the FT232H USB to I2C bridge."
---
# Class Ft232I2cBus
Represents an I2C bus using the FT232H USB to I2C bridge.

###### **Assembly**: Ft232h.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L12)
```csharp title="Declaration"
public sealed class Ft232I2cBus : II2cBus, IDisposable
```
**Implements:**  
`Meadow.Hardware.II2cBus`, `System.IDisposable`

## Properties
### Handle
Gets the handle for the FT232H I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L22)
```csharp title="Declaration"
public IntPtr Handle { get; }
```
### GpioDirectionMask
Gets or sets the GPIO direction mask for the FT232H I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L27)
```csharp title="Declaration"
public byte GpioDirectionMask { get; set; }
```
### GpioState
Gets or sets the GPIO state for the FT232H I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L32)
```csharp title="Declaration"
public byte GpioState { get; set; }
```
### BusSpeed
Gets or sets the bus speed for the FT232H I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L50)
```csharp title="Declaration"
public I2cBusSpeed BusSpeed { get; set; }
```
## Methods
### ~Ft232I2cBus()
Finalizes an instance of the [Meadow.Foundation.ICs.IOExpanders.Ft232I2cBus](../Meadow.Foundation.ICs.IOExpanders/Ft232I2cBus) class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L65)
```csharp title="Declaration"
protected ~Ft232I2cBus()
```
### Dispose()
Releases the unmanaged resources used by the [Meadow.Foundation.ICs.IOExpanders.Ft232I2cBus](../Meadow.Foundation.ICs.IOExpanders/Ft232I2cBus) object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L74)
```csharp title="Declaration"
public void Dispose()
```
### Exchange(byte, Span&lt;byte&gt;, Span&lt;byte&gt;)
Exchanges data with a peripheral on the I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L115)
```csharp title="Declaration"
public void Exchange(byte peripheralAddress, Span<byte> writeBuffer, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to write to the peripheral. |
| `System.Span<System.Byte>` | *readBuffer* | The data to read from the peripheral. |

### Read(byte, Span&lt;byte&gt;)
Reads data from a peripheral on the I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L126)
```csharp title="Declaration"
public void Read(byte peripheralAddress, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to store the read data. |

### Write(byte, Span&lt;byte&gt;)
Writes data to a peripheral on the I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232I2cBus.cs#L148)
```csharp title="Declaration"
public void Write(byte peripheralAddress, Span<byte> writeBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *writeBuffer* | The data to write to the peripheral. |


## Implements

* `Meadow.Hardware.II2cBus`
* `System.IDisposable`
