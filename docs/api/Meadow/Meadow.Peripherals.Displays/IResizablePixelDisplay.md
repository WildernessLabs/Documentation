---
title: Interface IResizablePixelDisplay
sidebar_label: IResizablePixelDisplay
description: Represents a resizable pixel based graphics display
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IResizablePixelDisplay
---
# Interface IResizablePixelDisplay
Represents a resizable pixel based graphics display

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IResizablePixelDisplay.cs#L6)
```csharp title="Declaration"
public interface IResizablePixelDisplay : IPixelDisplay, IDisplay
```
## Methods
### Resize(int, int, float)
Rsizes the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IResizablePixelDisplay.cs#L14)
```csharp title="Declaration"
void Resize(int width, int height, float displayScale = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *width* | The new display width |
| `System.Int32` | *height* | The new display height |
| `System.Single` | *displayScale* | The new display height |

