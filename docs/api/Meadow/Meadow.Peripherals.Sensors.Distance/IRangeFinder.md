---
title: Interface IRangeFinder
sidebar_label: IRangeFinder
description: Interface for distance sensors classes.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Distance/IRangeFinder
---
# Interface IRangeFinder
Interface for distance sensors classes.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Distance/IRangeFinder.cs#L8)
```csharp title="Declaration"
public interface IRangeFinder : ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor
```
## Properties
### Distance
Last value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Distance/IRangeFinder.cs#L18)
```csharp title="Declaration"
Length? Distance { get; }
```
## Methods
### MeasureDistance()
Sends a trigger signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Distance/IRangeFinder.cs#L13)
```csharp title="Declaration"
void MeasureDistance()
```
