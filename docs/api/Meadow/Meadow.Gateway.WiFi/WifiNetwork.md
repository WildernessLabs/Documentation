---
title: Class WifiNetwork
sidebar_label: WifiNetwork
description: Represents a WiFi network.
slug: /docs/api/Meadow/Meadow.Gateway.WiFi/WifiNetwork
---
# Class WifiNetwork
Represents a WiFi network.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L9)
```csharp title="Declaration"
public class WifiNetwork : IEquatable<WifiNetwork>
```
**Implements:**  
`System.IEquatable<Meadow.Gateway.WiFi.WifiNetwork>`

## Properties
### Ssid
Name of the network
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L15)
```csharp title="Declaration"
public string Ssid { get; protected set; }
```
### Bssid
MAC address of the AP
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L21)
```csharp title="Declaration"
public PhysicalAddress Bssid { get; protected set; }
```
### TypeOfNetwork
Type of network (infrastructure, ad-hoc etc.).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L26)
```csharp title="Declaration"
public NetworkType TypeOfNetwork { get; protected set; }
```
### BeaconInterval
Beacon interval.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L31)
```csharp title="Declaration"
public TimeSpan BeaconInterval { get; protected set; }
```
### SignalDbStrength
RSSI strength in dBmW (decibel milliwatts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L37)
```csharp title="Declaration"
public sbyte SignalDbStrength { get; protected set; }
```
### Phy
Physical network type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L42)
```csharp title="Declaration"
public PhyType Phy { get; protected set; }
```
### SecuritySettings
Security settings for the WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L47)
```csharp title="Declaration"
public NetworkSecuritySettings SecuritySettings { get; protected set; }
```
### Protocol
Network protocol in use or supported.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L52)
```csharp title="Declaration"
public NetworkProtocol Protocol { get; protected set; }
```
### UpTime
TimeSpan value representing the value of the Timestamp field from the 802.11 Beacon or
Probe Response frame received by the wireless LAN interface.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L59)
```csharp title="Declaration"
public TimeSpan UpTime { get; set; }
```
### ChannelCenterFrequency
The channel center frequency of the band on which the 802.11 Beacon or Probe Response frame was
received. The value of this property is in units of kilohertz (kHz). Note that this member is only
valid for PHY types that are not frequency-hopping spread spectrum (FHSS). In all other cases the
value returned is zero.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L68)
```csharp title="Declaration"
public int ChannelCenterFrequency { get; protected set; }
```
### SignalBarStrength
Gets the signal bar strength.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L74)
```csharp title="Declaration"
public byte SignalBarStrength { get; }
```
## Methods
### Equals(WifiNetwork)
Indicates whether the current object is equal to another object of the same type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/WiFi/WiFiNetwork.cs#L124)
```csharp title="Declaration"
public bool Equals(WifiNetwork other)
```

##### Returns

`System.Boolean`: [true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the current object is equal to the &lt;code class="paramref"&gt;other&lt;/code&gt; parameter; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Gateway.WiFi.WifiNetwork](../Meadow.Gateway.WiFi/WifiNetwork) | *other* | An object to compare with this object. |


## Implements

* `System.IEquatable<Meadow.Gateway.WiFi.WifiNetwork>`
