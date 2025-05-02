---
title: Class BluetoothExtensionMethods
sidebar_label: BluetoothExtensionMethods
description: Extension methods for Meadow Bluetooth objects
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/BluetoothExtensionMethods
---
# Class BluetoothExtensionMethods
Extension methods for Meadow Bluetooth objects

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L6)
```csharp title="Declaration"
public static class BluetoothExtensionMethods
```
## Methods
### CanBeRead(ICharacteristic)
Returns true if an ICharacteristic can be read, otherwise False
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ICharacteristic.cs#L13)
```csharp title="Declaration"
public static bool CanBeRead(this ICharacteristic c)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic) | *c* |

