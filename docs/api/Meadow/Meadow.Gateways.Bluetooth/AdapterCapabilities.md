---
title: Class AdapterCapabilities
sidebar_label: AdapterCapabilities
description: Describes the capabilities of the Bluetooth adapter.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/AdapterCapabilities
---
# Class AdapterCapabilities
Describes the capabilities of the Bluetooth adapter.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L6)
```csharp title="Declaration"
public class AdapterCapabilities
```
## Properties
### HasClassicSupport
Gets a value indicating whether the adapter has support for classic Bluetooth.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L11)
```csharp title="Declaration"
public bool HasClassicSupport { get; protected set; }
```
### HasSecureClassicSupport
Gets a value indicating whether the adapter has secure support for classic Bluetooth.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L16)
```csharp title="Declaration"
public bool HasSecureClassicSupport { get; protected set; }
```
### HasLowEnergySupport
Gets a value indicating whether the adapter has support for Bluetooth Low Energy (BLE).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L21)
```csharp title="Declaration"
public bool HasLowEnergySupport { get; protected set; }
```
### HasLowEnergySecureSupport
Gets a value indicating whether the adapter has secure support for Bluetooth Low Energy (BLE).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L26)
```csharp title="Declaration"
public bool HasLowEnergySecureSupport { get; protected set; }
```
### HasLowEnergyCentralRoleSupport
Gets a value indicating whether the adapter has support for the central role in BLE.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L31)
```csharp title="Declaration"
public bool HasLowEnergyCentralRoleSupport { get; protected set; }
```
### HasLowEnergyPeripheralRoleSupport
Gets a value indicating whether the adapter has support for the peripheral role in BLE.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L36)
```csharp title="Declaration"
public bool HasLowEnergyPeripheralRoleSupport { get; protected set; }
```
### HasAdvertisementOffloadSupport
Gets or sets a value indicating whether the adapter has support to offload advertising to secondary channels.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Gateways/Bluetooth/AdapterCapabilities.cs#L41)
```csharp title="Declaration"
public bool HasAdvertisementOffloadSupport { get; set; }
```
