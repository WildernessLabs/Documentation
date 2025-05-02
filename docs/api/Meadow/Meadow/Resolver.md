---
title: Class Resolver
sidebar_label: Resolver
description: Static container for common and user-supplied application services
slug: /docs/api/Meadow/Meadow/Resolver
---
# Class Resolver
Static container for common and user-supplied application services

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L11)
```csharp title="Declaration"
public static class Resolver
```
## Properties
### Services
A ServiceCollection instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L16)
```csharp title="Declaration"
public static ServiceCollection Services { get; }
```
### App
Retrieves the currently executing IApp instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L29)
```csharp title="Declaration"
public static IApp App { get; }
```
### Device
Retrieves the current IMeadowDevice the app is running on
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L34)
```csharp title="Declaration"
public static IMeadowDevice Device { get; }
```
### Log
Retrieves the current Logger instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L39)
```csharp title="Declaration"
public static Logger Log { get; }
```
### UpdateService
Retrieves the current IUpdateService instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L44)
```csharp title="Declaration"
public static IUpdateService UpdateService { get; }
```
### SensorService
Retrieves the current ISensorService instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L49)
```csharp title="Declaration"
public static ISensorService SensorService { get; }
```
### MeadowCloudService
Retrieves the current IMeadowCloudService instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L54)
```csharp title="Declaration"
public static IMeadowCloudService MeadowCloudService { get; }
```
### CommandService
Retrieves the current ICommandService instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L59)
```csharp title="Declaration"
public static ICommandService CommandService { get; }
```
### JsonSerializer
Retrieves the current IJsonSerializer instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Resolver.cs#L64)
```csharp title="Declaration"
public static IJsonSerializer JsonSerializer { get; }
```
