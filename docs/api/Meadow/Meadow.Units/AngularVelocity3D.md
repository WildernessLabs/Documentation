---
title: Struct AngularVelocity3D
sidebar_label: AngularVelocity3D
description: Represents AngularVelocity3D
slug: /docs/api/Meadow/Meadow.Units/AngularVelocity3D
---
# Struct AngularVelocity3D
Represents AngularVelocity3D

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L12)
```csharp title="Declaration"
[Serializable]
public struct AngularVelocity3D : IFormattable, IComparable, IEquatable<(double ValueX, double ValueY, double ValueZ)>, IComparable<(double, double, double)>
```
**Implements:**  
`System.IFormattable`, `System.IComparable`, `System.IEquatable<System.ValueTuple<System.Double,System.Double,System.Double>>`, `System.IComparable<System.ValueTuple<System.Double,System.Double,System.Double>>`

## Properties
### X
X component of angular velocity
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L62)
```csharp title="Declaration"
public AngularVelocity X { readonly get; set; }
```
### Y
Y component of angular velocity
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L66)
```csharp title="Declaration"
public AngularVelocity Y { readonly get; set; }
```
### Z
Z component of angular velocity
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L70)
```csharp title="Declaration"
public AngularVelocity Z { readonly get; set; }
```
## Methods
### Equals(object)
Compare two 3DAngularVelocity objects
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L77)
```csharp title="Declaration"
[Pure]
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | object to compare |

### GetHashCode()
Get hash of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L83)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: hash as 32 bit integer### Equals(AngularVelocity3D)
Compare two 3DAngularVelocity objects
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L90)
```csharp title="Declaration"
[Pure]
public bool Equals(AngularVelocity3D other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.AngularVelocity3D](../Meadow.Units/AngularVelocity3D) | *other* | object to compare |

### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L181)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L189)
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
Compare to another AngularVelocity3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L197)
```csharp title="Declaration"
public int CompareTo(object obj)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other AngularVelocity3D cast to object |

### Equals((double ValueX, double ValueY, double ValueZ))
Compare the default value to three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L214)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/AngularVelocity3D.cs#L226)
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
