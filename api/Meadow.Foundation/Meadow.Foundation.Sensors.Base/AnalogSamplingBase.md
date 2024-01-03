---
title: Class AnalogSamplingBase
sidebar_label: AnalogSamplingBase
description: "Represents an AnalogSamplingBase sensor"
---
# Class AnalogSamplingBase
Represents an AnalogSamplingBase sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Base/AnalogSamplingBase.cs#L11)
```csharp title="Declaration"
public abstract class AnalogSamplingBase : SamplingSensorBase<Voltage>, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Light.Temt6000](../Meadow.Foundation.Sensors.Light/Temt6000)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Voltage
Current voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Base/AnalogSamplingBase.cs#L21)
```csharp title="Declaration"
public Voltage Voltage { get; protected set; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Base/AnalogSamplingBase.cs#L70)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` that specifies how long to
     wait between readings. This value influences how often `*Updated`
     events are raised and `IObservable` consumers are notified.
     The default is 5 seconds. |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Base/AnalogSamplingBase.cs#L83)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Base/AnalogSamplingBase.cs#L97)
```csharp title="Declaration"
protected override Task<Voltage> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: A float value that represents the current voltage
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
