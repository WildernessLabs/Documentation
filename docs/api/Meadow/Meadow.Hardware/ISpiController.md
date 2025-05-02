---
title: Interface ISpiController
sidebar_label: ISpiController
description: Contract for devices that expose `ISpiBus(es)`.
slug: /docs/api/Meadow/Meadow.Hardware/ISpiController
---
# Interface ISpiController
Contract for devices that expose `ISpiBus(es)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISpiController.cs#L6)
```csharp title="Declaration"
public interface ISpiController : IDigitalOutputController, IPinController
```
## Fields
### DefaultSpiBusSpeed
The default SPI Bus speed, in kHz, used when speed parameters are not provided
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISpiController.cs#L11)
```csharp title="Declaration"
public static Frequency DefaultSpiBusSpeed
```
## Methods
### CreateSpiBus(IPin, IPin, IPin, SpiClockConfiguration)
Creates a SPI bus instance for the requested control pins and clock configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISpiController.cs#L21)
```csharp title="Declaration"
ISpiBus CreateSpiBus(IPin clock, IPin copi, IPin cipo, SpiClockConfiguration config)
```

##### Returns

[Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus): An instance of an [Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus)
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *clock* | The IPin instance to use as the bus clock |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *copi* | The IPin instance to use for data transmit (controller out/peripheral in) |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *cipo* | The IPin instance to use for data receive (controller in/peripheral out) |
| [Meadow.Hardware.SpiClockConfiguration](../Meadow.Hardware/SpiClockConfiguration) | *config* | The bus clock configuration parameters |

### CreateSpiBus(IPin, IPin, IPin, Frequency)
Creates a SPI bus instance for the requested control pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISpiController.cs#L36)
```csharp title="Declaration"
ISpiBus CreateSpiBus(IPin clock, IPin copi, IPin cipo, Frequency speed)
```

##### Returns

[Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus): An instance of an [Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus)
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *clock* | The IPin instance to use as the bus clock |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *copi* | The IPin instance to use for data transmit (controller out/peripheral in) |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *cipo* | The IPin instance to use for data receive (controller in/peripheral out) |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *speed* | The bus speed |

### CreateSpiBus(int, Frequency)
Creates a SPI bus instance for the requested bus number and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ISpiController.cs#L49)
```csharp title="Declaration"
ISpiBus CreateSpiBus(int busNumber, Frequency speed)
```

##### Returns

[Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus): An instance of an [Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus)
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *busNumber* | The bus number |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *speed* | The bus speed |

