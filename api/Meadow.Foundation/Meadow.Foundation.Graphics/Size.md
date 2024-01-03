---
title: Struct Size
sidebar_label: Size
description: "Represents a 2d size"
---
# Struct Size
Represents a 2d size

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L6)
```csharp title="Declaration"
public struct Size
```
## Properties
### Width
The width
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L11)
```csharp title="Declaration"
public int Width { readonly get; set; }
```
### Height
The height
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L16)
```csharp title="Declaration"
public int Height { readonly get; set; }
```
### IsEmpty
Is the size empty / zero
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L21)
```csharp title="Declaration"
public bool IsEmpty { get; }
```
### Empty
Get an empty / zero size
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L26)
```csharp title="Declaration"
public static Size Empty { get; }
```
## Methods
### From(Point)
Get a size from a point
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L52)
```csharp title="Declaration"
public static Size From(Point point)
```

##### Returns

[Meadow.Foundation.Graphics.Size](../Meadow.Foundation.Graphics/Size): A new Size struct
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Point](../Meadow.Foundation.Graphics/Point) | *point* | The point |

### Equals(object)
Indicates whether this instance is equal to the specified object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L106)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L120)
```csharp title="Declaration"
public override int GetHashCode()
```

##### Returns

`System.Int32`: An int that represents the hash code for this instance### ToString()
Get a string representation of the Size
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Size.cs#L129)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A string with the Width and Height