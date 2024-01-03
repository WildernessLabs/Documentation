---
title: Interface IRotatableDisplay
sidebar_label: IRotatableDisplay
description: "Represents a display that supports rotation in 90 degree increments"
---
# Interface IRotatableDisplay
Represents a display that supports rotation in 90 degree increments

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Displays/IRotatableDisplay.cs#L6)
```csharp title="Declaration"
public interface IRotatableDisplay
```
## Properties
### Rotation
Gets the current display rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Displays/IRotatableDisplay.cs#L17)
```csharp title="Declaration"
RotationType Rotation { get; }
```
## Methods
### SetRotation(RotationType)
Set the rotation of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Displays/IRotatableDisplay.cs#L12)
```csharp title="Declaration"
void SetRotation(RotationType rotation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.RotationType](../Meadow.Foundation.Graphics/RotationType) | *rotation* | The rotation |

