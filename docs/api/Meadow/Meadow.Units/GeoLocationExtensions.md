---
title: Class GeoLocationExtensions
sidebar_label: GeoLocationExtensions
description: Extension methods for the GeoLocation struct
slug: /docs/api/Meadow/Meadow.Units/GeoLocationExtensions
---
# Class GeoLocationExtensions
Extension methods for the GeoLocation struct

###### **Assembly**: Meadow.Units.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocationExtensions.cs#L9)
```csharp title="Declaration"
public static class GeoLocationExtensions
```
## Methods
### DistanceTo(GeoLocation, GeoLocation)
Calculates the distance to another GeoLocation
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocationExtensions.cs#L28)
```csharp title="Declaration"
[Pure]
public static Length DistanceTo(this GeoLocation self, GeoLocation other)
```

##### Returns

[Meadow.Units.Length](../Meadow.Units/Length)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation) | *self* | A Geolocation |
| [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation) | *other* | A second GeoLocation |

### BearingTo(GeoLocation, GeoLocation)
Calculates the bearing to another GeoLocation
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocationExtensions.cs#L48)
```csharp title="Declaration"
[Pure]
public static Azimuth BearingTo(this GeoLocation self, GeoLocation other)
```

##### Returns

[Meadow.Units.Azimuth](../Meadow.Units/Azimuth)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation) | *self* | A Geolocation |
| [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation) | *other* | A second GeoLocation |

### Move(GeoLocation, Azimuth, Length)
Creates a new GeoLocation a given bearing and distance from the current GeoLocation
###### [View Source](https://github.com/WildernessLabs/Meadow.Units.git/blob/develop/Source/Meadow.Units/GeoLocationExtensions.cs#L67)
```csharp title="Declaration"
[Pure]
public static GeoLocation Move(this GeoLocation self, Azimuth bearing, Length distance)
```

##### Returns

[Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.GeoLocation](../Meadow.Units/GeoLocation) | *self* | A Geolocation |
| [Meadow.Units.Azimuth](../Meadow.Units/Azimuth) | *bearing* | Bearing angle to the new location |
| [Meadow.Units.Length](../Meadow.Units/Length) | *distance* | Distance to the new location |

