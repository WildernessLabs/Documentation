---
title: Class IPlatformOS.FileSystemInfo
sidebar_label: IPlatformOS.FileSystemInfo
description: Contains Meadow.OS File System information.
slug: /docs/api/Meadow/Meadow/IPlatformOS.FileSystemInfo
---
# Class IPlatformOS.FileSystemInfo
Contains Meadow.OS File System information.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L49)
```csharp title="Declaration"
public abstract class IPlatformOS.FileSystemInfo
```
## Properties
### Drives
A list of available storage devices
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L67)
```csharp title="Declaration"
public abstract IEnumerable<IStorageInformation> Drives { get; }
```
### FileSystemRoot
The root OS folder for the Meadow subsystem
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L72)
```csharp title="Declaration"
public abstract string FileSystemRoot { get; }
```
### UserFileSystemRoot
Gets the root directory of the app file system partition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L77)
```csharp title="Declaration"
public string UserFileSystemRoot { get; }
```
### DataDirectory
Gets the `/Data` directory. Use this directory to store files that
require permanent persistence, such as SQL data files, even
through OS deployments and Over-the-Air (OtA) updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L84)
```csharp title="Declaration"
public string DataDirectory { get; }
```
### DocumentsDirectory
Gets the `/Documents` directory. Use this directory to store files that
require permanent persistence, such as application document files, even
through OS deployments and Over-the-Air (OtA) updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L91)
```csharp title="Declaration"
public string DocumentsDirectory { get; }
```
### CacheDirectory
Gets the `/Cache` directory. Use this directory to store
semi-transient files. The contents of this folder will be erased
during application updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L98)
```csharp title="Declaration"
public string CacheDirectory { get; }
```
### TempDirectory
Gets the `/Temp` directory. Use this directory to store transient
files.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L107)
```csharp title="Declaration"
public string TempDirectory { get; }
```
## Methods
### RaiseExternalStorageEvent(IExternalStorage, ExternalStorageState)
Raises the ExternalStorageEvent event
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L54)
```csharp title="Declaration"
protected void RaiseExternalStorageEvent(IExternalStorage storage, ExternalStorageState state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.IExternalStorage](../Meadow/IExternalStorage) | *storage* |
| [Meadow.ExternalStorageState](../Meadow/ExternalStorageState) | *state* |

## Events
### ExternalStorageEvent
Raised when a change on an external storage device is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Platform OS/IPlatformOS.Storage.cs#L62)
```csharp title="Declaration"
public event ExternalStorageEventHandler? ExternalStorageEvent
```
##### Event Type
[Meadow.ExternalStorageEventHandler](../Meadow/ExternalStorageEventHandler)
