---
title: Class FtdiExpander.I2CBus
sidebar_label: FtdiExpander.I2CBus
description: Represents an I2C bus for the FTDI expander.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.I2CBus
---
# Class FtdiExpander.I2CBus
Represents an I2C bus for the FTDI expander.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L16)
```csharp title="Declaration"
public abstract class FtdiExpander.I2CBus : II2cBus, IDisposable
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.FtdiExpander.Ft232hI2cBus](../Meadow.Foundation.ICs.IOExpanders/FtdiExpander.Ft232hI2cBus), [Meadow.Foundation.ICs.IOExpanders.FtdiExpander.Ft23xxI2cBus](../Meadow.Foundation.ICs.IOExpanders/FtdiExpander.Ft23xxI2cBus)

**Implements:**  
`Meadow.Hardware.II2cBus`, `System.IDisposable`

## Properties
### BusSpeed
Gets or sets the speed of the I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L26)
```csharp title="Declaration"
public I2cBusSpeed BusSpeed { get; set; }
```
## Fields
### _expander
The FTDI expander instance associated with this I2C bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L21)
```csharp title="Declaration"
protected readonly FtdiExpander _expander
```
### MaskGpio
Mask for GPIO operations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L67)
```csharp title="Declaration"
protected const byte MaskGpio = 248
```
## Methods
### Wait(int)
Waits for a specified number of spin counts.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L140)
```csharp title="Declaration"
protected void Wait(int spinCount)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *spinCount* | The number of spin counts to wait. |

### Write(byte, Span&lt;byte&gt;)
Writes data to a peripheral device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L171)
```csharp title="Declaration"
public void Write(byte peripheralAddress, Span<byte> writeBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *writeBuffer* | The data buffer to write. |

### Write(byte, Span&lt;byte&gt;, bool)
Writes data to a peripheral device with an option to send a stop condition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L182)
```csharp title="Declaration"
public void Write(byte peripheralAddress, Span<byte> writeBuffer, bool terminatingStop)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *writeBuffer* | The data buffer to write. |
| `System.Boolean` | *terminatingStop* | Whether to send a stop condition after writing. |

### Dispose()
Releases all resources used by the [Meadow.Foundation.ICs.IOExpanders.FtdiExpander.I2CBus](../Meadow.Foundation.ICs.IOExpanders/FtdiExpander.I2CBus).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L209)
```csharp title="Declaration"
public void Dispose()
```
### Exchange(byte, Span&lt;byte&gt;, Span&lt;byte&gt;)
Exchanges data with a peripheral device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L219)
```csharp title="Declaration"
public void Exchange(byte peripheralAddress, Span<byte> writeBuffer, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *writeBuffer* | The data buffer to write. |
| `System.Span<System.Byte>` | *readBuffer* | The data buffer to read. |

### Read(byte, Span&lt;byte&gt;)
Reads data from a peripheral device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.I2CBus.cs#L230)
```csharp title="Declaration"
public void Read(byte peripheralAddress, Span<byte> readBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *peripheralAddress* | The address of the peripheral device. |
| `System.Span<System.Byte>` | *readBuffer* | The data buffer to read. |


## Implements

* `Meadow.Hardware.II2cBus`
* `System.IDisposable`
