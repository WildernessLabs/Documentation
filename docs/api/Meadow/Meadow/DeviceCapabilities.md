---
title: Class DeviceCapabilities
sidebar_label: DeviceCapabilities
description: A set of capabilities of the current Device
slug: /docs/api/Meadow/Meadow/DeviceCapabilities
---
# Class DeviceCapabilities
A set of capabilities of the current Device

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DeviceCapabilities.cs#L6)
```csharp title="Declaration"
public class DeviceCapabilities
```
## Properties
### Network
Network capabilities of the current Device
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DeviceCapabilities.cs#L11)
```csharp title="Declaration"
public NetworkCapabilities Network { get; protected set; }
```
### Analog
Analog I/O capabilities of the current Device
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DeviceCapabilities.cs#L15)
```csharp title="Declaration"
public AnalogCapabilities Analog { get; protected set; }
```
### Storage
Storage capabilities of the current Device
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DeviceCapabilities.cs#L19)
```csharp title="Declaration"
public StorageCapabilities Storage { get; protected set; }
```
