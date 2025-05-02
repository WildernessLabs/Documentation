---
title: Struct PointF
sidebar_label: PointF
description: Represents a 2D point with floating-point coordinates
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/PointF
---
# Struct PointF
Represents a 2D point with floating-point coordinates

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L9)
```csharp title="Declaration"
public struct PointF
```
## Properties
### Empty
Gets an empty point at (0, 0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L14)
```csharp title="Declaration"
public static PointF Empty { get; }
```
### X
The X value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L19)
```csharp title="Declaration"
public float X { readonly get; set; }
```
### Y
The Y value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L24)
```csharp title="Declaration"
public float Y { readonly get; set; }
```
### IsEmpty
Indicates whether the point is at (0, 0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L29)
```csharp title="Declaration"
public bool IsEmpty { get; }
```
## Methods
### From(SizeF)
Creates a PointF from a SizeF
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L47)
```csharp title="Declaration"
public static PointF From(SizeF size)
```

##### Returns

[Meadow.Foundation.Graphics.PointF](../Meadow.Foundation.Graphics/PointF): A new PointF with X and Y from the SizeF
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Drawing.SizeF` | *size* | The SizeF instance |

### Offset(float, float)
Offsets the point by specified amounts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L57)
```csharp title="Declaration"
public void Offset(float x, float y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *x* | The amount to offset X |
| `System.Single` | *y* | The amount to offset Y |

### Offset(PointF)
Offsets the point by another PointF
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L67)
```csharp title="Declaration"
public void Offset(PointF point)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.PointF](../Meadow.Foundation.Graphics/PointF) | *point* | The PointF to offset by |

### Equals(object)
Checks if this instance is equal to another object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L108)
```csharp title="Declaration"
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *obj* |

### GetHashCode()
Gets the hash code for this instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L121)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`
### ToString()
Returns a string representation of the point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/PointF.cs#L129)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`
