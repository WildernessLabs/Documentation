---
title: Class AnalogTemperature
sidebar_label: AnalogTemperature
description: "Provide the ability to read the temperature from the following sensors:
- TMP35 / 36 / 37
- LM35 / 45"
---
# Class AnalogTemperature
Provide the ability to read the temperature from the following sensors:
- TMP35 / 36 / 37
- LM35 / 45

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L33)
```csharp title="Declaration"
public class AnalogTemperature : SamplingSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L38)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### SensorCalibration

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L86)
```csharp title="Declaration"
public AnalogTemperature.Calibration SensorCalibration { get; set; }
```
### Temperature
Current Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L91)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L96)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Convenience method to get the current temperature. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L208)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: The temperature averages of the given sample count### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L227)
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
Stops sampling the temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L240)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToTemperature(Voltage)
Converts voltage to Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L255)
```csharp title="Declaration"
protected Temperature VoltageToTemperature(Voltage voltage)
```

##### Returns

`Meadow.Units.Temperature`: Temperature
##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L263)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L273)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
