---
title: Interface IAnalogInputArrayController
sidebar_label: IAnalogInputArrayController
description: Controller for creating arrays of analog inputs from multiple pins.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogInputArrayController
---
# Interface IAnalogInputArrayController
Controller for creating arrays of analog inputs from multiple pins.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogInputArrayController.cs#L10)
```csharp title="Declaration"
public interface IAnalogInputArrayController : IPinController
```
## Methods
### CreateAnalogInputArray(params IPin[])
Creates an array of analog inputs from the specified pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogInputArrayController.cs#L17)
```csharp title="Declaration"
IAnalogInputArray CreateAnalogInputArray(params IPin[] pins)
```

##### Returns

[Meadow.Hardware.IAnalogInputArray](../Meadow.Hardware/IAnalogInputArray): An instance of [Meadow.Hardware.IAnalogInputArray](../Meadow.Hardware/IAnalogInputArray) configured with the specified pins.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin[]` | *pins* | The collection of pins to use for the analog input array. |

