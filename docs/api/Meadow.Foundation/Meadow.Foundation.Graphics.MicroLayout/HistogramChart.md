---
title: Class HistogramChart
sidebar_label: HistogramChart
description: Represents a histogram chart control.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/HistogramChart
---
# Class HistogramChart
Represents a histogram chart control.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L10)
```csharp title="Declaration"
public class HistogramChart : ChartControl, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl) -> [Meadow.Foundation.Graphics.MicroLayout.ChartControl](../Meadow.Foundation.Graphics.MicroLayout/ChartControl)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### Series
Gets or sets a series of float values to plot
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L47)
```csharp title="Declaration"
public List<HistogramChartSeries> Series { get; set; }
```
### ShowXAxisLabels
Gets or sets the visibility of the X axis labels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L56)
```csharp title="Declaration"
public bool ShowXAxisLabels { get; set; }
```
### MinXAxisValue
Gets or sets an optional minimum X Axis value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L65)
```csharp title="Declaration"
public int? MinXAxisValue { get; set; }
```
### MaxXAxisValue
Gets or sets an optional maximum X Axis value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L74)
```csharp title="Declaration"
public int? MaxXAxisValue { get; set; }
```
### MaxYAxisValue
Gets or sets an optional maximum Y Axis value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L83)
```csharp title="Declaration"
public int? MaxYAxisValue { get; set; }
```
## Methods
### OnDraw(MicroGraphics)
Performs the actual drawing of the control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
This method must be implemented in derived classes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L90)
```csharp title="Declaration"
protected override void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to draw the control on. |

### DrawValueBar(MicroGraphics, int, (int X, int Y), int, int, int, int, Color, bool)
Called to draw a value bar in the histogram chart.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChart.cs#L131)
```csharp title="Declaration"
protected virtual void DrawValueBar(MicroGraphics graphics, int seriesNumber, (int X, int Y) value, int x, int y, int width, int height, Color barColor, bool filled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The graphics context used to draw the bar. |
| `System.Int32` | *seriesNumber* | The series number to which the bar belongs. |
| `System.ValueTuple<System.Int32,System.Int32>` | *value* | The value represented by the bar. |
| `System.Int32` | *x* | The X-coordinate of the top-left corner of the bar. |
| `System.Int32` | *y* | The Y-coordinate of the top-left corner of the bar. |
| `System.Int32` | *width* | The width of the bar. |
| `System.Int32` | *height* | The height of the bar. |
| `Meadow.Color` | *barColor* | The color of the bar. |
| `System.Boolean` | *filled* | A value indicating whether the bar is filled or just outlined. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
