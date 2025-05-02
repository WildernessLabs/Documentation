---
title: Class CharacteristicCollection
sidebar_label: CharacteristicCollection
description: Represents a collection of characteristics.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/CharacteristicCollection
---
# Class CharacteristicCollection
Represents a collection of characteristics.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L11)
```csharp title="Declaration"
public class CharacteristicCollection : IEnumerable<ICharacteristic>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.ICharacteristic>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of characteristics in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L25)
```csharp title="Declaration"
public int Count { get; }
```
### this[string]
Gets the characteristic with the specified name or UUID.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L82)
```csharp title="Declaration"
public ICharacteristic? this[string nameOrId] { get; }
```
### this[int]
Gets the characteristic at the specified index.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L100)
```csharp title="Declaration"
public ICharacteristic? this[int index] { get; }
```
## Methods
### Add(ICharacteristic)
Adds a characteristic to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L34)
```csharp title="Declaration"
public void Add(ICharacteristic characteristic)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Gateways.Bluetooth.ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic) | *characteristic* | The characteristic to add. |

### AddRange(IEnumerable&lt;ICharacteristic&gt;)
Adds a range of characteristics to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L43)
```csharp title="Declaration"
public void AddRange(IEnumerable<ICharacteristic> characteristics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.ICharacteristic>` | *characteristics* | The characteristics to add. |

### Clear()
Clear the characteristicCollection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L54)
```csharp title="Declaration"
public void Clear()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/CharacteristicCollection.cs#L63)
```csharp title="Declaration"
public IEnumerator<ICharacteristic> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Gateways.Bluetooth.ICharacteristic>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.ICharacteristic>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Gateways.Bluetooth.ICharacteristic&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Gateways.Bluetooth.ICharacteristic[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Gateways.Bluetooth.ICharacteristic&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Gateways.Bluetooth.ICharacteristic[])
