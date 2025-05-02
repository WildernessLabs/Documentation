---
title: Class NumericExtensions
sidebar_label: NumericExtensions
description: A static class that provides numeric helper extension methods
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/NumericExtensions
---
# Class NumericExtensions
A static class that provides numeric helper extension methods

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/NumericExtensions.cs#L8)
```csharp title="Declaration"
public static class NumericExtensions
```
## Methods
### Clamp(float, float, float)
Clamps a float (note: min and max are not currently used)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/NumericExtensions.cs#L17)
```csharp title="Declaration"
public static float Clamp(this float self, float min, float max)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Single` | *self* |
| `System.Single` | *min* |
| `System.Single` | *max* |

### Clamp(double, double, double)
Clamps a double
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/NumericExtensions.cs#L29)
```csharp title="Declaration"
public static double Clamp(this double self, double min, double max)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Double` | *self* |
| `System.Double` | *min* |
| `System.Double` | *max* |

### Clamp(int, int, int)
Clamps an int
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Helpers/NumericExtensions.cs#L41)
```csharp title="Declaration"
public static int Clamp(this int self, int min, int max)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *self* |
| `System.Int32` | *min* |
| `System.Int32` | *max* |

