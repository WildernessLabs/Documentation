---
title: Class SphericalPositionInfo
sidebar_label: SphericalPositionInfo
description: >-
  Represents a position on a globe or sphere, including latitude, longitude, and
  altitude.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location/SphericalPositionInfo
---
# Class SphericalPositionInfo
Represents a position on a globe or sphere, including latitude, longitude, and altitude.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/SphericalPositionInfo.cs#L6)
```csharp title="Declaration"
public class SphericalPositionInfo
```
## Properties
### Latitude
Gets or sets the latitude of the position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/SphericalPositionInfo.cs#L11)
```csharp title="Declaration"
public DegreesMinutesSecondsPosition? Latitude { get; set; }
```
### Longitude
Gets or sets the longitude of the position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/SphericalPositionInfo.cs#L16)
```csharp title="Declaration"
public DegreesMinutesSecondsPosition? Longitude { get; set; }
```
### Altitude
Gets or sets the altitude above mean sea level in meters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/SphericalPositionInfo.cs#L21)
```csharp title="Declaration"
public decimal? Altitude { get; set; }
```
