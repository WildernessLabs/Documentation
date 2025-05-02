---
title: Struct Torque
sidebar_label: Torque
description: Represents Torque
slug: /docs/api/Meadow/Meadow.Units/Torque
---
# Struct Torque
Represents Torque

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L13)
```csharp title="Declaration"
[Serializable]
public struct Torque : IComparable, IFormattable, IConvertible, IEquatable<double>, IComparable<double>
```
**Implements:**  
`System.IComparable`, `System.IFormattable`, `System.IConvertible`, `System.IEquatable<System.Double>`, `System.IComparable<System.Double>`

## Properties
### NewtonMeter
Get torque in newton meters
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L70)
```csharp title="Declaration"
public double NewtonMeter { get; }
```
### FootPound
Get torque in foot pounds
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L75)
```csharp title="Declaration"
public double FootPound { get; }
```
### KilogramMeter
Get torque in kilogram meters
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L80)
```csharp title="Declaration"
public double KilogramMeter { get; }
```
### KilogramCentimeter
Get torque in kilogram centimeters
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L85)
```csharp title="Declaration"
public double KilogramCentimeter { get; }
```
### GramCentimeter
Get torque in gram centimeters
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L90)
```csharp title="Declaration"
public double GramCentimeter { get; }
```
### InchPound
Get torque in inch pounds
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L95)
```csharp title="Declaration"
public double InchPound { get; }
```
### InchOunce
Get torque in inch ounces
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L100)
```csharp title="Declaration"
public double InchOunce { get; }
```
### DyneCentimeter
Get torque in dyne centimeters
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L105)
```csharp title="Declaration"
public double DyneCentimeter { get; }
```
## Methods
### From(UnitType)
Get a double value for a specific unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L112)
```csharp title="Declaration"
[Pure]
public double From(Torque.UnitType convertTo)
```

##### Returns

`System.Double`: the converted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Torque.UnitType](../Meadow.Units/Torque.UnitType) | *convertTo* | unit to covert to |

### Equals(object)
Compare to another Torque object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L123)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L129)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(Torque)
Compare to another Torque object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L147)
```csharp title="Declaration"
[Pure]
public bool Equals(Torque other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Torque](../Meadow.Units/Torque) | *other* | The object to compare |

### CompareTo(Torque)
Compare to another Torque object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L170)
```csharp title="Declaration"
[Pure]
public int CompareTo(Torque other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.Torque](../Meadow.Units/Torque) | *other* |

### Abs()
Returns the absolute value of the [Meadow.Units.Torque](../Meadow.Units/Torque)
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L241)
```csharp title="Declaration"
[Pure]
public Torque Abs()
```

##### Returns

[Meadow.Units.Torque](../Meadow.Units/Torque)
### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L247)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L255)
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
Compare to another Torque object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L263)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other Torque cast to object |

### GetTypeCode()
Get type code of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L278)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode### ToBoolean(IFormatProvider)
Convert to boolean
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L285)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L292)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L299)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L306)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L313)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L320)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L327)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L334)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L341)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L348)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L355)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L362)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L370)
```csharp title="Declaration"
[Pure]
public object ToType(Type conversionType, IFormatProvider provider)
```

##### Returns

`System.Object`: type representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *conversionType* | type to convert to |
| `System.IFormatProvider` | *provider* | format provider |

### ToUInt16(IFormatProvider)
Convert to uint16
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L377)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L384)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L391)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L398)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L409)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L416)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Torque.cs#L423)
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
