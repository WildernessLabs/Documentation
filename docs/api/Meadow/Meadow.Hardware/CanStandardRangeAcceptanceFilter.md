---
title: Class CanStandardRangeAcceptanceFilter
sidebar_label: CanStandardRangeAcceptanceFilter
description: Represents a CAN standard range acceptance filter.
slug: /docs/api/Meadow/Meadow.Hardware/CanStandardRangeAcceptanceFilter
---
# Class CanStandardRangeAcceptanceFilter
Represents a CAN standard range acceptance filter.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L33)
```csharp title="Declaration"
public class CanStandardRangeAcceptanceFilter : CanAcceptanceFilter
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter)

## Properties
### FirstAcceptID
Gets the first (inclusive) accepted identifier in the range.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L38)
```csharp title="Declaration"
public short FirstAcceptID { get; }
```
### LastAcceptID
Gets the last (inclusive) accepted identifier in the range.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L43)
```csharp title="Declaration"
public short LastAcceptID { get; }
```
