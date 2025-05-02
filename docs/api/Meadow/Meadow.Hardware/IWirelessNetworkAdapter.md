---
title: Interface IWirelessNetworkAdapter
sidebar_label: IWirelessNetworkAdapter
description: Provides an abstraction for a wireless INetworkAdapter
slug: /docs/api/Meadow/Meadow.Hardware/IWirelessNetworkAdapter
---
# Interface IWirelessNetworkAdapter
Provides an abstraction for a wireless INetworkAdapter

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWirelessNetworkAdapter.cs#L6)
```csharp title="Declaration"
public interface IWirelessNetworkAdapter : INetworkAdapter
```
## Properties
### CurrentAntenna
Gets the current antenna in use
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWirelessNetworkAdapter.cs#L11)
```csharp title="Declaration"
AntennaType CurrentAntenna { get; }
```
## Methods
### SetAntenna(AntennaType, bool)
Sets the currently used antenna
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/IWirelessNetworkAdapter.cs#L18)
```csharp title="Declaration"
void SetAntenna(AntennaType antenna, bool persist = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.AntennaType](../Meadow.Hardware/AntennaType) | *antenna* | The antenna to use |
| `System.Boolean` | *persist* | If this selection should persist across device resets |

