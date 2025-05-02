---
title: Interface ICellNetworkAdapter
sidebar_label: ICellNetworkAdapter
description: Provides an abstraction for a cellular INetworkAdapter
slug: /docs/api/Meadow/Meadow.Hardware/ICellNetworkAdapter
---
# Interface ICellNetworkAdapter
Provides an abstraction for a cellular INetworkAdapter

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L8)
```csharp title="Declaration"
public interface ICellNetworkAdapter : INetworkAdapter
```
## Properties
### Imei
Gets the adapter's IMEI
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L13)
```csharp title="Declaration"
string Imei { get; }
```
### Csq
Gets the adapter's CSQ
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L17)
```csharp title="Declaration"
int Csq { get; }
```
### AtCmdsOutput
Gets the adapter's AT common output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L21)
```csharp title="Declaration"
string AtCmdsOutput { get; }
```
## Fields
### networkScanTimeoutInSeconds
Timeout duration in seconds for online network scans
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L26)
```csharp title="Declaration"
public const int networkScanTimeoutInSeconds = 600
```
### signalQualityFetchTimeoutInSeconds
Timeout duration in seconds for fetching cell signal quality
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L31)
```csharp title="Declaration"
public const int signalQualityFetchTimeoutInSeconds = 120
```
### gnssFixTimeoutInSeconds
Timeout duration in seconds for GNSS-related AT commands and output retrieval
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L36)
```csharp title="Declaration"
public const int gnssFixTimeoutInSeconds = 600
```
## Methods
### OfflineNetworkScan()
Performs an offline scan for networks detected by the adapter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L42)
```csharp title="Declaration"
CellNetwork[] OfflineNetworkScan()
```

##### Returns

`Meadow.Networking.CellNetwork[]`: An array of CellNetwork objects representing available networks.### GetSignalQuality(int)
Get current signal quality
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L49)
```csharp title="Declaration"
int GetSignalQuality(int timeout = 120)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *timeout* |

### ScanForAvailableNetworks(int)
Initiates an online network scan to detect available networks,
bypassing the need to enter "Scan Mode"
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L57)
```csharp title="Declaration"
CellNetwork[] ScanForAvailableNetworks(int timeout = 600)
```

##### Returns

`Meadow.Networking.CellNetwork[]`: An array of CellNetwork objects representing available networks.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *timeout* | The scan timeout duration in seconds. |

### FetchGnssAtCmdsOutput(IGnssResult[], int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/ICellNetworkAdapter.cs#L63)
```csharp title="Declaration"
string FetchGnssAtCmdsOutput(IGnssResult[] resultTypes, int timeout = 600)
```

##### Returns

`System.String`: A string containing combined output from GNSS-related AT commands, including NMEA sentences.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult[]` | *resultTypes* | An array of supported GNSS result types for data processing. |
| `System.Int32` | *timeout* | The GNSS scan timeout duration in seconds. |

