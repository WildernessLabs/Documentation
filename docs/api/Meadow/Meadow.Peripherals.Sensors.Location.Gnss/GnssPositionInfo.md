---
title: Struct GnssPositionInfo
sidebar_label: GnssPositionInfo
description: Represents a GNSS/GPS position reading
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/GnssPositionInfo
---
# Struct GnssPositionInfo
Represents a GNSS/GPS position reading

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L10)
```csharp title="Declaration"
public struct GnssPositionInfo : IGnssResult
```
**Implements:**  
[Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)

## Properties
### TalkerID
The first two letters (after the starting delimiter) comprise the
Talker ID, which describes the system in use, for instance "GL" means
that the data came from the GLONASS system. "BD" means BeiDou, etc.

Default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L19)
```csharp title="Declaration"
public string TalkerID { readonly get; set; }
```
### TalkerSystemName
Retrieves the full name associated with the TalkerID via the
`KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L25)
```csharp title="Declaration"
public string TalkerSystemName { get; }
```
### TimeOfReading
Time the reading was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L37)
```csharp title="Declaration"
public DateTime? TimeOfReading { readonly get; set; }
```
### IsValid
Indicate if the data is valid or not.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L42)
```csharp title="Declaration"
public bool IsValid { readonly get; set; }
```
### Speed
Current speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L47)
```csharp title="Declaration"
public Speed? Speed { readonly get; set; }
```
### CourseHeading
Course (true heading).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L52)
```csharp title="Declaration"
public Azimuth? CourseHeading { readonly get; set; }
```
### MagneticVariation
Magnetic variation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L57)
```csharp title="Declaration"
public CardinalDirection MagneticVariation { readonly get; set; }
```
### Position
Global position
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L62)
```csharp title="Declaration"
public GeographicCoordinate? Position { readonly get; set; }
```
### FixQuality
Quality of the fix.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L67)
```csharp title="Declaration"
public FixType? FixQuality { readonly get; set; }
```
### NumberOfSatellites
Number of satellites used to generate the positional information.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L72)
```csharp title="Declaration"
public int? NumberOfSatellites { readonly get; set; }
```
### HorizontalDilutionOfPrecision
Horizontal dilution of position (HDOP).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L77)
```csharp title="Declaration"
public decimal? HorizontalDilutionOfPrecision { readonly get; set; }
```
## Methods
### ToString()
Returns a formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo](../Meadow.Peripherals.Sensors.Location.Gnss/GnssPositionInfo) struct.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/GnssPositionInfo.cs#L100)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo](../Meadow.Peripherals.Sensors.Location.Gnss/GnssPositionInfo) struct.
## Implements

* [Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)
