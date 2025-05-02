---
title: Interface INmeaDecoder
sidebar_label: INmeaDecoder
description: Base class for NMEA sentence decoder classes
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder
---
# Interface INmeaDecoder
Base class for NMEA sentence decoder classes

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/INmeaDecoder.cs#L8)
```csharp title="Declaration"
public interface INmeaDecoder
```
## Properties
### Prefix
Prefix for the decoder (text that occurs at the start of a GPS message
including the $ symbol - $GPGSA etc.)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/INmeaDecoder.cs#L14)
```csharp title="Declaration"
string Prefix { get; }
```
### Name
Friendly name for the decoder
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/INmeaDecoder.cs#L19)
```csharp title="Declaration"
string Name { get; }
```
## Methods
### Process(NmeaSentence)
Process the message from the GPS
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/INmeaDecoder.cs#L25)
```csharp title="Declaration"
void Process(NmeaSentence sentence)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.NmeaSentence` | *sentence* | String array of the elements of the message |

