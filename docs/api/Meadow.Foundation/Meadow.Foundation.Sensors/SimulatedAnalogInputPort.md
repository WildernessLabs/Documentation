---
title: Class SimulatedAnalogInputPort
sidebar_label: SimulatedAnalogInputPort
description: Represents a simulated analog input port
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedAnalogInputPort
---
# Class SimulatedAnalogInputPort
Represents a simulated analog input port

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L14)
```csharp title="Declaration"
public class SimulatedAnalogInputPort : SimulatedSensorBase, ISimulatedSensor, IObservableAnalogInputPort, IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.SimulatedSensorBase](../Meadow.Foundation.Sensors/SimulatedSensorBase)

**Implements:**  
`Meadow.Peripherals.Sensors.ISimulatedSensor`, `Meadow.Hardware.IObservableAnalogInputPort`, `Meadow.Hardware.IAnalogInputPort`, `Meadow.Hardware.IAnalogPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Properties
### VoltageSampleBuffer
Gets the sample buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L21)
```csharp title="Declaration"
public Voltage[] VoltageSampleBuffer { get; }
```
### ReferenceVoltage
The maximum voltage that the Analog Port can read. Typically 3.3V.
This value is used to convert raw ADC values into voltage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L24)
```csharp title="Declaration"
public Voltage ReferenceVoltage { get; set; }
```
### Voltage
Gets the average value of the values in the buffer. Use in conjunction
with StartSampling() for long-running analog sampling. For occasional
sampling, use Read().
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L27)
```csharp title="Declaration"
public Voltage Voltage { get; }
```
### UpdateInterval
A `System.TimeSpan` that specifies how long to wait between readings.
This value influences how often Updated events are raised and IObservable
consumers are notified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L30)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### SampleCount
Number of samples to take per reading. If &gt; 0, then the port will
take multiple readings and automatically average them to reduce noise,
a process known as oversampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L33)
```csharp title="Declaration"
public int SampleCount { get; }
```
### SampleInterval
Duration between samples when oversampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L36)
```csharp title="Declaration"
public TimeSpan SampleInterval { get; }
```
### Channel
Gets the channel associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L39)
```csharp title="Declaration"
public IAnalogChannelInfo Channel { get; }
```
### Pin
Gets the pin associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L42)
```csharp title="Declaration"
public IPin Pin { get; }
```
### ValueType
Gets the type of the sensor's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L45)
```csharp title="Declaration"
public override Type ValueType { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L91)
```csharp title="Declaration"
public void Dispose()
```
### Read()
Gets the current voltage. For frequent reads, use StartUpdating() and StopUpdating()
in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L96)
```csharp title="Declaration"
public Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: The current voltage.### StartUpdating(TimeSpan?)
Starts continuously sampling the analog port.

This method also starts raising Updated events and notifying IObservable
subscribers. Use the updateInterval parameter to specify how often events
and notifications are raised.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L103)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The interval between readings. |

### StopUpdating()
Stops sampling the analog port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L114)
```csharp title="Declaration"
public void StopUpdating()
```
### Subscribe(IObserver&lt;IChangeResult&lt;Voltage&gt;&gt;)
Notifies the provider that an observer is to receive notifications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L120)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<IChangeResult<Voltage>> observer)
```

##### Returns

`System.IDisposable`: A reference to an interface that allows observers to stop receiving notifications before the provider has finished sending them.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IObserver<Meadow.IChangeResult<Meadow.Units.Voltage>>` | *observer* | The object that is to receive notifications. |

### SetSensorValue(object)
Sets the simulated value for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L130)
```csharp title="Declaration"
public override void SetSensorValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to set for the sensor. |

## Events
### Updated
Raised when the value of the reading changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedAnalogInputPort.cs#L48)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Voltage>>? Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Implements

* `Meadow.Peripherals.Sensors.ISimulatedSensor`
* `Meadow.Hardware.IObservableAnalogInputPort`
* `Meadow.Hardware.IAnalogInputPort`
* `Meadow.Hardware.IAnalogPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
