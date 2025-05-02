---
title: Class CharacteristicInt32
sidebar_label: CharacteristicInt32
description: Represents a Bluetooth characteristic with an integer (Int32) value.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicInt32
---
# Class CharacteristicInt32
Represents a Bluetooth characteristic with an integer (Int32) value.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicInt32.cs#L8)
```csharp title="Declaration"
public class CharacteristicInt32 : Characteristic<int>, ICharacteristic, IAttribute, IJsonSerializable
```
**Inheritance:** `System.Object` -> [Meadow.Gateways.Bluetooth.Characteristic](../Meadow.Gateways.Bluetooth/Characteristic) -> [Meadow.Gateways.Bluetooth.Characteristic&lt;T&gt;](../Meadow.Gateways.Bluetooth/Characteristic`T`)

**Implements:**  
[Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic), [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Methods
### HandleDataWrite(byte[])
Handles the data write for the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicInt32.cs#L27)
```csharp title="Declaration"
public override void HandleDataWrite(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to be written. |

### SerializeValue(int)
Serializes the integer value to a byte array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/CharacteristicInt32.cs#L55)
```csharp title="Declaration"
protected override byte[] SerializeValue(int value)
```

##### Returns

`System.Byte[]`: The byte array representing the serialized value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *value* | The integer value to be serialized. |


## Implements

* [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
* [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
