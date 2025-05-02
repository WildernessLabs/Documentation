---
title: Class Satellite
sidebar_label: Satellite
description: >-
  Represents information about a satellite to be used in the GSV (Satellites in
  View) decoder.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/Satellite
---
# Class Satellite
Represents information about a satellite to be used in the GSV (Satellites in View) decoder.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L8)
```csharp title="Declaration"
public class Satellite
```
## Properties
### ID
Gets or sets the satellite ID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L13)
```csharp title="Declaration"
public int ID { get; set; }
```
### Elevation
Gets or sets the angle of elevation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L18)
```csharp title="Declaration"
public int Elevation { get; set; }
```
### Azimuth
Gets or sets the satellite azimuth.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L23)
```csharp title="Declaration"
public int Azimuth { get; set; }
```
### SignalTolNoiseRatio
Gets or sets the signal to noise ratio of the signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L28)
```csharp title="Declaration"
public int SignalTolNoiseRatio { get; set; }
```
## Methods
### ToString()
Returns a string representation of the Satellite object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/Satellite.cs#L34)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A string representation of the Satellite object.
