---
title: Class DisplayScreen
sidebar_label: DisplayScreen
description: An abstraction of a physical screen
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/DisplayScreen
---
# Class DisplayScreen
An abstraction of a physical screen

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L12)
```csharp title="Declaration"
public class DisplayScreen : IControl
```
**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### TouchScreen
Gets the Touchscreen associated with the display screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L22)
```csharp title="Declaration"
public ITouchScreen? TouchScreen { get; }
```
### Controls
Gets the collection of controls on the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L27)
```csharp title="Declaration"
public ControlsCollection Controls { get; }
```
### Width
Gets the width of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L32)
```csharp title="Declaration"
public int Width { get; set; }
```
### Height
Gets the height of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L37)
```csharp title="Declaration"
public int Height { get; set; }
```
### IsInvalid
Gets a value indicating whether the display control is currently invalid and needs to be refreshed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L40)
```csharp title="Declaration"
public bool IsInvalid { get; }
```
### BackgroundColor
Gets or sets the background color of the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L89)
```csharp title="Declaration"
public Color BackgroundColor { get; set; }
```
### Left
Gets or sets the left coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L283)
```csharp title="Declaration"
public int Left { get; set; }
```
### Top
Gets or sets the top coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L285)
```csharp title="Declaration"
public int Top { get; set; }
```
### IsVisible
Gets or sets whether the control is visible.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L287)
```csharp title="Declaration"
public bool IsVisible { get; set; }
```
### Parent
Gets of sets the Control's Parent, if it has one.  If the Control is unparented (i.e. Parent is null) then it is directly on the DisplayScreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L289)
```csharp title="Declaration"
public IControl? Parent { get; set; }
```
## Methods
### Invalidate()
Invalidates the entire screen, causing all controls to redraw
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L165)
```csharp title="Declaration"
public void Invalidate()
```
### BeginUpdate()
Begins an update process for the display screen, indicating that no drawing should take place until EndUpdate is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L187)
```csharp title="Declaration"
public void BeginUpdate()
```
### EndUpdate()
End an update process for the display screen, indicating that drawing should resume and invalidating the DisplayScreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L195)
```csharp title="Declaration"
public void EndUpdate()
```
### Refresh(MicroGraphics)
Refreshes the display control using the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/DisplayScreen.cs#L277)
```csharp title="Declaration"
public void Refresh(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) object to use for refreshing the display control. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
