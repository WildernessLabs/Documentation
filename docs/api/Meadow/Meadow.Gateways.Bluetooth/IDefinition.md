---
title: Interface IDefinition
sidebar_label: IDefinition
description: Represents the definition of a Bluetooth device.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/IDefinition
---
# Interface IDefinition
Represents the definition of a Bluetooth device.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDefinition.cs#L6)
```csharp title="Declaration"
public interface IDefinition
```
## Properties
### DeviceName
Gets the name of the Bluetooth device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDefinition.cs#L11)
```csharp title="Declaration"
string DeviceName { get; }
```
### Services
Gets the collection of services associated with the Bluetooth device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDefinition.cs#L16)
```csharp title="Declaration"
ServiceCollection Services { get; }
```
## Methods
### ToJson()
Converts the definition to its JSON representation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IDefinition.cs#L22)
```csharp title="Declaration"
string ToJson()
```

##### Returns

`System.String`: The JSON representation of the definition.
