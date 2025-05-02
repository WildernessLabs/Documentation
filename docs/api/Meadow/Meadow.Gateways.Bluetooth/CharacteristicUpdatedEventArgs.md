---
title: Class CharacteristicUpdatedEventArgs
sidebar_label: CharacteristicUpdatedEventArgs
description: Provides data for the event when a characteristic is updated.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicUpdatedEventArgs
---
# Class CharacteristicUpdatedEventArgs
Provides data for the event when a characteristic is updated.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/EventArgs/CharacteristicUpdatedEventArgs.cs#L8)
```csharp title="Declaration"
public class CharacteristicUpdatedEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### Characteristic
Gets or sets the characteristic that was updated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/EventArgs/CharacteristicUpdatedEventArgs.cs#L13)
```csharp title="Declaration"
public ICharacteristic Characteristic { get; set; }
```
