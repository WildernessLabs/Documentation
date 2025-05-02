---
title: Class MeadowCloudLoginResponseMessage
sidebar_label: MeadowCloudLoginResponseMessage
description: >-
  Encapsulation of the JSON response message Meadow Cloud returns for Login
  requests
slug: /docs/api/Meadow/Meadow.Update/MeadowCloudLoginResponseMessage
---
# Class MeadowCloudLoginResponseMessage
Encapsulation of the JSON response message Meadow Cloud returns for Login requests

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/MeadowCloudLoginResponseMessage.cs#L6)
```csharp title="Declaration"
public class MeadowCloudLoginResponseMessage
```
## Properties
### EncryptedKey
An encrypted authentication key
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/MeadowCloudLoginResponseMessage.cs#L11)
```csharp title="Declaration"
public string EncryptedKey { get; set; }
```
### EncryptedToken
An encrypted authentication token
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/MeadowCloudLoginResponseMessage.cs#L15)
```csharp title="Declaration"
public string EncryptedToken { get; set; }
```
### Iv
An encryption initialization vector
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Update/MeadowCloudLoginResponseMessage.cs#L19)
```csharp title="Declaration"
public string Iv { get; set; }
```
