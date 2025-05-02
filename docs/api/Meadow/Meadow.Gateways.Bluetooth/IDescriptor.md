---
title: Interface IDescriptor
sidebar_label: IDescriptor
description: A descriptor for a GATT characteristic
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/IDescriptor
---
# Interface IDescriptor
A descriptor for a GATT characteristic

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDescriptor.cs#L6)
```csharp title="Declaration"
public interface IDescriptor : IJsonSerializable
```
## Properties
### Handle
Gets or sets the handle of the descriptor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDescriptor.cs#L11)
```csharp title="Declaration"
ushort Handle { get; set; }
```
### Uuid
Gets the UUID of the descriptor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDescriptor.cs#L15)
```csharp title="Declaration"
string Uuid { get; }
```
