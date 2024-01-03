---
title: Class CurrentTransducer
sidebar_label: CurrentTransducer
description: "Represents a general Current Transducer (CT) sensor"
---
# Class CurrentTransducer
Represents a general Current Transducer (CT) sensor

###### **Assembly**: CurrentTransducer.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L12)
```csharp title="Declaration"
public class CurrentTransducer : SamplingSensorBase<Current>, IObservable<IChangeResult<Current>>, ISamplingSensor<Current>, ISensor<Current>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogPort
The analog input port connected to the transducer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogPort { get; }
```
### MaxVoltage
The maximum voltage the CT outputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L22)
```csharp title="Declaration"
protected Voltage MaxVoltage { get; }
```
### MaxCurrent
The sensed current at the maximum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L27)
```csharp title="Declaration"
protected Current MaxCurrent { get; }
```
### MinVoltage
The minimum voltage the CT outputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L32)
```csharp title="Declaration"
protected Voltage MinVoltage { get; }
```
### MinCurrent
The sensed current at the minimum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L37)
```csharp title="Declaration"
protected Current MinCurrent { get; }
```
### MinVoltageDelta
The minimum output voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L42)
```csharp title="Declaration"
protected Current MinVoltageDelta { get; }
```
### Current
The last sensed Current
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L47)
```csharp title="Declaration"
public Current? Current { get; protected set; }
```
## Methods
### Initialize(IAnalogInputPort, Voltage, Current, Voltage?, Current?)
Initializes the CurrentTransducer instance
Use this method when a derived class must do pre-initialization work
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L78)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L108)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L118)
```csharp title="Declaration"
protected override Task<Current> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Current>`: unitized value### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L127)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.CurrentTransducer/Driver/CurrentTransducer.cs#L142)
```csharp title="Declaration"
public override void StopUpdating()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Current>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
