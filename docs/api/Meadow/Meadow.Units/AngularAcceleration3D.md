---
title: Struct AngularAcceleration3D
sidebar_label: AngularAcceleration3D
description: Represents AngularAcceleration3D
slug: /docs/api/Meadow/Meadow.Units/AngularAcceleration3D
---
# Struct AngularAcceleration3D
Represents AngularAcceleration3D

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L12)
```csharp title="Declaration"
[Serializable]
public struct AngularAcceleration3D : IFormattable, IComparable, IEquatable<(double ValueX, double ValueY, double ValueZ)>, IComparable<(double, double, double)>
```
**Implements:**  
`System.IFormattable`, `System.IComparable`, `System.IEquatable<System.ValueTuple<System.Double,System.Double,System.Double>>`, `System.IComparable<System.ValueTuple<System.Double,System.Double,System.Double>>`

## Properties
### X
X component of angular acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L62)
```csharp title="Declaration"
public AngularAcceleration X { readonly get; set; }
```
### Y
Y component of angular acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L66)
```csharp title="Declaration"
public AngularAcceleration Y { readonly get; set; }
```
### Z
Z component of angular acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L70)
```csharp title="Declaration"
public AngularAcceleration Z { readonly get; set; }
```
## Methods
### Equals(object)
Compare to another AngularAcceleration3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L77)
```csharp title="Declaration"
[Pure]
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | object to compare to |

### GetHashCode()
Get hash of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L83)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(AngularAcceleration3D)
Compare to another AngularAcceleration object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L91)
```csharp title="Declaration"
[Pure]
public bool Equals(AngularAcceleration3D other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.AngularAcceleration3D](../Meadow.Units/AngularAcceleration3D) | *other* | The object to compare |

### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L182)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L190)
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
Compare to another AngularAcceleration3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L198)
```csharp title="Declaration"
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other AngularAcceleration3D cast to object |

### Equals((double ValueX, double ValueY, double ValueZ))
Compare the default value to three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L213)
```csharp title="Declaration"
public bool Equals((double ValueX, double ValueY, double ValueZ) other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.ValueTuple<System.Double,System.Double,System.Double>` | *other* | values to compare |

### CompareTo((double, double, double))
Compare the default value to a tuple of three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularAcceleration3D.cs#L225)
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
