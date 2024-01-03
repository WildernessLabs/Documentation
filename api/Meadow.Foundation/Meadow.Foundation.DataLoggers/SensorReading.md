---
title: Class SensorReading
sidebar_label: SensorReading
description: "Sensor reading and the date and time the reading was taken."
---
# Class SensorReading
Sensor reading and the date and time the reading was taken.

###### **Assembly**: SensorReading.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L8)
```csharp title="Declaration"
public class SensorReading
```
## Properties
### Key
Name of the sensor reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L13)
```csharp title="Declaration"
public string Key { get; set; }
```
### Value
Value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L18)
```csharp title="Declaration"
public string Value { get; set; }
```
### CreatedAt
Date and time the reading was taken.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/DataLoggers.SensorReading/Driver/SensorReading.cs#L23)
```csharp title="Declaration"
public DateTime CreatedAt { get; set; }
```
