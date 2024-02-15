---
uid: Meadow.Foundation.Sensors.Light.AnalogLightSensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogLightSensor
---

| AnalogLightSensor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Light) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
AnalogLightSensor analogLightSensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // configure our AnalogLightSensor sensor
    analogLightSensor = new AnalogLightSensor(
        analogPin: Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter.
    var consumer = AnalogLightSensor.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Lux:N2} lux, old: {result.Old.Value.Lux:N2} lux"),

        // only notify if the change is greater than 0.5
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Lux > 0.5; // returns true if > 0.5  change.
            }
            return false;
        }
        // if you want to always get notified, pass null for the filter:
        //filter: null
    );
    analogLightSensor.Subscribe(consumer);

    // classical .NET events can also be used:
    analogLightSensor.IlluminanceUpdated += (sender, result) =>
        Resolver.Log.Info($"Lux changed: {result.New.Lux:N2} lux, old: {result.Old?.Lux:N2} lux");

    //==== One-off reading use case/pattern
    ReadIlluminance().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    analogLightSensor.StartUpdating(TimeSpan.FromMilliseconds(1000));

    return Task.CompletedTask;
}

protected async Task ReadIlluminance()
{
    var illuminance = await analogLightSensor.Read();
    Resolver.Log.Info($"Initial lux: {illuminance.Lux:N2} lux");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Light.AnalogLightSensor_Sample)


# Class AnalogLightSensor
Represents an analog light sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L12)
```csharp title="Declaration"
public class AnalogLightSensor : SamplingSensorBase<Illuminance>, IObservable<IChangeResult<Illuminance>>, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort
Analog port connected to sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L18)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### LuminanceCalibration
Illuminance sensor calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L23)
```csharp title="Declaration"
public AnalogLightSensor.Calibration LuminanceCalibration { get; protected set; }
```
### Illuminance
Current illuminance value read by sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L28)
```csharp title="Declaration"
public Illuminance? Illuminance { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L34)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Convenience method to get the current luminance. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L93)
```csharp title="Declaration"
protected override Task<Illuminance> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Illuminance>`
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L110)
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
Stops sampling the temperature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L118)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToLuminance(Voltage)
Converts a voltage value to a level in centimeters, based on the current
calibration values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L129)
```csharp title="Declaration"
protected Illuminance VoltageToLuminance(Voltage voltage)
```

##### Returns

`Meadow.Units.Illuminance`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L139)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Light/AnalogLightSensor.cs#L149)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
