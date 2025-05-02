---
title: Struct Energy
sidebar_label: Energy
description: Represents Energy
slug: /docs/api/Meadow/Meadow.Units/Energy
---
# Struct Energy
Represents Energy

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L13)
```csharp title="Declaration"
[Serializable]
public struct Energy : IComparable, IFormattable, IConvertible, IEquatable<double>, IComparable<double>
```
**Implements:**  
`System.IComparable`, `System.IFormattable`, `System.IConvertible`, `System.IEquatable<System.Double>`, `System.IComparable<System.Double>`

## Properties
### BTU
Get energy value as BTUs
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L90)
```csharp title="Declaration"
public double BTU { get; }
```
### Calories
Get energy value as calories
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L94)
```csharp title="Declaration"
public double Calories { get; }
```
### Joules
Get energy value as joules
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L98)
```csharp title="Declaration"
public double Joules { get; }
```
### Kilocalories
Get energy value as kilocalories
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L102)
```csharp title="Declaration"
public double Kilocalories { get; }
```
### Kilojoules
Get energy value kilojoules
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L106)
```csharp title="Declaration"
public double Kilojoules { get; }
```
### KilowattHours
Get energy value as kilowatt hours
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L110)
```csharp title="Declaration"
public double KilowattHours { get; }
```
### Therms
Get energy value as Therms
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L114)
```csharp title="Declaration"
public double Therms { get; }
```
### WattHours
Get energy value as watt hours
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L118)
```csharp title="Declaration"
public double WattHours { get; }
```
### WattSecond
Get energy value as watt seconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L122)
```csharp title="Declaration"
public double WattSecond { get; }
```
## Methods
### From(UnitType)
Get a double value for a specific unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L129)
```csharp title="Declaration"
[Pure]
public double From(Energy.UnitType convertTo)
```

##### Returns

`System.Double`: the converted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Energy.UnitType](../Meadow.Units/Energy.UnitType) | *convertTo* | unit to covert to |

### Equals(object)
Compare to another Energy object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L140)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L146)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(Energy)
Compare to another Energy object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L164)
```csharp title="Declaration"
[Pure]
public bool Equals(Energy other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Energy](../Meadow.Units/Energy) | *other* | The object to compare |

### CompareTo(Energy)
Compare to another Energy object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L187)
```csharp title="Declaration"
[Pure]
public int CompareTo(Energy other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.Energy](../Meadow.Units/Energy) | *other* |

### Abs()
Returns the absolute value of the [Meadow.Units.Energy](../Meadow.Units/Energy)
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L258)
```csharp title="Declaration"
[Pure]
public Energy Abs()
```

##### Returns

[Meadow.Units.Energy](../Meadow.Units/Energy)
### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L264)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L272)
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
Compare to another Energy object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L280)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other Energy cast to object |

### GetTypeCode()
Get type code of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L295)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode### ToBoolean(IFormatProvider)
Convert to boolean
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L302)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L309)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L316)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L323)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L330)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L337)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L344)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L351)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L358)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L365)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L372)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L379)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L387)
```csharp title="Declaration"
[Pure]
public object ToType(Type conversionType, IFormatProvider provider)
```

##### Returns

`System.Object`: type representation of the object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *conversionType* | type to covert to |
| `System.IFormatProvider` | *provider* | format provider |

### ToUInt16(IFormatProvider)
Convert to uint16
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L394)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L401)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L408)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L415)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L426)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L433)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Energy.cs#L440)
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
