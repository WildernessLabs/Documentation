---
title: Interface IGnssResult
sidebar_label: IGnssResult
description: ''
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult
---
# Interface IGnssResult


###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssResult.cs#L6)
```csharp title="Declaration"
public interface IGnssResult
```
## Properties
### TalkerID
The first two letters (after the starting delimiter) comprise the
Talker ID, which describes the system in use, for instance "GL" means
that the data came from the GLONASS system. "BD" means BeiDou, etc.

Default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssResult.cs#L24)
```csharp title="Declaration"
string TalkerID { get; set; }
```
### TalkerSystemName
Retrieves the full name associated with the TalkerID via the
`KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssResult.cs#L42)
```csharp title="Declaration"
string TalkerSystemName { get; }
```
