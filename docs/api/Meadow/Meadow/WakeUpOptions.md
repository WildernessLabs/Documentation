---
title: Class WakeUpOptions
sidebar_label: WakeUpOptions
description: Options for waking a device passed to Sleep calls
slug: /docs/api/Meadow/Meadow/WakeUpOptions
---
# Class WakeUpOptions
Options for waking a device passed to Sleep calls

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WakeUpOptions.cs#L10)
```csharp title="Declaration"
public class WakeUpOptions
```
## Properties
### SleepUntil
Sleep until a specific time
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WakeUpOptions.cs#L15)
```csharp title="Declaration"
public DateTime SleepUntil { get; set; }
```
### SleepDuration
Sleep for a specific duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WakeUpOptions.cs#L19)
```csharp title="Declaration"
public TimeSpan SleepDuration { get; set; }
```
### WakeOnNetwork
Sleep until network traffic is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WakeUpOptions.cs#L23)
```csharp title="Declaration"
public bool WakeOnNetwork { get; set; }
```
### WakeOnInterruptPorts
Sleep until an interrupt occurs on a specific port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WakeUpOptions.cs#L27)
```csharp title="Declaration"
public List<IDigitalInterruptPort> WakeOnInterruptPorts { get; }
```
