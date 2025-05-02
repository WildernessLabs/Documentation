---
title: Interface IPowerSensor
sidebar_label: IPowerSensor
description: Electrical Power sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IPowerSensor
---
# Interface IPowerSensor
Electrical Power sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IPowerSensor.cs#L8)
```csharp title="Declaration"
public interface IPowerSensor : ISamplingSensor<Power>, ISensor<Power>, ISensor, ISamplingSensor
```
## Properties
### Power
Last value read from the Power sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IPowerSensor.cs#L13)
```csharp title="Declaration"
Power? Power { get; }
```
