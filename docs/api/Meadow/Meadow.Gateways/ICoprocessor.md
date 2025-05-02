---
title: Interface ICoprocessor
sidebar_label: ICoprocessor
description: Contract to describe a co-processor
slug: /docs/api/Meadow/Meadow.Gateways/ICoprocessor
---
# Interface ICoprocessor
Contract to describe a co-processor

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L6)
```csharp title="Declaration"
public interface ICoprocessor
```
## Properties
### Status
Current status of the coprocessor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L94)
```csharp title="Declaration"
ICoprocessor.CoprocessorState Status { get; }
```
### ResetReason
Reason for the last reset of the coprocessor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L99)
```csharp title="Declaration"
ICoprocessor.CoprocessorResetReason ResetReason { get; }
```
## Methods
### GetBatteryLevel()
Gets the current battery charge level in Volts (`V`).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L104)
```csharp title="Declaration"
double GetBatteryLevel()
```

##### Returns

`System.Double`
