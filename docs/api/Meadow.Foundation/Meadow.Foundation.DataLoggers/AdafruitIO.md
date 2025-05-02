---
title: Class AdafruitIO
sidebar_label: AdafruitIO
description: AdafruitIO DataLogger
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers/AdafruitIO
---
# Class AdafruitIO
AdafruitIO DataLogger

###### **Assembly**: AdafruitIO.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L29)
```csharp title="Declaration"
public class AdafruitIO
```
## Properties
### UserName
Adafruit account profile username
This name identifies the Adafruit IO user account that the feed belongs to
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L35)
```csharp title="Declaration"
public string UserName { get; set; }
```
### IOKey
Get or set the AdafruitIO AIO key. This key allows this class to identify itself 
with AdafruitIO and log data with the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L41)
```csharp title="Declaration"
public string IOKey { get; set; }
```
### URI
URI of the AdafruitIO api
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L46)
```csharp title="Declaration"
public string URI { get; set; }
```
### Group
Adafruit feed group
This identifies the Adafruit feed group that will accessed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L52)
```csharp title="Declaration"
public string Group { get; set; }
```
## Methods
### PostValues(SensorReading[])
Post a series of values to AdafruitIO.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L72)
```csharp title="Declaration"
public void PostValues(SensorReading[] Values)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.DataLoggers.SensorReading[]` | *Values* | Array of values to send to AdafruitIO. |

### PostValue(SensorReading)
Send a single value to AdafruitIO
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.AdafruitIO/Driver/AdafruitIO.cs#L84)
```csharp title="Declaration"
public void PostValue(SensorReading Value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.DataLoggers.SensorReading](../Meadow.Foundation.DataLoggers/SensorReading) | *Value* | Value to send to AdafruitIO. |

