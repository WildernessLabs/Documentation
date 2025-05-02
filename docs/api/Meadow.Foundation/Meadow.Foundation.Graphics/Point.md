---
title: Struct Point
sidebar_label: Point
description: Represents a 2D point
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Point
---
# Struct Point
Represents a 2D point

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L8)
```csharp title="Declaration"
public struct Point
```
## Properties
### Empty
Get an empty / zero Point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L13)
```csharp title="Declaration"
public static Point Empty { get; }
```
### X
The X value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L18)
```csharp title="Declaration"
public int X { readonly get; set; }
```
### Y
The Y value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L23)
```csharp title="Declaration"
public int Y { readonly get; set; }
```
### IsEmpty
Is the point empty or 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L28)
```csharp title="Declaration"
public bool IsEmpty { get; }
```
## Methods
### From(Size)
Create a Point from a size
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L46)
```csharp title="Declaration"
public static Point From(Size size)
```

##### Returns

[Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point): A new Point who's x value is the width and y value is the height
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Size](../Meadow.Foundation.Graphics/Size) | *size* | The size |

### Offset(int, int)
Offset the point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L56)
```csharp title="Declaration"
public void Offset(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x amount to offset |
| `System.Int32` | *y* | The y amount to offset |

### Offset(Point)
Offset the point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L66)
```csharp title="Declaration"
public void Offset(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | A Point containing the amount to offset |

### Equals(object)
Indicates whether this instance is equal to the specified object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L121)
```csharp title="Declaration"
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: True if both instances are equal otherwise false
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object instance to compare to |

### GetHashCode()
Returns the hash code for this instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L135)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`: An int that represents the hash code for this instance### ToString()
Get a string representation of the point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point.cs#L144)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The x and y values as a string
