---
title: Class HistogramChartSeries
sidebar_label: HistogramChartSeries
description: Represents a series in a histogram chart.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/HistogramChartSeries
---
# Class HistogramChartSeries
Represents a series in a histogram chart.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChartSeries.cs#L10)
```csharp title="Declaration"
public class HistogramChartSeries : INotifyPropertyChanged
```
**Implements:**  
`System.ComponentModel.INotifyPropertyChanged`

## Properties
### ForegroundColor
Gets or sets the foreground color of the series.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChartSeries.cs#L21)
```csharp title="Declaration"
public Color ForegroundColor { get; set; }
```
### DataElements
Gets or sets the data elements of the series, where each element is a tuple containing X and Y values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChartSeries.cs#L35)
```csharp title="Declaration"
public IEnumerable<(int X, int Y)> DataElements { get; set; }
```
## Events
### PropertyChanged
Occurs when a property value changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/HistogramChartSeries.cs#L16)
```csharp title="Declaration"
public event PropertyChangedEventHandler? PropertyChanged
```
##### Event Type
`System.ComponentModel.PropertyChangedEventHandler`

## Implements

* `System.ComponentModel.INotifyPropertyChanged`
