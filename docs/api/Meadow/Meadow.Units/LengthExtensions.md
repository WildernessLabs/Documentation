---
title: Class LengthExtensions
sidebar_label: LengthExtensions
description: >-
  Provides extension methods for creating
  [Meadow.Units.Length](../Meadow.Units/Length) instances.
slug: /docs/api/Meadow/Meadow.Units/LengthExtensions
---
# Class LengthExtensions
Provides extension methods for creating [Meadow.Units.Length](../Meadow.Units/Length) instances.

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Extensions/LengthExtensions.cs#L6)
```csharp title="Declaration"
public static class LengthExtensions
```
## Methods
### Meters(double)
Creates a Length instance with the specified value in meters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Extensions/LengthExtensions.cs#L13)
```csharp title="Declaration"
public static Length Meters(this double v)
```

##### Returns

[Meadow.Units.Length](../Meadow.Units/Length): A new Length instance with the specified value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *v* | The value of length in meters as a double. |

### Meters(int)
Creates a Length instance with the specified value in meters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/Extensions/LengthExtensions.cs#L23)
```csharp title="Declaration"
public static Length Meters(this int v)
```

##### Returns

[Meadow.Units.Length](../Meadow.Units/Length): A new Length instance with the specified value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *v* | The value of length in meters as an int. |

