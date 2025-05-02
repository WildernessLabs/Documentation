---
title: Class ListBox
sidebar_label: ListBox
description: Represents a list box control in the user interface.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/ListBox
---
# Class ListBox
Represents a list box control in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L10)
```csharp title="Declaration"
public class ListBox : MicroLayout, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl) -> [Meadow.Foundation.Graphics.MicroLayout.MicroLayout](../Meadow.Foundation.Graphics.MicroLayout/MicroLayout)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### RowFormatter
An optional function to provide formatting for row objects
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L24)
```csharp title="Declaration"
public Func<object, string>? RowFormatter { get; set; }
```
### ItemSpacing
Spacing, in pixels, between items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L29)
```csharp title="Declaration"
public int ItemSpacing { get; }
```
### ItemLeftMargin
Spacing, in pixels, between the control left and the left of each item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L34)
```csharp title="Declaration"
public int ItemLeftMargin { get; set; }
```
### Items
Items to display in the ListBox
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L39)
```csharp title="Declaration"
public ObservableCollection<object> Items { get; }
```
### SelectedRowColor
Gets or sets the background color for a selected row
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L81)
```csharp title="Declaration"
public Color SelectedRowColor { get; set; }
```
### SelectedTextColor
Gets or sets the background color for a selected row
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L98)
```csharp title="Declaration"
public Color SelectedTextColor { get; set; }
```
### TextColor
Gets or sets the foreground color of list items
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L115)
```csharp title="Declaration"
public Color TextColor { get; set; }
```
### SelectedItem
The value of the selected Item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L132)
```csharp title="Declaration"
public object? SelectedItem { get; }
```
### SelectedIndex
The index of the currently selected Item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L144)
```csharp title="Declaration"
public int SelectedIndex { get; set; }
```
### TopIndex
Gets or sets the index of the top visible Item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L180)
```csharp title="Declaration"
public int TopIndex { get; set; }
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L238)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |

### OnDraw(MicroGraphics)
Performs the actual drawing of the control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
This method must be implemented in derived classes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ListBox.cs#L247)
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
