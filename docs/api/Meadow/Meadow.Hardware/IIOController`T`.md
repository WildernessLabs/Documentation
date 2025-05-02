---
title: Interface IIOController<T>
sidebar_label: IIOController<T>
description: Contract for Meadow devices.
slug: /docs/api/Meadow/Meadow.Hardware/IIOController`T`
---
# Interface IIOController&lt;T&gt;
Contract for Meadow devices.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IIOController.cs#L6)
```csharp title="Declaration"
public interface IIOController<T> where T : IPinDefinitions
```
## Properties
### Pins
Gets the Controller's IPinDefinitions
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IIOController.cs#L22)
```csharp title="Declaration"
T Pins { get; }
```
## Methods
### GetPin(string)
Retrieves an IPin by name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IIOController.cs#L13)
```csharp title="Declaration"
IPin? GetPin(string pinName)
```

##### Returns

[Meadow.Hardware.IPin](../Meadow.Hardware/IPin): The requested pin or null if not found
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *pinName* | Registered name of the pin to retrieve |

