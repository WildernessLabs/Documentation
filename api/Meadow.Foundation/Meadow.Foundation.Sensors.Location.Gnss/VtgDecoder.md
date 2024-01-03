---
title: Class VtgDecoder
sidebar_label: VtgDecoder
description: "Parses VTG (Velocity Made Good) messages from a GPS/GNSS receiver."
---
# Class VtgDecoder
Parses VTG (Velocity Made Good) messages from a GPS/GNSS receiver.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/VtgDecoder.cs#L9)
```csharp title="Declaration"
public class VtgDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Prefix
Prefix for the VTG decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/VtgDecoder.cs#L19)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the VTG messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/VtgDecoder.cs#L27)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(NmeaSentence)
Process the data from a VTG message.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/VtgDecoder.cs#L36)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a VTG message. |

## Events
### CourseAndVelocityReceived
Event to be raised when a course and velocity message is received and decoded.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/VtgDecoder.cs#L14)
```csharp title="Declaration"
public event EventHandler<CourseOverGround> CourseAndVelocityReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.CourseOverGround>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
