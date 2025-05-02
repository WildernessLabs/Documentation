---
title: Interface INetworkAdapterController
sidebar_label: INetworkAdapterController
description: A contract for Meadow devices that support network interfaces
slug: /docs/api/Meadow/Meadow.Hardware/INetworkAdapterController
---
# Interface INetworkAdapterController
A contract for Meadow devices that support network interfaces

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterController.cs#L6)
```csharp title="Declaration"
public interface INetworkAdapterController
```
## Properties
### NetworkAdapters
A collection of network adapters
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterController.cs#L20)
```csharp title="Declaration"
INetworkAdapterCollection NetworkAdapters { get; }
```
## Events
### NetworkConnected
The event raised when a network adapter has connected to a network
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterController.cs#L11)
```csharp title="Declaration"
event NetworkConnectionHandler NetworkConnected
```
##### Event Type
[Meadow.Hardware.NetworkConnectionHandler](../Meadow.Hardware/NetworkConnectionHandler)
### NetworkDisconnected
The event raised when a network adapter has disconnected from a network
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/INetworkAdapterController.cs#L15)
```csharp title="Declaration"
event NetworkDisconnectionHandler NetworkDisconnected
```
##### Event Type
[Meadow.Hardware.NetworkDisconnectionHandler](../Meadow.Hardware/NetworkDisconnectionHandler)
