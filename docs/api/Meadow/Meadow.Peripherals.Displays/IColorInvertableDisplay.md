---
title: Interface IColorInvertableDisplay
sidebar_label: IColorInvertableDisplay
description: Represents a display that supports inverting colors
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IColorInvertableDisplay
---
# Interface IColorInvertableDisplay
Represents a display that supports inverting colors

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IIColorInvertableDisplay.cs#L6)
```csharp title="Declaration"
public interface IColorInvertableDisplay : IPixelDisplay, IDisplay
```
## Properties
### IsColorInverted
Gets whether the display color is inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IIColorInvertableDisplay.cs#L17)
```csharp title="Declaration"
bool IsColorInverted { get; }
```
## Methods
### InvertDisplayColor(bool)
Invert the display colors
True to invert, false for normal colors
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IIColorInvertableDisplay.cs#L12)
```csharp title="Declaration"
void InvertDisplayColor(bool invert)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *invert* |

