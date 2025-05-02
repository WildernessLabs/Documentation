---
title: Interface IColorable
sidebar_label: IColorable
description: Represents an item that can be colored
slug: /docs/api/Meadow/Meadow.Hardware/IColorable
---
# Interface IColorable
Represents an item that can be colored

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IColorable.cs#L6)
```csharp title="Declaration"
public interface IColorable
```
## Methods
### SetColor(Color)
Sets the color of the target
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IColorable.cs#L12)
```csharp title="Declaration"
void SetColor(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The color to set |

### GetColor()
Gets the color of the target
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IColorable.cs#L17)
```csharp title="Declaration"
Color GetColor()
```

##### Returns

[Meadow.Color](../Meadow/Color)
