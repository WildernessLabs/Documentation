---
title: Class AnalogSolarIntensityGauge
sidebar_label: AnalogSolarIntensityGauge
description: Driver to measure solar panel input
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/AnalogSolarIntensityGauge
---
# Class AnalogSolarIntensityGauge
Driver to measure solar panel input

###### **Assembly**: AnalogSolarIntensityGauge.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L13)
```csharp title="Declaration"
public class AnalogSolarIntensityGauge : SamplingSensorBase<float>, IObservable<IChangeResult<float>>, ISamplingSensor<float>, ISamplingSensor, ISolarIntensityGauge, ISensor<float>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Single>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.Light.ISolarIntensityGauge`, `Meadow.Peripherals.Sensors.ISensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### MinVoltageReference
Minimum voltage reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L20)
```csharp title="Declaration"
public Voltage MinVoltageReference { get; protected set; }
```
### MaxVoltageReference
Maximum voltage reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L25)
```csharp title="Declaration"
public Voltage MaxVoltageReference { get; protected set; }
```
### SolarIntensity
Gets percentage of solar intensity, from `0` to `1.0`, with `1.0` being
the `MaxVoltageReference`, and `0` being the `MinVoltageReference`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L31)
```csharp title="Declaration"
public float? SolarIntensity { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L92)
```csharp title="Declaration"
protected void Initialize()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L113)
```csharp title="Declaration"
protected override Task<float> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Single>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `SolarIntensityUpdated` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L135)
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
Stops sampling the solar intensity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L143)
```csharp title="Declaration"
public override void StopUpdating()
```
### ConvertVoltageToIntensity(Voltage)
Converts a voltage reading to a solar intensity percentage, taking into
account the minimum and maximum expected values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L154)
```csharp title="Declaration"
protected float ConvertVoltageToIntensity(Voltage voltage)
```

##### Returns

`System.Single`: `0.0` - `1.0`
##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L160)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L170)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Single>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.Light.ISolarIntensityGauge`
* `Meadow.Peripherals.Sensors.ISensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
