---
title: Struct Rect
sidebar_label: Rect
description: Represents a integer based rectangle
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Rect
---
# Struct Rect
Represents a integer based rectangle

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L8)
```csharp title="Declaration"
public struct Rect
```
## Properties
### Empty
Create an empty / zero rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L13)
```csharp title="Declaration"
public static Rect Empty { get; }
```
### Position
The position of the rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L18)
```csharp title="Declaration"
public Point Position { get; }
```
### Size
The size of the rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L23)
```csharp title="Declaration"
public Size Size { get; }
```
### Bottom
The bottom rect value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L28)
```csharp title="Declaration"
public int Bottom { readonly get; set; }
```
### Top
The top rect value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L33)
```csharp title="Declaration"
public int Top { readonly get; set; }
```
### Left
The left rect value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L38)
```csharp title="Declaration"
public int Left { readonly get; set; }
```
### Right
The right rect value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L43)
```csharp title="Declaration"
public int Right { readonly get; set; }
```
### MidX
The x mid value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L48)
```csharp title="Declaration"
public int MidX { get; }
```
### MidY
The y mid value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L53)
```csharp title="Declaration"
public int MidY { get; }
```
### Width
The rect width
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L58)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The rect height
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L63)
```csharp title="Declaration"
public int Height { get; }
```
### IsEmpty
Is the rect empty / zero
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L68)
```csharp title="Declaration"
public bool IsEmpty { get; }
```
## Methods
### Contains(int, int)
Is an x,y coordinate within the rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L91)
```csharp title="Declaration"
public bool Contains(int x, int y)
```

##### Returns

`System.Boolean`: True if the coordinate is within the rect
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X position |
| `System.Int32` | *y* | Y position |

### Contains(Point)
Is a point coordinate within the rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L104)
```csharp title="Declaration"
public bool Contains(Point point)
```

##### Returns

`System.Boolean`: True if the point is within the rect
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point |

### Contains(Rect)
Is another rect within this rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L114)
```csharp title="Declaration"
public bool Contains(Rect rect)
```

##### Returns

`System.Boolean`: True if the rect is fully contained
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* | The rect to compare |

### Inflate(int, int)
Increase the size in both dimensions
This makes the rect wider by increasing the right value
And taller by increasing the top value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L126)
```csharp title="Declaration"
public void Inflate(int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *width* | The amount to increase horizontally (right) |
| `System.Int32` | *height* | The amount to increase vertically (top) |

### Inflate(Size)
Increase the size in both dimensions
This makes the rect wider by increasing the right value
And taller by increasing the top value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L138)
```csharp title="Declaration"
public void Inflate(Size size)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Size](../Meadow.Foundation.Graphics/Size) | *size* | The amount to increase |

### Inflate(Rect)
Increase the size in all directions with values from another rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L147)
```csharp title="Declaration"
public void Inflate(Rect rect)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* | The rect values to inflate |

### Intersects(Rect)
Does a rect intersect with this rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L160)
```csharp title="Declaration"
public bool Intersects(Rect rect)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* | True if the rects overlap any amount |

### Intersect(Rect)
Combine two rects (take the minimum values in all directions)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L170)
```csharp title="Declaration"
public void Intersect(Rect rect)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* | The rect to intersect |

### Offset(int, int)
Offset the rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L192)
```csharp title="Declaration"
public void Offset(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x amount to offset |
| `System.Int32` | *y* | The y amount to offset |

### Offset(Point)
Offset the rect
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L204)
```csharp title="Declaration"
public void Offset(Point point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point values to offset |

### Union(Rect)
Union two rects (take the maximum values in all directions)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L213)
```csharp title="Declaration"
public void Union(Rect rect)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* | The rect to union |

### Equals(object)
Indicates whether this instance is equal to the specified object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L276)
```csharp title="Declaration"
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: True, if both instances are equal; false otherwise.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object instance to compare to. |

### GetHashCode()
Returns the hash code for this instance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L290)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`: A `System.Int32` that represents the hash code for this instance./&gt;### ToString()
Get a string representation of the rect values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Rect.cs#L299)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The string with left, top, right and bottom values
