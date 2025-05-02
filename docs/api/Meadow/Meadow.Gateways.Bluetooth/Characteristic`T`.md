---
title: Class Characteristic<T>
sidebar_label: Characteristic<T>
description: >-
  Represents a Bluetooth characteristic with a generic value of type &lt;code
  class="typeparamref"&gt;T&lt;/code&gt;.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/Characteristic`T`
---
# Class Characteristic&lt;T&gt;
Represents a Bluetooth characteristic with a generic value of type &lt;code class="typeparamref"&gt;T&lt;/code&gt;.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic_T.cs#L9)
```csharp title="Declaration"
public abstract class Characteristic<T> : Characteristic, ICharacteristic, IAttribute, IJsonSerializable
```
**Inheritance:** `System.Object` -> [Meadow.Gateways.Bluetooth.Characteristic](../Meadow.Gateways.Bluetooth/Characteristic)

**Derived:**  
[Meadow.Gateways.Bluetooth.CharacteristicBool](../Meadow.Gateways.Bluetooth/CharacteristicBool), [Meadow.Gateways.Bluetooth.CharacteristicInt32](../Meadow.Gateways.Bluetooth/CharacteristicInt32), [Meadow.Gateways.Bluetooth.CharacteristicString](../Meadow.Gateways.Bluetooth/CharacteristicString)

**Implements:**  
[Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic), [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Methods
### SerializeValue(T)
Serializes the value of type &lt;code class="typeparamref"&gt;T&lt;/code&gt; to a byte array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic_T.cs#L16)
```csharp title="Declaration"
protected abstract byte[] SerializeValue(T value)
```

##### Returns

`System.Byte[]`: The byte array representing the serialized value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<T>` | *value* | The value to be serialized. |

### SetValue(T)
Sets the value of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic_T.cs#L49)
```csharp title="Declaration"
public void SetValue(T value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<T>` | *value* | The value to be set. |

### SetValue(object)
Sets the value of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic_T.cs#L59)
```csharp title="Declaration"
public override void SetValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to be set. |


## Implements

* [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
* [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
