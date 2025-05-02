---
title: Class BaseSimulatedSensor<TUNIT>
sidebar_label: BaseSimulatedSensor<TUNIT>
description: A base class for simple simulated single-unit sensors
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/BaseSimulatedSensor`TUNIT`
---
# Class BaseSimulatedSensor&lt;TUNIT&gt;
A base class for simple simulated single-unit sensors

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L13)
```csharp title="Declaration"
public abstract class BaseSimulatedSensor<TUNIT> : ISimulatedSensor where TUNIT : struct, IComparable
```
**Derived:**  
[Meadow.Foundation.Sensors.SimulatedLightSensor](../Meadow.Foundation.Sensors/SimulatedLightSensor)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`

## Properties
### ZeroCondition
Gets the zero condition for the snsor unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L28)
```csharp title="Declaration"
public abstract TUNIT ZeroCondition { get; }
```
### RandomWalkRange
The upper/lower bound for a random walk
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L54)
```csharp title="Declaration"
protected abstract double RandomWalkRange { get; }
```
### SawtoothStepAmount
The step amount for a sawtooth simulation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L58)
```csharp title="Declaration"
protected abstract double SawtoothStepAmount { get; }
```
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L63)
```csharp title="Declaration"
public SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L65)
```csharp title="Declaration"
public Type ValueType { get; }
```
### UpdateInterval

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L67)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### IsSampling

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L69)
```csharp title="Declaration"
public bool IsSampling { get; }
```
### CurrentCondition

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L163)
```csharp title="Declaration"
protected TUNIT? CurrentCondition { get; }
```
## Methods
### IncrementCondition(TUNIT)
Gets a condition incremented by a step value (used for interrupt value changes)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L33)
```csharp title="Declaration"
protected abstract TUNIT IncrementCondition(TUNIT currentCondition)
```

##### Returns

`<TUNIT>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TUNIT>` | *currentCondition* | The initial value to increment |

### DecrementCondition(TUNIT)
Gets a condition decremented by a step value (used for interrupt value changes)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L38)
```csharp title="Declaration"
protected abstract TUNIT DecrementCondition(TUNIT currentCondition)
```

##### Returns

`<TUNIT>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TUNIT>` | *currentCondition* | The initial value to decrement |

### IncrementCondition(TUNIT, double)
Gets a condition incremented by the provided root value amount
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L44)
```csharp title="Declaration"
protected abstract TUNIT IncrementCondition(TUNIT currentCondition, double conditionDelta)
```

##### Returns

`<TUNIT>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TUNIT>` | *currentCondition* | The initial value to increment |
| `System.Double` | *conditionDelta* | The delta to increment by |

### DecrementCondition(TUNIT, double)
Gets a condition decremented by the provided root value amount
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L50)
```csharp title="Declaration"
protected abstract TUNIT DecrementCondition(TUNIT currentCondition, double conditionDelta)
```

##### Returns

`<TUNIT>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TUNIT>` | *currentCondition* | The initial value to decrement |
| `System.Double` | *conditionDelta* | The delta to decrement by |

### Read()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L180)
```csharp title="Declaration"
public Task<TUNIT> Read()
```

##### Returns

`System.Threading.Tasks.Task<<TUNIT>>`
### StartUpdating(TimeSpan?)
Starts updating the sensor value at the specified interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L189)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops updating the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L199)
```csharp title="Declaration"
public void StopUpdating()
```
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L206)
```csharp title="Declaration"
public void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### StartSimulation(SimulationBehavior)
Starts the simulation with the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L219)
```csharp title="Declaration"
public void StartSimulation(SimulationBehavior behavior)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to start. |

## Events
### Updated

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/BaseSimulatedSensor.cs#L61)
```csharp title="Declaration"
public event EventHandler<IChangeResult<TUNIT>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<<TUNIT>>>`

## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
