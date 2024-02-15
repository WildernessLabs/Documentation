---
uid: Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge
---

| AnalogSolarIntensityGauge | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge.svg?label=Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge" /></a> |

### Code Example

```csharp
AnalogSolarIntensityGauge solarGauge;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    solarGauge = new AnalogSolarIntensityGauge(Device.Pins.A02, updateInterval: TimeSpan.FromSeconds(1));

    //==== classic .NET Event
    solarGauge.SolarIntensityUpdated += (s, result) => Resolver.Log.Info($"SolarIntensityUpdated: {result.New * 100:n2}%");

    //==== Filterable observer
    var observer = AnalogSolarIntensityGauge.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied, new intensity: {result.New * 100:n2}%"),
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (Math.Abs(result.New - old) > 0.05); // only notify if change is > 5%
            }
            return false;
        });
    solarGauge.Subscribe(observer);

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await solarGauge.Read();
    Resolver.Log.Info($"Solar Intensity: {result * 100:n2}%");

    solarGauge.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Samples/AnalogSolarIntensityGauge_Sample)


# Class AnalogSolarIntensityGauge
Driver to measure solar panel input

###### **Assembly**: AnalogSolarIntensityGauge.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L13)
```csharp title="Declaration"
public class AnalogSolarIntensityGauge : SamplingSensorBase<float>, IObservable<IChangeResult<float>>, ISamplingSensor<float>, ISamplingSensor, ISolarIntensityGauge, ISensor<float>, ISensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Single>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.Light.ISolarIntensityGauge`, `Meadow.Peripherals.Sensors.ISensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### MinVoltageReference
Minimum voltage reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L20)
```csharp title="Declaration"
public Voltage MinVoltageReference { get; protected set; }
```
### MaxVoltageReference
Maximum voltage reference
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L25)
```csharp title="Declaration"
public Voltage MaxVoltageReference { get; protected set; }
```
### SolarIntensity
Gets percentage of solar intensity, from `0` to `1.0`, with `1.0` being
the `MaxVoltageReference`, and `0` being the `MinVoltageReference`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L31)
```csharp title="Declaration"
public float? SolarIntensity { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L92)
```csharp title="Declaration"
protected void Initialize()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L113)
```csharp title="Declaration"
protected override Task<float> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Single>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `SolarIntensityUpdated` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L135)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L143)
```csharp title="Declaration"
public override void StopUpdating()
```
### ConvertVoltageToIntensity(Voltage)
Converts a voltage reading to a solar intensity percentage, taking into
account the minimum and maximum expected values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L154)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L160)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.AnalogSolarIntensityGauge/Driver/AnalogSolarIntensityGauge.cs#L170)
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
