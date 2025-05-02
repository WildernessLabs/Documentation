---
title: Class NetworkDisconnectionEventArgs
sidebar_label: NetworkDisconnectionEventArgs
description: Data relating to a WiFi disconnect event.
slug: /docs/api/Meadow/Meadow.Hardware/NetworkDisconnectionEventArgs
---
# Class NetworkDisconnectionEventArgs
Data relating to a WiFi disconnect event.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectionEventArgs.cs#L8)
```csharp title="Declaration"
public class NetworkDisconnectionEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### When
Date and time the event was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectionEventArgs.cs#L13)
```csharp title="Declaration"
public DateTime When { get; }
```
### Reason
Disconnect reason
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectionEventArgs.cs#L18)
```csharp title="Declaration"
public NetworkDisconnectReason Reason { get; }
```
