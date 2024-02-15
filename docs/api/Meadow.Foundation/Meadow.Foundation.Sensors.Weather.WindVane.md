---
uid: Meadow.Foundation.Sensors.Weather.WindVane
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.WindVane
---

| WindVane | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Weather.WindVane/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Weather.WindVane.svg?label=Meadow.Foundation.Sensors.Weather.WindVane" alt="NuGet Gallery for Meadow.Foundation.Sensors.Weather.WindVane" /></a> |

### Code Example

```csharp
WindVane windVane;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // initialize the wind vane driver
    windVane = new WindVane(Device.Pins.A00);

    //==== Classic event example:
    windVane.WindAzimuthUpdated += (sender, result) => Resolver.Log.Info($"Updated event {result.New.DecimalDegrees}");

    //==== IObservable Pattern
    var observer = WindVane.CreateObserver(
        handler: result => Resolver.Log.Info($"Wind Direction: {result.New.Compass16PointCardinalName}"),
        filter: null
    );
    windVane.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    // get initial reading, just to test the API
    Azimuth azi = await windVane.Read();
    Resolver.Log.Info($"Initial azimuth: {azi.Compass16PointCardinalName}");

    // start updating
    windVane.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Samples/WindVane_Sample)


# Class WindVane
Driver for a wind vane that outputs variable voltage, based on the
azimuth of the wind. Matches the input voltage to the `AzimuthVoltages`
dictionary lookup and returns the nearest azimuth to the voltage specified.

By default it will use look ups that match voltage outputs from the windvane
in the Sparkfun/Shenzen Fine Offset Electronics with a voltage divider of
4.7kΩ / 1kΩ, as can be found in the SparkFun weather shield, or Wilderness
Labs Clima Pro board.

###### **Assembly**: WindVane.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L21)
```csharp title="Declaration"
public class WindVane : SamplingSensorBase<Azimuth>, IObservable<IChangeResult<Azimuth>>, IWindVane, ISamplingSensor<Azimuth>, ISensor<Azimuth>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Azimuth>>`, `Meadow.Peripherals.Sensors.Weather.IWindVane`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Azimuth>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Azimuth>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### WindAzimuth
The last recorded azimuth of the wind
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L26)
```csharp title="Declaration"
public Azimuth? WindAzimuth { get; protected set; }
```
### SampleCount
Number of samples to take per reading. Default is 2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L31)
```csharp title="Declaration"
public int SampleCount { get; set; }
```
### SampleInterval
Duration of time between samples (default is 40ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L36)
```csharp title="Declaration"
public TimeSpan SampleInterval { get; set; }
```
### AzimuthVoltages
Voltage -&gt; wind azimuth lookup dictionary
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L41)
```csharp title="Declaration"
public ReadOnlyDictionary<Voltage, Azimuth>? AzimuthVoltages { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L48)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Updated` events and IObservable
subscribers getting notified. Use the `standbyDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L110)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L124)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current wind azimuth. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L140)
```csharp title="Declaration"
protected override Task<Azimuth> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Azimuth>`: A float value that's an average value of all the samples taken### HandleAnalogUpdate(IChangeResult&lt;Voltage&gt;)
Takes the analog reading and converts to the wind azimuth, then
raises the event/updates subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L150)
```csharp title="Declaration"
protected void HandleAnalogUpdate(IChangeResult<Voltage> result)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.IChangeResult<Meadow.Units.Voltage>` | *result* |

### LookupWindDirection(Voltage)
Finds the closest wind azimuth that matches the passed in voltage,
based on the `AzimuthVoltages`
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L169)
```csharp title="Declaration"
protected Azimuth LookupWindDirection(Voltage voltage)
```

##### Returns

`Meadow.Units.Azimuth`: The Azimuth value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* | The voltage |

### GetDefaultAzimuthVoltages()
Loads a default set of voltage -&gt; azimuth lookup values based on
a 4.7kΩ / 1kΩ voltage divider
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L191)
```csharp title="Declaration"
protected ReadOnlyDictionary<Voltage, Azimuth> GetDefaultAzimuthVoltages()
```

##### Returns

`System.Collections.ObjectModel.ReadOnlyDictionary<Meadow.Units.Voltage,Meadow.Units.Azimuth>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L217)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Weather.WindVane/Driver/WindVane.cs#L227)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Azimuth>>`
* `Meadow.Peripherals.Sensors.Weather.IWindVane`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Azimuth>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Azimuth>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
