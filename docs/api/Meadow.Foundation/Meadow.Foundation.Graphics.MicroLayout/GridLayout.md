---
title: Class GridLayout
sidebar_label: GridLayout
description: >-
  A layout that arranges child controls in a grid with alignment and spanning
  options.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/GridLayout
---
# Class GridLayout
A layout that arranges child controls in a grid with alignment and spanning options.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L9)
```csharp title="Declaration"
public class GridLayout : MicroLayout, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl) -> [Meadow.Foundation.Graphics.MicroLayout.MicroLayout](../Meadow.Foundation.Graphics.MicroLayout/MicroLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### Padding
Gets or sets the padding (or indentation) of all controls from all 4 edges.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L49)
```csharp title="Declaration"
public int Padding { get; set; }
```
### RowSpacing
Gets or sets the spacing between rows.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L64)
```csharp title="Declaration"
public int RowSpacing { get; set; }
```
### ColumnSpacing
Gets or sets the spacing between columns.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L79)
```csharp title="Declaration"
public int ColumnSpacing { get; set; }
```
## Methods
### Add(IControl, int, int, int, int, Alignment)
Adds a control to the grid at the specified position with optional spanning and alignment.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L121)
```csharp title="Declaration"
public void Add(IControl control, int row, int col, int rowspan = 1, int colspan = 1, GridLayout.Alignment alignment = Alignment.Center)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl) | *control* | The control to add. |
| `System.Int32` | *row* | The row index of the control. |
| `System.Int32` | *col* | The column index of the control. |
| `System.Int32` | *rowspan* | The number of rows the control spans. |
| `System.Int32` | *colspan* | The number of columns the control spans. |
| [Meadow.Foundation.Graphics.MicroLayout.GridLayout.Alignment](../Meadow.Foundation.Graphics.MicroLayout/GridLayout.Alignment) | *alignment* | The alignment of the control within the cell. |

### Remove(IControl)
Removes a control from the grid layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L137)
```csharp title="Declaration"
public void Remove(IControl control)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl) | *control* | The control to remove. |

### LayoutControls()
Updates the layout of all controls in the grid.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L192)
```csharp title="Declaration"
public void LayoutControls()
```
### OnDraw(MicroGraphics)
Draws the grid layout.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Layouts/GridLayout.cs#L205)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
