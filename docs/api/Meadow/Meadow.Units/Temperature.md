---
title: Struct Temperature
sidebar_label: Temperature
description: >-
  Represents temperature; the physical quantity that expresses hot and cold. It
  is the manifestation of thermal energy, present in all matter, which is the
  source of the occurrence of heat, a flow of energy, when a body is in contact
  with another that is colder or hotter.
slug: /docs/api/Meadow/Meadow.Units/Temperature
---
# Struct Temperature
Represents temperature; the physical quantity that expresses hot and cold.
It is the manifestation of thermal energy, present in all matter, which
is the source of the occurrence of heat, a flow of energy, when a body
is in contact with another that is colder or hotter.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L16)
```csharp title="Declaration"
[Serializable]
public struct Temperature : IUnit<Temperature, Temperature.UnitType>, IComparable, IFormattable, IConvertible, IEquatable<double>, IComparable<double>
```
**Implements:**  
`Meadow.Units.IUnit<Meadow.Units.Temperature,Meadow.Units.Temperature.UnitType>`, `System.IComparable`, `System.IFormattable`, `System.IConvertible`, `System.IEquatable<System.Double>`, `System.IComparable<System.Double>`

## Properties
### Celsius
Gets the temperature value expressed as a unit _Celsius/Centrigrade_ (`°C`).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L113)
```csharp title="Declaration"
public double Celsius { get; }
```
### Fahrenheit
Gets the temperature value expressed as a unit _Fahrenheit_ (`°F`).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L118)
```csharp title="Declaration"
public double Fahrenheit { get; }
```
### Kelvin
Gets the temperature value expressed as a unit _Kelvin_ (`K`).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L123)
```csharp title="Declaration"
public double Kelvin { get; }
```
## Fields
### AbsoluteZero
Absolute Zero temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L27)
```csharp title="Declaration"
public static Temperature AbsoluteZero
```
## Methods
### FromCanonical(double)
Creates a Temperature instance from a canonical (Celsius) value
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L88)
```csharp title="Declaration"
public static Temperature FromCanonical(double value)
```

##### Returns

[Meadow.Units.Temperature](../Meadow.Units/Temperature)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Double` | *value* |

### ToCanonical()
Gets the value of the Temperature in Canonical (Celsius) units
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L98)
```csharp title="Declaration"
public double ToCanonical()
```

##### Returns

`System.Double`
### GetCanonicalUnitType()
Gets the enum value that represents the canonical unit of measurement for this type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L105)
```csharp title="Declaration"
public Temperature.UnitType GetCanonicalUnitType()
```

##### Returns

[Meadow.Units.Temperature.UnitType](../Meadow.Units/Temperature.UnitType): The canonical unit type### From(UnitType)
Get temperature value for a given unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L130)
```csharp title="Declaration"
[Pure]
public double From(Temperature.UnitType convertTo)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Temperature.UnitType](../Meadow.Units/Temperature.UnitType) | *convertTo* | unit to convert to |

### Equals(object)
Compare to another Temperature object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L141)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L152)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(Temperature)
Compare to another Temperature object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L170)
```csharp title="Declaration"
[Pure]
public bool Equals(Temperature other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Temperature](../Meadow.Units/Temperature) | *other* | The object to compare |

### CompareTo(Temperature)
Compare to another Temperature object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L193)
```csharp title="Declaration"
[Pure]
public int CompareTo(Temperature other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.Temperature](../Meadow.Units/Temperature) | *other* |

### Abs()
Returns the absolute value of the [Meadow.Units.Temperature](../Meadow.Units/Temperature)
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L264)
```csharp title="Declaration"
[Pure]
public Temperature Abs()
```

##### Returns

[Meadow.Units.Temperature](../Meadow.Units/Temperature)
### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L270)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L278)
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
Compare to another Temperature object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L286)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other Temperature cast to object |

### GetTypeCode()
Get type code of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L301)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode### ToBoolean(IFormatProvider)
Convert to boolean
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L308)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L315)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L322)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L329)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L336)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L343)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L350)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L357)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L364)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L371)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L378)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L385)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L393)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L400)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L407)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L414)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L421)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L432)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L439)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Temperature.cs#L446)
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

* `Meadow.Units.IUnit<Meadow.Units.Temperature,Meadow.Units.Temperature.UnitType>`
* `System.IComparable`
* `System.IFormattable`
* `System.IConvertible`
* `System.IEquatable<System.Double>`
* `System.IComparable<System.Double>`
