---
title: Class ReliabilityServiceBase
sidebar_label: ReliabilityServiceBase
description: Provides base implementation of common ReliabilityService functionality
slug: /docs/api/Meadow/Meadow/ReliabilityServiceBase
---
# Class ReliabilityServiceBase
Provides base implementation of common ReliabilityService functionality

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L13)
```csharp title="Declaration"
public abstract class ReliabilityServiceBase : IReliabilityService
```
**Implements:**  
[Meadow.IReliabilityService](../Meadow/IReliabilityService)

## Properties
### LastBootWasFromCrash
Returns true is the last device boot followed a crash
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L26)
```csharp title="Declaration"
public bool LastBootWasFromCrash { get; }
```
### LastResetReason
Gets the last system reset reason
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L29)
```csharp title="Declaration"
public virtual ResetReason LastResetReason { get; }
```
### SystemResetCount
Gets the total number of times the system has been reset
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L32)
```csharp title="Declaration"
public virtual int SystemResetCount { get; }
```
### SystemPowerCycleCount
Gets the total number of times the system has been power cycled
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L35)
```csharp title="Declaration"
public virtual int SystemPowerCycleCount { get; }
```
### UpTime
Gets the total time the device has been up since last reset or power cycle
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L38)
```csharp title="Declaration"
public virtual TimeSpan UpTime { get; }
```
### ErrorListenerIsAttached
Returns &lt;b&gt;true&lt;/b&gt; if any listener has attached to the MeadowSystemError event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L43)
```csharp title="Declaration"
protected bool ErrorListenerIsAttached { get; }
```
### IsCrashDataAvailable
Returns if there is crash data available
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L215)
```csharp title="Declaration"
public bool IsCrashDataAvailable { get; }
```
## Methods
### OnBootFromCrash()
Override this method to provide specific behaviors the device boots after a crash
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L23)
```csharp title="Declaration"
public abstract void OnBootFromCrash()
```
### ProcessSystemError(MeadowSystemErrorInfo, out bool)
Processes a Meadow system error to determine if a device reset is recommended
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L105)
```csharp title="Declaration"
protected virtual void ProcessSystemError(MeadowSystemErrorInfo errorInfo, out bool recommendReset)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.MeadowSystemErrorInfo](../Meadow/MeadowSystemErrorInfo) | *errorInfo* | The error that has occurred |
| `System.Boolean` | *recommendReset* | Return &lt;b&gt;true&lt;/b&gt; to recommend device reset |

### LogSystemError(MeadowSystemErrorInfo, bool)
Writes a system error to the App Crash file
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L130)
```csharp title="Declaration"
protected void LogSystemError(MeadowSystemErrorInfo error, bool recommendedReset)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.MeadowSystemErrorInfo](../Meadow/MeadowSystemErrorInfo) | *error* | The error info to write |
| `System.Boolean` | *recommendedReset* | Whether or not reset was recommended |

### OnMeadowSystemError(MeadowSystemErrorInfo)
Override this method to provide specific behaviors when System Errors occur
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L174)
```csharp title="Declaration"
public void OnMeadowSystemError(MeadowSystemErrorInfo errorInfo)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.MeadowSystemErrorInfo](../Meadow/MeadowSystemErrorInfo) | *errorInfo* | The MeadowSystemErrorInfo describing the error details |

### ClearCrashData()
Erases all existing crash report data
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L229)
```csharp title="Declaration"
public void ClearCrashData()
```
### GetCrashData()
Gets all existing crash report data
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L249)
```csharp title="Declaration"
public string[] GetCrashData()
```

##### Returns

`System.String[]`: A list (typically with a length of 0 or 1) of on-device crash reports### GetStartupMessages()
Retrieves any messages generated by the Meadow host OS prior to starting the Meadow stack
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L273)
```csharp title="Declaration"
public virtual IEnumerable<PlatformOsMessage>? GetStartupMessages()
```

##### Returns

`System.Collections.Generic.IEnumerable<Meadow.PlatformOsMessage>`
## Events
### MeadowSystemError
This event is raised in the event that an exception or error occurs outside of the managed stack, such as with a coprocessor
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/ReliabilityServiceBase.cs#L46)
```csharp title="Declaration"
public event MeadowSystemErrorHandler MeadowSystemError
```
##### Event Type
[Meadow.MeadowSystemErrorHandler](../Meadow/MeadowSystemErrorHandler)

## Implements

* [Meadow.IReliabilityService](../Meadow/IReliabilityService)
