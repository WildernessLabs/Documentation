---
title: Class StackLayout
sidebar_label: StackLayout
description: A layout that arranges child elements in a horizontal or vertical stack.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/StackLayout
---
# Class StackLayout
A layout that arranges child elements in a horizontal or vertical stack.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L6)
```csharp title="Declaration"
public class StackLayout : MicroLayout, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl) -> [Meadow.Foundation.Graphics.MicroLayout.MicroLayout](../Meadow.Foundation.Graphics.MicroLayout/MicroLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### StackOrientation
Gets or sets the stack orientation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L29)
```csharp title="Declaration"
public StackLayout.Orientation StackOrientation { get; set; }
```
### Spacing
Gets or sets the spacing between child elements.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L46)
```csharp title="Declaration"
public int Spacing { get; set; }
```
## Methods
### LayoutControls()
Arranges child controls based on the stack orientation and indentation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L77)
```csharp title="Declaration"
public void LayoutControls()
```
### Add(IControl)
Adds a control to the layout and updates positions.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L110)
```csharp title="Declaration"
public void Add(IControl control)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl) | *control* | The control to add. |

### OnDraw(MicroGraphics)
Performs the actual drawing of the control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
This method must be implemented in derived classes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/StackLayout.cs#L121)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to draw the control on. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
