---
title: Class ChartExtensions
sidebar_label: ChartExtensions
description: Extension methods for Chart objects
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/ChartExtensions
---
# Class ChartExtensions
Extension methods for Chart objects

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartExtensions.cs#L8)
```csharp title="Declaration"
public static class ChartExtensions
```
## Methods
### ToLineChartSeries(double[,])
Converts a 2-dimensional array of doubles to a LineCHartSeries
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/ChartExtensions.cs#L14)
```csharp title="Declaration"
public static LineChartSeries ToLineChartSeries(this double[,] xyData)
```

##### Returns

[Meadow.Foundation.Graphics.MicroLayout.LineChartSeries](../Meadow.Foundation.Graphics.MicroLayout/LineChartSeries)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double[,]` | *xyData* | the data in X,Y pairs |

