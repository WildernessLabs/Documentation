---
title: Struct Point3d
sidebar_label: Point3d
description: Represents a 3D integer value
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Point3d
---
# Struct Point3d
Represents a 3D integer value

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L8)
```csharp title="Declaration"
public struct Point3d
```
## Properties
### Empty
Create an empty / zero Point3d struct
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L13)
```csharp title="Declaration"
public static Point3d Empty { get; }
```
### X
The X value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L18)
```csharp title="Declaration"
public int X { readonly get; set; }
```
### Y
The Y value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L23)
```csharp title="Declaration"
public int Y { readonly get; set; }
```
### Z
The Z value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L28)
```csharp title="Declaration"
public int Z { readonly get; set; }
```
### Length
Length
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L33)
```csharp title="Declaration"
public double Length { get; }
```
### IsEmpty
Is the struct empty / zero?
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L38)
```csharp title="Declaration"
public bool IsEmpty { get; }
```
## Methods
### Offset(int, int, int)
Offset the Point3d values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L59)
```csharp title="Declaration"
public void Offset(int x, int y, int z)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X offset amount |
| `System.Int32` | *y* | Y offset amount |
| `System.Int32` | *z* | Z offset amount |

### Offset(Point3d)
Offset the current value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L70)
```csharp title="Declaration"
public void Offset(Point3d point3d)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point3d](../Meadow.Foundation.Graphics/Point3d) | *point3d* | The point3d value to offset |

### Equals(object)
Indicates whether this instance is equal to the specified object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L132)
```csharp title="Declaration"
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: True if both instances are equal, false otherwise
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object instance to compare to |

### GetHashCode()
Returns the hash code for this instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L146)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`: An int that represents the hash code for this instance### ToString()
String representation of the Point3d values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Point3d.cs#L155)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The string
