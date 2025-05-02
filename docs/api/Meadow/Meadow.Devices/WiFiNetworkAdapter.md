---
title: Class WiFiNetworkAdapter
sidebar_label: WiFiNetworkAdapter
description: Represents WiFi network adapter
slug: /docs/api/Meadow/Meadow.Devices/WiFiNetworkAdapter
---
# Class WiFiNetworkAdapter
Represents WiFi network adapter

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L14)
```csharp title="Declaration"
public class WiFiNetworkAdapter : NetworkAdapterBase, IWiFiNetworkAdapter, IWirelessNetworkAdapter, INetworkAdapter
```
**Inheritance:** `System.Object` -> [Meadow.NetworkAdapterBase](../Meadow/NetworkAdapterBase)

**Implements:**  
[Meadow.Hardware.IWiFiNetworkAdapter](../Meadow.Hardware/IWiFiNetworkAdapter), [Meadow.Hardware.IWirelessNetworkAdapter](../Meadow.Hardware/IWirelessNetworkAdapter), [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)

## Properties
### IsConnected
Returns `true` if the adapter is connected, otherwise `false`
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L33)
```csharp title="Declaration"
public override bool IsConnected { get; }
```
### CurrentAntenna
Returns the current Antenna type
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L38)
```csharp title="Declaration"
public AntennaType CurrentAntenna { get; }
```
### Ssid
Access point the adapter is currently connected to
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L41)
```csharp title="Declaration"
public string? Ssid { get; }
```
### Bssid
BSSID (MAC) of the access point the ESP32 is currently connected to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L44)
```csharp title="Declaration"
public PhysicalAddress Bssid { get; }
```
### AutoConnect
Automatically attempt to connect to the &lt;b&gt;DefaultSsid&lt;/b&gt; network after a power cycle or reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L47)
```csharp title="Declaration"
public bool AutoConnect { get; }
```
### AutoReconnect
Automatically try to reconnect to an access point if there is a problem / disconnection
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L50)
```csharp title="Declaration"
public bool AutoReconnect { get; }
```
### DefaultSsid
Default access point to try to connect to if the network interface is started and the board
is configured to automatically reconnect.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L53)
```csharp title="Declaration"
public string DefaultSsid { get; }
```
### Channel
WiFi channel used for communication.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L56)
```csharp title="Declaration"
public int Channel { get; }
```
## Methods
### ClearStoredAccessPointInformation()
Removed any stored access point information from the coprocessor memory.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L59)
```csharp title="Declaration"
public Task ClearStoredAccessPointInformation()
```

##### Returns

`System.Threading.Tasks.Task`
### Connect(string, string, TimeSpan, CancellationToken, ReconnectionType)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L65)
```csharp title="Declaration"
public Task Connect(string ssid, string password, TimeSpan timeout, CancellationToken cancellationToken, ReconnectionType reconnection = ReconnectionType.Automatic)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.TimeSpan` | *timeout* | Timeout period for the connection attempt |
| `System.Threading.CancellationToken` | *cancellationToken* |  |
| [Meadow.Gateway.WiFi.ReconnectionType](../Meadow.Gateway.WiFi/ReconnectionType) | *reconnection* | Should the adapter reconnect automatically? |


##### Exceptions

`System.ArgumentNullException`  
Thrown if the ssid is null or empty or the password is null.
### ConnectToDefaultAccessPoint(TimeSpan, CancellationToken)
Connect to the default access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L71)
```csharp title="Declaration"
public Task ConnectToDefaultAccessPoint(TimeSpan timeout, CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *timeout* |
| `System.Threading.CancellationToken` | *cancellationToken* |

### Disconnect(bool)
Disconnect from the currently active access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L77)
```csharp title="Declaration"
public Task Disconnect(bool turnOffWiFiInterface)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *turnOffWiFiInterface* | Should the WiFi interface be turned off? |

### Scan(CancellationToken)
Get the list of access points.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L83)
```csharp title="Declaration"
public Task<IList<WifiNetwork>> Scan(CancellationToken token)
```

##### Returns

`System.Threading.Tasks.Task<System.Collections.Generic.IList<Meadow.Gateway.WiFi.WifiNetwork>>`: An `IList` (possibly empty) of access points.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *token* | A `System.Threading.CancellationToken` to be used if the Scan should be canceled. |

### Scan(TimeSpan)
Get the list of access points.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L89)
```csharp title="Declaration"
public Task<IList<WifiNetwork>> Scan(TimeSpan timeout)
```

##### Returns

`System.Threading.Tasks.Task<System.Collections.Generic.IList<Meadow.Gateway.WiFi.WifiNetwork>>`: An `IList` (possibly empty) of access points.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *timeout* | A `System.TimeSpan` representing the time to search before giving up. |

### SetAntenna(AntennaType, bool)
Sets the current antenna type used by the adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiFiNetworkAdapter.cs#L100)
```csharp title="Declaration"
public void SetAntenna(AntennaType antenna, bool persist = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.AntennaType](../Meadow.Hardware/AntennaType) | *antenna* | The antenna type to use |
| `System.Boolean` | *persist* | Whether or not the type should persist across OS restarts |


##### Exceptions

`System.NotImplementedException`  


## Implements

* [Meadow.Hardware.IWiFiNetworkAdapter](../Meadow.Hardware/IWiFiNetworkAdapter)
* [Meadow.Hardware.IWirelessNetworkAdapter](../Meadow.Hardware/IWirelessNetworkAdapter)
* [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)
