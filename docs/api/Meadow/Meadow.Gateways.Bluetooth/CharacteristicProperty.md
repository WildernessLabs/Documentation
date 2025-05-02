---
title: Enum CharacteristicProperty
sidebar_label: CharacteristicProperty
description: Specifies the properties of a Bluetooth characteristic.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicProperty
---
# Enum CharacteristicProperty
Specifies the properties of a Bluetooth characteristic.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L8)
```csharp title="Declaration"
[Flags]
public enum CharacteristicProperty : byte
```
## Fields
### Broadcast
The characteristic supports the broadcast property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L14)
```csharp title="Declaration"
Broadcast = 1
```
### Read
The characteristic supports the read property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L18)
```csharp title="Declaration"
Read = 2
```
### WriteNoResponse
The characteristic supports the write without response property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L22)
```csharp title="Declaration"
WriteNoResponse = 4
```
### Write
The characteristic supports the write property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L26)
```csharp title="Declaration"
Write = 8
```
### Notify
The characteristic supports the notify property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L30)
```csharp title="Declaration"
Notify = 16
```
### Indicate
The characteristic supports the indicate property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L34)
```csharp title="Declaration"
Indicate = 32
```
### SignedWrite
The characteristic supports the signed write property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L38)
```csharp title="Declaration"
SignedWrite = 64
```
### ExtendedProp
The characteristic supports the extended properties property.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicProperty.cs#L42)
```csharp title="Declaration"
ExtendedProp = 128
```
