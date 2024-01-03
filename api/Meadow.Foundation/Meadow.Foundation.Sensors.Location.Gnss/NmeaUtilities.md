---
title: Class NmeaUtilities
sidebar_label: NmeaUtilities
description: "Provide common functionality for the decode classes."
---
# Class NmeaUtilities
Provide common functionality for the decode classes.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L9)
```csharp title="Declaration"
public class NmeaUtilities
```
## Methods
### TimeOfReading(string?, string)
Extract the time of the reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L17)
```csharp title="Declaration"
public static DateTime? TimeOfReading(string? date, string time)
```

##### Returns

`System.Nullable<System.DateTime>`: DateTime object containing the time.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *date* | Date the reading was taken (this can be null) |
| `System.String` | *time* | String containing the time of the reading in the format hhmmss.sss |

### DegreesMinutesDecode(string, string)
Decode the degrees / minutes location and return a DMPosition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L63)
```csharp title="Declaration"
public static DegreesMinutesSecondsPosition? DegreesMinutesDecode(string location, string direction)
```

##### Returns

`Meadow.Peripherals.Sensors.Location.DegreesMinutesSecondsPosition`: DMPosition in degrees and minutes.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | Location in the format dddmm.mmmm or ddmm.mmmm |
| `System.String` | *direction* | Direction of the reading, one of N, S, E, W. |


##### Exceptions

`System.ArgumentException`  
Throw if the location string cannot be decoded.
