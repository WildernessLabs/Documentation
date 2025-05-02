---
title: Class CanAcceptanceFilter
sidebar_label: CanAcceptanceFilter
description: Represents a base class for CAN acceptance filters.
slug: /docs/api/Meadow/Meadow.Hardware/CanAcceptanceFilter
---
# Class CanAcceptanceFilter
Represents a base class for CAN acceptance filters.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilter.cs#L6)
```csharp title="Declaration"
public abstract class CanAcceptanceFilter
```
**Derived:**  
[Meadow.Hardware.CanExtendedExactAcceptanceFilter](../Meadow.Hardware/CanExtendedExactAcceptanceFilter), [Meadow.Hardware.CanExtendedRangeAcceptanceFilter](../Meadow.Hardware/CanExtendedRangeAcceptanceFilter), [Meadow.Hardware.CanStandardExactAcceptanceFilter](../Meadow.Hardware/CanStandardExactAcceptanceFilter), [Meadow.Hardware.CanStandardRangeAcceptanceFilter](../Meadow.Hardware/CanStandardRangeAcceptanceFilter)

## Methods
### CreateStandardFilter(short)
Creates a standard exact acceptance filter for the specified identifier.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilter.cs#L13)
```csharp title="Declaration"
public static CanAcceptanceFilter CreateStandardFilter(short id)
```

##### Returns

[Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter): A [Meadow.Hardware.CanStandardExactAcceptanceFilter](../Meadow.Hardware/CanStandardExactAcceptanceFilter) instance.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *id* | The identifier to be accepted by the filter. |

### CreateStandardFilter(short, short)
Creates a standard range acceptance filter for the specified range of identifiers.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilter.cs#L24)
```csharp title="Declaration"
public static CanAcceptanceFilter CreateStandardFilter(short firstID, short lastID)
```

##### Returns

[Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter): A [Meadow.Hardware.CanStandardRangeAcceptanceFilter](../Meadow.Hardware/CanStandardRangeAcceptanceFilter) instance.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *firstID* | The first identifier in the range to be accepted by the filter. |
| `System.Int16` | *lastID* | The last identifier in the range to be accepted by the filter. |

