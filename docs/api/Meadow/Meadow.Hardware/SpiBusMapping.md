---
title: Class SpiBusMapping
sidebar_label: SpiBusMapping
description: Represents a mapping of a specific SPI bus on a controller
slug: /docs/api/Meadow/Meadow.Hardware/SpiBusMapping
---
# Class SpiBusMapping
Represents a mapping of a specific SPI bus on a controller

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SpiBusMapping.cs#L6)
```csharp title="Declaration"
public sealed class SpiBusMapping
```
## Properties
### Controller
The mapping ISpiController
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SpiBusMapping.cs#L26)
```csharp title="Declaration"
public ISpiController Controller { get; }
```
### Clock
The mapping Clock pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SpiBusMapping.cs#L30)
```csharp title="Declaration"
public IPin Clock { get; }
```
### Copi
The mapping COPI pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SpiBusMapping.cs#L34)
```csharp title="Declaration"
public IPin Copi { get; }
```
### Cipo
The mapping CIPO pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SpiBusMapping.cs#L38)
```csharp title="Declaration"
public IPin Cipo { get; }
```
