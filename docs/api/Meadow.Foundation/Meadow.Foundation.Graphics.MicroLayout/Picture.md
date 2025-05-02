---
title: Class Picture
sidebar_label: Picture
description: Represents an image display control in the user interface.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/Picture
---
# Class Picture
Represents an image display control in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L9)
```csharp title="Declaration"
public class Picture : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### Image
Gets or sets the image to be displayed on the image display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L45)
```csharp title="Declaration"
public Image? Image { get; set; }
```
### VerticalAlignment
Gets or sets the vertical alignment of the image within the image display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L54)
```csharp title="Declaration"
public VerticalAlignment VerticalAlignment { get; set; }
```
### HorizontalAlignment
Gets or sets the horizontal alignment of the image within the image display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L63)
```csharp title="Declaration"
public HorizontalAlignment HorizontalAlignment { get; set; }
```
### BackColor
Gets or sets the background color of the image display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L72)
```csharp title="Declaration"
public Color BackColor { get; set; }
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the image display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L34)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |

### OnDraw(MicroGraphics)
Draws the image display control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Picture.cs#L82)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to draw the image display control on. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
