---
title: Enum ReconnectionType
sidebar_label: ReconnectionType
description: Describes the WiFi network reconnection behavior.
slug: /docs/api/Meadow/Meadow.Gateway.WiFi/ReconnectionType
---
# Enum ReconnectionType
Describes the WiFi network reconnection behavior.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ReconnectionType.cs#L6)
```csharp title="Declaration"
public enum ReconnectionType
```
## Fields
### Automatic
Reconnect automatically.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ReconnectionType.cs#L11)
```csharp title="Declaration"
Automatic = 0
```
### Manual
Allow user to reconnect manually.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ReconnectionType.cs#L16)
```csharp title="Declaration"
Manual = 1
```
### ConnectAtStartup
Connect to an access point at startup if access point data is stored on the device.

Note: This implies Automatic reconnection should a network drop out occur.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ReconnectionType.cs#L23)
```csharp title="Declaration"
ConnectAtStartup = 2
```
