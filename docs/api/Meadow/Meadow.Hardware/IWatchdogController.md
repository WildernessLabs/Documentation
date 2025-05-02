---
title: Interface IWatchdogController
sidebar_label: IWatchdogController
description: >-
  Contract for hardware that has a watchdog. Watchdogs are used to reset a
  device in the event that the application code on it has stopped responding.
slug: /docs/api/Meadow/Meadow.Hardware/IWatchdogController
---
# Interface IWatchdogController
Contract for hardware that has a watchdog. Watchdogs are used to reset
a device in the event that the application code on it has stopped responding.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IWatchdogController.cs#L8)
```csharp title="Declaration"
public interface IWatchdogController
```
## Methods
### WatchdogEnable(TimeSpan)
Enables the watchdog. If `WatchdogReset` isn't called within the
specified `timeout` the device will reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IWatchdogController.cs#L15)
```csharp title="Declaration"
void WatchdogEnable(TimeSpan timeout)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *timeout* |

### WatchdogReset()
"Pets" the watchdog. By calling this within the `timeout`
specified in the `WatchdogEnable` method, the device will not reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IWatchdogController.cs#L21)
```csharp title="Declaration"
void WatchdogReset()
```
