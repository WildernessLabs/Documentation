---
title: Enum NetworkDisconnectReason
sidebar_label: NetworkDisconnectReason
description: Reasons for network interface disconnection
slug: /docs/api/Meadow/Meadow.Hardware/NetworkDisconnectReason
---
# Enum NetworkDisconnectReason
Reasons for network interface disconnection

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L34)
```csharp title="Declaration"
public enum NetworkDisconnectReason
```
## Fields
### Unspecified
Unspecified reason for disconnection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L39)
```csharp title="Declaration"
Unspecified = 1
```
### AuthenticatedLeave
Disconnection due to authenticated leave
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L44)
```csharp title="Declaration"
AuthenticatedLeave = 3
```
### Inactivity
Disconnection due to inactivity
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L49)
```csharp title="Declaration"
Inactivity = 4
```
### TooManyDevicesConnected
Disconnection because too many devices are connected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L54)
```csharp title="Declaration"
TooManyDevicesConnected = 5
```
### ManualDisconnect
Disconnection initiated manually
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L59)
```csharp title="Declaration"
ManualDisconnect = 8
```
### IncorrectPasscode
Disconnection due to incorrect passcode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L64)
```csharp title="Declaration"
IncorrectPasscode = 15
```
### InsufficientSignal
Disconnection due to insufficient signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L69)
```csharp title="Declaration"
InsufficientSignal = 33
```
### CableDisconnected
The network cable was disconnected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L74)
```csharp title="Declaration"
CableDisconnected = 100
```
### AccessPointDisconnected
Disconnection because the access point was disconnected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L79)
```csharp title="Declaration"
AccessPointDisconnected = 200
```
### AccessPointNotFound
Disconnection because the access point was not found
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkDisconnectReason.cs#L84)
```csharp title="Declaration"
AccessPointNotFound = 201
```
