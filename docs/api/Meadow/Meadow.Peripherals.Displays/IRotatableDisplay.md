---
title: Interface IRotatableDisplay
sidebar_label: IRotatableDisplay
description: Represents a display that supports rotation in 90 degree increments
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IRotatableDisplay
---
# Interface IRotatableDisplay
Represents a display that supports rotation in 90 degree increments

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IRotatableDisplay.cs#L6)
```csharp title="Declaration"
public interface IRotatableDisplay : IPixelDisplay, IDisplay
```
## Properties
### Rotation
Gets the current display rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IRotatableDisplay.cs#L17)
```csharp title="Declaration"
RotationType Rotation { get; }
```
## Methods
### SetRotation(RotationType)
Set the rotation of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IRotatableDisplay.cs#L12)
```csharp title="Declaration"
void SetRotation(RotationType rotation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Displays.RotationType](../Meadow.Peripherals.Displays/RotationType) | *rotation* | The rotation |

