---
title: Class SimulatedSamplingSensorBase<UNIT>
sidebar_label: SimulatedSamplingSensorBase<UNIT>
description: Represents the base logic for a simulated sample sensor
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedSamplingSensorBase`UNIT`
---
# Class SimulatedSamplingSensorBase&lt;UNIT&gt;
Represents the base logic for a simulated sample sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L11)
```csharp title="Declaration"
public abstract class SimulatedSamplingSensorBase<UNIT> : SimulatedSensorBase, ISimulatedSensor, ISamplingSensor<UNIT>, ISensor<UNIT>, ISensor, ISamplingSensor where UNIT : struct
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase)

**Derived:**  
[Meadow.Foundation.Sensors.SimulatedAccelerometer](../Meadow.Foundation.Sensors/SimulatedAccelerometer), [Meadow.Foundation.Sensors.SimulatedBarometricPressureSensor](../Meadow.Foundation.Sensors/SimulatedBarometricPressureSensor), [Meadow.Foundation.Sensors.SimulatedCurrentSensor](../Meadow.Foundation.Sensors/SimulatedCurrentSensor), [Meadow.Foundation.Sensors.SimulatedHumiditySensor](../Meadow.Foundation.Sensors/SimulatedHumiditySensor), [Meadow.Foundation.Sensors.SimulatedMoistureSensor](../Meadow.Foundation.Sensors/SimulatedMoistureSensor), [Meadow.Foundation.Sensors.SimulatedRangeFinder](../Meadow.Foundation.Sensors/SimulatedRangeFinder)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### UpdateInterval
A `TimeSpan` that specifies how long to wait between readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L20)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### IsSampling
Gets a value indicating whether the sensor is currently sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L22)
```csharp title="Declaration"
public bool IsSampling { get; }
```
### PreviousReading

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L24)
```csharp title="Declaration"
protected UNIT? PreviousReading { get; }
```
## Methods
### GenerateSimulatedValue(SimulationBehavior)
Generates a value based on the provided behavior
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L30)
```csharp title="Declaration"
protected abstract UNIT GenerateSimulatedValue(SimulationBehavior behavior)
```

##### Returns

`<UNIT>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Sensors.SimulationBehavior` | *behavior* | The behavior to use when generating a value |

### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L52)
```csharp title="Declaration"
public Task<UNIT> Read()
```

##### Returns

`System.Threading.Tasks.Task<<UNIT>>`
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L58)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L71)
```csharp title="Declaration"
public void StopUpdating()
```
## Events
### Updated
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Sensors/SimulatedSamplingSensorBase.cs#L15)
```csharp title="Declaration"
public event EventHandler<IChangeResult<UNIT>>? Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<<UNIT>>>`

## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
