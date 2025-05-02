---
title: Interface IPotentialHydrogenSensor
sidebar_label: IPotentialHydrogenSensor
description: Potential Hydrogen (pH) sensor interface requirements.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IPotentialHydrogenSensor
---
# Interface IPotentialHydrogenSensor
Potential Hydrogen (pH) sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IPotentialHydrogenSensor.cs#L8)
```csharp title="Declaration"
public interface IPotentialHydrogenSensor : ISamplingSensor<PotentialHydrogen>, ISensor<PotentialHydrogen>, ISensor, ISamplingSensor
```
## Properties
### pH
Last value read from the Potential Hydrogen sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IPotentialHydrogenSensor.cs#L13)
```csharp title="Declaration"
PotentialHydrogen? pH { get; }
```
