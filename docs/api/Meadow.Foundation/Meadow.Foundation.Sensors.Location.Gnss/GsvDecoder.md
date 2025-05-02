---
title: Class GsvDecoder
sidebar_label: GsvDecoder
description: Process the Satellites in view messages from a GPS module.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/GsvDecoder
---
# Class GsvDecoder
Process the Satellites in view messages from a GPS module.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L16)
```csharp title="Declaration"
public class GsvDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Prefix
Get the prefix for the decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L51)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Get the friendly (human readable) name for the decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L57)
```csharp title="Declaration"
public string Name { get; }
```
## Fields
### _satellites
List of satellites.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L37)
```csharp title="Declaration"
protected Satellite[]? _satellites
```
## Methods
### Process(NmeaSentence)
Process the message from the GPS.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L64)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the elements of the message. |

## Events
### SatellitesInViewReceived
Event raised when valid GSV data is received.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsvDecoder.cs#L21)
```csharp title="Declaration"
public event EventHandler<SatellitesInView> SatellitesInViewReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.SatellitesInView>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
