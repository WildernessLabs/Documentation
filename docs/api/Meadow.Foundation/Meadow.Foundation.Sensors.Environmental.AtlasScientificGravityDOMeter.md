---
uid: Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter
---

| AtlasScientificGravityDOMeter | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter.svg?label=Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter" /></a> |

### Code Example

```csharp
AtlasScientificGravityDOMeter sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new AtlasScientificGravityDOMeter(Device.Pins.A01);
    sensor.CalibrationInAir = new Voltage(0.04, Voltage.UnitType.Volts);

    // Example that uses an IObservable subscription to only be notified when the saturation changes
    var consumer = AtlasScientificGravityDOMeter.CreateObserver(
        handler: result =>
        {
            string oldValue = (result.Old is { } old) ? $"{old * 100:n1}" : "n/a";
            string newValue = $"{result.New * 100:n1}";
            Resolver.Log.Info($"New: {newValue}%, Old: {oldValue}%");
        },
        filter: null
    );
    sensor.Subscribe(consumer);

    // optional classical .NET events can also be used:
    sensor.SaturationUpdated += (sender, result) =>
    {
        //    string oldValue = (result.Old is { } old) ? $"{old * 100:n0}%" : "n/a";
        //    Resolver.Log.Info($"Updated - New: {result.New * 100:n0}%, Old: {oldValue}");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    await ReadSensor();

    //example calibration setting, ensure the sensor is set up for calibration 
    var calibrationVoltage = await sensor.GetCurrentVoltage();
    sensor.CalibrationInAir = calibrationVoltage;

    Resolver.Log.Info($"Calibration voltage: {calibrationVoltage.Volts}V");

    sensor.StartUpdating(TimeSpan.FromSeconds(2));
}

protected async Task ReadSensor()
{
    var saturation = await sensor.Read();
    Resolver.Log.Info($"Initial saturation: {saturation * 100:N1}%");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Samples/AtlasScientificGravityDOMeter_Sample)


# Class AtlasScientificGravityDOMeter
Atlas Scientific Analog Gravity Dissolved Oxygen Meter

###### **Assembly**: AtlasScientificGravityDOMeter.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L12)
```csharp title="Declaration"
public class AtlasScientificGravityDOMeter : SamplingSensorBase<double>, IObservable<IChangeResult<double>>, IDissolvedOxygenSaturationSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Double>>`, `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenSaturationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### CalibrationInAir
The calibration value for the sensor in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L17)
```csharp title="Declaration"
public Voltage CalibrationInAir { get; set; }
```
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L22)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### Saturation
Last saturation value read from the sensor (0.0-1.0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L27)
```csharp title="Declaration"
public double? Saturation { get; protected set; }
```
## Methods
### GetCurrentVoltage()
Get the current voltage, useful for calibration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L68)
```csharp title="Declaration"
public Task<Voltage> GetCurrentVoltage()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L77)
```csharp title="Declaration"
protected override Task<double> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Double>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L88)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.AtlasScientificGravityDOMeter/Driver/AtlasScientificGravityDOMeter.cs#L101)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<System.Double>>`
* `Meadow.Peripherals.Sensors.Environmental.IDissolvedOxygenSaturationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
