---
title: Interface ILifecycleSettings
sidebar_label: ILifecycleSettings
description: Represents the interface for lifecycle settings.
slug: /docs/api/Meadow/Meadow/ILifecycleSettings
---
# Interface ILifecycleSettings
Represents the interface for lifecycle settings.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILifecycleSettings.cs#L6)
```csharp title="Declaration"
public interface ILifecycleSettings
```
## Properties
### RestartOnAppFailure
Gets or sets a value indicating whether to restart on application failure.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILifecycleSettings.cs#L11)
```csharp title="Declaration"
bool RestartOnAppFailure { get; set; }
```
### AppFailureRestartDelaySeconds
Gets or sets the delay, in seconds, for restarting after application failure.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILifecycleSettings.cs#L16)
```csharp title="Declaration"
int AppFailureRestartDelaySeconds { get; set; }
```
