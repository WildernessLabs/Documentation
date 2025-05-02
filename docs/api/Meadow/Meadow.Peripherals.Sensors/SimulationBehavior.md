---
title: Enum SimulationBehavior
sidebar_label: SimulationBehavior
description: Represents different simulation behaviors for a simulated sensor.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/SimulationBehavior
---
# Enum SimulationBehavior
Represents different simulation behaviors for a simulated sensor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/SimulationBehavior.cs#L6)
```csharp title="Declaration"
public enum SimulationBehavior
```
## Fields
### None
The sensor does not support any internal simulation behavior
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/SimulationBehavior.cs#L11)
```csharp title="Declaration"
None = 0
```
### RandomWalk
Simulates a random walk behavior for the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/SimulationBehavior.cs#L15)
```csharp title="Declaration"
RandomWalk = 1
```
### Sawtooth
Simulates a sawtooth waveform behavior for the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/SimulationBehavior.cs#L19)
```csharp title="Declaration"
Sawtooth = 2
```
### Sine
Simulates a sine waveform behavior for the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/SimulationBehavior.cs#L23)
```csharp title="Declaration"
Sine = 3
```
