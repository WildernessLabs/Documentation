---
title: Class NetworkErrorEventArgs
sidebar_label: NetworkErrorEventArgs
description: Data relating to a WiFi error event.
slug: /docs/api/Meadow/Meadow.Hardware/NetworkErrorEventArgs
---
# Class NetworkErrorEventArgs
Data relating to a WiFi error event.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkErrorEventArgs.cs#L8)
```csharp title="Declaration"
public class NetworkErrorEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### When
Date and time the event was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkErrorEventArgs.cs#L13)
```csharp title="Declaration"
public DateTime When { get; }
```
### ErrorCode
Error code.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkErrorEventArgs.cs#L18)
```csharp title="Declaration"
public uint ErrorCode { get; }
```
