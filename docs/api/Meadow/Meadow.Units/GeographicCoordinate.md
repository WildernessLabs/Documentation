---
title: Class GeographicCoordinate
sidebar_label: GeographicCoordinate
description: A geographic
slug: /docs/api/Meadow/Meadow.Units/GeographicCoordinate
---
# Class GeographicCoordinate
A geographic

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeographicCoordinate.cs#L6)
```csharp title="Declaration"
public record GeographicCoordinate : GeoLocation, IEquatable<GeoLocation>, IEquatable<GeographicCoordinate>
```
**Inheritance:** `System.Object` -> [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation)

**Implements:**  
`System.IEquatable<Meadow.Units.GeoLocation>`, `System.IEquatable<Meadow.Units.GeographicCoordinate>`

## Properties
### Altitude
The altitude portion of the GeographicCoordinate
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeographicCoordinate.cs#L11)
```csharp title="Declaration"
public Length Altitude { get; set; }
```

## Implements

* `System.IEquatable<Meadow.Units.GeoLocation>`
* `System.IEquatable<Meadow.Units.GeographicCoordinate>`
## Extension Methods
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.BearingTo(Meadow.Units.GeoLocation)
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.DistanceTo(Meadow.Units.GeoLocation)
* Meadow.Units.GeoLocation.Meadow.Units.GeoLocationExtensions.Move(Meadow.Units.Azimuth,Meadow.Units.Length)
