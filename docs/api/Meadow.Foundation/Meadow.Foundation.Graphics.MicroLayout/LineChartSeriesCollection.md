---
title: Class LineChartSeriesCollection
sidebar_label: LineChartSeriesCollection
description: A collection of LineCHartSeries instances
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/LineChartSeriesCollection
---
# Class LineChartSeriesCollection
A collection of LineCHartSeries instances

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L9)
```csharp title="Declaration"
public class LineChartSeriesCollection : IEnumerable<LineChartSeries>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.LineChartSeries>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of Series in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L16)
```csharp title="Declaration"
public int Count { get; }
```
### this[int]

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L45)
```csharp title="Declaration"
public LineChartSeries this[int index] { get; }
```
## Methods
### Add(params LineChartSeries[])
Adds one or more LineChartSeries to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L22)
```csharp title="Declaration"
public void Add(params LineChartSeries[] series)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Foundation.Graphics.MicroLayout.LineChartSeries[]` | *series* |

### Remove(LineChartSeries)
Removes a LineChartSeries from the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L31)
```csharp title="Declaration"
public void Remove(LineChartSeries series)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.LineChartSeries](../Meadow.Foundation.Graphics.MicroLayout/LineChartSeries) | *series* |

### Clear()
Removes all LineChartSeries from the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L39)
```csharp title="Declaration"
public void Clear()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineChartSeriesCollection.cs#L51)
```csharp title="Declaration"
public IEnumerator<LineChartSeries> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Foundation.Graphics.MicroLayout.LineChartSeries>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.LineChartSeries>`
* `System.Collections.IEnumerable`
