---
uid: Meadow.Foundation.Sensors.Temperature.AnalogTemperature
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature
---

| AnalogTemperature | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Temperature) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

The analog temperature sensor driver can be used with any sensor that has a linear voltage response. It has been tested with the following series of temperature sensors:

* TMP35
* TMP36
* TMP37
* LM35

These sensors exhibit a linear change in the analog voltage for each degree centigrade. This is often presented in the datasheet as follows:

<img src="/API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogSensorLinearResponse.png"  />

This driver should work with any sensor of this type.

### Code Example

```csharp
AnalogTemperature analogTemperature;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // configure our AnalogTemperature sensor
    analogTemperature = new AnalogTemperature(
        analogPin: Device.Pins.A03,
        sensorType: AnalogTemperature.KnownSensorType.LM35
    );

    //==== IObservable Pattern with an optional notification filter.
    var consumer = AnalogTemperature.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C"),

        // only notify if the change is greater than 0.5°C
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Celsius > 0.5; // returns true if > 0.5°C change.
            }
            return false;
        }
        // if you want to always get notified, pass null for the filter:
        //filter: null
    );
    analogTemperature.Subscribe(consumer);

    // classical .NET events can also be used:
    analogTemperature.TemperatureUpdated += (sender, result) =>
    {
        Resolver.Log.Info($"Temp Changed, temp: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
    };

    //==== One-off reading use case/pattern
    ReadTemp().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    analogTemperature.StartUpdating(TimeSpan.FromMilliseconds(1000));

    return Task.CompletedTask;
}

protected async Task ReadTemp()
{
    var temperature = await analogTemperature.Read();
    Resolver.Log.Info($"Initial temp: {temperature.Celsius:N2}C");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Temperature.AnalogTemperature_Sample)

### Wiring Example

To wire a TMP36 to your Meadow board, connect the following:

| TMP36 | Meadow Pin |
|-------|------------|
| GND   | GND        |
| IN    | A1         |
| VCC   | 5V         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogTemperature_Fritzing.png" />

# Class AnalogTemperature
Provide the ability to read the temperature from the following sensors:
- TMP35 / 36 / 37
- LM35 / 45

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L33)
```csharp title="Declaration"
public class AnalogTemperature : SamplingSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L38)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### SensorCalibration

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L86)
```csharp title="Declaration"
public AnalogTemperature.Calibration SensorCalibration { get; set; }
```
### Temperature
Current Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L91)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L96)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Convenience method to get the current temperature. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L208)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: The temperature averages of the given sample count### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L227)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L240)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToTemperature(Voltage)
Converts voltage to Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L255)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L263)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Temperature/AnalogTemperature.cs#L273)
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
