---
title: Class Mcp3xxx.AnalogInputPort
sidebar_label: Mcp3xxx.AnalogInputPort
description: "Represents an Mcp3xxx analog input port"
---
# Class Mcp3xxx.AnalogInputPort
Represents an Mcp3xxx analog input port

###### **Assembly**: Mcp3xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L17)
```csharp title="Declaration"
public class Mcp3xxx.AnalogInputPort : AnalogPortBase, IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IAnalogChannelInfo>` -> `Meadow.Hardware.AnalogPortBase`

**Implements:**  
`Meadow.Hardware.IAnalogInputPort`, `Meadow.Hardware.IAnalogPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Properties
### Observers
Collection of event observers for the Updated event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L27)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<Voltage>>> Observers { get; set; }
```
### IsSampling
Is the port sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L32)
```csharp title="Declaration"
public bool IsSampling { get; protected set; }
```
### Voltage
Current port voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L37)
```csharp title="Declaration"
public Voltage Voltage { get; }
```
### ReferenceVoltage
Port reference voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L42)
```csharp title="Declaration"
public Voltage ReferenceVoltage { get; }
```
### SampleCount
The sample count
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L47)
```csharp title="Declaration"
public int SampleCount { get; }
```
### UpdateInterval
The update interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L52)
```csharp title="Declaration"
public TimeSpan UpdateInterval { get; }
```
### VoltageSampleBuffer
The voltage sampling buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L57)
```csharp title="Declaration"
public Voltage[] VoltageSampleBuffer { get; }
```
### SampleInterval
The sampling interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L62)
```csharp title="Declaration"
public TimeSpan SampleInterval { get; }
```
### ChannelInputType
The channel input type
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L67)
```csharp title="Declaration"
public Mcp3xxx.InputType ChannelInputType { get; protected set; }
```
## Methods
### Read()
Take a reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L121)
```csharp title="Declaration"
public Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### StartUpdating(TimeSpan?)
Start updating
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L139)
```csharp title="Declaration"
public void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stop updating the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L184)
```csharp title="Declaration"
public void StopUpdating()
```
### RaiseChangedAndNotify(IChangeResult&lt;Voltage&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L200)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(IChangeResult<Voltage> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<Meadow.Units.Voltage>` | *changeResult* | The change result with the current sensor data |

### Subscribe(IObserver&lt;IChangeResult&lt;Voltage&gt;&gt;)
Subscribe an observer for update events
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L209)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.AnalogInputPort.cs#L22)
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
