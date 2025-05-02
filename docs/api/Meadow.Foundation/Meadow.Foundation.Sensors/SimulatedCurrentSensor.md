---
title: Class SimulatedCurrentSensor
sidebar_label: SimulatedCurrentSensor
description: Represents a simulated current sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedCurrentSensor
---
# Class SimulatedCurrentSensor
Represents a simulated current sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L10)
```csharp title="Declaration"
public class SimulatedCurrentSensor : SimulatedSamplingSensorBase<Current>, ISimulatedSensor, ICurrentSensor, ISamplingSensor<Current>, ISensor<Current>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase) -> [Meadow.Foundation.Sensors.SimulatedSamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.ICurrentSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Current
Last value read from the Current sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L16)
```csharp title="Declaration"
public Current? Current { get; }
```
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L19)
```csharp title="Declaration"
public override SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L22)
```csharp title="Declaration"
public override Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L36)
```csharp title="Declaration"
public override void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### GenerateSimulatedValue(SimulationBehavior)
Generates a value based on the provided behavior
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedCurrentSensor.cs#L42)
```csharp title="Declaration"
protected override Current GenerateSimulatedValue(SimulationBehavior behavior)
```

##### Returns

`Meadow.Units.Current`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The behavior to use when generating a value |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.ICurrentSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
