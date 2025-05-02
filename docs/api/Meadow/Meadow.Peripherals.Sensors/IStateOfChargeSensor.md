---
title: Interface IStateOfChargeSensor
sidebar_label: IStateOfChargeSensor
description: State-of-charge sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IStateOfChargeSensor
---
# Interface IStateOfChargeSensor
State-of-charge sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IStateOfChargeSensor.cs#L8)
```csharp title="Declaration"
public interface IStateOfChargeSensor : ISensor<double>, ISensor
```
## Methods
### ReadStateOfCharge()
Reads the current state of charge of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IStateOfChargeSensor.cs#L13)
```csharp title="Declaration"
ValueTask<double> ReadStateOfCharge()
```

##### Returns

`System.Threading.Tasks.ValueTask<System.Double>`
