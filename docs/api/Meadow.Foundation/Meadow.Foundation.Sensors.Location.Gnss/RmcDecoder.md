---
title: Class RmcDecoder
sidebar_label: RmcDecoder
description: Decode RMC - Recommended Minimum Specific GPS messages.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/RmcDecoder
---
# Class RmcDecoder
Decode RMC - Recommended Minimum Specific GPS messages.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L10)
```csharp title="Declaration"
public class RmcDecoder : INmeaDecoder, IGnssPositionEventSource
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder), [Meadow.Foundation.Sensors.Location.Gnss.IGnssPositionEventSource](../Meadow.Foundation.Sensors.Location.Gnss/IGnssPositionEventSource)

## Properties
### Prefix
Prefix for the RMBC decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L18)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the RMC messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L26)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(string)
Process a GPRMC sentence string
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L35)
```csharp title="Declaration"
public void Process(string sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *sentence* | The sentence |

### Process(NmeaSentence)
Process the data from a RMC
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L48)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a RMC message. |

## Events
### PositionReceived
Raised when position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/RmcDecoder.cs#L13)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo>? PositionReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
* [Meadow.Foundation.Sensors.Location.Gnss.IGnssPositionEventSource](../Meadow.Foundation.Sensors.Location.Gnss/IGnssPositionEventSource)
