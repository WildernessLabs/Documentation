---
title: Delegate ServerValueChangedHandler
sidebar_label: ServerValueChangedHandler
description: >-
  Delegate representing the event handler for the ServerValueSet event of a
  Bluetooth characteristic.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/ServerValueChangedHandler
---
# Delegate ServerValueChangedHandler
Delegate representing the event handler for the ServerValueSet event of a Bluetooth characteristic.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L42)
```csharp title="Declaration"
public delegate void ServerValueChangedHandler(ICharacteristic c, byte[] valueBytes)
```
