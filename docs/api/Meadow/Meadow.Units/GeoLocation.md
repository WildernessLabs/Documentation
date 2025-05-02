---
title: Class GeoLocation
sidebar_label: GeoLocation
description: >-
  Represents a location on the surface of an ideal Earth (latitude and
  longitude)
slug: /docs/api/Meadow/Meadow.Units/GeoLocation
---
# Class GeoLocation
Represents a location on the surface of an ideal Earth (latitude and longitude)

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocation.cs#L6)
```csharp title="Declaration"
public record GeoLocation : IEquatable<GeoLocation>
```
**Derived:**  
[Meadow.Units.GeographicCoordinate](../Meadow.Units/GeographicCoordinate)

**Implements:**  
`System.IEquatable<Meadow.Units.GeoLocation>`

## Properties
### EarthRadius
Idealized earth radius used for internal calculations
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocation.cs#L13)
```csharp title="Declaration"
public static Length EarthRadius { get; }
```
### Latitude
The latitude portion of the GeoLocation
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocation.cs#L18)
```csharp title="Declaration"
public double Latitude { get; set; }
```
### Longitude
The Longitude portion of the GeoLocation
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocation.cs#L22)
```csharp title="Declaration"
public double Longitude { get; set; }
```

## Implements

* `System.IEquatable<Meadow.Units.GeoLocation>`
## Extension Methods
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.BearingTo(Meadow.Units.GeoLocation)
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.DistanceTo(Meadow.Units.GeoLocation)
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.Move(Meadow.Units.Azimuth,Meadow.Units.Length)
