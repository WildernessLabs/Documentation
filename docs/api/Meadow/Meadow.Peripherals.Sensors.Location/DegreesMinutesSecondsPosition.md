---
title: Class DegreesMinutesSecondsPosition
sidebar_label: DegreesMinutesSecondsPosition
description: Represents a positional point on a spherical axis.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Location/DegreesMinutesSecondsPosition
---
# Class DegreesMinutesSecondsPosition
Represents a positional point on a spherical axis.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L9)
```csharp title="Declaration"
public class DegreesMinutesSecondsPosition
```
## Properties
### Degrees
Latitudinal: -90° to 90°
Longitudinal: -180° to 180°
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L15)
```csharp title="Declaration"
public int Degrees { get; set; }
```
### Minutes
0' to 60'
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L19)
```csharp title="Declaration"
public decimal Minutes { get; set; }
```
### Seconds
0" to 60"
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L23)
```csharp title="Declaration"
public decimal Seconds { get; set; }
```
## Fields
### Direction
Cardinal direction.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L27)
```csharp title="Declaration"
public CardinalDirection Direction
```
## Methods
### ToString()
Returns a string that represents the position in the format dd° mm' ss"X, where X represents the cardinal direction of the position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/DegreesMinutesSecondsPosition.cs#L33)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`
