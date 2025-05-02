---
title: Class SimulatedLightSensor
sidebar_label: SimulatedLightSensor
description: >-
  Represents a simulated light sensor that implements both ILightSensor and
  ISimulatedSensor interfaces.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedLightSensor
---
# Class SimulatedLightSensor
Represents a simulated light sensor that implements both ILightSensor and ISimulatedSensor interfaces.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L11)
```csharp title="Declaration"
public class SimulatedLightSensor : BaseSimulatedSensor<Illuminance>, ISimulatedSensor, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.BaseSimulatedSensor&lt;TUNIT&gt;](../Meadow.Foundation.Sensors/BaseSimulatedSensor`TUNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Illuminance
Last value read from the Light sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L39)
```csharp title="Declaration"
public Illuminance? Illuminance { get; }
```
### ZeroCondition
Gets the zero condition for the snsor unit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L42)
```csharp title="Declaration"
public override Illuminance ZeroCondition { get; }
```
### RandomWalkRange
The upper/lower bound for a random walk
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L45)
```csharp title="Declaration"
protected override double RandomWalkRange { get; }
```
### SawtoothStepAmount
The step amount for a sawtooth simulation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L48)
```csharp title="Declaration"
protected override double SawtoothStepAmount { get; }
```
## Methods
### DecrementCondition(Illuminance)
Gets a condition decremented by a step value (used for interrupt value changes)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L51)
```csharp title="Declaration"
protected override Illuminance DecrementCondition(Illuminance currentCondition)
```

##### Returns

`Meadow.Units.Illuminance`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Illuminance` | *currentCondition* | The initial value to decrement |

### DecrementCondition(Illuminance, double)
Gets a condition decremented by the provided root value amount
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L57)
```csharp title="Declaration"
protected override Illuminance DecrementCondition(Illuminance currentCondition, double conditionDelta)
```

##### Returns

`Meadow.Units.Illuminance`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Illuminance` | *currentCondition* | The initial value to decrement |
| `System.Double` | *conditionDelta* | The delta to decrement by |

### IncrementCondition(Illuminance)
Gets a condition incremented by a step value (used for interrupt value changes)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L63)
```csharp title="Declaration"
protected override Illuminance IncrementCondition(Illuminance currentCondition)
```

##### Returns

`Meadow.Units.Illuminance`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Illuminance` | *currentCondition* | The initial value to increment |

### IncrementCondition(Illuminance, double)
Gets a condition incremented by the provided root value amount
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedLightSensor.cs#L69)
```csharp title="Declaration"
protected override Illuminance IncrementCondition(Illuminance currentCondition, double conditionDelta)
```

##### Returns

`Meadow.Units.Illuminance`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Illuminance` | *currentCondition* | The initial value to increment |
| `System.Double` | *conditionDelta* | The delta to increment by |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
