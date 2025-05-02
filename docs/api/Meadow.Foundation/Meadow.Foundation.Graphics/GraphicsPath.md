---
title: Class GraphicsPath
sidebar_label: GraphicsPath
description: Represents a 2D graphics path
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/GraphicsPath
---
# Class GraphicsPath
Represents a 2D graphics path

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
The number of points in the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L55)
```csharp title="Declaration"
public int PointCount { get; }
```
### Points
The collection of points
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L60)
```csharp title="Declaration"
public Point[] Points { get; }
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
## Methods
### Reset()
Reset the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L119)
```csharp title="Declaration"
public void Reset()
```
### MoveTo(int, int)
Add a new point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L129)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L138)
```csharp title="Declaration"
public void MoveTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point position |

### RelativeMoveTo(int, int)
Add a new relative point to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L159)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L177)
```csharp title="Declaration"
public void RelativeMoveTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The relative point position |

### LineTo(int, int)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L196)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L211)
```csharp title="Declaration"
public void LineTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point line end location |

### RelativeLineTo(int, int)
Add a line to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L227)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L245)
```csharp title="Declaration"
public void RelativeLineTo(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The relative point line end location |

### AddPolyLine(Point[])
Add an array of lines to the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L263)
```csharp title="Declaration"
public void AddPolyLine(Point[] points)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Graphics.Point[]` | *points* | The points defining the lines to add |

### AddPath(GraphicsPath)
Add an existing path to the end of the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L275)
```csharp title="Declaration"
public void AddPath(GraphicsPath path)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path to add |

### AddPathReverse(GraphicsPath)
Add an existing path to the end of the path in reverse order
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L287)
```csharp title="Declaration"
public void AddPathReverse(GraphicsPath path)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path to add |

### Scale(float, float)
Scales the path by the specified factors in the X and Y directions.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L300)
```csharp title="Declaration"
public void Scale(float scaleX, float scaleY)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *scaleX* | The scale factor in the X direction. |
| `System.Single` | *scaleY* | The scale factor in the Y direction. |

### Translate(float, float)
Translates the path by the specified amounts in the X and Y directions.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L315)
```csharp title="Declaration"
public void Translate(float dx, float dy)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *dx* | The amount to translate in the X direction. |
| `System.Single` | *dy* | The amount to translate in the Y direction. |

### Rotate(Angle)
Rotates the path by the specified angle.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L329)
```csharp title="Declaration"
public void Rotate(Angle angle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *angle* | The angle to rotate the path, in degrees. |

### IsPointOnPath(Point, float)
Determines if a point lies on the path within a specified tolerance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L353)
```csharp title="Declaration"
public bool IsPointOnPath(Point point, float tolerance = 0.5)
```

##### Returns

`System.Boolean`: True if the point is on the path; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point to check. |
| `System.Single` | *tolerance* | The tolerance within which the point is considered to be on the path. |

### Clip(Rect)
Clips the path to a specified rectangular area.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L369)
```csharp title="Declaration"
public void Clip(Rect clipRect)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *clipRect* | The rectangle to which the path will be clipped. |

### Close()
Close the path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/GraphicsPath.cs#L379)
```csharp title="Declaration"
public void Close()
```
