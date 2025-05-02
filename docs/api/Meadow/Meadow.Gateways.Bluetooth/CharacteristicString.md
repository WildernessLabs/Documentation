---
title: Class CharacteristicString
sidebar_label: CharacteristicString
description: Represents a Bluetooth characteristic with a string value.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicString
---
# Class CharacteristicString
Represents a Bluetooth characteristic with a string value.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicString.cs#L8)
```csharp title="Declaration"
public class CharacteristicString : Characteristic<string>, ICharacteristic, IAttribute, IJsonSerializable
```
**Inheritance:** `System.Object` -> [Meadow.Gateways.Bluetooth.Characteristic](../Meadow.Gateways.Bluetooth/Characteristic) -> [Meadow.Gateways.Bluetooth.Characteristic&lt;T&gt;](../Meadow.Gateways.Bluetooth/Characteristic`T`)

**Implements:**  
[Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic), [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Methods
### HandleDataWrite(byte[])
Handles the data write for the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicString.cs#L28)
```csharp title="Declaration"
public override void HandleDataWrite(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to be written. |

### SerializeValue(string)
Serializes the string value to byte array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicString.cs#L40)
```csharp title="Declaration"
protected override byte[] SerializeValue(string value)
```

##### Returns

`System.Byte[]`: The byte array representing the serialized value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | The string value to be serialized. |


## Implements

* [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
* [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
