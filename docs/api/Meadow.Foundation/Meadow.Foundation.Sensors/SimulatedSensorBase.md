---
title: Class SimulatedSensorBase
sidebar_label: SimulatedSensorBase
description: Contains the base logic form simple simulated sensors
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedSensorBase
---
# Class SimulatedSensorBase
Contains the base logic form simple simulated sensors

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L9)
```csharp title="Declaration"
public abstract class SimulatedSensorBase : ISimulatedSensor
```
**Derived:**  
[Meadow.Foundation.Sensors.SimulatedAnalogInputPort](../Meadow.Foundation.Sensors/SimulatedAnalogInputPort), [Meadow.Foundation.Sensors.SimulatedSamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`

## Properties
### SimulationBehavior
The currently set behavior for the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L16)
```csharp title="Declaration"
protected SimulationBehavior SimulationBehavior { get; }
```
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L19)
```csharp title="Declaration"
public virtual SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L22)
```csharp title="Declaration"
public abstract Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L25)
```csharp title="Declaration"
public abstract void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### StartSimulation(SimulationBehavior)
Starts the simulation with the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L28)
```csharp title="Declaration"
public virtual void StartSimulation(SimulationBehavior behavior)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to start. |

### GetRandomDouble(double, double)
Generates a random double value between the two provided values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSensorBase.cs#L39)
```csharp title="Declaration"
protected double GetRandomDouble(double minValue, double maxValue)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *minValue* | Inclusive lower bound value |
| `System.Double` | *maxValue* | Exclusive upper bound value |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
