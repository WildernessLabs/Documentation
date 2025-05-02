---
title: Struct TimePeriod
sidebar_label: TimePeriod
description: Represents a sub-millisecond-capable Time Period
slug: /docs/api/Meadow/Meadow.Units/TimePeriod
---
# Struct TimePeriod
Represents a sub-millisecond-capable Time Period

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L13)
```csharp title="Declaration"
[Serializable]
public struct TimePeriod : IComparable, IFormattable, IComparable<TimePeriod>, IComparable<TimeSpan>
```
**Implements:**  
`System.IComparable`, `System.IFormattable`, `System.IComparable<Meadow.Units.TimePeriod>`, `System.IComparable<System.TimeSpan>`

## Properties
### Zero
Gets a TimePeriod of zero time
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L30)
```csharp title="Declaration"
public static TimePeriod Zero { get; }
```
### Nanoseconds
Gets the time period value in nanoseconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L100)
```csharp title="Declaration"
public readonly double Nanoseconds { get; }
```
### Microseconds
Gets the time period value in microseconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L105)
```csharp title="Declaration"
public readonly double Microseconds { get; }
```
### Milliseconds
Gets the time period value in milliseconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L110)
```csharp title="Declaration"
public readonly double Milliseconds { get; }
```
### Seconds
Gets the time period value in seconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L115)
```csharp title="Declaration"
public readonly double Seconds { get; }
```
### Minutes
Gets the time period value in minutes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L120)
```csharp title="Declaration"
public readonly double Minutes { get; }
```
### Hours
Gets the time period value in hours.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L125)
```csharp title="Declaration"
public readonly double Hours { get; }
```
### Days
Gets the time period value in days.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L130)
```csharp title="Declaration"
public readonly double Days { get; }
```
## Methods
### From(UnitType)
Converts the current [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) value to the specified unit type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L138)
```csharp title="Declaration"
[Pure]
public readonly double From(TimePeriod.UnitType convertTo)
```

##### Returns

`System.Double`: The value of the current [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) in the specified unit type.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.TimePeriod.UnitType](../Meadow.Units/TimePeriod.UnitType) | *convertTo* | The unit type to convert to. |

### FromSeconds(double)
Creates a new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) from the specified number of seconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L149)
```csharp title="Declaration"
[Pure]
public static TimePeriod FromSeconds(double seconds)
```

##### Returns

[Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod): A new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) representing the specified number of seconds.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *seconds* | The number of seconds. |

### FromMilliseconds(double)
Creates a new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) from the specified number of milliseconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L160)
```csharp title="Declaration"
[Pure]
public static TimePeriod FromMilliseconds(double milliseconds)
```

##### Returns

[Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod): A new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) representing the specified number of milliseconds.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *milliseconds* | The number of milliseconds. |

### FromMicroseconds(double)
Creates a new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) from the specified number of microseconds.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L171)
```csharp title="Declaration"
[Pure]
public static TimePeriod FromMicroseconds(double microseconds)
```

##### Returns

[Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod): A new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) representing the specified number of microseconds.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *microseconds* | The number of microseconds. |

### ToString(string, IFormatProvider)
Converts the [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) to its string representation using the specified format and format provider.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L183)
```csharp title="Declaration"
public string ToString(string format, IFormatProvider formatProvider)
```

##### Returns

`System.String`: A string representation of the value of the current [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) instance.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *format* | A standard or custom format string. |
| `System.IFormatProvider` | *formatProvider* | An object that supplies culture-specific formatting information. |

### Add(TimePeriod)
Adds the specified [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) to the current [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod).
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L249)
```csharp title="Declaration"
public TimePeriod Add(TimePeriod period)
```

##### Returns

[Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod): A new [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) that is the sum of the current instance and the specified [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) | *period* | The [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) to add. |

### CompareTo(object)
Compares a TimePeriod to another object
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L258)
```csharp title="Declaration"
public int CompareTo(object obj)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object to compare |

### CompareTo(TimePeriod)
Compares two TimePeriods
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L272)
```csharp title="Declaration"
public int CompareTo(TimePeriod other)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Units.TimePeriod](../Meadow.Units/TimePeriod) | *other* |

### CompareTo(TimeSpan)
Compares a TimePeriod to a TimeSpan
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/TimePeriod.cs#L282)
```csharp title="Declaration"
public int CompareTo(TimeSpan other)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *other* |


## Implements

* `System.IComparable`
* `System.IFormattable`
* `System.IComparable<Meadow.Units.TimePeriod>`
* `System.IComparable<System.TimeSpan>`
