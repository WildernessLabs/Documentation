---
title: Class UnitFactory
sidebar_label: UnitFactory
description: Factory methods for unit creation
slug: /docs/api/Meadow/Meadow.Common/UnitFactory
---
# Class UnitFactory
Factory methods for unit creation

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/UnitFactory.cs#L9)
```csharp title="Declaration"
public class UnitFactory
```
## Methods
### CreateUnitFromCanonicalValue(double, string)
Method to create a unit from its canonical value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/UnitFactory.cs#L17)
```csharp title="Declaration"
public static object CreateUnitFromCanonicalValue(double value, string unitTypeName)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *value* | The canonical value to use for creation |
| `System.String` | *unitTypeName* | The name of the Unit to be created |

### FromCelsius(double)
Creates a Temperature unit from a Celsius value
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/UnitFactory.cs#L32)
```csharp title="Declaration"
public static Temperature FromCelsius(double celsius)
```

##### Returns

[Meadow.Units.Temperature](../Meadow.Units/Temperature)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Double` | *celsius* |

### FromVolts(double)
Creates a Voltage unit from a Volts value
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/UnitFactory.cs#L40)
```csharp title="Declaration"
public static Voltage FromVolts(double volts)
```

##### Returns

[Meadow.Units.Voltage](../Meadow.Units/Voltage)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Double` | *volts* |

### FromMeters(double)
Creates a Length unit from a Meters value
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Common/UnitFactory.cs#L48)
```csharp title="Declaration"
public static Length FromMeters(double meters)
```

##### Returns

[Meadow.Units.Length](../Meadow.Units/Length)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Double` | *meters* |

