---
title: Class NativeNetworkAdapterCollection
sidebar_label: NativeNetworkAdapterCollection
description: Provides a collection of .NET native network adapters
slug: /docs/api/Meadow/Meadow.Devices/NativeNetworkAdapterCollection
---
# Class NativeNetworkAdapterCollection
Provides a collection of .NET native network adapters

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L12)
```csharp title="Declaration"
public class NativeNetworkAdapterCollection : INetworkAdapterCollection, IEnumerable<INetworkAdapter>, IEnumerable
```
**Implements:**  
[Meadow.Hardware.INetworkAdapterCollection](../Meadow.Hardware/INetworkAdapterCollection), `System.Collections.Generic.IEnumerable<Meadow.Hardware.INetworkAdapter>`, `System.Collections.IEnumerable`

## Properties
### this[int]
Gets an INetworkAdapter from the collection at a specified index
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L27)
```csharp title="Declaration"
public INetworkAdapter this[int index] { get; }
```
## Methods
### GetEnumerator()
Gets an enumerator for the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L40)
```csharp title="Declaration"
public IEnumerator<INetworkAdapter> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.INetworkAdapter>`
### Refresh()
Refreshes the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L53)
```csharp title="Declaration"
public Task Refresh()
```

##### Returns

`System.Threading.Tasks.Task`
### GetWiredNetworkAdapter(NetworkInterface)
Creates an IWiredNetworkAdapter from a NetworkInterface
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L83)
```csharp title="Declaration"
public virtual IWiredNetworkAdapter GetWiredNetworkAdapter(NetworkInterface ni)
```

##### Returns

[Meadow.Hardware.IWiredNetworkAdapter](../Meadow.Hardware/IWiredNetworkAdapter)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Net.NetworkInformation.NetworkInterface` | *ni* | The NetworkInterface for the adapter |

### GetWiFiNetworkAdapter(NetworkInterface)
Creates an IWiFiNetworkAdapter from a NetworkInterface
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L92)
```csharp title="Declaration"
public virtual IWiFiNetworkAdapter GetWiFiNetworkAdapter(NetworkInterface ni)
```

##### Returns

[Meadow.Hardware.IWiFiNetworkAdapter](../Meadow.Hardware/IWiFiNetworkAdapter)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Net.NetworkInformation.NetworkInterface` | *ni* | The NetworkInterface for the adapter |

## Events
### NetworkConnected
Event raised when a network is connected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L15)
```csharp title="Declaration"
public event NetworkConnectionHandler NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
Event raised when a network is disconnected on any adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NativeNetworkAdapterCollection.cs#L17)
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
