---
title: Interface IAnalogInputArray
sidebar_label: IAnalogInputArray
description: Contract for an array of analog input values
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogInputArray
---
# Interface IAnalogInputArray
Contract for an array of analog input values

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputArray.cs#L6)
```csharp title="Declaration"
public interface IAnalogInputArray
```
## Properties
### CurrentValues
Gets the last set of retrieved analog values
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputArray.cs#L11)
```csharp title="Declaration"
double[] CurrentValues { get; }
```
## Methods
### Refresh()
Refreshes the CurrentValues property
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputArray.cs#L15)
```csharp title="Declaration"
void Refresh()
```
