---
title: Class SerialWombatBase.AnalogInputPort
sidebar_label: SerialWombatBase.AnalogInputPort
description: "Represents a serial wombat analog input port"
---
# Class SerialWombatBase.AnalogInputPort
Represents a serial wombat analog input port

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L15)
```csharp title="Declaration"
public class SerialWombatBase.AnalogInputPort : AnalogPortBase, IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IAnalogChannelInfo>` -> `Meadow.Hardware.AnalogPortBase`

**Implements:**  
`Meadow.Hardware.IAnalogInputPort`, `Meadow.Hardware.IAnalogPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Properties
### Observers
Collection of event Observers for the Updated event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L25)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<Voltage>>> Observers { get; set; }
```
### IsSampling
Is the port sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L36)
```csharp title="Declaration"
public bool IsSampling { get; protected set; }
```
### Voltage
Current port voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L43)
```csharp title="Declaration"
public Voltage Voltage { get; }
```
### ReferenceVoltage
Port reference voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L48)
```csharp title="Declaration"
public Voltage ReferenceVoltage { get; }
```
### SampleCount
The sample count
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L53)
```csharp title="Declaration"
public int SampleCount { get; }
```
### UpdateInterval
The update interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L58)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### VoltageSampleBuffer
The voltage sampling buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L63)
```csharp title="Declaration"
public Voltage[] VoltageSampleBuffer { get; }
```
### SampleInterval
The sampling interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L68)
```csharp title="Declaration"
public TimeSpan SampleInterval { get; }
```
## Methods
### Read()
Take a reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L90)
```csharp title="Declaration"
public Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### StartUpdating(TimeSpan?)
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L103)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stop updating the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L149)
```csharp title="Declaration"
public void StopUpdating()
```
### RaiseChangedAndNotify(IChangeResult&lt;Voltage&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L165)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(IChangeResult<Voltage> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<Meadow.Units.Voltage>` | *changeResult* | The change result with the current sensor data |

### Subscribe(IObserver&lt;IChangeResult&lt;Voltage&gt;&gt;)
Subscribe an observer for update events
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L174)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<IChangeResult<Voltage>> observer)
```

##### Returns

`System.IDisposable`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IObserver<Meadow.IChangeResult<Meadow.Units.Voltage>>` | *observer* |

## Events
### Updated
Raised when the port voltage value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.AnalogInputPort.cs#L20)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Voltage>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Implements

* `Meadow.Hardware.IAnalogInputPort`
* `Meadow.Hardware.IAnalogPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
