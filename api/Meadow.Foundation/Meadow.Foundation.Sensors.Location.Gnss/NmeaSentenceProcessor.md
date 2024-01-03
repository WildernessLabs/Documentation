---
title: Class NmeaSentenceProcessor
sidebar_label: NmeaSentenceProcessor
description: "An engine that processes NMEA GPS/GNSS sentences by calling the appropriate
decoder and handing them off. Note that it's designed to be asynchronous
because certain messages (like $GPGSV/Satellites in View) need to be
processed together in order to make sense."
---
# Class NmeaSentenceProcessor
An engine that processes NMEA GPS/GNSS sentences by calling the appropriate
decoder and handing them off. Note that it's designed to be asynchronous
because certain messages (like $GPGSV/Satellites in View) need to be
processed together in order to make sense.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaProcessor.cs#L24)
```csharp title="Declaration"
public class NmeaSentenceProcessor
```
## Properties
### DebugMode
Enable / disable debug mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaProcessor.cs#L35)
```csharp title="Declaration"
public bool DebugMode { get; set; }
```
## Methods
### RegisterDecoder(INmeaDecoder)
Add a new NMEA decoder to the GPS
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaProcessor.cs#L47)
```csharp title="Declaration"
public void RegisterDecoder(INmeaDecoder decoder)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Location.Gnss.INmeaDecoder](../Meadow.Foundation.Sensors.Location.Gnss/INmeaDecoder) | *decoder* | NMEA decoder |

### ProcessNmeaMessage(string)
GPS message ready for processing
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaProcessor.cs#L64)
```csharp title="Declaration"
public void ProcessNmeaMessage(string line)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *line* | GPS text for processing |

