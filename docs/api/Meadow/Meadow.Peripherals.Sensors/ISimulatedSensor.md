---
title: Interface ISimulatedSensor
sidebar_label: ISimulatedSensor
description: Represents a simulated sensor with customizable simulation behaviors.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISimulatedSensor
---
# Interface ISimulatedSensor
Represents a simulated sensor with customizable simulation behaviors.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulatedSensor.cs#L8)
```csharp title="Declaration"
public interface ISimulatedSensor
```
## Properties
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulatedSensor.cs#L13)
```csharp title="Declaration"
SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulatedSensor.cs#L18)
```csharp title="Declaration"
Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulatedSensor.cs#L24)
```csharp title="Declaration"
void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### StartSimulation(SimulationBehavior)
Starts the simulation with the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Simulation/ISimulatedSensor.cs#L30)
```csharp title="Declaration"
void StartSimulation(SimulationBehavior behavior)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Sensors.SimulationBehavior](../Meadow.Peripherals.Sensors/SimulationBehavior) | *behavior* | The simulation behavior to start. |

