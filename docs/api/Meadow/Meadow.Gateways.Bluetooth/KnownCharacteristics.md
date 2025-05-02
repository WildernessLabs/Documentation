---
title: Class KnownCharacteristics
sidebar_label: KnownCharacteristics
description: >-
  Provides a static class for known Bluetooth GATT characteristics and their
  lookup.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownCharacteristics
---
# Class KnownCharacteristics
Provides a static class for known Bluetooth GATT characteristics and their lookup.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownCharacteristics.cs#L10)
```csharp title="Declaration"
public static class KnownCharacteristics
```
## Methods
### Lookup(Guid)
Looks up a known characteristic based on its GUID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownCharacteristics.cs#L22)
```csharp title="Declaration"
public static KnownCharacteristic Lookup(Guid id)
```

##### Returns

[Meadow.Gateways.Bluetooth.KnownCharacteristic](../Meadow.Gateways.Bluetooth/KnownCharacteristic): A [Meadow.Gateways.Bluetooth.KnownCharacteristic](../Meadow.Gateways.Bluetooth/KnownCharacteristic) instance representing the characteristic.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Guid` | *id* | The GUID of the characteristic to look up. |

