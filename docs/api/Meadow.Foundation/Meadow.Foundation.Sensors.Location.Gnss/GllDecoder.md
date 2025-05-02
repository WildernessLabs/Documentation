---
title: Class GllDecoder
sidebar_label: GllDecoder
description: >-
  Process GLL (Geographic position Latitude / Longitude) messages from a GPS
  receiver.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/GllDecoder
---
# Class GllDecoder
Process GLL (Geographic position Latitude / Longitude) messages from a
GPS receiver.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L10)
```csharp title="Declaration"
public class GllDecoder : INmeaDecoder, IGnssPositionEventSource
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder), [Meadow.Foundation.Sensors.Location.Gnss.IGnssPositionEventSource](../Meadow.Foundation.Sensors.Location.Gnss/IGnssPositionEventSource)

## Properties
### Prefix
Prefix for the GLL (Geographic position Latitude / Longitude) decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L18)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the GLL messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L23)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(string)
Process a GPRMC sentence string
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L29)
```csharp title="Declaration"
public void Process(string sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *sentence* | The sentence |

### Process(NmeaSentence)
Process the data from a GLL message.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L38)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a GLL message. |

## Events
### PositionReceived
Raised when position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GllDecoder.cs#L13)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo>? PositionReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
* [Meadow.Foundation.Sensors.Location.Gnss.IGnssPositionEventSource](../Meadow.Foundation.Sensors.Location.Gnss/IGnssPositionEventSource)
