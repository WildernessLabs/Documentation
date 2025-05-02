---
title: Struct KnownCharacteristic
sidebar_label: KnownCharacteristic
description: Represents a known Bluetooth GATT characteristic with a name and a GUID.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownCharacteristic
---
# Struct KnownCharacteristic
Represents a known Bluetooth GATT characteristic with a name and a GUID.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownCharacteristic.cs#L8)
```csharp title="Declaration"
public struct KnownCharacteristic
```
## Properties
### Name
Gets the name of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownCharacteristic.cs#L13)
```csharp title="Declaration"
public readonly string Name { get; }
```
### Id
Gets the GUID of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownCharacteristic.cs#L18)
```csharp title="Declaration"
public readonly Guid Id { get; }
```
