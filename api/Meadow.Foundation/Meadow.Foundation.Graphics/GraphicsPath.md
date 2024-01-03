---
title: Class GraphicsPath
sidebar_label: GraphicsPath
description: "Represents a 2D graphics paths"
---
# Class GraphicsPath
Represents a 2D graphics paths

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L45)
```csharp title="Declaration"
public class GraphicsPath
```
## Properties
### LastPoint
The last point added to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L50)
```csharp title="Declaration"
public Point LastPoint { get; }
```
### PointCount
The number of points in th path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L55)
```csharp title="Declaration"
public int PointCount { get; }
```
### VerbCount
The number of verbs/actions used
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L65)
```csharp title="Declaration"
public int VerbCount { get; }
```
### Bounds
A rect that defines the full bounds of the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L75)
```csharp title="Declaration"
public Rect Bounds { get; }
```
## Fields
### Points
The collection of points
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L60)
```csharp title="Declaration"
public Point[]? Points
```
## Methods
### Reset()
Reset the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L117)
```csharp title="Declaration"
public void Reset()
```
### MoveTo(int, int)
Add a new point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L127)
```csharp title="Declaration"
public void MoveTo(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position |
| `System.Int32` | *y* | The y position |

### MoveTo(Point)
Add a new point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L136)
```csharp title="Declaration"
public void MoveTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point position |

### RelativeMoveTo(int, int)
Add a new relative point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L157)
```csharp title="Declaration"
public void RelativeMoveTo(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The relative x position |
| `System.Int32` | *y* | The relative y position |

### RelativeMoveTo(Point)
Add a new relative point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L175)
```csharp title="Declaration"
public void RelativeMoveTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The relative point position |

### LineTo(int, int)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L194)
```csharp title="Declaration"
public void LineTo(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x line end location |
| `System.Int32` | *y* | The y line end location |

### LineTo(Point)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L209)
```csharp title="Declaration"
public void LineTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point line end location |

### RelativeLineTo(int, int)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L225)
```csharp title="Declaration"
public void RelativeLineTo(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The relative x line end location |
| `System.Int32` | *y* | The relative y line end location |

### RelativeLineTo(Point)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L243)
```csharp title="Declaration"
public void RelativeLineTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The relative point line end location |

### AddPolyLine(Point[])
Add an array of lines to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L261)
```csharp title="Declaration"
public void AddPolyLine(Point[] points)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Graphics.Point[]` | *points* | The points defining the lines to add |

### AddPath(GraphicsPath)
Add an existing path to the end of the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L273)
```csharp title="Declaration"
public void AddPath(GraphicsPath path)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path to add |

### AddPathReverse(GraphicsPath)
Add an existing path to the end of the path in reverse order
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L285)
```csharp title="Declaration"
public void AddPathReverse(GraphicsPath path)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path to add |

### Close()
Close the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L296)
```csharp title="Declaration"
public void Close()
```
