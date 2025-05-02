---
title: Enum ConnectionStatus
sidebar_label: ConnectionStatus
description: Describes the status of a WiFi network connection.
slug: /docs/api/Meadow/Meadow.Gateway.WiFi/ConnectionStatus
---
# Enum ConnectionStatus
Describes the status of a WiFi network connection.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L6)
```csharp title="Declaration"
public enum ConnectionStatus
```
## Fields
### UnspecifiedFailure
Connection failed for a reason other than those in this list.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L11)
```csharp title="Declaration"
UnspecifiedFailure = 0
```
### Success
Connection succeeded.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L16)
```csharp title="Declaration"
Success = 1
```
### NetworkNotAvailable
Connection failed because the network is not available.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L32)
```csharp title="Declaration"
NetworkNotAvailable = 4
```
### Timeout
Connection failed because the connection attempt timed out.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L37)
```csharp title="Declaration"
Timeout = 5
```
### ConnectionRefused
Connection to the access point has been refused.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L47)
```csharp title="Declaration"
ConnectionRefused = 7
```
### NetworkInterfaceCannotBeStarted
The network interface cannot be initialized.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L52)
```csharp title="Declaration"
NetworkInterfaceCannotBeStarted = 8
```
### AlreadyConnected
The network interface is started and already connected to an access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L57)
```csharp title="Declaration"
AlreadyConnected = 9
```
### WiFiNotStarted
WiFi interface not started.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ConnectionStatus.cs#L62)
```csharp title="Declaration"
WiFiNotStarted = 10
```
