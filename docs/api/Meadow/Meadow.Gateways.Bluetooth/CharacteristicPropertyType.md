---
title: Enum CharacteristicPropertyType
sidebar_label: CharacteristicPropertyType
description: >-
  Represents the properties of a characteristic. It's a superset of all common
  platform specific properties.

  TODO: CTacke: we'll need to update these with whatever the ESP supports, i'm
  guessing.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicPropertyType
---
# Enum CharacteristicPropertyType
Represents the properties of a characteristic.
It's a superset of all common platform specific properties.

TODO: CTacke: we'll need to update these with whatever the ESP supports, i'm guessing.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L10)
```csharp title="Declaration"
[Flags]
public enum CharacteristicPropertyType
```
## Fields
### Broadcast
Characteristic value can be broadcast.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L16)
```csharp title="Declaration"
Broadcast = 1
```
### Read
Characteristic value can be read.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L21)
```csharp title="Declaration"
Read = 2
```
### WriteWithoutResponse
Characteristic value can be written without response.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L26)
```csharp title="Declaration"
WriteWithoutResponse = 4
```
### Write
Characteristic can be written with response.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L31)
```csharp title="Declaration"
Write = 8
```
### Notify
Characteristic can notify value changes without acknowledgment.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L36)
```csharp title="Declaration"
Notify = 16
```
### Indicate
Characteristic can indicate value changes with acknowledgment.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L41)
```csharp title="Declaration"
Indicate = 32
```
### AuthenticatedSignedWrites
Characteristic value can be written signed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L46)
```csharp title="Declaration"
AuthenticatedSignedWrites = 64
```
### ExtendedProperties
Indicates that more properties are set in the extended properties descriptor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L51)
```csharp title="Declaration"
ExtendedProperties = 128
```
### NotifyEncryptionRequired
Characteristic notifies of required encryption
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L57)
```csharp title="Declaration"
NotifyEncryptionRequired = 256
```
### IndicateEncryptionRequired
Indicates that encryption is required
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicPropertyType.cs#L62)
```csharp title="Declaration"
IndicateEncryptionRequired = 512
```
