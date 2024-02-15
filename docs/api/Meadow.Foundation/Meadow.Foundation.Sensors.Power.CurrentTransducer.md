---
uid: Meadow.Foundation.Sensors.Power.CurrentTransducer
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.CurrentTransducer
---

| CurrentTransducer | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.CurrentTransducer/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.CurrentTransducer.svg?label=Meadow.Foundation.Sensors.Power.CurrentTransducer" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.CurrentTransducer" /></a> |

### Code Example

```csharp
private CurrentTransducer transducer = default!;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var bus = Device.CreateI2cBus();
    transducer = new CurrentTransducer(
        Device.Pins.A00.CreateAnalogInputPort(1),
        new Voltage(3.3, Voltage.UnitType.Volts), // a reading of 3.3V
        new Current(10, Current.UnitType.Amps)    // equals 10 amps of current
        );

    Resolver.Log.Info($"-- Current Transducer Sample App ---");
    transducer.Updated += (s, v) =>
    {
        Resolver.Log.Info($"Current is now {v.New.Amps}A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    transducer.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Samples/CurrentTransducer_Sample)


# Class CurrentTransducer
Represents a general Current Transducer (CT) sensor

###### **Assembly**: CurrentTransducer.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L12)
```csharp title="Declaration"
public class CurrentTransducer : SamplingSensorBase<Current>, IObservable<IChangeResult<Current>>, ISamplingSensor<Current>, ISensor<Current>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogPort
The analog input port connected to the transducer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogPort { get; }
```
### MaxVoltage
The maximum voltage the CT outputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L22)
```csharp title="Declaration"
protected Voltage MaxVoltage { get; }
```
### MaxCurrent
The sensed current at the maximum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L27)
```csharp title="Declaration"
protected Current MaxCurrent { get; }
```
### MinVoltage
The minimum voltage the CT outputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L32)
```csharp title="Declaration"
protected Voltage MinVoltage { get; }
```
### MinCurrent
The sensed current at the minimum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L37)
```csharp title="Declaration"
protected Current MinCurrent { get; }
```
### MinVoltageDelta
The minimum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L42)
```csharp title="Declaration"
protected Current MinVoltageDelta { get; }
```
### Current
The last sensed Current
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L47)
```csharp title="Declaration"
public Current? Current { get; protected set; }
```
## Methods
### Initialize(IAnalogInputPort, Voltage, Current, Voltage?, Current?)
Initializes the CurrentTransducer instance
Use this method when a derived class must do pre-initialization work
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L78)
```csharp title="Declaration"
protected virtual void Initialize(IAnalogInputPort analogPort, Voltage maxVoltage, Current maxCurrent, Voltage? minVoltage = null, Current? minCurrent = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IAnalogInputPort` | *analogPort* | The analog input port connected to the transducer |
| `Meadow.Units.Voltage` | *maxVoltage* | The maximum voltage the CT outputs |
| `Meadow.Units.Current` | *maxCurrent* | The sensed current at the maximum output voltage |
| `System.Nullable<Meadow.Units.Voltage>` | *minVoltage* | The minimum voltage the CT outputs |
| `System.Nullable<Meadow.Units.Current>` | *minCurrent* | The sensed current at the minimum output voltage |

### ConvertVoltageToCurrent(Voltage)
Converts an output voltage from the CT to a sensed current using linear interpolation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L108)
```csharp title="Declaration"
protected virtual Current ConvertVoltageToCurrent(Voltage voltage)
```

##### Returns

`Meadow.Units.Current`: The current being sensed by the CT
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* | The ADC voltage read by the AnalogPort |

### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L118)
```csharp title="Declaration"
protected override Task<Current> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Current>`: unitized value### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L127)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
            wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L142)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
