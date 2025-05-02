---
title: Class SamplingSensorBase<UNIT>
sidebar_label: SamplingSensorBase<UNIT>
description: >-
  Base class for sensors and other updating classes that want to support having
  their updates consumed by observers that can optionally use filters
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/SamplingSensorBase`UNIT`
---
# Class SamplingSensorBase&lt;UNIT&gt;
Base class for sensors and other updating classes that want to support
having their updates consumed by observers that can optionally use filters

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L13)
```csharp title="Declaration"
public abstract class SamplingSensorBase<UNIT> : ObservableBase<UNIT>, IObservable<IChangeResult<UNIT>>, ISamplingSensor<UNIT>, ISensor<UNIT>, ISensor, ISamplingSensor where UNIT : struct
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`)

**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`), [Meadow.Foundation.Sensors.Base.AnalogSamplingBase](../Meadow.Foundation.Sensors.Base/AnalogSamplingBase), [Meadow.Foundation.Sensors.Distance.Hcsr04](../Meadow.Foundation.Sensors.Distance/Hcsr04), [Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel](../Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel), [Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter](../Meadow.Foundation.Sensors.Environmental/AtlasScientificGravityDOMeter), [Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter](../Meadow.Foundation.Sensors.Environmental/DFRobotGravityDOMeter), [Meadow.Foundation.Sensors.Environmental.MiniPID2](../Meadow.Foundation.Sensors.Environmental/MiniPID2), [Meadow.Foundation.Sensors.Hid.AnalogJoystick](../Meadow.Foundation.Sensors.Hid/AnalogJoystick), [Meadow.Foundation.Sensors.Hid.As5013](../Meadow.Foundation.Sensors.Hid/As5013), [Meadow.Foundation.Sensors.Light.Alspt19315C](../Meadow.Foundation.Sensors.Light/Alspt19315C), [Meadow.Foundation.Sensors.Light.AnalogLightSensor](../Meadow.Foundation.Sensors.Light/AnalogLightSensor), [Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge](../Meadow.Foundation.Sensors.Light/AnalogSolarIntensityGauge), [Meadow.Foundation.Sensors.Moisture.Capacitive](../Meadow.Foundation.Sensors.Moisture/Capacitive), [Meadow.Foundation.Sensors.Power.CurrentTransducer](../Meadow.Foundation.Sensors.Power/CurrentTransducer), [Meadow.Foundation.Sensors.Temperature.AnalogTemperature](../Meadow.Foundation.Sensors.Temperature/AnalogTemperature), [Meadow.Foundation.Sensors.Volume.ResistiveTankLevelSender](../Meadow.Foundation.Sensors.Volume/ResistiveTankLevelSender), [Meadow.Foundation.Sensors.Weather.SwitchingRainGauge](../Meadow.Foundation.Sensors.Weather/SwitchingRainGauge), [Meadow.Foundation.Sensors.Weather.WindVane](../Meadow.Foundation.Sensors.Weather/WindVane)
</details>



**Implements:**  
`System.IObservable<Meadow.IChangeResult<<UNIT>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### SamplingTokenSource
Sampling cancellation token source
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L43)
```csharp title="Declaration"
protected CancellationTokenSource? SamplingTokenSource { get; set; }
```
### Conditions
The last read conditions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L48)
```csharp title="Declaration"
public UNIT Conditions { get; protected set; }
```
### IsSampling
Gets a value indicating whether the sensor is currently in a sampling
loop. Call StartSampling() to spin up the sampling process.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L59)
```csharp title="Declaration"
public bool IsSampling { get; protected set; }
```
### UpdateInterval
A `TimeSpan` that specifies how long to
wait between readings. This value influences how often `*Updated`
events are raised and `IObservable` consumers are notified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L66)
```csharp title="Declaration"
public virtual TimeSpan UpdateInterval { get; protected set; }
```
## Fields
### samplingLock
Lock for sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L33)
```csharp title="Declaration"
protected object samplingLock
```
## Methods
### RaiseUpdated(UNIT)
Raised when the sensor has new data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L23)
```csharp title="Declaration"
protected void RaiseUpdated(UNIT newValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<UNIT>` | *newValue* | The new sensor value as a generic |

### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L72)
```csharp title="Declaration"
protected abstract Task<UNIT> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<<UNIT>>`: unitized value### RaiseEventsAndNotify(IChangeResult&lt;UNIT&gt;)
Notify observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L78)
```csharp title="Declaration"
protected virtual void RaiseEventsAndNotify(IChangeResult<UNIT> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<<UNIT>>` | *changeResult* | provides new and old values |

### Read()
Convenience method to get the current sensor readings. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L88)
```csharp title="Declaration"
public virtual Task<UNIT> Read()
```

##### Returns

`System.Threading.Tasks.Task<<UNIT>>`
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L98)
```csharp title="Declaration"
public abstract void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L103)
```csharp title="Declaration"
public abstract void StopUpdating()
```
## Events
### Updated
Event handler for updated values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/SamplingSensorBase.cs#L38)
```csharp title="Declaration"
public event EventHandler<IChangeResult<UNIT>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<<UNIT>>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<<UNIT>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
