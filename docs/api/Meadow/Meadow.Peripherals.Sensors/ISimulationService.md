---
title: Interface ISimulationService
sidebar_label: ISimulationService
description: Represents a simulation service that manages simulated sensors.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISimulationService
---
# Interface ISimulationService
Represents a simulation service that manages simulated sensors.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulationService.cs#L6)
```csharp title="Declaration"
public interface ISimulationService
```
## Properties
### Sensors
Gets an array of simulated sensors managed by the simulation service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulationService.cs#L11)
```csharp title="Declaration"
ISimulatedSensor[] Sensors { get; }
```
## Methods
### StopAll()
Stops all ongoing simulations for all sensors.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulationService.cs#L16)
```csharp title="Declaration"
void StopAll()
```
