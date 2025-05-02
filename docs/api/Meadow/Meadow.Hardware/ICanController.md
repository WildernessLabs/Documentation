---
title: Interface ICanController
sidebar_label: ICanController
description: Contract for devices that expose `ICanBus(es)`.
slug: /docs/api/Meadow/Meadow.Hardware/ICanController
---
# Interface ICanController
Contract for devices that expose `ICanBus(es)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ICanController.cs#L6)
```csharp title="Declaration"
public interface ICanController
```
## Methods
### CreateCanBus(CanBitrate, int)
Creates a CAN bus instance for the requested bus number and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ICanController.cs#L14)
```csharp title="Declaration"
ICanBus CreateCanBus(CanBitrate bitrate, int busNumber)
```

##### Returns

[Meadow.Hardware.ICanBus](../Meadow.Hardware/ICanBus): An instance of an [Meadow.Hardware.ISpiBus](../Meadow.Hardware/ISpiBus)
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.CanBitrate](../Meadow.Hardware/CanBitrate) | *bitrate* | The bus bit rate |
| `System.Int32` | *busNumber* | The bus number |

