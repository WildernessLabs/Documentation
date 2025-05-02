---
title: Class AnalogWaterLevel
sidebar_label: AnalogWaterLevel
description: Represents an analog water level sensor
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel
---
# Class AnalogWaterLevel
Represents an analog water level sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L11)
```csharp title="Declaration"
public class AnalogWaterLevel : SamplingSensorBase<float>, IObservable<IChangeResult<float>>, ISamplingSensor<float>, ISensor<float>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Single>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogInputPort
AnalogInputPort connected to temperature sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L17)
```csharp title="Declaration"
protected IObservableAnalogInputPort AnalogInputPort { get; }
```
### LevelCalibration
Calibration of water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L22)
```csharp title="Declaration"
public AnalogWaterLevel.Calibration LevelCalibration { get; protected set; }
```
### WaterLevel
Water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L27)
```csharp title="Declaration"
public float WaterLevel { get; protected set; }
```
## Methods
### ReadSensor()
Convenience method to get the current water level. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L87)
```csharp title="Declaration"
protected override Task<float> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Single>`
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L107)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` that specifies how long to
     wait between readings. This value influences how often `*Updated`
     events are raised and `IObservable` consumers are notified. |

### StopUpdating()
Stops sampling the water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L115)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToWaterLevel(Voltage)
Converts a voltage value to a level in centimeters, based on the current
calibration values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L126)
```csharp title="Declaration"
protected float VoltageToWaterLevel(Voltage voltage)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Single>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
