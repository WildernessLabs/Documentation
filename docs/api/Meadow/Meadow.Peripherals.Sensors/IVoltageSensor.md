---
title: Interface IVoltageSensor
sidebar_label: IVoltageSensor
description: Voltage sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IVoltageSensor
---
# Interface IVoltageSensor
Voltage sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IVoltageSensor.cs#L10)
```csharp title="Declaration"
public interface IVoltageSensor : ISensor<Voltage>, ISensor
```
## Properties
### Voltage
Last value read from the Voltage sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IVoltageSensor.cs#L15)
```csharp title="Declaration"
[Obsolete("Use ReadVoltage", false)]
Voltage? Voltage { get; }
```
## Methods
### ReadVoltage()
Reads the current voltage of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IVoltageSensor.cs#L21)
```csharp title="Declaration"
ValueTask<Voltage> ReadVoltage()
```

##### Returns

`System.Threading.Tasks.ValueTask<Meadow.Units.Voltage>`
