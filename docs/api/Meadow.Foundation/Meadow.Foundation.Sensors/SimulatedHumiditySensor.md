---
title: Class SimulatedHumiditySensor
sidebar_label: SimulatedHumiditySensor
description: A simulated humidity sensor for testing and development purposes.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedHumiditySensor
---
# Class SimulatedHumiditySensor
A simulated humidity sensor for testing and development purposes.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHumiditySensor.cs#L11)
```csharp title="Declaration"
public class SimulatedHumiditySensor : SimulatedSamplingSensorBase<RelativeHumidity>, ISimulatedSensor, IHumiditySensor, ISamplingSensor<RelativeHumidity>, ISensor<RelativeHumidity>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase) -> [Meadow.Foundation.Sensors.SimulatedSamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Humidity
Gets the current humidity reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHumiditySensor.cs#L18)
```csharp title="Declaration"
public RelativeHumidity? Humidity { get; }
```
### ValueType
Gets the type of value the sensor produces.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHumiditySensor.cs#L23)
```csharp title="Declaration"
public override Type ValueType { get; }
```
## Methods
### SetSensorValue(object)
Sets the sensor value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHumiditySensor.cs#L37)
```csharp title="Declaration"
public override void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set. |

### GenerateSimulatedValue(SimulationBehavior)
Generates a simulated humidity value based on the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedHumiditySensor.cs#L47)
```csharp title="Declaration"
protected override RelativeHumidity GenerateSimulatedValue(SimulationBehavior behavior)
```

##### Returns

`Meadow.Units.RelativeHumidity`: A simulated `Meadow.Units.RelativeHumidity` value.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to use. |


## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.Atmospheric.IHumiditySensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.RelativeHumidity>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
