---
title: Class Service
sidebar_label: Service
description: Provides access to a device Bluetooth capabilities
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/Service
---
# Class Service
Provides access to a device Bluetooth capabilities

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L6)
```csharp title="Declaration"
public class Service : IService, IJsonSerializable
```
**Implements:**  
[Meadow.Gateways.Bluetooth.IService](../Meadow.Gateways.Bluetooth/IService), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Properties
### Handle
Gets or sets the handle for the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L11)
```csharp title="Declaration"
public ushort Handle { get; set; }
```
### Name
Gets the name of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L16)
```csharp title="Declaration"
public string Name { get; }
```
### Uuid
Gets the UUID of the service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L21)
```csharp title="Declaration"
public ushort Uuid { get; }
```
### Characteristics
Gets the collection of characteristics associated with this service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L26)
```csharp title="Declaration"
public CharacteristicCollection Characteristics { get; }
```
## Methods
### ToJson()
Converts the service to a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Service.cs#L48)
```csharp title="Declaration"
public string ToJson()
```

##### Returns

`System.String`: A JSON representation of the service.
## Implements

* [Meadow.Gateways.Bluetooth.IService](../Meadow.Gateways.Bluetooth/IService)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
