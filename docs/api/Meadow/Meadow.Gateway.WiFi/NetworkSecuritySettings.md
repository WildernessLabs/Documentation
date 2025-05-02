---
title: Class NetworkSecuritySettings
sidebar_label: NetworkSecuritySettings
description: Represents the security setting information of a WiFi network.
slug: /docs/api/Meadow/Meadow.Gateway.WiFi/NetworkSecuritySettings
---
# Class NetworkSecuritySettings
Represents the security setting information of a WiFi network.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkSecuritySettings.cs#L6)
```csharp title="Declaration"
public class NetworkSecuritySettings
```
## Properties
### AuthenticationType
Type of authentication used by the network, see [Meadow.Gateway.WiFi.NetworkAuthenticationType](../Meadow.Gateway.WiFi/NetworkAuthenticationType) for more information.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkSecuritySettings.cs#L11)
```csharp title="Declaration"
public NetworkAuthenticationType AuthenticationType { get; protected set; }
```
### EncryptionType
Type of encryption used by the network, see [Meadow.Gateway.WiFi.NetworkEncryptionType](../Meadow.Gateway.WiFi/NetworkEncryptionType) for more information.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/NetworkSecuritySettings.cs#L16)
```csharp title="Declaration"
public NetworkEncryptionType EncryptionType { get; protected set; }
```
