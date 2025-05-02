---
title: Class CanExtendedRangeAcceptanceFilter
sidebar_label: CanExtendedRangeAcceptanceFilter
description: Represents a CAN extended range acceptance filter.
slug: /docs/api/Meadow/Meadow.Hardware/CanExtendedRangeAcceptanceFilter
---
# Class CanExtendedRangeAcceptanceFilter
Represents a CAN extended range acceptance filter.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L6)
```csharp title="Declaration"
public class CanExtendedRangeAcceptanceFilter : CanAcceptanceFilter
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter)

## Properties
### FirstAcceptID
Gets the first (inclusive) accepted identifier in the range.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L11)
```csharp title="Declaration"
public int FirstAcceptID { get; }
```
### LastAcceptID
Gets the last (inclusive) accepted identifier in the range.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanStandardRangeAcceptanceFilter.cs#L16)
```csharp title="Declaration"
public int LastAcceptID { get; }
```
