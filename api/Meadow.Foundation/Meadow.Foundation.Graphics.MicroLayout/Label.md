---
title: Class Label
sidebar_label: Label
description: "Represents a label display control in the user interface."
---
# Class Label
Represents a label display control in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L6)
```csharp title="Declaration"
public class Label : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### VerticalAlignment
Gets or sets the vertical alignment of the label text within the label display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L52)
```csharp title="Declaration"
public VerticalAlignment VerticalAlignment { get; set; }
```
### HorizontalAlignment
Gets or sets the horizontal alignment of the label text within the label display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L61)
```csharp title="Declaration"
public HorizontalAlignment HorizontalAlignment { get; set; }
```
### TextColor
Gets or sets the text color of the label text.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L70)
```csharp title="Declaration"
public Color TextColor { get; set; }
```
### BackColor
Gets or sets the background color of the label display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L79)
```csharp title="Declaration"
public Color BackColor { get; set; }
```
### Text
Gets or sets the text to be displayed on the label.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L88)
```csharp title="Declaration"
public string Text { get; set; }
```
### Font
Gets or sets the font used for displaying the label text.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L97)
```csharp title="Declaration"
public IFont? Font { get; set; }
```
### ScaleFactor
ScaleFactor used to calculate drawn text size
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L106)
```csharp title="Declaration"
public ScaleFactor ScaleFactor { get; set; }
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the label display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L35)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |

### OnDraw(MicroGraphics)
Draws the label display control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Label.cs#L116)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to draw the label display control on. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
