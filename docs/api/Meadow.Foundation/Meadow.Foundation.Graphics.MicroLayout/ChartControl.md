---
title: Class ChartControl
sidebar_label: ChartControl
description: An abstract base class for Chart controls
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/ChartControl
---
# Class ChartControl
An abstract base class for Chart controls

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L6)
```csharp title="Declaration"
public abstract class ChartControl : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Derived:**  
[Meadow.Foundation.Graphics.MicroLayout.HistogramChart](../Meadow.Foundation.Graphics.MicroLayout/HistogramChart), [Meadow.Foundation.Graphics.MicroLayout.LineChart](../Meadow.Foundation.Graphics.MicroLayout/LineChart), [Meadow.Foundation.Graphics.MicroLayout.VerticalBarChart](../Meadow.Foundation.Graphics.MicroLayout/VerticalBarChart)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### AxisFont
The IFont used to for displaying axis labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L38)
```csharp title="Declaration"
public IFont? AxisFont { get; set; }
```
### BackgroundColor
The chart's background color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L42)
```csharp title="Declaration"
public Color BackgroundColor { get; set; }
```
### AxisColor
The color used to draw the chart axes lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L46)
```csharp title="Declaration"
public Color AxisColor { get; set; }
```
### AxisLabelColor
The color used to draw the chart axes labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L50)
```csharp title="Declaration"
public Color AxisLabelColor { get; set; }
```
### AxisStroke
The width of the axes lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L54)
```csharp title="Declaration"
public int AxisStroke { get; set; }
```
### ChartAreaHeight
Gets or sets the height of the chart (non-axis) area
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L59)
```csharp title="Declaration"
protected int ChartAreaHeight { get; set; }
```
### ChartAreaWidth
Gets or sets the width of the chart (non-axis) area
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L63)
```csharp title="Declaration"
protected int ChartAreaWidth { get; set; }
```
### ChartAreaLeft
Gets or sets the left of the chart (non-axis) area
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L67)
```csharp title="Declaration"
protected int ChartAreaLeft { get; set; }
```
### ChartAreaTop
Gets or sets the top of the chart (non-axis) area
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L71)
```csharp title="Declaration"
protected int ChartAreaTop { get; set; }
```
### ChartAreaBottom
Gets or sets the bottom of the chart (non-axis) area
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L75)
```csharp title="Declaration"
protected int ChartAreaBottom { get; set; }
```
### ParentOffsetX
Gets or sets the X offset withing the chart's parent
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L80)
```csharp title="Declaration"
protected int ParentOffsetX { get; }
```
### ParentOffsetY
Gets or sets the Y offset withing the chart's parent
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L84)
```csharp title="Declaration"
protected int ParentOffsetY { get; }
```
## Fields
### DefaultAxisColor
The default color for axis lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L13)
```csharp title="Declaration"
public static Color DefaultAxisColor
```
### DefaultAxisLabelColor
The default color for axis labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L18)
```csharp title="Declaration"
public static Color DefaultAxisLabelColor
```
### DefaultBackgroundColor
The default chart background color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L23)
```csharp title="Declaration"
public static Color DefaultBackgroundColor
```
### DefaultMargin
The default width of the control margin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L28)
```csharp title="Declaration"
protected const int DefaultMargin = 5
```
### DefaultAxisStroke
The default width of the control's axis lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L33)
```csharp title="Declaration"
protected const int DefaultAxisStroke = 4
```
## Methods
### GetAxisFont()
Get either the specified or default font for the axes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L102)
```csharp title="Declaration"
protected IFont GetAxisFont()
```

##### Returns

[Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartControl.cs#L117)
```csharp title="Declaration"
public override void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
