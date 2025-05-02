---
title: Enum UpdateState
sidebar_label: UpdateState
description: Enumeration of the state of the IUpdateService
slug: /docs/api/Meadow/Meadow/UpdateState
---
# Enum UpdateState
Enumeration of the state of the IUpdateService

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L41)
```csharp title="Declaration"
public enum UpdateState
```
## Fields
### Dead
The service is not running (either not started, forcibly stopped, or in a unrecoverable failed state)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L46)
```csharp title="Declaration"
Dead = 0
```
### Disconnected
The service is not currently connected to a server
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L50)
```csharp title="Declaration"
Disconnected = 1
```
### Connected
The service is connected to the server
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L54)
```csharp title="Declaration"
Connected = 2
```
### DownloadingFile
An update package is actively being downloaded
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L58)
```csharp title="Declaration"
DownloadingFile = 3
```
### UpdateInProgress
An update package is in the process of being applied
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L62)
```csharp title="Declaration"
UpdateInProgress = 4
```
