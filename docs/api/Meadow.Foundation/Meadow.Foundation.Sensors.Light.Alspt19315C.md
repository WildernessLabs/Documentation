---
uid: Meadow.Foundation.Sensors.Light.Alspt19315C
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C
---

| Alspt19315C | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Alspt19315C/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Alspt19315C.svg?label=Meadow.Foundation.Sensors.Light.Alspt19315C" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Alspt19315C" /></a> |

The **ALS-PT19-315C** is a low cost analog ambient light sensor, consisting of phototransistor in a miniature SMD.

### Code Example

```csharp
Alspt19315C sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // configure our sensor
    sensor = new Alspt19315C(Device.Pins.A03);

    //==== IObservable Pattern with an optional notification filter
    var consumer = Alspt19315C.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer filter satisfied: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V"),

        // only notify if the change is greater than 0.5V
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Volts > 0.5; // returns true if > 0.5V change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    //==== Classic Events Pattern
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Voltage Changed, new: {result.New.Volts:N2}V, old: {result.Old?.Volts:N2}V");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info($"Initial temp: {result.Volts:N2}V");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(1000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Samples/Alspt19315C_Sample)

### Wiring Example

The ALS-PT19C is a simple analog device requiring only three connections:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Alspt19315C/Alspt19315C_Fritzing.svg" />

# Class Alspt19315C
Represents an Alspt19315C analog light sensor

###### **Assembly**: Alspt19315C.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L11)
```csharp title="Declaration"
public class Alspt19315C : SamplingSensorBase<Voltage>, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### Voltage
The current voltage reading of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L21)
```csharp title="Declaration"
public Voltage Voltage { get; protected set; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L70)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L83)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Convenience method to get the current temperature. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Driver/Alspt19315C.cs#L98)
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
