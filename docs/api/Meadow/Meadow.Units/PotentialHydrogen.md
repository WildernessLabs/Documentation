---
title: Struct PotentialHydrogen
sidebar_label: PotentialHydrogen
description: Represents potential hydrogen (ph)
slug: /docs/api/Meadow/Meadow.Units/PotentialHydrogen
---
# Struct PotentialHydrogen
Represents potential hydrogen (ph)

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L12)
```csharp title="Declaration"
[Serializable]
public struct PotentialHydrogen : IComparable, IFormattable, IConvertible, IEquatable<double>, IComparable<double>
```
**Implements:**  
`System.IComparable`, `System.IFormattable`, `System.IConvertible`, `System.IEquatable<System.Double>`, `System.IComparable<System.Double>`

## Properties
### pH
The Potential Hydrogen expressed as pH.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L41)
```csharp title="Declaration"
public readonly double pH { get; }
```
## Methods
### Equals(object)
Compare to another PotentialHydrogen object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L56)
```csharp title="Declaration"
[Pure]
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object to compare |

### GetHashCode()
Get hash of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L62)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(PotentialHydrogen)
Compare to another PotentialHydrogen object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L80)
```csharp title="Declaration"
[Pure]
public bool Equals(PotentialHydrogen other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.PotentialHydrogen](../Meadow.Units/PotentialHydrogen) | *other* | The object to compare |

### CompareTo(PotentialHydrogen)
Compare to another PotentialHydrogen object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L103)
```csharp title="Declaration"
[Pure]
public int CompareTo(PotentialHydrogen other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.PotentialHydrogen](../Meadow.Units/PotentialHydrogen) | *other* |

### Abs()
Returns the absolute value of the [Meadow.Units.PotentialHydrogen](../Meadow.Units/PotentialHydrogen)
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L174)
```csharp title="Declaration"
[Pure]
public PotentialHydrogen Abs()
```

##### Returns

[Meadow.Units.PotentialHydrogen](../Meadow.Units/PotentialHydrogen)
### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L180)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L188)
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
Compare to another PotentialHydrogen object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L196)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other PotentialHydrogen cast to object |

### GetTypeCode()
Get type code of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L211)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode### ToBoolean(IFormatProvider)
Convert to boolean
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L218)
```csharp title="Declaration"
[Pure]
public bool ToBoolean(IFormatProvider provider)
```

##### Returns

`System.Boolean`: bool representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToByte(IFormatProvider)
Convert to byte
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L225)
```csharp title="Declaration"
[Pure]
public byte ToByte(IFormatProvider provider)
```

##### Returns

`System.Byte`: byte representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToChar(IFormatProvider)
Convert to char
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L232)
```csharp title="Declaration"
[Pure]
public char ToChar(IFormatProvider provider)
```

##### Returns

`System.Char`: char representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToDateTime(IFormatProvider)
Convert to DateTime
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L239)
```csharp title="Declaration"
[Pure]
public DateTime ToDateTime(IFormatProvider provider)
```

##### Returns

`System.DateTime`: DateTime representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToDecimal(IFormatProvider)
Convert to Decimal
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L246)
```csharp title="Declaration"
[Pure]
public decimal ToDecimal(IFormatProvider provider)
```

##### Returns

`System.Decimal`: Decimal representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToDouble(IFormatProvider)
Convert to double
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L253)
```csharp title="Declaration"
[Pure]
public double ToDouble(IFormatProvider provider)
```

##### Returns

`System.Double`: double representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToInt16(IFormatProvider)
Convert to in16
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L260)
```csharp title="Declaration"
[Pure]
public short ToInt16(IFormatProvider provider)
```

##### Returns

`System.Int16`: int16 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToInt32(IFormatProvider)
Convert to int32
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L267)
```csharp title="Declaration"
[Pure]
public int ToInt32(IFormatProvider provider)
```

##### Returns

`System.Int32`: int32 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToInt64(IFormatProvider)
Convert to int64
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L274)
```csharp title="Declaration"
[Pure]
public long ToInt64(IFormatProvider provider)
```

##### Returns

`System.Int64`: int64 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToSByte(IFormatProvider)
Convert to sbyte
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L281)
```csharp title="Declaration"
[Pure]
public sbyte ToSByte(IFormatProvider provider)
```

##### Returns

`System.SByte`: sbyte representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToSingle(IFormatProvider)
Convert to float
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L288)
```csharp title="Declaration"
[Pure]
public float ToSingle(IFormatProvider provider)
```

##### Returns

`System.Single`: float representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToString(IFormatProvider)
Convert to string
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L295)
```csharp title="Declaration"
[Pure]
public string ToString(IFormatProvider provider)
```

##### Returns

`System.String`: string representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToType(Type, IFormatProvider)
Convert to type
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L303)
```csharp title="Declaration"
[Pure]
public object ToType(Type conversionType, IFormatProvider provider)
```

##### Returns

`System.Object`: type representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *conversionType* | unit to convert |
| `System.IFormatProvider` | *provider* | format provider |

### ToUInt16(IFormatProvider)
Convert to uint16
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L310)
```csharp title="Declaration"
[Pure]
public ushort ToUInt16(IFormatProvider provider)
```

##### Returns

`System.UInt16`: uint16 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToUInt32(IFormatProvider)
Convert to uint32
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L317)
```csharp title="Declaration"
[Pure]
public uint ToUInt32(IFormatProvider provider)
```

##### Returns

`System.UInt32`: uint32 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### ToUInt64(IFormatProvider)
Convert to uint64
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L324)
```csharp title="Declaration"
[Pure]
public ulong ToUInt64(IFormatProvider provider)
```

##### Returns

`System.UInt64`: uint64 representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IFormatProvider` | *provider* | format provider |

### CompareTo(double?)
Compare the default value to a double
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L331)
```csharp title="Declaration"
[Pure]
public int CompareTo(double? other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.Double>` | *other* | value to compare |

### Equals(double?)
Compare the default value to a double
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L342)
```csharp title="Declaration"
[Pure]
public bool Equals(double? other)
```

##### Returns

`System.Boolean`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.Double>` | *other* | value to compare |

### Equals(double)
Compare the default value to a double
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L349)
```csharp title="Declaration"
[Pure]
public bool Equals(double other)
```

##### Returns

`System.Boolean`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *other* | value to compare |

### CompareTo(double)
Compare the default value to a double
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/PotentialHydrogen.cs#L356)
```csharp title="Declaration"
[Pure]
public int CompareTo(double other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *other* | value to compare |


## Implements

* `System.IComparable`
* `System.IFormattable`
* `System.IConvertible`
* `System.IEquatable<System.Double>`
* `System.IComparable<System.Double>`
