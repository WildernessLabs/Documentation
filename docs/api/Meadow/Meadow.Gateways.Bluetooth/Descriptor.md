---
title: Class Descriptor
sidebar_label: Descriptor
description: Represents a Bluetooth descriptor.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/Descriptor
---
# Class Descriptor
Represents a Bluetooth descriptor.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Descriptor.cs#L8)
```csharp title="Declaration"
public class Descriptor : IDescriptor, IJsonSerializable
```
**Implements:**  
[Meadow.Gateways.Bluetooth.IDescriptor](../Meadow.Gateways.Bluetooth/IDescriptor), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Properties
### Handle
Gets or sets the handle for the descriptor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Descriptor.cs#L13)
```csharp title="Declaration"
public ushort Handle { get; set; }
```
### Uuid
Gets the 128-bit unique ID for the descriptor
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Descriptor.cs#L23)
```csharp title="Declaration"
public string Uuid { get; }
```
## Methods
### ToJson()
Converts the descriptor to a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Descriptor.cs#L61)
```csharp title="Declaration"
public string ToJson()
```

##### Returns

`System.String`: A JSON representation of the descriptor.
## Implements

* [Meadow.Gateways.Bluetooth.IDescriptor](../Meadow.Gateways.Bluetooth/IDescriptor)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
