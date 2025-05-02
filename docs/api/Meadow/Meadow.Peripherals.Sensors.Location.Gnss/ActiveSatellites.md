---
title: Struct ActiveSatellites
sidebar_label: ActiveSatellites
description: Active satellite information (GSA message information).
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/ActiveSatellites
---
# Struct ActiveSatellites
Active satellite information (GSA message information).

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L9)
```csharp title="Declaration"
public struct ActiveSatellites : IGnssResult
```
**Implements:**  
[Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)

## Properties
### TalkerID
The first two letters (after the starting delimiter) comprise the
Talker ID, which describes the system in use, for instance "GL" means
that the data came from the GLONASS system. "BD" means BeiDou, etc.

Default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L18)
```csharp title="Declaration"
public string TalkerID { readonly get; set; }
```
### TalkerSystemName
Retrieves the full name associated with the TalkerID via the
`KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L24)
```csharp title="Declaration"
public string TalkerSystemName { get; }
```
### TimeOfReading
Time the reading was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L36)
```csharp title="Declaration"
public DateTime TimeOfReading { readonly get; set; }
```
### Dimensions
Dimensional fix type (No fix, 2D or 3D?)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L41)
```csharp title="Declaration"
public DimensionalFixType Dimensions { readonly get; set; }
```
### SatelliteSelection
Satellite selection type (Automatic or manual).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L46)
```csharp title="Declaration"
public ActiveSatelliteSelection SatelliteSelection { readonly get; set; }
```
### SatellitesUsedForFix
PRNs of the satellites used in the fix.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L51)
```csharp title="Declaration"
public string[]? SatellitesUsedForFix { readonly get; set; }
```
### DilutionOfPrecision
Dilution of precision for the reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L56)
```csharp title="Declaration"
public decimal DilutionOfPrecision { readonly get; set; }
```
### HorizontalDilutionOfPrecision
Horizontal dilution of precision for the reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L61)
```csharp title="Declaration"
public decimal HorizontalDilutionOfPrecision { readonly get; set; }
```
### VerticalDilutionOfPrecision
Vertical dilution of precision for the reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L66)
```csharp title="Declaration"
public decimal VerticalDilutionOfPrecision { readonly get; set; }
```
## Methods
### ToString()
Returns a formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.ActiveSatellites](../Meadow.Peripherals.Sensors.Location.Gnss/ActiveSatellites) struct.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/ActiveSatellites.cs#L87)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.ActiveSatellites](../Meadow.Peripherals.Sensors.Location.Gnss/ActiveSatellites) struct.
## Implements

* [Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)
