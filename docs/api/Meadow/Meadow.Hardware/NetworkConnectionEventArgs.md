---
title: Class NetworkConnectionEventArgs
sidebar_label: NetworkConnectionEventArgs
description: Arguments passed in a NetworkConnection event
slug: /docs/api/Meadow/Meadow.Hardware/NetworkConnectionEventArgs
---
# Class NetworkConnectionEventArgs
Arguments passed in a NetworkConnection event

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkConnectionEventArgs.cs#L9)
```csharp title="Declaration"
public class NetworkConnectionEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

**Derived:**  
[Meadow.Hardware.CellNetworkConnectionEventArgs](../Meadow.Hardware/CellNetworkConnectionEventArgs), [Meadow.Hardware.EthernetNetworkConnectionEventArgs](../Meadow.Hardware/EthernetNetworkConnectionEventArgs), [Meadow.Hardware.WirelessNetworkConnectionEventArgs](../Meadow.Hardware/WirelessNetworkConnectionEventArgs)

## Properties
### IpAddress
IP address of the device on the network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkConnectionEventArgs.cs#L14)
```csharp title="Declaration"
public IPAddress IpAddress { get; }
```
### Subnet
Subnet mask of the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkConnectionEventArgs.cs#L19)
```csharp title="Declaration"
public IPAddress Subnet { get; }
```
### Gateway
Address of the gateway.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/NetworkConnectionEventArgs.cs#L24)
```csharp title="Declaration"
public IPAddress Gateway { get; }
```
