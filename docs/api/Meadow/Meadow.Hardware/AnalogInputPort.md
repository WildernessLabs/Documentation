---
title: Class AnalogInputPort
sidebar_label: AnalogInputPort
description: Represents a port that is capable of reading analog input.
slug: /docs/api/Meadow/Meadow.Hardware/AnalogInputPort
---
# Class AnalogInputPort
Represents a port that is capable of reading analog input.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L40)
```csharp title="Declaration"
public class AnalogInputPort : AnalogInputPortBase, IObservableAnalogInputPort, IAnalogInputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable, IObservable<IChangeResult<Voltage>>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.AnalogPortBase](../Meadow.Hardware/AnalogPortBase) -> [Meadow.Hardware.AnalogInputPortBase](../Meadow.Hardware/AnalogInputPortBase)

**Implements:**  
[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort), [Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort), [Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Properties
### IOController
Gets the IOController device
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L57)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; }
```
### IsSampling
Gets a value indicating whether the analog input port is currently
sampling the ADC. Call StartUpdating() to spin up the sampling process.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L68)
```csharp title="Declaration"
public bool IsSampling { get; protected set; }
```
### PreviousVoltageReading
Gets or sets the previous voltage reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L73)
```csharp title="Declaration"
protected Voltage? PreviousVoltageReading { get; set; }
```
## Fields
### DefaultSampleInterval
The default sampling interval for the Input (40ms)
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L48)
```csharp title="Declaration"
public static readonly TimeSpan DefaultSampleInterval
```
### DefaultReferenceVoltage
The default reference voltage for the Input (3.3V)
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L52)
```csharp title="Declaration"
public static readonly Voltage DefaultReferenceVoltage
```
## Methods
### From(IPin, IMeadowIOController, int)
Creates an AnalogInputPort given the provided parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L114)
```csharp title="Declaration"
public static AnalogInputPort From(IPin pin, IMeadowIOController ioController, int sampleCount = 5)
```

##### Returns

[Meadow.Hardware.AnalogInputPort](../Meadow.Hardware/AnalogInputPort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* |
| `System.Int32` | *sampleCount* |

### From(IPin, IMeadowIOController, int, TimeSpan, Voltage)
Creates an AnalogInputPort given the provided parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L133)
```csharp title="Declaration"
public static AnalogInputPort From(IPin pin, IMeadowIOController ioController, int sampleCount, TimeSpan sampleInterval, Voltage referenceVoltage)
```

##### Returns

[Meadow.Hardware.AnalogInputPort](../Meadow.Hardware/AnalogInputPort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* |
| `System.Int32` | *sampleCount* |
| `System.TimeSpan` | *sampleInterval* |
| [Meadow.Units.Voltage](../Meadow.Units/Voltage) | *referenceVoltage* |


##### Exceptions

`System.ArgumentException`  

`System.Exception`  

### StartUpdating(TimeSpan?)
Starts sampling the ADC and populating the sample buffer with values.

When sampling, the AnalogInputPort will take multiple readings
(samples); waiting for the `sampleIntervalDuration` in between them,
and fill the sample buffer with those values, then sleep for the
duration specified in `readIntervalDuration`.

This method also starts the raising of events and IObservable
subscribers to get notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L174)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` to wait
     between sets of sample readings. This value determines how often
     `Changed` events are raised and `IObservable` consumers are notified. |

### StopUpdating()
Spins down the process sampling the ADC. Any values in the 
SampleBuffer will become stale after calling this method.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L225)
```csharp title="Declaration"
public override void StopUpdating()
```
### Read()
Convenience method to get the voltage value. For frequent reads, use
StartUpdating() and StopUpdating() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/AnalogInputPort.cs#L242)
```csharp title="Declaration"
public override Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: Read Voltage
## Implements

* [Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)
* [Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort)
* [Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
