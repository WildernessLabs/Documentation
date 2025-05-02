---
title: Struct MagneticField3D
sidebar_label: MagneticField3D
description: 'Represents a 3-dimensional (X,Y,Z) magnetic field.'
slug: /docs/api/Meadow/Meadow.Units/MagneticField3D
---
# Struct MagneticField3D
Represents a 3-dimensional (X,Y,Z) magnetic field.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L13)
```csharp title="Declaration"
[Serializable]
public struct MagneticField3D : IFormattable, IComparable, IEquatable<(double X, double Y, double Z)>, IComparable<(double, double, double)>
```
**Implements:**  
`System.IFormattable`, `System.IComparable`, `System.IEquatable<System.ValueTuple<System.Double,System.Double,System.Double>>`, `System.IComparable<System.ValueTuple<System.Double,System.Double,System.Double>>`

## Properties
### X
X component of the magnetic field
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L62)
```csharp title="Declaration"
public MagneticField X { readonly get; set; }
```
### Y
Y component of the magnetic field
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L66)
```csharp title="Declaration"
public MagneticField Y { readonly get; set; }
```
### Z
Z component of the magnetic field
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L70)
```csharp title="Declaration"
public MagneticField Z { readonly get; set; }
```
## Methods
### Equals(object)
Compare to another MagneticField3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L77)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L83)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(MagneticField3D)
Compare to another MagneticField3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L91)
```csharp title="Declaration"
[Pure]
public bool Equals(MagneticField3D other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.MagneticField3D](../Meadow.Units/MagneticField3D) | *other* | The object to compare |

### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L182)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L190)
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
Compare to another MagneticField3D object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L198)
```csharp title="Declaration"
public int CompareTo(object obj)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other MagneticField3D cast to object |

### Equals((double X, double Y, double Z))
Compare the default value to three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L215)
```csharp title="Declaration"
public bool Equals((double X, double Y, double Z) other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.ValueTuple<System.Double,System.Double,System.Double>` | *other* | values to compare |

### CompareTo((double, double, double))
Compare the default value to a tuple of three doubles
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/MagneticField3D.cs#L227)
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
