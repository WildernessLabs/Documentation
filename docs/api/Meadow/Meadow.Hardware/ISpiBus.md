---
title: Interface ISpiBus
sidebar_label: ISpiBus
description: Represents an SPI bus.
slug: /docs/api/Meadow/Meadow.Hardware/ISpiBus
---
# Interface ISpiBus
Represents an SPI bus.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L8)
```csharp title="Declaration"
public interface ISpiBus
```
## Properties
### SupportedSpeeds
Gets an array of all supported speeds of the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L13)
```csharp title="Declaration"
Frequency[] SupportedSpeeds { get; }
```
### Configuration
Gets the current SPI clock configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L18)
```csharp title="Declaration"
SpiClockConfiguration Configuration { get; }
```
## Methods
### Read(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Reads data from the SPI bus into the specified buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L26)
```csharp title="Declaration"
void Read(IDigitalOutputPort? chipSelect, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort) | *chipSelect* | The chip select port to activate the bus. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read data into. |
| [Meadow.Hardware.ChipSelectMode](../Meadow.Hardware/ChipSelectMode) | *csMode* | The chip select mode that activates the peripheral. |

### Write(IDigitalOutputPort?, Span&lt;byte&gt;, ChipSelectMode)
Writes data to the SPI bus.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L36)
```csharp title="Declaration"
void Write(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort) | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| [Meadow.Hardware.ChipSelectMode](../Meadow.Hardware/ChipSelectMode) | *csMode* | The chip select mode that activates the peripheral. |

### Exchange(IDigitalOutputPort?, Span&lt;byte&gt;, Span&lt;byte&gt;, ChipSelectMode)
Writes data from the write buffer to a peripheral on the bus while reading return data into the read buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/ISpiBus.cs#L48)
```csharp title="Declaration"
void Exchange(IDigitalOutputPort? chipSelect, Span<byte> writeBuffer, Span<byte> readBuffer, ChipSelectMode csMode = ChipSelectMode.ActiveLow)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort) | *chipSelect* | The chip select port to activate the peripheral. |
| `System.Span<System.Byte>` | *writeBuffer* | The buffer containing data to write. |
| `System.Span<System.Byte>` | *readBuffer* | The buffer to read returning data into. |
| [Meadow.Hardware.ChipSelectMode](../Meadow.Hardware/ChipSelectMode) | *csMode* | The chip select mode that activates the peripheral. |

