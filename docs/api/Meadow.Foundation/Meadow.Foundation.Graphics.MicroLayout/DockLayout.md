---
title: Class DockLayout
sidebar_label: DockLayout
description: A layout that arranges child controls based on a docking position.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/DockLayout
---
# Class DockLayout
A layout that arranges child controls based on a docking position.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/DockLayout.cs#L9)
```csharp title="Declaration"
public class DockLayout : MicroLayout, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl) -> [Meadow.Foundation.Graphics.MicroLayout.MicroLayout](../Meadow.Foundation.Graphics.MicroLayout/MicroLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### Padding
Gets or sets the padding around the controls in the layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/DockLayout.cs#L57)
```csharp title="Declaration"
public int Padding { get; set; }
```
## Methods
### Add(IControl, DockPosition)
Adds a control to the layout at the specified docking position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/DockLayout.cs#L78)
```csharp title="Declaration"
public void Add(IControl control, DockLayout.DockPosition position)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl) | *control* | The control to add. |
| [Meadow.Foundation.Graphics.MicroLayout.DockLayout.DockPosition](../Meadow.Foundation.Graphics.MicroLayout/DockLayout.DockPosition) | *position* | The docking position for the control. |

### Remove(IControl)
Removes a control from the layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/DockLayout.cs#L90)
```csharp title="Declaration"
public void Remove(IControl control)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl) | *control* | The control to remove. |

### OnDraw(MicroGraphics)
Draws the layout using the specified graphics context.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/DockLayout.cs#L151)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The graphics context used to render the layout. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
