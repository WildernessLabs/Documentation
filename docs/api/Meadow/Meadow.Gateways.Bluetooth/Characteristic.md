---
title: Class Characteristic
sidebar_label: Characteristic
description: Represents a Bluetooth characteristic.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/Characteristic
---
# Class Characteristic
Represents a Bluetooth characteristic.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L6)
```csharp title="Declaration"
public abstract class Characteristic : ICharacteristic, IAttribute, IJsonSerializable
```
**Derived:**  
[Meadow.Gateways.Bluetooth.Characteristic&lt;T&gt;](../Meadow.Gateways.Bluetooth/Characteristic`T`)

**Implements:**  
[Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic), [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute), [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)

## Properties
### DefinitionHandle
Gets or sets the handle of the characteristic definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L21)
```csharp title="Declaration"
public ushort DefinitionHandle { get; set; }
```
### ValueHandle
Gets or sets the handle of the characteristic value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L26)
```csharp title="Declaration"
public ushort ValueHandle { get; set; }
```
### Name
Gets the name of the characteristic (for user reference).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L31)
```csharp title="Declaration"
public string Name { get; }
```
### Uuid
Gets the UUID of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L36)
```csharp title="Declaration"
public string Uuid { get; }
```
### Permissions
Gets the permissions of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L41)
```csharp title="Declaration"
public CharacteristicPermission Permissions { get; }
```
### Properties
Gets the properties of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L46)
```csharp title="Declaration"
public CharacteristicProperty Properties { get; }
```
### MaxLength
Gets the maximum length of the characteristic value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L51)
```csharp title="Declaration"
public int MaxLength { get; }
```
### Descriptors
Gets the descriptors associated with the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L56)
```csharp title="Declaration"
public IDescriptor[] Descriptors { get; }
```
## Methods
### HandleDataWrite(byte[])
Handles data write for the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L72)
```csharp title="Declaration"
public abstract void HandleDataWrite(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to be written. |

### SetValue(object)
Sets the value of the characteristic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L78)
```csharp title="Declaration"
public abstract void SetValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to be set. |

### RaiseValueSet(object)
Raises the [Meadow.Gateways.Bluetooth.Characteristic.ValueSet](../Meadow.Gateways.Bluetooth/Characteristic#valueset) event, indicating that the value of the characteristic has been set.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L89)
```csharp title="Declaration"
protected void RaiseValueSet(object data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *data* | The data associated with the value set event. |

## Events
### ValueSet
Occurs when the value of the characteristic is set.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L11)
```csharp title="Declaration"
public event CharacteristicValueSetHandler ValueSet
```
##### Event Type
[Meadow.Gateways.Bluetooth.CharacteristicValueSetHandler](../Meadow.Gateways.Bluetooth/CharacteristicValueSetHandler)
### ServerValueSet
Occurs when the value of the server is set internally (used internally).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/Definitions/Characteristic.cs#L16)
```csharp title="Declaration"
public event ServerValueChangedHandler ServerValueSet
```
##### Event Type
[Meadow.Gateways.Bluetooth.ServerValueChangedHandler](../Meadow.Gateways.Bluetooth/ServerValueChangedHandler)

## Implements

* [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
* [Meadow.Gateways.Bluetooth.IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
* [Meadow.Gateways.Bluetooth.IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
