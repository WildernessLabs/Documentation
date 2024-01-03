---
title: Class LineSeriesPointCollection
sidebar_label: LineSeriesPointCollection
description: "A Collection of LineSeriesPoints"
---
# Class LineSeriesPointCollection
A Collection of LineSeriesPoints

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L10)
```csharp title="Declaration"
public class LineSeriesPointCollection : IEnumerable<LineSeriesPoint>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint>`, `System.Collections.IEnumerable`

## Properties
### MinX
Gets the minimum X value in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L17)
```csharp title="Declaration"
public double MinX { get; }
```
### MinY
Gets the minimum Y value in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L21)
```csharp title="Declaration"
public double MinY { get; }
```
### MaxX
Gets the maximum X value in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L25)
```csharp title="Declaration"
public double MaxX { get; }
```
### MaxY
Gets the maximum Y value in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L29)
```csharp title="Declaration"
public double MaxY { get; }
```
### Count
Gets the number of points in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L34)
```csharp title="Declaration"
public int Count { get; }
```
### this[int]

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L117)
```csharp title="Declaration"
public LineSeriesPoint this[int index] { get; }
```
## Methods
### Add(double, double)
Adds a point to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L41)
```csharp title="Declaration"
public void Add(double x, double y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *x* | The point's X value |
| `System.Double` | *y* | The point's Y value |

### Add(params LineSeriesPoint[])
Adds a point to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L50)
```csharp title="Declaration"
public void Add(params LineSeriesPoint[] points)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint[]` | *points* | The point to add |

### Remove(LineSeriesPoint)
Removes a point to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L71)
```csharp title="Declaration"
public void Remove(LineSeriesPoint point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint](../Meadow.Foundation.Graphics.MicroLayout/LineSeriesPoint) | *point* | The point to remove |

### Remove(params LineSeriesPoint[])
Removes a point to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L80)
```csharp title="Declaration"
public void Remove(params LineSeriesPoint[] points)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint[]` | *points* | The points to remove |

### Clear()
Removes all points to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L106)
```csharp title="Declaration"
public void Clear()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Charts/LineSeriesPointCollection.cs#L123)
```csharp title="Declaration"
public IEnumerator<LineSeriesPoint> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.LineSeriesPoint>`
* `System.Collections.IEnumerable`
