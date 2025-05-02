---
title: Struct VolumetricFlow
sidebar_label: VolumetricFlow
description: >-
  Represents a volumetric flow measurement. Implements standard interfaces for
  comparison, formatting, and conversion operations.
slug: /docs/api/Meadow/Meadow.Units/VolumetricFlow
---
# Struct VolumetricFlow
Represents a volumetric flow measurement.
Implements standard interfaces for comparison, formatting, and conversion operations.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L12)
```csharp title="Declaration"
public struct VolumetricFlow : IComparable, IFormattable
```
**Implements:**  
`System.IComparable`, `System.IFormattable`

## Properties
### Zero
Gets a flow of 0
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L25)
```csharp title="Declaration"
public static VolumetricFlow Zero { get; }
```
### CubicMetersPerSecond
Gets the flow rate in cubic meters per second (m³/s).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L73)
```csharp title="Declaration"
public double CubicMetersPerSecond { get; }
```
### CubicFeetPerMinute
Gets the flow rate in cubic feet per minute (CFM).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L78)
```csharp title="Declaration"
public double CubicFeetPerMinute { get; }
```
### LitersPerMinute
Gets the flow rate in liters per minute (L/min).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L83)
```csharp title="Declaration"
public double LitersPerMinute { get; }
```
### LitersPerHour
Gets the flow rate in liters per hour (L/h).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L88)
```csharp title="Declaration"
public double LitersPerHour { get; }
```
### GallonsPerMinute
Gets the flow rate in gallons per minute (GPM).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L93)
```csharp title="Declaration"
public double GallonsPerMinute { get; }
```
### GallonsPerHour
Gets the flow rate in gallons per hour (GPH).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L98)
```csharp title="Declaration"
public double GallonsPerHour { get; }
```
## Methods
### From(UnitType)
Get a double value for a specific unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L105)
```csharp title="Declaration"
[Pure]
public double From(VolumetricFlow.UnitType convertTo)
```

##### Returns

`System.Double`: the converted value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.VolumetricFlow.UnitType](../Meadow.Units/VolumetricFlow.UnitType) | *convertTo* | unit to covert to |

### Equals(object)
Determines whether the specified object is equal to the current unit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L116)
```csharp title="Declaration"
[Pure]
public override bool Equals(object obj)
```

##### Returns

`System.Boolean`: true if the specified object is equal to the current unit; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object to compare with the current unit. |

### GetHashCode()
Returns the hash code for this unit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L122)
```csharp title="Declaration"
[Pure]
public override int GetHashCode()
```

##### Returns

`System.Int32`: A hash code value generated from the underlying numerical value.### Equals(VolumetricFlow)
Determines whether the specified unit is equal to the current unit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L129)
```csharp title="Declaration"
[Pure]
public bool Equals(VolumetricFlow other)
```

##### Returns

`System.Boolean`: true if the units are equal; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.VolumetricFlow](../Meadow.Units/VolumetricFlow) | *other* | The unit to compare with the current unit. |

### CompareTo(VolumetricFlow)
Compares the current unit with another unit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L153)
```csharp title="Declaration"
[Pure]
public int CompareTo(VolumetricFlow other)
```

##### Returns

`System.Int32`: A value that indicates the relative order of the units being compared. Returns 0 if equal, 
    less than 0 if less than the other value, or greater than 0 if greater than the other value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.VolumetricFlow](../Meadow.Units/VolumetricFlow) | *other* | The unit to compare with the current unit. |

### CompareTo(object)
Compares the current unit with another object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L225)
```csharp title="Declaration"
[Pure]
public int CompareTo(object obj)
```

##### Returns

`System.Int32`: A value that indicates the relative order of the objects being compared.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object to compare with the current unit. |


##### Exceptions

`System.ArgumentException`  
The object is not a VolumetricFlow.
### GetTypeCode()
Returns the TypeCode for the underlying value type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L239)
```csharp title="Declaration"
[Pure]
public TypeCode GetTypeCode()
```

##### Returns

`System.TypeCode`: The TypeCode for the underlying double value.### ToString(string, IFormatProvider)
Formats the value of the current instance using the specified format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L242)
```csharp title="Declaration"
[Pure]
public string ToString(string format, IFormatProvider formatProvider)
```

##### Returns

`System.String`: The value of the current instance in the specified format.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *format* | The format to use.  
 -or-  
 A null reference (`Nothing` in Visual Basic) to use the default format defined for the type of the `System.IFormattable` implementation. |
| `System.IFormatProvider` | *formatProvider* | The provider to use to format the value.  
 -or-  
 A null reference (`Nothing` in Visual Basic) to obtain the numeric format information from the current locale setting of the operating system. |

### ToString(IFormatProvider)

###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/VolumetricFlow.cs#L244)
```csharp title="Declaration"
[Pure]
public string ToString(IFormatProvider provider)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IFormatProvider` | *provider* |


## Implements

* `System.IComparable`
* `System.IFormattable`
