---
title: Class MeadowOS.FileSystem
sidebar_label: MeadowOS.FileSystem
description: Contains Meadow.OS File System information.
slug: /docs/api/Meadow/Meadow/MeadowOS.FileSystem
---
# Class MeadowOS.FileSystem
Contains Meadow.OS File System information.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L10)
```csharp title="Declaration"
public static class MeadowOS.FileSystem
```
## Properties
### UserFileSystemRoot
Gets the root directory of the app file system partition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L15)
```csharp title="Declaration"
public static string UserFileSystemRoot { get; }
```
### DataDirectory
Gets the `/Data` directory. Use this directory to store files that
require permanent persistence, such as SQL data files, even
through OS deployments and Over-the-Air (OtA) updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L25)
```csharp title="Declaration"
public static string DataDirectory { get; }
```
### DocumentsDirectory
Gets the `/Documents` directory. Use this directory to store files that
require permanent persistence, such as application document files, even
through OS deployments and Over-the-Air (OtA) updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L32)
```csharp title="Declaration"
public static string DocumentsDirectory { get; }
```
### CacheDirectory
Gets the `/Cache` directory. Use this directory to store
semi-transient files. The contents of this folder will be erased
during application updates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L39)
```csharp title="Declaration"
public static string CacheDirectory { get; }
```
### TempDirectory
Gets the `/Temp` directory. Use this directory to store transient
files.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L48)
```csharp title="Declaration"
public static string TempDirectory { get; }
```
### CrashReportDirectory
Gets the `/crash` directory. This directory is used by various Meadow systems to store crash report
files.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L54)
```csharp title="Declaration"
public static string CrashReportDirectory { get; }
```
### AppCrashFile
Gets the full path to the file used to store crash reports from unhandled app exceptions
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L59)
```csharp title="Declaration"
public static string AppCrashFile { get; }
```
### RuntimeCrashFile
Gets the full path to the file used to store crash reports from unhandled runtime exceptions
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.FileSystem.cs#L63)
```csharp title="Declaration"
public static string RuntimeCrashFile { get; }
```
