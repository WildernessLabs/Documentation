---
title: Class CellNetwork
sidebar_label: CellNetwork
description: Describes properties of a Cell network
slug: /docs/api/Meadow/Meadow.Networking/CellNetwork
---
# Class CellNetwork
Describes properties of a Cell network

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L6)
```csharp title="Declaration"
public record CellNetwork : IEquatable<CellNetwork>
```
**Implements:**  
`System.IEquatable<Meadow.Networking.CellNetwork>`

## Properties
### Status
Gets or set the network status
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L11)
```csharp title="Declaration"
public CellNetworkStatus Status { get; set; }
```
### Name
Gets or set the network name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L15)
```csharp title="Declaration"
public string Name { get; set; }
```
### Operator
Gets or set the network operator
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L19)
```csharp title="Declaration"
public string Operator { get; set; }
```
### Code
Gets or set the network code
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L23)
```csharp title="Declaration"
public string Code { get; set; }
```
### Mode
Gets or set the network mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Networking/CellNetwork.cs#L27)
```csharp title="Declaration"
public CellNetworkMode Mode { get; set; }
```

## Implements

* `System.IEquatable<Meadow.Networking.CellNetwork>`
