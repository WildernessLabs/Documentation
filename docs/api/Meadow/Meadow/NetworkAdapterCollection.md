---
title: Class NetworkAdapterCollection
sidebar_label: NetworkAdapterCollection
description: A collection of INetworkAdapter-derived instances
slug: /docs/api/Meadow/Meadow/NetworkAdapterCollection
---
# Class NetworkAdapterCollection
A collection of INetworkAdapter-derived instances

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L11)
```csharp title="Declaration"
public class NetworkAdapterCollection : INetworkAdapterCollection, IEnumerable<INetworkAdapter>, IEnumerable
```
**Implements:**  
[Meadow.Hardware.INetworkAdapterCollection](../Meadow.Hardware/INetworkAdapterCollection), `System.Collections.Generic.IEnumerable<Meadow.Hardware.INetworkAdapter>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of network adapters in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L21)
```csharp title="Declaration"
public int Count { get; }
```
### this[int]
Gets an INetworkAdapter from the collection by position index.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L28)
```csharp title="Declaration"
public INetworkAdapter this[int index] { get; }
```
## Methods
### Add(INetworkAdapter)
Adds an INetworkAdapter to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L34)
```csharp title="Declaration"
public void Add(INetworkAdapter adapter)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter) | *adapter* |

### Refresh()
Override this method to refresh the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L45)
```csharp title="Declaration"
public virtual Task Refresh()
```

##### Returns

`System.Threading.Tasks.Task`
### GetEnumerator()
Enumerates all INetworkAdapters in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L51)
```csharp title="Declaration"
public IEnumerator<INetworkAdapter> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.INetworkAdapter>`
## Events
### NetworkConnected
Event raised when a network is connected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L14)
```csharp title="Declaration"
public event NetworkConnectionHandler NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
Event raised when a network is disconnected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterCollection.cs#L16)
```csharp title="Declaration"
public event NetworkDisconnectionHandler NetworkDisconnected
```
##### Event Type
[Meadow.Hardware.NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)

## Implements

* [Meadow.Hardware.INetworkAdapterCollection](../Meadow.Hardware/INetworkAdapterCollection)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.INetworkAdapter>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.INetworkAdapter&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.INetworkAdapter[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.INetworkAdapter&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.INetworkAdapter[])
