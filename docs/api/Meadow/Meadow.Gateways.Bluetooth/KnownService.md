---
title: Struct KnownService
sidebar_label: KnownService
description: Represents a known Bluetooth GATT service with a name and a GUID.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownService
---
# Struct KnownService
Represents a known Bluetooth GATT service with a name and a GUID.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownService.cs#L8)
```csharp title="Declaration"
public struct KnownService
```
## Properties
### Name
Gets the name of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownService.cs#L13)
```csharp title="Declaration"
public readonly string Name { get; }
```
### Id
Gets the GUID of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownService.cs#L18)
```csharp title="Declaration"
public readonly Guid Id { get; }
```
