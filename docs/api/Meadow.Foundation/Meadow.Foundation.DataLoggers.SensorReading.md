---
uid: Meadow.Foundation.DataLoggers.SensorReading
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.SensorReading
---

| SensorReading | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.DataLoggers.SensorReading/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.DataLoggers.SensorReading.svg?label=Meadow.Foundation.DataLoggers.SensorReading" alt="NuGet Gallery for Meadow.Foundation.DataLoggers.SensorReading" /></a> |

# Class SensorReading
Sensor reading and the date and time the reading was taken.

###### **Assembly**: SensorReading.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L8)
```csharp title="Declaration"
public class SensorReading
```
## Properties
### Key
Name of the sensor reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L13)
```csharp title="Declaration"
public string Key { get; set; }
```
### Value
Value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L18)
```csharp title="Declaration"
public string Value { get; set; }
```
### CreatedAt
Date and time the reading was taken.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L23)
```csharp title="Declaration"
public DateTime CreatedAt { get; set; }
```
