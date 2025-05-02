---
title: Interface IAppSettings
sidebar_label: IAppSettings
description: Represents the IApp settings
slug: /docs/api/Meadow/Meadow/IAppSettings
---
# Interface IAppSettings
Represents the IApp settings

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/IAppSettings.cs#L9)
```csharp title="Declaration"
public interface IAppSettings
```
## Properties
### LoggingSettings
Gets the settings for Logging
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/IAppSettings.cs#L14)
```csharp title="Declaration"
ILoggingSettings LoggingSettings { get; }
```
### LifecycleSettings
Gets the settings for the application lifecycle
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/IAppSettings.cs#L18)
```csharp title="Declaration"
ILifecycleSettings LifecycleSettings { get; }
```
### MeadowCloudSettings
Gets the settings for Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/IAppSettings.cs#L22)
```csharp title="Declaration"
IMeadowCloudSettings MeadowCloudSettings { get; }
```
### Settings
Gets a dictionary of user supplied settings
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Configuration/IAppSettings.cs#L26)
```csharp title="Declaration"
Dictionary<string, string> Settings { get; }
```
