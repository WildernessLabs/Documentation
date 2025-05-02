---
title: Struct KnownDescriptor
sidebar_label: KnownDescriptor
description: Represents a known Bluetooth GATT descriptor with a name and a GUID.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/KnownDescriptor
---
# Struct KnownDescriptor
Represents a known Bluetooth GATT descriptor with a name and a GUID.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownDescriptor.cs#L8)
```csharp title="Declaration"
public struct KnownDescriptor
```
## Properties
### Name
Gets the name of the descriptor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownDescriptor.cs#L13)
```csharp title="Declaration"
public readonly string Name { get; }
```
### Id
Gets the GUID of the descriptor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/KnownDescriptor.cs#L18)
```csharp title="Declaration"
public readonly Guid Id { get; }
```
