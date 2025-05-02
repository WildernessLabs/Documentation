---
title: Interface INetworkAdapter
sidebar_label: INetworkAdapter
description: Base interface for a network adapter
slug: /docs/api/Meadow/Meadow.Hardware/INetworkAdapter
---
# Interface INetworkAdapter
Base interface for a network adapter

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L36)
```csharp title="Declaration"
public interface INetworkAdapter
```
## Properties
### Name
Gets the friendly name of the Adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L66)
```csharp title="Declaration"
string Name { get; }
```
### IsConnected
Indicates if the network adapter is connected to an access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L71)
```csharp title="Declaration"
bool IsConnected { get; }
```
### IpAddress
IP Address of the network adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L76)
```csharp title="Declaration"
IPAddress IpAddress { get; }
```
### SubnetMask
Subnet mask of the adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L81)
```csharp title="Declaration"
IPAddress SubnetMask { get; }
```
### Gateway
Default gateway for the adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L86)
```csharp title="Declaration"
IPAddress Gateway { get; }
```
### MacAddress
Physical (MAC) address of the adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L91)
```csharp title="Declaration"
PhysicalAddress MacAddress { get; }
```
### DnsAddresses
DNS Addresses of the network adapter.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L96)
```csharp title="Declaration"
IPAddressCollection DnsAddresses { get; }
```
## Events
### NetworkConnecting
Event raised when a network is connecting
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L41)
```csharp title="Declaration"
event NetworkStateHandler NetworkConnecting
```
##### Event Type
[Meadow.Hardware.NetworkStateHandler](../Meadow.Hardware/NetworkStateHandler)
### NetworkConnected
Event raised when a network is connected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L46)
```csharp title="Declaration"
event NetworkConnectionHandler NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
Event raised when a network is disconnected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L51)
```csharp title="Declaration"
event NetworkDisconnectionHandler NetworkDisconnected
```
##### Event Type
[Meadow.Hardware.NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)
### NetworkConnectFailed
Event raised when a auto-reconnecting to a network has terminaled
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L56)
```csharp title="Declaration"
event NetworkStateHandler NetworkConnectFailed
```
##### Event Type
[Meadow.Hardware.NetworkStateHandler](../Meadow.Hardware/NetworkStateHandler)
### NetworkError
Event raised on an unexpected network error.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapter.cs#L61)
```csharp title="Declaration"
event NetworkErrorHandler NetworkError
```
##### Event Type
[Meadow.Hardware.NetworkErrorHandler](../Meadow.Hardware/NetworkErrorHandler)
