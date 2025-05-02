---
title: Class KnownServices
sidebar_label: KnownServices
description: Provides a static class for known Bluetooth GATT services and their lookup.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownServices
---
# Class KnownServices
Provides a static class for known Bluetooth GATT services and their lookup.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownServices.cs#L12)
```csharp title="Declaration"
public static class KnownServices
```
## Methods
### Lookup(Guid)
Looks up a known service based on its GUID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownServices.cs#L26)
```csharp title="Declaration"
public static KnownService Lookup(Guid id)
```

##### Returns

[Meadow.Gateways.Bluetooth.KnownService](../Meadow.Gateways.Bluetooth/KnownService): A [Meadow.Gateways.Bluetooth.KnownService](../Meadow.Gateways.Bluetooth/KnownService) instance representing the service.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Guid` | *id* | The GUID of the service to look up. |

