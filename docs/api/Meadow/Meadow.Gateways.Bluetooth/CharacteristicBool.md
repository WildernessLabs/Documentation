---
title: Class CharacteristicBool
sidebar_label: CharacteristicBool
description: Represents a Bluetooth characteristic with a boolean value.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicBool
---
# Class CharacteristicBool
Represents a Bluetooth characteristic with a boolean value.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicBool.cs#L6)
```csharp title="Declaration"
public class CharacteristicBool : Characteristic<bool>, ICharacteristic, IAttribute, IJsonSerializable
```
**Inheritance:** `System.Object` -> [Meadow.Gateways.Bluetooth.Characteristic](../Meadow.Gateways.Bluetooth/Characteristic) -> [Meadow.Gateways.Bluetooth.Characteristic&lt;T&gt;](../Meadow.Gateways.Bluetooth/Characteristic`T`)

**Implements:**  
[Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic), [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Methods
### HandleDataWrite(byte[])
Handles the data write for the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicBool.cs#L25)
```csharp title="Declaration"
public override void HandleDataWrite(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to be written. |

### SerializeValue(bool)
Serializes the boolean value to a byte array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicBool.cs#L36)
```csharp title="Declaration"
protected override byte[] SerializeValue(bool value)
```

##### Returns

`System.Byte[]`: The byte array representing the serialized value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *value* | The boolean value to be serialized. |


## Implements

* [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
* [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
