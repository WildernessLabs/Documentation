---
title: Class WirelessNetworkConnectionEventArgs
sidebar_label: WirelessNetworkConnectionEventArgs
description: Data relating to a WiFi connection.
slug: /docs/api/Meadow/Meadow.Hardware/WirelessNetworkConnectionEventArgs
---
# Class WirelessNetworkConnectionEventArgs
Data relating to a WiFi connection.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L11)
```csharp title="Declaration"
public class WirelessNetworkConnectionEventArgs : NetworkConnectionEventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs` -> [Meadow.Hardware.NetworkConnectionEventArgs](../Meadow.Hardware/NetworkConnectionEventArgs)

## Properties
### Ssid
SSID of the network the device is connected to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L16)
```csharp title="Declaration"
public string Ssid { get; }
```
### Bssid
BSSID (MAC) of the network the device is connected to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L21)
```csharp title="Declaration"
public PhysicalAddress Bssid { get; }
```
### Channel
WiFi channel the device is currently using.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L26)
```csharp title="Declaration"
public byte Channel { get; }
```
### AuthenticationType
Authentication type used to connect to the network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L31)
```csharp title="Declaration"
public NetworkAuthenticationType AuthenticationType { get; }
```
### When
Date and time the event was generated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/WirelessNetworkConnectionEventArgs.cs#L36)
```csharp title="Declaration"
public DateTime When { get; }
```
