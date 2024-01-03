---
title: Class ThingSpeak
sidebar_label: ThingSpeak
description: "Represents a ThingSpeak data logger object"
---
# Class ThingSpeak
Represents a ThingSpeak data logger object

###### **Assembly**: ThingSpeak.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L11)
```csharp title="Declaration"
public class ThingSpeak
```
## Properties
### WriteKey
Get or set the ThingSpeak WriteKey.  This key allows this class to identify itself 
with ThingSpeak and log data with the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L17)
```csharp title="Declaration"
public string WriteKey { get; set; }
```
### URI
URI of the ThingSpeak api
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L22)
```csharp title="Declaration"
public string URI { get; set; }
```
## Methods
### PostValue(string)
Send a single value to ThingSpeak
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L38)
```csharp title="Declaration"
public void PostValue(string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | Value to send to ThingSpeak. |

### PostValues(params string[])
Post a series of values to ThingSpeak
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L47)
```csharp title="Declaration"
public void PostValues(params string[] values)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *values* | Array of values to send to ThingSpeak. |

