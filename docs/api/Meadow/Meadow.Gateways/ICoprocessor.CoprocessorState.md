---
title: Enum ICoprocessor.CoprocessorState
sidebar_label: ICoprocessor.CoprocessorState
description: State of the ESP32 coprocessor.
slug: /docs/api/Meadow/Meadow.Gateways/ICoprocessor.CoprocessorState
---
# Enum ICoprocessor.CoprocessorState
State of the ESP32 coprocessor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L11)
```csharp title="Declaration"
public enum ICoprocessor.CoprocessorState
```
## Fields
### NotReady
Coprocessor is not ready or has not been detected.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L16)
```csharp title="Declaration"
NotReady = 0
```
### Ready
Coprocessor is available.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L21)
```csharp title="Declaration"
Ready = 1
```
### Sleeping
Coprocessor is available but is currently sleeping.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L26)
```csharp title="Declaration"
Sleeping = 2
```
