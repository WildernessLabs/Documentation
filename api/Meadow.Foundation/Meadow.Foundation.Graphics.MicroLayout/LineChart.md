---
title: Class LineChart
sidebar_label: LineChart
description: "An X/Y Line chart"
---
# Class LineChart
An X/Y Line chart

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L8)
```csharp title="Declaration"
public class LineChart : ThemedControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### AlwaysShowYOrigin
When true, Y-value origin (zero) is always displayed, otherwise the Y axis is scaled based on the data range.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L31)
```csharp title="Declaration"
public bool AlwaysShowYOrigin { get; set; }
```
### AxisFont
The IFont used to for displaying axis labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L35)
```csharp title="Declaration"
public IFont? AxisFont { get; set; }
```
### BackgroundColor
The chart's background color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L39)
```csharp title="Declaration"
public Color BackgroundColor { get; set; }
```
### AxisColor
The color used to draw the chart axes lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L43)
```csharp title="Declaration"
public Color AxisColor { get; set; }
```
### AxisLabelColor
The color used to draw the chart axes labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L47)
```csharp title="Declaration"
public Color AxisLabelColor { get; set; }
```
### AxisStroke
The width of the axes lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L51)
```csharp title="Declaration"
public int AxisStroke { get; set; }
```
### ShowYAxisLabels
When true, Y-axis labels will be shown
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L57)
```csharp title="Declaration"
public bool ShowYAxisLabels { get; set; }
```
### Series
The collection of data series to plot
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L61)
```csharp title="Declaration"
public LineChartSeriesCollection Series { get; set; }
```
## Fields
### DefaultAxisColor
The default color for axis lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L13)
```csharp title="Declaration"
public static Color DefaultAxisColor
```
### DefaultAxisLabelColor
The default color for axis labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L17)
```csharp title="Declaration"
public static Color DefaultAxisLabelColor
```
### DefaultBackgroundColor
The default chart background color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L21)
```csharp title="Declaration"
public static Color DefaultBackgroundColor
```
## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L91)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChart.cs#L96)
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
