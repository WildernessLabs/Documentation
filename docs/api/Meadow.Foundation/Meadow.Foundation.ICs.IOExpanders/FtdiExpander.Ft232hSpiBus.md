---
title: Class FtdiExpander.Ft232hSpiBus
sidebar_label: FtdiExpander.Ft232hSpiBus
description: Represents an SPI bus using the FT232H
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.Ft232hSpiBus
---
# Class FtdiExpander.Ft232hSpiBus
Represents an SPI bus using the FT232H

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L15)
```csharp title="Declaration"
public class FtdiExpander.Ft232hSpiBus : FtdiExpander.SpiBus, ISpiBus
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.FtdiExpander.SpiBus](../Meadow.Foundation.ICs.IOExpanders/FtdiExpander.SpiBus)

**Implements:**  
`Meadow.Hardware.ISpiBus`

## Properties
### SupportedSpeeds
Gets an array of all supported speeds of the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L23)
```csharp title="Declaration"
public override Frequency[] SupportedSpeeds { get; }
```
### Configuration
Gets the current SPI clock configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L30)
```csharp title="Declaration"
public override SpiClockConfiguration Configuration { get; }
```
## Methods
### Exchange(IDigitalOutputPort?, Span&lt;byte&gt;, Span&lt;byte&gt;, ChipSelectMode)
Writes data from the write buffer to a peripheral on the bus while reading return data into the read buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L125)
```csharp title="Declaration"
public override void Exchange(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read returning data into. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |

### Write(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Writes data to the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L207)
```csharp title="Declaration"
public override void Write(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |

### Read(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Reads data from the SPI bus into the specified buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.Ft232hSpiBus.cs#L250)
```csharp title="Declaration"
public override void Read(IDigitalOutputPort? chipSelect, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IDigitalOutputPort` | *chipSelect* | The chip select port to activate the bus. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read data into. |
| `Meadow.Hardware.ChipSelectMode` | *csMode* | The chip select mode that activates the peripheral. |


## Implements

* `Meadow.Hardware.ISpiBus`
