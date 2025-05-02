---
title: Class NmeaUtilities
sidebar_label: NmeaUtilities
description: Provide common functionality for the decode classes.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/NmeaUtilities
---
# Class NmeaUtilities
Provide common functionality for the decode classes.

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L9)
```csharp title="Declaration"
public static class NmeaUtilities
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

### ParseLatitude(string, string)
Parses a string decimal latitude and N/S direction indicator to a signed double
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L61)
```csharp title="Declaration"
public static double ParseLatitude(string position, string directionIndicator)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *position* | The position in ddmm.mmmm format |
| `System.String` | *directionIndicator* | N or S |

### ParseLongitude(string, string)
Parses a string decimal longitude and E/W direction indicator to a signed double
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L80)
```csharp title="Declaration"
public static double ParseLongitude(string position, string directionIndicator)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *position* | The position in dddmm.mmmm format |
| `System.String` | *directionIndicator* | E or W |

### DegreesMinutesDecode(string, string)
Decode the degrees / minutes location and return a DMPosition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/NmeaUtilities.cs#L101)
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
