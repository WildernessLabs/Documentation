---
title: Interface IGasResistanceSensor
sidebar_label: IGasResistanceSensor
description: Gas ressistance interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IGasResistanceSensor
---
# Interface IGasResistanceSensor
Gas ressistance interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IGasResistanceSensor.cs#L8)
```csharp title="Declaration"
public interface IGasResistanceSensor : ISamplingSensor<Resistance>, ISensor<Resistance>, ISensor, ISamplingSensor
```
## Properties
### GasResistance
Last value read from the gas resistance sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IGasResistanceSensor.cs#L13)
```csharp title="Declaration"
Resistance? GasResistance { get; }
```
