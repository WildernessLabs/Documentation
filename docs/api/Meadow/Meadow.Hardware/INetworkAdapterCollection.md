---
title: Interface INetworkAdapterCollection
sidebar_label: INetworkAdapterCollection
description: Provides an abstraction for a collection of INetworkAdapters
slug: /docs/api/Meadow/Meadow.Hardware/INetworkAdapterCollection
---
# Interface INetworkAdapterCollection
Provides an abstraction for a collection of INetworkAdapters

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L10)
```csharp title="Declaration"
public interface INetworkAdapterCollection : IEnumerable<INetworkAdapter>, IEnumerable
```
## Properties
### Count
Gets the number of network adapters in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L24)
```csharp title="Declaration"
int Count { get; }
```
### this[int]
Retrieves an INEtworkAdapter from the collection by index
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L30)
```csharp title="Declaration"
INetworkAdapter this[int index] { get; }
```
## Methods
### Primary&lt;T&gt;()
Retrieves the first registered INetworkAdapter matching the requested type
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L37)
```csharp title="Declaration"
T? Primary<T>() where T : INetworkAdapter
```

##### Returns

`<T>`
##### Type Parameters
* `T`
### Refresh()
Refreshes the collection of Adapters
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L46)
```csharp title="Declaration"
Task Refresh()
```

##### Returns

`System.Threading.Tasks.Task`
## Events
### NetworkConnected
Event raised when a network is connected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L15)
```csharp title="Declaration"
event NetworkConnectionHandler NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
Event raised when a network is disconnected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterCollection.cs#L19)
```csharp title="Declaration"
event NetworkDisconnectionHandler NetworkDisconnected
```
##### Event Type
[Meadow.Hardware.NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.INetworkAdapter&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.INetworkAdapter[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.INetworkAdapter&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.INetworkAdapter[])
