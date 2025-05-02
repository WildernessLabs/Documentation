---
title: Class KnownDescriptors
sidebar_label: KnownDescriptors
description: Provides a static class for known Bluetooth GATT descriptors and their lookup.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownDescriptors
---
# Class KnownDescriptors
Provides a static class for known Bluetooth GATT descriptors and their lookup.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownDescriptors.cs#L12)
```csharp title="Declaration"
public static class KnownDescriptors
```
## Methods
### Lookup(Guid)
Looks up a known descriptor based on its GUID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownDescriptors.cs#L26)
```csharp title="Declaration"
public static KnownDescriptor Lookup(Guid id)
```

##### Returns

[Meadow.Gateways.Bluetooth.KnownDescriptor](../Meadow.Gateways.Bluetooth/KnownDescriptor): A [Meadow.Gateways.Bluetooth.KnownDescriptor](../Meadow.Gateways.Bluetooth/KnownDescriptor) instance representing the descriptor.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Guid` | *id* | The GUID of the descriptor to look up. |

