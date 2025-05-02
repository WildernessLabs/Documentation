---
title: Interface IObservableAnalogInputPort
sidebar_label: IObservableAnalogInputPort
description: >-
  Contract for ports that implement an observable, sampling analog input
  channel.
slug: /docs/api/Meadow/Meadow.Hardware/IObservableAnalogInputPort
---
# Interface IObservableAnalogInputPort
Contract for ports that implement an observable, sampling analog input channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L9)
```csharp title="Declaration"
public interface IObservableAnalogInputPort : IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
## Properties
### VoltageSampleBuffer
Gets the sample buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L19)
```csharp title="Declaration"
Voltage[] VoltageSampleBuffer { get; }
```
### Voltage
Gets the average value of the values in the buffer. Use in conjunction
with StartSampling() for long-running analog sampling. For occasional
sampling, use Read().
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L26)
```csharp title="Declaration"
Voltage Voltage { get; }
```
### UpdateInterval
A `System.TimeSpan` that specifies how long to wait between readings.
This value influences how often Updated events are raised and IObservable
consumers are notified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L33)
```csharp title="Declaration"
TimeSpan UpdateInterval { get; }
```
### SampleCount
Number of samples to take per reading. If &gt; 0, then the port will
take multiple readings and automatically average them to reduce noise,
a process known as oversampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L40)
```csharp title="Declaration"
int SampleCount { get; }
```
### SampleInterval
Duration between samples when oversampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L45)
```csharp title="Declaration"
TimeSpan SampleInterval { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts continuously sampling the analog port.

This method also starts raising Updated events and notifying IObservable
subscribers. Use the updateInterval parameter to specify how often events
and notifications are raised.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L55)
```csharp title="Declaration"
void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The interval between readings. |

### StopUpdating()
Stops sampling the analog port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L60)
```csharp title="Declaration"
void StopUpdating()
```
### CreateObserver(Action&lt;IChangeResult&lt;Voltage&gt;&gt;, Predicate&lt;IChangeResult&lt;Voltage&gt;&gt;?)
Creates an observer for monitoring changes in the analog input voltage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L68)
```csharp title="Declaration"
public static FilterableChangeObserver<Voltage> CreateObserver(Action<IChangeResult<Voltage>> handler, Predicate<IChangeResult<Voltage>>? filter = null)
```

##### Returns

[Meadow.FilterableChangeObserver&lt;UNIT&gt;](../Meadow/FilterableChangeObserver`UNIT`): The created observer.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<Meadow.IChangeResult<Meadow.Units.Voltage>>` | *handler* | The handler to be called when a change occurs. |
| `System.Predicate<Meadow.IChangeResult<Meadow.Units.Voltage>>` | *filter* | An optional filter predicate for filtering changes. |

## Events
### Updated
Raised when the value of the reading changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IObservableAnalogInputPort.cs#L14)
```csharp title="Declaration"
event EventHandler<IChangeResult<Voltage>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`
