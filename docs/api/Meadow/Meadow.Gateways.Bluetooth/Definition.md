---
title: Class Definition
sidebar_label: Definition
description: Represents the definition of a Bluetooth device.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/Definition
---
# Class Definition
Represents the definition of a Bluetooth device.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Definition.cs#L6)
```csharp title="Declaration"
public class Definition : IDefinition
```
**Implements:**  
[Meadow.Gateways.Bluetooth.IDefinition](../Meadow.Gateways.Bluetooth/IDefinition)

## Properties
### DeviceName
Gets the device name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Definition.cs#L11)
```csharp title="Declaration"
public string DeviceName { get; }
```
### CompanyId
Gets the company ID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Definition.cs#L16)
```csharp title="Declaration"
public ushort? CompanyId { get; }
```
### Services
Gets the collection of services associated with this device definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Definition.cs#L21)
```csharp title="Declaration"
public ServiceCollection Services { get; }
```
## Methods
### ToJson()
Converts the device definition to a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Definition.cs#L54)
```csharp title="Declaration"
public string ToJson()
```

##### Returns

`System.String`: A JSON representation of the device definition.
## Implements

* [Meadow.Gateways.Bluetooth.IDefinition](../Meadow.Gateways.Bluetooth/IDefinition)
