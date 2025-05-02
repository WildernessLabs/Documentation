---
title: Interface ILoggingSettings
sidebar_label: ILoggingSettings
description: Represents the interface for logging settings.
slug: /docs/api/Meadow/Meadow/ILoggingSettings
---
# Interface ILoggingSettings
Represents the interface for logging settings.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILoggingSettings.cs#L6)
```csharp title="Declaration"
public interface ILoggingSettings
```
## Properties
### ShowTicks
Gets or sets a value indicating whether to show ticks in logs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILoggingSettings.cs#L11)
```csharp title="Declaration"
bool ShowTicks { get; set; }
```
### LogLevel
Gets the log level settings.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/ILoggingSettings.cs#L16)
```csharp title="Declaration"
ILogLevelSettings LogLevel { get; }
```
