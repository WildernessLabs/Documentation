---
title: Class Layout
sidebar_label: Layout
description: "A base class for display layouts"
---
# Class Layout
A base class for display layouts

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L8)
```csharp title="Declaration"
public abstract class Layout : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Derived:**  
[Meadow.Foundation.Graphics.MicroLayout.AbsoluteLayout](../Meadow.Foundation.Graphics.MicroLayout/AbsoluteLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### BackgroundColor
Gets or sets the background color of the Layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L29)
```csharp title="Declaration"
public Color? BackgroundColor { get; set; }
```
### IsInvalid
Gets or sets a value indicating whether the control needs to be redrawn.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L36)
```csharp title="Declaration"
public override bool IsInvalid { get; }
```
### Visible
Gets or sets a value indicating whether the control is visible.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L51)
```csharp title="Declaration"
public override bool Visible { get; set; }
```
### Controls
Gets the collection of controls on the display screen.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L82)
```csharp title="Declaration"
public ControlsCollection Controls { get; }
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L39)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |

### Invalidate()
Marks the control as invalid, requiring a redraw.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/Layout.cs#L65)
```csharp title="Declaration"
public override void Invalidate()
```

## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
