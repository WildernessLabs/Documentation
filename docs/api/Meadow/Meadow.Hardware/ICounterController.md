---
title: Interface ICounterController
sidebar_label: ICounterController
description: Contract for devices capable of creating `ICounter` instances.
slug: /docs/api/Meadow/Meadow.Hardware/ICounterController
---
# Interface ICounterController
Contract for devices capable of creating `ICounter` instances.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ICounterController.cs#L6)
```csharp title="Declaration"
public interface ICounterController : IPinController
```
## Methods
### CreateCounter(IPin, InterruptMode)
Creates an `ICounter` instance on the specified pin with the specified interrupt edge mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/ICounterController.cs#L14)
```csharp title="Declaration"
ICounter CreateCounter(IPin pin, InterruptMode edge)
```

##### Returns

[Meadow.Hardware.ICounter](../Meadow.Hardware/ICounter): The created counter instance.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create the counter on. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *edge* | The interrupt edge mode for the counter. |

