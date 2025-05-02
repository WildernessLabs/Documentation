---
title: Enum CharacteristicWriteType
sidebar_label: CharacteristicWriteType
description: Specifies how a value should be written.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicWriteType
---
# Enum CharacteristicWriteType
Specifies how a value should be written.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicWriteType.cs#L6)
```csharp title="Declaration"
public enum CharacteristicWriteType
```
## Fields
### Default
Value should be written with response if supported, else without response.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicWriteType.cs#L11)
```csharp title="Declaration"
Default = 0
```
### WithResponse
Value should be written with response.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicWriteType.cs#L16)
```csharp title="Declaration"
WithResponse = 1
```
### WithoutResponse
Value should be written without response.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/CharacteristicWriteType.cs#L21)
```csharp title="Declaration"
WithoutResponse = 2
```
