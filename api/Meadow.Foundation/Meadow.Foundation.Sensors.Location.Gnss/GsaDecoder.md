---
title: Class GsaDecoder
sidebar_label: GsaDecoder
description: "GSA decoder class"
---
# Class GsaDecoder
GSA decoder class

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsaDecoder.cs#L9)
```csharp title="Declaration"
public class GsaDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Prefix
Prefix for the GSA decoder
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsaDecoder.cs#L19)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the GSA messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsaDecoder.cs#L24)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(NmeaSentence)
Process the data from a GSA message
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsaDecoder.cs#L30)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a GSA message. |

## Events
### ActiveSatellitesReceived
Event raised when valid GSA data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GsaDecoder.cs#L14)
```csharp title="Declaration"
public event EventHandler<ActiveSatellites> ActiveSatellitesReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.ActiveSatellites>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
