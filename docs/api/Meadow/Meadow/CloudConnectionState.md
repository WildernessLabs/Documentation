---
title: Enum CloudConnectionState
sidebar_label: CloudConnectionState
description: Enumeration of the state of the device's connection to Meadow.Cloud
slug: /docs/api/Meadow/Meadow/CloudConnectionState
---
# Enum CloudConnectionState
Enumeration of the state of the device's connection to Meadow.Cloud

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L6)
```csharp title="Declaration"
public enum CloudConnectionState
```
## Fields
### Unknown
The cloud connection state is not known
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L11)
```csharp title="Declaration"
Unknown = 0
```
### Disconnected
The device is not currently connected to Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L15)
```csharp title="Declaration"
Disconnected = 1
```
### Authenticating
The device is authenticating with Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L19)
```csharp title="Declaration"
Authenticating = 2
```
### Connecting
The device is connecting to Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L23)
```csharp title="Declaration"
Connecting = 3
```
### Subscribing
The device is subscribing to MQTT topics
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L27)
```csharp title="Declaration"
Subscribing = 4
```
### Connected
The device is connected to Meadow.Cloud
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L31)
```csharp title="Declaration"
Connected = 5
```
### Paused
State machine is paused for an internal operation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/UpdateState.cs#L35)
```csharp title="Declaration"
Paused = 6
```
