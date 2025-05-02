---
title: Class SimulatedTemperatureSensor
sidebar_label: SimulatedTemperatureSensor
description: >-
  Represents a simulated temperature sensor that implements both
  ITemperatureSensor and ISimulatedSensor interfaces.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedTemperatureSensor
---
# Class SimulatedTemperatureSensor
Represents a simulated temperature sensor that implements both ITemperatureSensor and ISimulatedSensor interfaces.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L12)
```csharp title="Declaration"
public class SimulatedTemperatureSensor : ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, ISimulatedSensor
```
**Implements:**  
`Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.ISimulatedSensor`

## Properties
### SupportedBehaviors
Gets an array of supported simulation behaviors for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L26)
```csharp title="Declaration"
public SimulationBehavior[] SupportedBehaviors { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L28)
```csharp title="Declaration"
public Type ValueType { get; }
```
### UpdateInterval
A `TimeSpan` that specifies how long to wait between readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L30)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### IsSampling
Gets a value indicating whether the sensor is currently sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L32)
```csharp title="Declaration"
public bool IsSampling { get; }
```
### Temperature
Last value read from the Temperature sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L102)
```csharp title="Declaration"
public Temperature? Temperature { get; set; }
```
## Methods
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L119)
```csharp title="Declaration"
public Task<Temperature> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`
### StartUpdating(TimeSpan?)
Starts updating the sensor value at the specified interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L128)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops updating the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L138)
```csharp title="Declaration"
public void StopUpdating()
```
### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L145)
```csharp title="Declaration"
public void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

### StartSimulation(SimulationBehavior)
Starts the simulation with the specified behavior.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L158)
```csharp title="Declaration"
public void StartSimulation(SimulationBehavior behavior = SimulationBehavior.RandomWalk)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The simulation behavior to start. |

## Events
### Updated
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedTemperatureSensor.cs#L24)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`

## Implements

* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.ISimulatedSensor`
