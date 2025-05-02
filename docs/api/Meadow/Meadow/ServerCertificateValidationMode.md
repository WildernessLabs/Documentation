---
title: Enum ServerCertificateValidationMode
sidebar_label: ServerCertificateValidationMode
description: >-
  Enum representing different server certificate validation modes for TLS
  protocols.
slug: /docs/api/Meadow/Meadow/ServerCertificateValidationMode
---
# Enum ServerCertificateValidationMode
Enum representing different server certificate validation modes for TLS protocols.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ServerCertificateValidationMode.cs#L8)
```csharp title="Declaration"
[Flags]
public enum ServerCertificateValidationMode
```
## Fields
### None
No certificate validation is performed (Insecure)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ServerCertificateValidationMode.cs#L14)
```csharp title="Declaration"
None = 0
```
### Optional
Certificate validation is optional. Handshake continues even if verification fails
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ServerCertificateValidationMode.cs#L19)
```csharp title="Declaration"
Optional = 1
```
### Required
Peer must present a valid certificate; handshake is aborted if verification fails
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ServerCertificateValidationMode.cs#L24)
```csharp title="Declaration"
Required = 2
```
