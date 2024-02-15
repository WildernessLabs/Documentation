---
uid: Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel
---

| AnalogWaterLevel | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Environmental) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

The analog water level sensor will output a voltage based on the amount of conductivity detected across the sensor area. Most sensors will jump to a signal of about ~1V as soon as the sensor area touches water and the voltage increases linearly as the depth increases. 

Be careful to limit the water contact to only the the sensor area. Do not submerge the water level sensor.

### Code Example

```csharp
AnalogWaterLevel analogWaterLevel;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // configure our AnalogWaterLevel sensor
    analogWaterLevel = new AnalogWaterLevel(
        analogPin: Device.Pins.A00
    );

    // Example that uses an IObservable subscription to only be notified
    // when the level changes by at least 0.1cm
    analogWaterLevel.Subscribe(AnalogWaterLevel.CreateObserver(
        h => Resolver.Log.Info($"Water level changed by 10 mm; new: {h.New}, old: {h.Old}"),
        null //e => { return Math.Abs(e.Delta) > 0.1f; }
    ));

    // classical .NET events can also be used:
    analogWaterLevel.Updated += (object sender, IChangeResult<float> e) =>
    {
        Resolver.Log.Info($"Level Changed, level: {e.New}cm");
    };

    // Get an initial reading.
    ReadLevel().Wait();

    // Spin up the sampling thread so that events are raised and IObservable notifications are sent.
    analogWaterLevel.StartUpdating(TimeSpan.FromSeconds(5));

    return Task.CompletedTask;
}

protected async Task ReadLevel()
{
    var conditions = await analogWaterLevel.Read();
    Resolver.Log.Info($"Initial level: {conditions}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Environmental.AnalogWaterLevel_Sample)

### Wiring Example

To wire a AnalogWaterLevel to your Meadow board, connect the following:

| AnalogWaterLevel | Meadow Pin |
|-------|------------|
| GND   | GND        |
| IN    | A00        |
| VCC   | 3.3V       |

# Class AnalogWaterLevel
Represents an analog water level sensor

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L11)
```csharp title="Declaration"
public class AnalogWaterLevel : SamplingSensorBase<float>, IObservable<IChangeResult<float>>, ISamplingSensor<float>, ISensor<float>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Single>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor<System.Single>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogInputPort
AnalogInputPort connected to temperature sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### LevelCalibration
Calibration of water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L22)
```csharp title="Declaration"
public AnalogWaterLevel.Calibration LevelCalibration { get; protected set; }
```
### WaterLevel
Water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L27)
```csharp title="Declaration"
public float WaterLevel { get; protected set; }
```
## Methods
### ReadSensor()
Convenience method to get the current water level. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L87)
```csharp title="Declaration"
protected override Task<float> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Single>`
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L107)
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
Stops sampling the water level
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L115)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToWaterLevel(Voltage)
Converts a voltage value to a level in centimeters, based on the current
calibration values.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Environmental/AnalogWaterLevel.cs#L126)
```csharp title="Declaration"
protected float VoltageToWaterLevel(Voltage voltage)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Single>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor<System.Single>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
