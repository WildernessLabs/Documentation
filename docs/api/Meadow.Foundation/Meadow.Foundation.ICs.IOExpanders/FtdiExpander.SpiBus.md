---
title: Class FtdiExpander.SpiBus
sidebar_label: FtdiExpander.SpiBus
description: Represnets the SPI bus for the FTDI expander
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.SpiBus
---
# Class FtdiExpander.SpiBus
Represnets the SPI bus for the FTDI expander

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L12)
```csharp title="Declaration"
public abstract class FtdiExpander.SpiBus : ISpiBus
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.FtdiExpander.Ft232hSpiBus](../Meadow.Foundation.ICs.IOExpanders/FtdiExpander.Ft232hSpiBus)

**Implements:**  
`Meadow.Hardware.ISpiBus`

## Properties
### SupportedSpeeds
Gets an array of all supported speeds of the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L15)
```csharp title="Declaration"
public abstract Frequency[] SupportedSpeeds { get; }
```
### Configuration
Gets the current SPI clock configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L17)
```csharp title="Declaration"
public abstract SpiClockConfiguration Configuration { get; }
```
## Methods
### Exchange(IDigitalOutputPort?, Span&lt;byte&gt;, Span&lt;byte&gt;, ChipSelectMode)
Writes data from the write buffer to a peripheral on the bus while reading return data into the read buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L22)
```csharp title="Declaration"
public abstract void Exchange(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read returning data into. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |

### Read(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Reads data from the SPI bus into the specified buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L24)
```csharp title="Declaration"
public abstract void Read(IDigitalOutputPort? chipSelect, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the bus. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read data into. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |

### Write(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Writes data to the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L26)
```csharp title="Declaration"
public abstract void Write(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |


## Implements

* `Meadow.Hardware.ISpiBus`
