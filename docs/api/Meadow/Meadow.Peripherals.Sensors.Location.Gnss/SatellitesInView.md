---
title: Struct SatellitesInView
sidebar_label: SatellitesInView
description: Represents information about the satellites in view in a GNSS receiver.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/SatellitesInView
---
# Struct SatellitesInView
Represents information about the satellites in view in a GNSS receiver.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/SatellitesInView.cs#L8)
```csharp title="Declaration"
public struct SatellitesInView : IGnssResult
```
**Implements:**  
[Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)

## Properties
### TalkerID
Gets or sets the Talker ID associated with the data, which describes the system in use.
The default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/SatellitesInView.cs#L14)
```csharp title="Declaration"
public string TalkerID { readonly get; set; }
```
### TalkerSystemName
Gets the full name associated with the TalkerID via the `KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/SatellitesInView.cs#L19)
```csharp title="Declaration"
public string TalkerSystemName { get; }
```
### Satellites
Gets the array of Satellite objects representing the satellites in view.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/SatellitesInView.cs#L31)
```csharp title="Declaration"
public Satellite[] Satellites { readonly get; set; }
```
## Methods
### ToString()
Returns a string representation of the SatellitesInView object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/SatellitesInView.cs#L47)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A multiline string representation of the SatellitesInView object.
## Implements

* [Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)
