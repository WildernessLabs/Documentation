---
title: Enum CharacteristicPermission
sidebar_label: CharacteristicPermission
description: Specifies the permissions for accessing a Bluetooth characteristic.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicPermission
---
# Enum CharacteristicPermission
Specifies the permissions for accessing a Bluetooth characteristic.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L8)
```csharp title="Declaration"
[Flags]
public enum CharacteristicPermission : short
```
## Fields
### Read
Read permission.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L14)
```csharp title="Declaration"
Read = 1
```
### ReadEncrypted
Read permission with encryption.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L18)
```csharp title="Declaration"
ReadEncrypted = 2
```
### ReadEncMITM
Read permission with encryption and Man-in-the-Middle (MITM) protection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L22)
```csharp title="Declaration"
ReadEncMITM = 4
```
### Write
Write permission.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L29)
```csharp title="Declaration"
Write = 16
```
### WriteEncrypted
Write permission with encryption.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L33)
```csharp title="Declaration"
WriteEncrypted = 32
```
### WriteEncMITM
Write permission with encryption and Man-in-the-Middle (MITM) protection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L37)
```csharp title="Declaration"
WriteEncMITM = 64
```
### WriteSigned
Write permission with signature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L41)
```csharp title="Declaration"
WriteSigned = 128
```
### WriteSignedMITM
Write permission with signature and Man-in-the-Middle (MITM) protection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/CharacteristicPermission.cs#L45)
```csharp title="Declaration"
WriteSignedMITM = 256
```
