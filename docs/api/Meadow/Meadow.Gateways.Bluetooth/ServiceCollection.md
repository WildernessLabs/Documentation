---
title: Class ServiceCollection
sidebar_label: ServiceCollection
description: Represents a collection of Bluetooth services.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/ServiceCollection
---
# Class ServiceCollection
Represents a collection of Bluetooth services.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L11)
```csharp title="Declaration"
public class ServiceCollection : IEnumerable<IService>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.IService>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of services in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L25)
```csharp title="Declaration"
public int Count { get; }
```
### this[string]
Gets the service with the specified name.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L82)
```csharp title="Declaration"
public IService? this[string serviceName] { get; }
```
### this[int]
Gets the service at the specified index.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L92)
```csharp title="Declaration"
public IService? this[int index] { get; }
```
## Methods
### Add(IService)
Adds a service to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L34)
```csharp title="Declaration"
public void Add(IService service)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Gateways.Bluetooth.IService](../Meadow.Gateways.Bluetooth/IService) | *service* | The service to add. |

### AddRange(IEnumerable&lt;IService&gt;)
Adds a range of services to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L43)
```csharp title="Declaration"
public void AddRange(IEnumerable<IService> services)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.IService>` | *services* | The services to add. |

### Clear()
Clear the Service Collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L54)
```csharp title="Declaration"
public void Clear()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/ServiceCollection.cs#L63)
```csharp title="Declaration"
public IEnumerator<IService> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Gateways.Bluetooth.IService>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Gateways.Bluetooth.IService>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Gateways.Bluetooth.IService&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Gateways.Bluetooth.IService[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Gateways.Bluetooth.IService&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Gateways.Bluetooth.IService[])
