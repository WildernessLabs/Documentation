---
title: Class AnalogInputPortBase
sidebar_label: AnalogInputPortBase
description: >-
  Provides a base implementation for much of the common tasks of  implementing
  IAnalogInputPort
slug: /docs/api/Meadow/Meadow.Hardware/AnalogInputPortBase
---
# Class AnalogInputPortBase
Provides a base implementation for much of the common tasks of 
implementing IAnalogInputPort

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L13)
```csharp title="Declaration"
public abstract class AnalogInputPortBase : AnalogPortBase, IObservableAnalogInputPort, IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.AnalogPortBase](../Meadow.Hardware/AnalogPortBase)

**Derived:**  
[Meadow.Hardware.AnalogInputPort](../Meadow.Hardware/AnalogInputPort)

**Implements:**  
[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort), [Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort), [Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Properties
### BufferSyncRoot
Gets the internal synchronization object for the analog buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L18)
```csharp title="Declaration"
protected object BufferSyncRoot { get; }
```
### VoltageSampleBuffer
Gets the sample buffer. Make sure to call StartUpdating() before 
use.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L31)
```csharp title="Declaration"
public Voltage[] VoltageSampleBuffer { get; }
```
### UpdateInterval
A `TimeSpan` that specifies how long to
wait between readings. This value influences how often `*Updated`
events are raised and `IObservable` consumers are notified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L38)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; protected set; }
```
### SampleCount
Number of samples to take per reading. If &gt; `1` then the port will
take multiple readings and These are automatically averaged to
reduce noise, a process known as _oversampling_.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L45)
```csharp title="Declaration"
public int SampleCount { get; protected set; }
```
### SampleInterval
Duration in between samples when oversampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L50)
```csharp title="Declaration"
public TimeSpan SampleInterval { get; protected set; }
```
### ReferenceVoltage
The reference voltage being used for the ADC comparison
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L55)
```csharp title="Declaration"
public Voltage ReferenceVoltage { get; protected set; }
```
### Voltage
Gets the average value of the values in the buffer. Use in conjunction
with StartUpdating() for long-running analog sampling. For occasional
sampling, use Read().
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L65)
```csharp title="Declaration"
public virtual Voltage Voltage { get; }
```
### Observers
A collection of state observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L80)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<Voltage>>> Observers { get; }
```
## Methods
### ConvertReadingToVoltage(int)
Converts a raw 32-bit reading to a scaled value in volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L109)
```csharp title="Declaration"
protected double ConvertReadingToVoltage(int rawReading)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *rawReading* | The raw reading to convert |

### Read()
Convenience method to get the current voltage. For frequent reads, use
StartUpdating() and StopUpdating() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L118)
```csharp title="Declaration"
public abstract Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### StartUpdating(TimeSpan?)
Starts continuously sampling the analog port.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L127)
```csharp title="Declaration"
public abstract void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the analog port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L132)
```csharp title="Declaration"
public abstract void StopUpdating()
```
### RaiseChangedAndNotify(IChangeResult&lt;Voltage&gt;)
Raises the Changed event and notifies the observers with the specified change result.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L138)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(IChangeResult<Voltage> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`) | *changeResult* | The change result to be passed to the event and observers. |

### Subscribe(IObserver&lt;IChangeResult&lt;Voltage&gt;&gt;)
Subscribes an observer to receive notifications of voltage change.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L149)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<IChangeResult<Voltage>> observer)
```

##### Returns

`System.IDisposable`: An IDisposable object that can be used to unsubscribe from the observer.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IObserver<Meadow.IChangeResult<Meadow.Units.Voltage>>` | *observer* | The observer to subscribe. |

## Events
### Updated
Raised when the value of the reading changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogInputPortBase.cs#L23)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Voltage>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Implements

* [Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)
* [Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort)
* [Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
