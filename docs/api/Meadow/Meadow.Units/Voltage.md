---
title: Struct Voltage
sidebar_label: Voltage
description: 'Represents a value of Electric Potential, or _Voltage_.'
slug: /docs/api/Meadow/Meadow.Units/Voltage
---
# Struct Voltage
Represents a value of Electric Potential, or _Voltage_.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L13)
```csharp title="Declaration"
[Serializable]
public struct Voltage : IComparable, IFormattable, IConvertible, IEquatable<double>, IComparable<double>
```
**Implements:**  
`System.IComparable`, `System.IFormattable`, `System.IConvertible`, `System.IEquatable<System.Double>`, `System.IComparable<System.Double>`

## Properties
### Zero
Gets a voltage of 0 Volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L30)
```csharp title="Declaration"
public static Voltage Zero { get; }
```
### Volts
Get voltage in volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L80)
```csharp title="Declaration"
public double Volts { get; }
```
### Millivolts
Get voltage in millivolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L82)
```csharp title="Declaration"
public double Millivolts { get; }
```
### Microvolts
Get voltage in microvolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L84)
```csharp title="Declaration"
public double Microvolts { get; }
```
### Kilovolts
Get voltage in kilovolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L86)
```csharp title="Declaration"
public double Kilovolts { get; }
```
### Megavolts
Get voltage in megavolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L88)
```csharp title="Declaration"
public double Megavolts { get; }
```
### Gigavolts
Get voltage in gigavolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L90)
```csharp title="Declaration"
public double Gigavolts { get; }
```
### Statvolts
Get voltage in statvolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L92)
```csharp title="Declaration"
public double Statvolts { get; }
```
### Nanovolts
Get voltage in nanovolts
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L94)
```csharp title="Declaration"
public double Nanovolts { get; }
```
## Methods
### From(UnitType)
Get a double value for a specific unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L101)
```csharp title="Declaration"
[Pure]
public double From(Voltage.UnitType convertTo)
```

##### Returns

`System.Double`: the converted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Voltage.UnitType](../Meadow.Units/Voltage.UnitType) | *convertTo* | unit to covert to |

### Equals(object)
Compare to another Voltage object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L112)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L118)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: int32 hash value### Equals(Voltage)
Compare to another Voltage object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L136)
```csharp title="Declaration"
[Pure]
public bool Equals(Voltage other)
```

##### Returns

`System.Boolean`: true if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Voltage](../Meadow.Units/Voltage) | *other* | The object to compare |

### CompareTo(Voltage)
Compare to another Voltage object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L159)
```csharp title="Declaration"
[Pure]
public int CompareTo(Voltage other)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.Voltage](../Meadow.Units/Voltage) | *other* |

### Abs()
Returns the absolute value of the [Meadow.Units.Voltage](../Meadow.Units/Voltage)
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L230)
```csharp title="Declaration"
[Pure]
public Voltage Abs()
```

##### Returns

[Meadow.Units.Voltage](../Meadow.Units/Voltage)
### ToString()
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L236)
```csharp title="Declaration"
[Pure]
public override string ToString()
```

##### Returns

`System.String`: A string representing the object### ToString(string, IFormatProvider)
Get a string representation of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L244)
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
Compare to another Voltage object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L252)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: 0 if equal
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The other Voltage cast to object |

### GetTypeCode()
Get type code of object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L267)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode### ToBoolean(IFormatProvider)
Convert to boolean
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L274)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L281)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L288)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L295)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L302)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L309)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L316)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L323)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L330)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L337)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L344)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L351)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L359)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L366)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L373)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L380)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L387)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L398)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L405)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Voltage.cs#L412)
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
