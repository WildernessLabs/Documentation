---
title: Class RmcDecoder
sidebar_label: RmcDecoder
description: "Decode RMC - Recommended Minimum Specific GPS messages."
---
# Class RmcDecoder
Decode RMC - Recommended Minimum Specific GPS messages.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDeocder.cs#L10)
```csharp title="Declaration"
public class RmcDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Prefix
Prefix for the RMBC decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDeocder.cs#L20)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the RMC messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDeocder.cs#L28)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(NmeaSentence)
Process the data from a RMC
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDeocder.cs#L37)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a RMC message. |

## Events
### PositionCourseAndTimeReceived
Position update received event.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDeocder.cs#L15)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> PositionCourseAndTimeReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
