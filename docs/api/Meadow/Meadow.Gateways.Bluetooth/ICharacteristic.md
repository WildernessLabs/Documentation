---
title: Interface ICharacteristic
sidebar_label: ICharacteristic
description: Represents a Bluetooth characteristic.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/ICharacteristic
---
# Interface ICharacteristic
Represents a Bluetooth characteristic.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L47)
```csharp title="Declaration"
public interface ICharacteristic : IAttribute
```
## Properties
### Name
Gets the name of the characteristic. This is only for user reference and is not used in Bluetooth Low Energy (BLE) functionality.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L68)
```csharp title="Declaration"
string Name { get; }
```
### Uuid
Gets the UUID of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L73)
```csharp title="Declaration"
string Uuid { get; }
```
### Permissions
Gets the permissions of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L78)
```csharp title="Declaration"
CharacteristicPermission Permissions { get; }
```
### Properties
Gets the properties of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L83)
```csharp title="Declaration"
CharacteristicProperty Properties { get; }
```
### MaxLength
Gets the maximum length of the characteristic value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L88)
```csharp title="Declaration"
int MaxLength { get; }
```
### Descriptors
Gets the descriptors associated with the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L93)
```csharp title="Declaration"
IDescriptor[] Descriptors { get; }
```
## Methods
### SetValue(object)
Sets the value of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L63)
```csharp title="Declaration"
void SetValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set. |

## Events
### ValueSet
Occurs when the value of the characteristic is set.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L52)
```csharp title="Declaration"
event CharacteristicValueSetHandler ValueSet
```
##### Event Type
[Meadow.Gateways.Bluetooth.CharacteristicValueSetHandler](../Meadow.Gateways.Bluetooth/CharacteristicValueSetHandler)
### ServerValueSet
Occurs when the server value of the characteristic is set.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L57)
```csharp title="Declaration"
event ServerValueChangedHandler ServerValueSet
```
##### Event Type
[Meadow.Gateways.Bluetooth.ServerValueChangedHandler](../Meadow.Gateways.Bluetooth/ServerValueChangedHandler)
