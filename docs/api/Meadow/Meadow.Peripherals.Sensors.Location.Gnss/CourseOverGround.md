---
title: Struct CourseOverGround
sidebar_label: CourseOverGround
description: Decoded data for the VTG - Course over ground and ground speed messages.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/CourseOverGround
---
# Struct CourseOverGround
Decoded data for the VTG - Course over ground and ground speed messages.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L9)
```csharp title="Declaration"
public struct CourseOverGround : IGnssResult
```
**Implements:**  
[Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)

## Properties
### TalkerID
The first two letters (after the starting delimiter) comprise the
Talker ID, which describes the system in use, for instance "GL" means
that the data came from the GLONASS system. "BD" means BeiDou, etc.

Default value is "GP".
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L18)
```csharp title="Declaration"
public string TalkerID { readonly get; set; }
```
### TalkerSystemName
Retrieves the full name associated with the TalkerID via the
`KnownTalkerIDs` property of the Lookups class.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L24)
```csharp title="Declaration"
public string TalkerSystemName { get; }
```
### TimeOfReading
Time the reading was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L36)
```csharp title="Declaration"
public DateTime? TimeOfReading { readonly get; set; }
```
### TrueHeading
True heading in degrees.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L41)
```csharp title="Declaration"
public decimal TrueHeading { readonly get; set; }
```
### MagneticHeading
Magnetic heading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L46)
```csharp title="Declaration"
public decimal MagneticHeading { readonly get; set; }
```
### Knots
Speed measured in knots.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L51)
```csharp title="Declaration"
public decimal Knots { readonly get; set; }
```
### Kph
Speed measured in kilometers per hour.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L56)
```csharp title="Declaration"
public decimal Kph { readonly get; set; }
```
## Methods
### ToString()
Returns a formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.CourseOverGround](../Meadow.Peripherals.Sensors.Location.Gnss/CourseOverGround) struct.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/CourseOverGround.cs#L75)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: A formatted string representing the [Meadow.Peripherals.Sensors.Location.Gnss.CourseOverGround](../Meadow.Peripherals.Sensors.Location.Gnss/CourseOverGround) struct.
## Implements

* [Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult](../Meadow.Peripherals.Sensors.Location.Gnss/IGnssResult)
