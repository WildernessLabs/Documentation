---
title: Class MeadowOS.SystemInformation
sidebar_label: MeadowOS.SystemInformation
description: A static convenience accessor for retrieving system information
slug: /docs/api/Meadow/Meadow/MeadowOS.SystemInformation
---
# Class MeadowOS.SystemInformation
A static convenience accessor for retrieving system information

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L8)
```csharp title="Declaration"
public static class MeadowOS.SystemInformation
```
## Properties
### OSVersion
Get the OS version.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L14)
```csharp title="Declaration"
public static string OSVersion { get; }
```
### OSBuildDate
Get the OS build date.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L21)
```csharp title="Declaration"
public static string OSBuildDate { get; }
```
### RuntimeVersion
Get the mono version on the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L27)
```csharp title="Declaration"
public static string RuntimeVersion { get; }
```
### RebootOnUnhandledException
Should the system reboot if an unhandled exception is encountered in the user application?
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L32)
```csharp title="Declaration"
public static bool RebootOnUnhandledException { get; }
```
### InitizationTimeout
Number of seconds the initialization method in the user application is allowed to run before
it is assumed to have crashed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L39)
```csharp title="Declaration"
public static uint InitizationTimeout { get; }
```
