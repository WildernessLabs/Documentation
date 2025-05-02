---
title: Class SimulatedBarometricPressureSensor
sidebar_label: SimulatedBarometricPressureSensor
description: A simulated barometric pressure sensor for testing and development purposes.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedBarometricPressureSensor
---
# Class SimulatedBarometricPressureSensor
A simulated barometric pressure sensor for testing and development purposes.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulateBarometricPressureSensor.cs#L11)
```csharp title="Declaration"
public class SimulatedBarometricPressureSensor : SimulatedSamplingSensorBase<Pressure>, ISimulatedSensor, IBarometricPressureSensor, ISamplingSensor<Pressure>, ISensor<Pressure>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase) -> [Meadow.Foundation.Sensors.SimulatedSamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Pressure
Gets the current pressure reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulateBarometricPressureSensor.cs#L18)
```csharp title="Declaration"
public Pressure? Pressure { get; }
```
### ValueType
Gets the type of value the sensor produces.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulateBarometricPressureSensor.cs#L23)
```csharp title="Declaration"
public override Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the sensor value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulateBarometricPressureSensor.cs#L39)
```csharp title="Declaration"
public override void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set. |

### GenerateSimulatedValue(SimulationBehavior)
Generates a simulated pressure value based on the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulateBarometricPressureSensor.cs#L49)
```csharp title="Declaration"
protected override Pressure GenerateSimulatedValue(SimulationBehavior behavior)
```

##### Returns

`Meadow.Units.Pressure`: A simulated [Meadow.Foundation.Sensors.SimulatedBarometricPressureSensor.Pressure](../Meadow.Foundation.Sensors/SimulatedBarometricPressureSensor#pressure) value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to use. |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
