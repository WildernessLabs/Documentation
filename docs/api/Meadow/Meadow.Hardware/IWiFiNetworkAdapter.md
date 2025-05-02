---
title: Interface IWiFiNetworkAdapter
sidebar_label: IWiFiNetworkAdapter
description: Provides an abstraction for a wifi-enabled INetworkAdapter
slug: /docs/api/Meadow/Meadow.Hardware/IWiFiNetworkAdapter
---
# Interface IWiFiNetworkAdapter
Provides an abstraction for a wifi-enabled INetworkAdapter

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L13)
```csharp title="Declaration"
public interface IWiFiNetworkAdapter : IWirelessNetworkAdapter, INetworkAdapter
```
## Properties
### Ssid
Access point the adapter is currently connected to
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L18)
```csharp title="Declaration"
string? Ssid { get; }
```
### Bssid
BSSID (MAC) of the access point the ESP32 is currently connected to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L23)
```csharp title="Declaration"
PhysicalAddress Bssid { get; }
```
### AutoConnect
Automatically attempt to connect to the &lt;b&gt;DefaultSsid&lt;/b&gt; network after a power cycle or reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L28)
```csharp title="Declaration"
bool AutoConnect { get; }
```
### AutoReconnect
Automatically try to reconnect to an access point if there is a problem / disconnection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L33)
```csharp title="Declaration"
bool AutoReconnect { get; }
```
### DefaultSsid
Default access point to try to connect to if the network interface is started and the board
is configured to automatically reconnect.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L39)
```csharp title="Declaration"
string DefaultSsid { get; }
```
### Channel
WiFi channel used for communication.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L44)
```csharp title="Declaration"
int Channel { get; }
```
## Methods
### Connect(string, string, TimeSpan, CancellationToken, ReconnectionType)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L55)
```csharp title="Declaration"
Task Connect(string ssid, string password, TimeSpan timeout, CancellationToken token, ReconnectionType reconnection = ReconnectionType.Automatic)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.TimeSpan` | *timeout* | Timeout period for the connection attempt |
| `System.Threading.CancellationToken` | *token* | Cancellation token for the connection attempt |
| [Meadow.Gateway.WiFi.ReconnectionType](../Meadow.Gateway.WiFi/ReconnectionType) | *reconnection* | Should the adapter reconnect automatically? |


##### Exceptions

`System.ArgumentNullException`  
Thrown if the ssid is null or empty or the password is null.
### Connect(string, string, ReconnectionType)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L64)
```csharp title="Declaration"
Task Connect(string ssid, string password, ReconnectionType reconnection = ReconnectionType.Automatic)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| [Meadow.Gateway.WiFi.ReconnectionType](../Meadow.Gateway.WiFi/ReconnectionType) | *reconnection* | Should the adapter reconnect automatically? |


##### Exceptions

`System.ArgumentNullException`  
Thrown if the ssid is null or empty or the password is null.
### Connect(string, string, CancellationToken, ReconnectionType)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L78)
```csharp title="Declaration"
Task Connect(string ssid, string password, CancellationToken token, ReconnectionType reconnection = ReconnectionType.Automatic)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.Threading.CancellationToken` | *token* | Cancellation token for the connection attempt |
| [Meadow.Gateway.WiFi.ReconnectionType](../Meadow.Gateway.WiFi/ReconnectionType) | *reconnection* | Should the adapter reconnect automatically? |


##### Exceptions

`System.ArgumentNullException`  
Thrown if the ssid is null or empty or the password is null.
### Connect(string, string, TimeSpan, ReconnectionType)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L91)
```csharp title="Declaration"
Task Connect(string ssid, string password, TimeSpan timeout, ReconnectionType reconnection = ReconnectionType.Automatic)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.TimeSpan` | *timeout* | Timeout period for the connection attempt |
| [Meadow.Gateway.WiFi.ReconnectionType](../Meadow.Gateway.WiFi/ReconnectionType) | *reconnection* | Should the adapter reconnect automatically? |


##### Exceptions

`System.ArgumentNullException`  
Thrown if the ssid is null or empty or the password is null.
### Connect(string, string, TimeSpan, CancellationToken)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L104)
```csharp title="Declaration"
Task Connect(string ssid, string password, TimeSpan timeout, CancellationToken token)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.TimeSpan` | *timeout* | Timeout period for the connection attempt |
| `System.Threading.CancellationToken` | *token* | Cancellation token for the connection attempt |

### Connect(string, string, TimeSpan)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L115)
```csharp title="Declaration"
Task Connect(string ssid, string password, TimeSpan timeout)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |
| `System.TimeSpan` | *timeout* | Timeout period for the connection attempt |

### Connect(string, string)
Start a WiFi network.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L126)
```csharp title="Declaration"
Task Connect(string ssid, string password)
```

##### Returns

`System.Threading.Tasks.Task`: true if the connection was successfully made.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *ssid* | Name of the network to connect to. |
| `System.String` | *password* | Password for the network. |

### Disconnect(bool)
Disconnect from the currently active access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L139)
```csharp title="Declaration"
Task Disconnect(bool turnOffWiFiInterface)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *turnOffWiFiInterface* | Should the WiFi interface be turned off? |

### ConnectToDefaultAccessPoint()
Connect to the default access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L145)
```csharp title="Declaration"
Task ConnectToDefaultAccessPoint()
```

##### Returns

`System.Threading.Tasks.Task`
### ConnectToDefaultAccessPoint(TimeSpan, CancellationToken)
Connect to the default access point.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L154)
```csharp title="Declaration"
Task ConnectToDefaultAccessPoint(TimeSpan timeout, CancellationToken token)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *timeout* |
| `System.Threading.CancellationToken` | *token* |

### ClearStoredAccessPointInformation()
Removed any stored access point information from the coprocessor memory.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L159)
```csharp title="Declaration"
Task ClearStoredAccessPointInformation()
```

##### Returns

`System.Threading.Tasks.Task`
### Scan()
Get the list of access points.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L168)
```csharp title="Declaration"
Task<IList<WifiNetwork>> Scan()
```

##### Returns

`System.Threading.Tasks.Task<System.Collections.Generic.IList<Meadow.Gateway.WiFi.WifiNetwork>>`: An `IList` (possibly empty) of access points.### Scan(CancellationToken)
Get the list of access points.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L181)
```csharp title="Declaration"
Task<IList<WifiNetwork>> Scan(CancellationToken token)
```

##### Returns

`System.Threading.Tasks.Task<System.Collections.Generic.IList<Meadow.Gateway.WiFi.WifiNetwork>>`: An `IList` (possibly empty) of access points.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *token* | A `System.Threading.CancellationToken` to be used if the Scan should be canceled. |

### Scan(TimeSpan)
Get the list of access points.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWiFiNetworkAdapter.cs#L190)
```csharp title="Declaration"
Task<IList<WifiNetwork>> Scan(TimeSpan timeout)
```

##### Returns

`System.Threading.Tasks.Task<System.Collections.Generic.IList<Meadow.Gateway.WiFi.WifiNetwork>>`: An `IList` (possibly empty) of access points.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *timeout* | A `System.TimeSpan` representing the time to search before giving up. |

