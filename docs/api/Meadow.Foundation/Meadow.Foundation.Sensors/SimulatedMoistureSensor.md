---
title: Class SimulatedMoistureSensor
sidebar_label: SimulatedMoistureSensor
description: A simulated moisture sensor for testing and development purposes.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedMoistureSensor
---
# Class SimulatedMoistureSensor
A simulated moisture sensor for testing and development purposes.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedMoistureSensor.cs#L10)
```csharp title="Declaration"
public class SimulatedMoistureSensor : SimulatedSamplingSensorBase<double>, ISimulatedSensor, IMoistureSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase) -> [Meadow.Foundation.Sensors.SimulatedSamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Moisture
Gets the current moisture reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedMoistureSensor.cs#L17)
```csharp title="Declaration"
public double? Moisture { get; }
```
### ValueType
Gets the type of value the sensor produces.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedMoistureSensor.cs#L22)
```csharp title="Declaration"
public override Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the sensor value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedMoistureSensor.cs#L36)
```csharp title="Declaration"
public override void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set. |

### GenerateSimulatedValue(SimulationBehavior)
Generates a simulated moisture value based on the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedMoistureSensor.cs#L50)
```csharp title="Declaration"
protected override double GenerateSimulatedValue(SimulationBehavior behavior)
```

##### Returns

`System.Double`: A simulated moisture value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to use. |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
