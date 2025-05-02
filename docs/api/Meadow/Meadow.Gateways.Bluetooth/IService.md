---
title: Interface IService
sidebar_label: IService
description: Represents a service in Bluetooth GATT.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/IService
---
# Interface IService
Represents a service in Bluetooth GATT.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IService.cs#L6)
```csharp title="Declaration"
public interface IService : IJsonSerializable
```
## Properties
### Handle
Gets or sets the handle of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IService.cs#L11)
```csharp title="Declaration"
ushort Handle { get; set; }
```
### Name
Gets the name of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IService.cs#L16)
```csharp title="Declaration"
string Name { get; }
```
### Uuid
Gets the UUID of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IService.cs#L21)
```csharp title="Declaration"
ushort Uuid { get; }
```
### Characteristics
Gets the collection of characteristics associated with the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IService.cs#L26)
```csharp title="Declaration"
CharacteristicCollection Characteristics { get; }
```
