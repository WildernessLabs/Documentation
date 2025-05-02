---
title: Class RheostatExtensions
sidebar_label: RheostatExtensions
description: Extensions for the IRheostat
slug: /docs/api/Meadow/Meadow.Hardware/RheostatExtensions
---
# Class RheostatExtensions
Extensions for the IRheostat

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L9)
```csharp title="Declaration"
public static class RheostatExtensions
```
## Methods
### GetCurrentPosition(IRheostat)
Gets the current position as a percentage of maximum resistance (0-100).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L19)
```csharp title="Declaration"
public static int GetCurrentPosition(this IRheostat self)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IRheostat](../Meadow.Hardware/IRheostat) | *self* |

