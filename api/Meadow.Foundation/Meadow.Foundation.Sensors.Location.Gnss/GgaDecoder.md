---
title: Class GgaDecoder
sidebar_label: GgaDecoder
description: "Decoder for GGA messages."
---
# Class GgaDecoder
Decoder for GGA messages.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GgaDecoder.cs#L10)
```csharp title="Declaration"
public class GgaDecoder : INmeaDecoder
```
**Implements:**  
[Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)

## Properties
### Prefix
Prefix for the GGA decoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GgaDecoder.cs#L20)
```csharp title="Declaration"
public string Prefix { get; }
```
### Name
Friendly name for the GGA messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GgaDecoder.cs#L25)
```csharp title="Declaration"
public string Name { get; }
```
## Methods
### Process(NmeaSentence)
Process the data from a GGA message
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GgaDecoder.cs#L31)
```csharp title="Declaration"
public void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the message components for a CGA message |

## Events
### PositionReceived
Position update received event.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/GgaDecoder.cs#L15)
```csharp title="Declaration"
public event EventHandler<GnssPositionInfo> PositionReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`

## Implements

* [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder)
