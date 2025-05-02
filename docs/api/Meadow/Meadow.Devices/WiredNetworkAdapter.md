---
title: Class WiredNetworkAdapter
sidebar_label: WiredNetworkAdapter
description: Represents a wired Ethernet network adapter
slug: /docs/api/Meadow/Meadow.Devices/WiredNetworkAdapter
---
# Class WiredNetworkAdapter
Represents a wired Ethernet network adapter

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiredNetworkAdapter.cs#L10)
```csharp title="Declaration"
public class WiredNetworkAdapter : NetworkAdapterBase, IWiredNetworkAdapter, INetworkAdapter
```
**Inheritance:** `System.Object` -> [Meadow.NetworkAdapterBase](../Meadow/NetworkAdapterBase)

**Implements:**  
[Meadow.Hardware.IWiredNetworkAdapter](../Meadow.Hardware/IWiredNetworkAdapter), [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)

## Properties
### IsConnected
Returns `true` if the adapter is connected, otherwise `false`
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/WiredNetworkAdapter.cs#L37)
```csharp title="Declaration"
public override bool IsConnected { get; }
```

## Implements

* [Meadow.Hardware.IWiredNetworkAdapter](../Meadow.Hardware/IWiredNetworkAdapter)
* [Meadow.Hardware.INetworkAdapter](../Meadow.Hardware/INetworkAdapter)
