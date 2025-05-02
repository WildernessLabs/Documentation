---
title: Class I2cBusMapping
sidebar_label: I2cBusMapping
description: Represents a mapping of a specific I2C bus on a controller
slug: /docs/api/Meadow/Meadow/I2cBusMapping
---
# Class I2cBusMapping
Represents a mapping of a specific I2C bus on a controller

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cBusMapping.cs#L8)
```csharp title="Declaration"
public sealed class I2cBusMapping
```
## Properties
### Controller
The mapped II2cController
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cBusMapping.cs#L24)
```csharp title="Declaration"
public II2cController Controller { get; }
```
### BusNumber
The mapped bus number
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cBusMapping.cs#L28)
```csharp title="Declaration"
public int BusNumber { get; }
```
