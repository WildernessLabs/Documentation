---
title: Class MicroLayout
sidebar_label: MicroLayout
description: A base class for display layouts
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/MicroLayout
---
# Class MicroLayout
A base class for display layouts

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L8)
```csharp title="Declaration"
public abstract class MicroLayout : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Derived:**  
[Meadow.Foundation.Graphics.MicroLayout.AbsoluteLayout](../Meadow.Foundation.Graphics.MicroLayout/AbsoluteLayout), [Meadow.Foundation.Graphics.MicroLayout.DockLayout](../Meadow.Foundation.Graphics.MicroLayout/DockLayout), [Meadow.Foundation.Graphics.MicroLayout.GridLayout](../Meadow.Foundation.Graphics.MicroLayout/GridLayout), [Meadow.Foundation.Graphics.MicroLayout.ListBox](../Meadow.Foundation.Graphics.MicroLayout/ListBox), [Meadow.Foundation.Graphics.MicroLayout.ScrollingTextArea](../Meadow.Foundation.Graphics.MicroLayout/ScrollingTextArea), [Meadow.Foundation.Graphics.MicroLayout.StackLayout](../Meadow.Foundation.Graphics.MicroLayout/StackLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### BackgroundColor
Gets or sets the background color of the Layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L28)
```csharp title="Declaration"
public Color? BackgroundColor { get; set; }
```
### IsInvalid
Gets or sets a value indicating whether the control needs to be redrawn.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L35)
```csharp title="Declaration"
public override bool IsInvalid { get; }
```
### IsVisible
Gets or sets a value indicating whether the control is visible.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L50)
```csharp title="Declaration"
public override bool IsVisible { get; set; }
```
### Controls
Gets the collection of controls on the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L81)
```csharp title="Declaration"
public ControlsCollection Controls { get; }
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L38)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |

### Invalidate()
Marks the control as invalid, requiring a redraw.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/MicroLayout.cs#L64)
```csharp title="Declaration"
public override void Invalidate()
```

## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
