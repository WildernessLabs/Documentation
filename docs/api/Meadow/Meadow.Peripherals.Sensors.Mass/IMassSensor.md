---
title: Interface IMassSensor
sidebar_label: IMassSensor
description: Mass sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Mass/IMassSensor
---
# Interface IMassSensor
Mass sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Mass/IMassSensor.cs#L6)
```csharp title="Declaration"
public interface IMassSensor : ISamplingSensor<Mass>, ISensor<Mass>, ISensor, ISamplingSensor
```
## Properties
### Mass
Last value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Mass/IMassSensor.cs#L11)
```csharp title="Declaration"
Mass? Mass { get; }
```
