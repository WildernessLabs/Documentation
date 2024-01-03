---
title: Class Alspt19315C
sidebar_label: Alspt19315C
description: "Represents an Alspt19315C analog light sensor"
---
# Class Alspt19315C
Represents an Alspt19315C analog light sensor

###### **Assembly**: Alspt19315C.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L11)
```csharp title="Declaration"
public class Alspt19315C : SamplingSensorBase<Voltage>, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Voltage
The current voltage reading of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L21)
```csharp title="Declaration"
public Voltage Voltage { get; protected set; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L70)
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
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L83)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current temperature. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L98)
```csharp title="Declaration"
protected override Task<Voltage> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: A float value that's an average value of all the samples taken.
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
