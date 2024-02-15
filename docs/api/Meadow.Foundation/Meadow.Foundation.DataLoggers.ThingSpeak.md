---
uid: Meadow.Foundation.DataLoggers.ThingSpeak
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.ThingSpeak
---

| ThingSpeak | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.DataLoggers.ThingSpeak/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.DataLoggers.ThingSpeak.svg?label=Meadow.Foundation.DataLoggers.ThingSpeak" alt="NuGet Gallery for Meadow.Foundation.DataLoggers.ThingSpeak" /></a> |


# Class ThingSpeak
Represents a ThingSpeak data logger object

###### **Assembly**: ThingSpeak.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L11)
```csharp title="Declaration"
public class ThingSpeak
```
## Properties
### WriteKey
Get or set the ThingSpeak WriteKey.  This key allows this class to identify itself 
with ThingSpeak and log data with the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L17)
```csharp title="Declaration"
public string WriteKey { get; set; }
```
### URI
URI of the ThingSpeak api
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L22)
```csharp title="Declaration"
public string URI { get; set; }
```
## Methods
### PostValue(string)
Send a single value to ThingSpeak
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L38)
```csharp title="Declaration"
public void PostValue(string value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | Value to send to ThingSpeak. |

### PostValues(params string[])
Post a series of values to ThingSpeak
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.ThingSpeak/Driver/ThingSpeak.cs#L47)
```csharp title="Declaration"
public void PostValues(params string[] values)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *values* | Array of values to send to ThingSpeak. |

