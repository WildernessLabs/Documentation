---
title: Class NetworkAdapterBase
sidebar_label: NetworkAdapterBase
description: A base class for INetworkAdapter implementations
slug: /docs/api/Meadow/Meadow/NetworkAdapterBase
---
# Class NetworkAdapterBase
A base class for INetworkAdapter implementations

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L12)
```csharp title="Declaration"
public abstract class NetworkAdapterBase : INetworkAdapter
```
**Derived:**  
[Meadow.Devices.WiFiNetworkAdapter](../Meadow.Devices/WiFiNetworkAdapter), [Meadow.Devices.WiredNetworkAdapter](../Meadow.Devices/WiredNetworkAdapter)

**Implements:**  
[Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)

## Properties
### IsConnected
returns the connection state of the NetworkAdapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L36)
```csharp title="Declaration"
public abstract bool IsConnected { get; }
```
### MacAddress
Gets the physical (MAC) address of the network adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L41)
```csharp title="Declaration"
public virtual PhysicalAddress MacAddress { get; }
```
### InterfaceType
Gets the network interface type
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L46)
```csharp title="Declaration"
public NetworkInterfaceType InterfaceType { get; }
```
### Name
Gets the friendly name of the Adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L49)
```csharp title="Declaration"
public virtual string Name { get; }
```
### IpAddress
IP Address of the network adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L126)
```csharp title="Declaration"
public IPAddress IpAddress { get; }
```
### DnsAddresses
DNS Addresses of the network adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L142)
```csharp title="Declaration"
public IPAddressCollection DnsAddresses { get; }
```
### SubnetMask
Subnet mask of the adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L158)
```csharp title="Declaration"
public IPAddress SubnetMask { get; }
```
### Gateway
Default gateway for the adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L174)
```csharp title="Declaration"
public IPAddress Gateway { get; }
```
## Methods
### RaiseNetworkConnecting()
Raises the [Meadow.NetworkAdapterBase.NetworkConnecting](../Meadow/NetworkAdapterBase#networkconnecting) event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L75)
```csharp title="Declaration"
protected void RaiseNetworkConnecting()
```
### RaiseConnectFailed()
Raises the [Meadow.NetworkAdapterBase.NetworkConnectFailed](../Meadow/NetworkAdapterBase#networkconnectfailed) event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L83)
```csharp title="Declaration"
protected void RaiseConnectFailed()
```
### RaiseNetworkConnected&lt;T&gt;(T)
Raises the [Meadow.NetworkAdapterBase.NetworkConnected](../Meadow/NetworkAdapterBase#networkconnected) event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L92)
```csharp title="Declaration"
protected void RaiseNetworkConnected<T>(T args) where T : NetworkConnectionEventArgs
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `<T>` | *args* |

##### Type Parameters
* `T`
### RaiseNetworkDisconnected(NetworkDisconnectionEventArgs)
Raises the [Meadow.NetworkAdapterBase.NetworkDisconnected](../Meadow/NetworkAdapterBase#networkdisconnected) event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L101)
```csharp title="Declaration"
protected void RaiseNetworkDisconnected(NetworkDisconnectionEventArgs args)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.NetworkDisconnectionEventArgs](../Meadow.Hardware/NetworkDisconnectionEventArgs) | *args* |

### RaiseNetworkError(NetworkErrorEventArgs)
Raises the [Meadow.NetworkAdapterBase.NetworkError](../Meadow/NetworkAdapterBase#networkerror) event
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L110)
```csharp title="Declaration"
protected void RaiseNetworkError(NetworkErrorEventArgs args)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.NetworkErrorEventArgs](../Meadow.Hardware/NetworkErrorEventArgs) | *args* |

### Refresh()
Refreshes the NetworkAdapter's information
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L118)
```csharp title="Declaration"
protected void Refresh()
```
## Events
### NetworkConnecting
Event raised when a network is connecting
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L15)
```csharp title="Declaration"
public event NetworkStateHandler? NetworkConnecting
```
##### Event Type
[Meadow.Hardware.NetworkStateHandler](../Meadow.Hardware/NetworkStateHandler)
### NetworkConnected
Event raised when a network is connected
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L18)
```csharp title="Declaration"
public event NetworkConnectionHandler? NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
Event raised when a network is disconnected
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L21)
```csharp title="Declaration"
public event NetworkDisconnectionHandler? NetworkDisconnected
```
##### Event Type
[Meadow.Hardware.NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)
### NetworkConnectFailed
Event raised when a auto-reconnecting to a network has terminaled
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L24)
```csharp title="Declaration"
public event NetworkStateHandler? NetworkConnectFailed
```
##### Event Type
[Meadow.Hardware.NetworkStateHandler](../Meadow.Hardware/NetworkStateHandler)
### NetworkError
Raised when a network error occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/NetworkAdapterBase.cs#L29)
```csharp title="Declaration"
public event NetworkErrorHandler NetworkError
```
##### Event Type
[Meadow.Hardware.NetworkErrorHandler](../Meadow.Hardware/NetworkErrorHandler)

## Implements

* [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)
