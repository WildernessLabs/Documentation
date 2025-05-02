---
title: Interface IPixelDisplayProvider
sidebar_label: IPixelDisplayProvider
description: Represents an object that can create IPixelDisplays
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IPixelDisplayProvider
---
# Interface IPixelDisplayProvider
Represents an object that can create IPixelDisplays

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplayProvider.cs#L6)
```csharp title="Declaration"
public interface IPixelDisplayProvider
```
## Methods
### CreateDisplay(int?, int?)
Creates an IPixelDisplay with the provided (or default) parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplayProvider.cs#L14)
```csharp title="Declaration"
IResizablePixelDisplay CreateDisplay(int? width = null, int? height = null)
```

##### Returns

[Meadow.Peripherals.Displays.IResizablePixelDisplay](../Meadow.Peripherals.Displays/IResizablePixelDisplay): An instance of an IPixelDisplay
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.Int32>` | *width* | The desired display width |
| `System.Nullable<System.Int32>` | *height* | The desired display height |

