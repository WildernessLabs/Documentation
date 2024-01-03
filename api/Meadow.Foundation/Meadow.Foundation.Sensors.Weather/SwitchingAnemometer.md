---
title: Class SwitchingAnemometer
sidebar_label: SwitchingAnemometer
description: "Driver for a \"switching\" anemometer (wind speed gauge) that has an
internal switch that is triggered during every revolution."
---
# Class SwitchingAnemometer
Driver for a "switching" anemometer (wind speed gauge) that has an
internal switch that is triggered during every revolution.

###### **Assembly**: SwitchingAnemometer.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L15)
```csharp title="Declaration"
public class SwitchingAnemometer : PollingSensorBase<Speed>, IObservable<IChangeResult<Speed>>, IAnemometer, ISamplingSensor<Speed>, ISensor<Speed>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Speed>>`, `Meadow.Peripherals.Sensors.Weather.IAnemometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Speed>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Speed>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### WindSpeed
The current wind speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L20)
```csharp title="Declaration"
public Speed? WindSpeed { get; protected set; }
```
### NoWindTimeout
Time to wait if no events come in to register a zero speed wind
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L25)
```csharp title="Declaration"
public TimeSpan NoWindTimeout { get; set; }
```
### OneTimeReadDuration
Time to capture samples for a one time Read if IsSampling is false
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L30)
```csharp title="Declaration"
public TimeSpan OneTimeReadDuration { get; set; }
```
### SampleCount
Number of samples to take for a reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L35)
```csharp title="Declaration"
public int SampleCount { get; set; }
```
### KmhPerSwitchPerSecond
Calibration for how fast the wind speed is when the switch is hit
once per second. Used to calculate the wind speed based on the time
duration between switch events. Default is `2.4kmh`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L52)
```csharp title="Declaration"
public float KmhPerSwitchPerSecond { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L61)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `Updated` events and IObservable
subscribers getting notified. Use the `standbyDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L116)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops the driver from raising wind speed events
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L130)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L146)
```csharp title="Declaration"
protected override Task<Speed> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Speed>`: The latest sensor reading### SwitchIntervalToKmh(TimeSpan)
A wind speed of 2.4km/h causes the switch to close once per second
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L188)
```csharp title="Declaration"
protected float SwitchIntervalToKmh(TimeSpan interval)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *interval* | The interval between signals |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L194)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Weather.SwitchingAnemometer/Driver/SwitchingAnemometer.cs#L204)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Speed>>`
* `Meadow.Peripherals.Sensors.Weather.IAnemometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Speed>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Speed>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
