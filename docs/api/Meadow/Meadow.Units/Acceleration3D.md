---
title: Struct Acceleration3D
sidebar_label: Acceleration3D
description: Represents Acceleration3D
slug: /docs/api/Meadow/Meadow.Units/Acceleration3D
---
# Struct Acceleration3D
Represents Acceleration3D

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L12)
```csharp title="Declaration"
[Serializable]
public struct Acceleration3D : IFormattable, IComparable, IEquatable<(double X, double Y, double Z)>, IComparable<(double, double, double)>
```
**Implements:**  
`System.IFormattable`, `System.IComparable`, `System.IEquatable<System.ValueTuple<System.Double,System.Double,System.Double>>`, `System.IComparable<System.ValueTuple<System.Double,System.Double,System.Double>>`

## Properties
### X
X component of acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L62)
```csharp title="Declaration"
public Acceleration X { readonly get; set; }
```
### Y
Y component of acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L67)
```csharp title="Declaration"
public Acceleration Y { readonly get; set; }
```
### Z
Z component of acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L72)
```csharp title="Declaration"
public Acceleration Z { readonly get; set; }
```
## Methods
### Equals(object)
Compare to another Acceleration3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L79)
```csharp title="Declaration"
[Pure]
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: true if equals
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *obj* |

### GetHashCode()
Get hash object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L85)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(Acceleration3D)
Compare to another Acceleration object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L93)
```csharp title="Declaration"
[Pure]
public bool Equals(Acceleration3D other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.Acceleration3D](../Meadow.Units/Acceleration3D) | *other* |

### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L185)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L193)
```csharp title="Declaration"
[Pure]
public string ToString(string format, IFormatProvider formatProvider)
```

##### Returns

`System.String`: A string representing the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *format* | format |
| `System.IFormatProvider` | *formatProvider* | format provider |

### CompareTo(object)
Compare to another Acceleration3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L201)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *obj* |

### Equals((double X, double Y, double Z))
Compare the default value to three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L219)
```csharp title="Declaration"
public bool Equals((double X, double Y, double Z) other)
```

##### Returns

`System.Boolean`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.ValueTuple<System.Double,System.Double,System.Double>` | *other* | value to compare |

### CompareTo((double, double, double))
Compare the default value to a tuple of three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Acceleration3D.cs#L231)
```csharp title="Declaration"
public int CompareTo((double, double, double) other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.ValueTuple<System.Double,System.Double,System.Double>` | *other* | value to compare |


## Implements

* `System.IFormattable`
* `System.IComparable`
* `System.IEquatable<System.ValueTuple<System.Double,System.Double,System.Double>>`
* `System.IComparable<System.ValueTuple<System.Double,System.Double,System.Double>>`
