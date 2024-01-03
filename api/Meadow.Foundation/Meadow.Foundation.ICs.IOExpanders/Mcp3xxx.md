---
title: Class Mcp3xxx
sidebar_label: Mcp3xxx
description: "Provide an interface to connect to a MCP3xxx analog to digital converter (ADC)"
---
# Class Mcp3xxx
Provide an interface to connect to a MCP3xxx analog to digital converter (ADC)

###### **Assembly**: Mcp3xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Mcp3xxx : IAnalogInputController, IPinController, ISpiPeripheral, IDisposable
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Mcp3001](../Meadow.Foundation.ICs.IOExpanders/Mcp3001), [Meadow.Foundation.ICs.IOExpanders.Mcp3002](../Meadow.Foundation.ICs.IOExpanders/Mcp3002), [Meadow.Foundation.ICs.IOExpanders.Mcp3004](../Meadow.Foundation.ICs.IOExpanders/Mcp3004), [Meadow.Foundation.ICs.IOExpanders.Mcp3008](../Meadow.Foundation.ICs.IOExpanders/Mcp3008), [Meadow.Foundation.ICs.IOExpanders.Mcp3201](../Meadow.Foundation.ICs.IOExpanders/Mcp3201), [Meadow.Foundation.ICs.IOExpanders.Mcp3202](../Meadow.Foundation.ICs.IOExpanders/Mcp3202), [Meadow.Foundation.ICs.IOExpanders.Mcp3204](../Meadow.Foundation.ICs.IOExpanders/Mcp3204), [Meadow.Foundation.ICs.IOExpanders.Mcp3208](../Meadow.Foundation.ICs.IOExpanders/Mcp3208)

**Implements:**  
`Meadow.Hardware.IAnalogInputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L16)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### SpiComms
Gets the underlying ISpiCommunications instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L26)
```csharp title="Declaration"
protected ISpiCommunications SpiComms { get; }
```
### ChannelCount
the number of input channels on the ADC
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L31)
```csharp title="Declaration"
protected int ChannelCount { get; set; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L36)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L41)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L50)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L55)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### AdcResolutionInBits
The resolution of the analog-to-digital converter in the Mcp3xxx
This is model-specific and not configurable
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L65)
```csharp title="Declaration"
public int AdcResolutionInBits { get; protected set; }
```
## Methods
### CreateAnalogInputPort(IPin, int)
Create an analog input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L114)
```csharp title="Declaration"
protected IAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount = 64)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`: An instance of `Meadow.Hardware.IAnalogInputPort` that represents the analog input on the specified pin
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to use for the analog input port |
| `System.Int32` | *sampleCount* | The number of samples to take when measuring the pin's voltage |

### CreateAnalogInputPort(IPin, int, TimeSpan, Voltage)
Creates a new instance of an `IAnalogInputPort` for the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L127)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount, TimeSpan sampleInterval, Voltage voltageReference)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`: A new instance of an `IAnalogInputPort`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The IPin object that this port is created from |
| `System.Int32` | *sampleCount* | The number of samples to take |
| `System.TimeSpan` | *sampleInterval* | The interval delay between samples |
| `Meadow.Units.Voltage` | *voltageReference* | The `Voltage` reference for ADC readings |

### CreateAnalogInputPort(IPin, int, TimeSpan, Voltage, InputType)
Creates a new instance of an `IAnalogInputPort` for the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L151)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount, TimeSpan sampleInterval, Voltage voltageReference, Mcp3xxx.InputType inputType)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`: A new instance of an `IAnalogInputPort`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The IPin object that this port is created from |
| `System.Int32` | *sampleCount* | The number of samples to take |
| `System.TimeSpan` | *sampleInterval* | The interval delay between samples |
| `Meadow.Units.Voltage` | *voltageReference* | The `Voltage` reference for ADC readings |
| [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx.InputType](../Meadow.Foundation.ICs.IOExpanders/Mcp3xxx.InputType) | *inputType* | The pin channel input type |

### CreateAnalogInputArray(params IPin[])
Creates an IAnalogInputArray instance from the specified set of pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L170)
```csharp title="Declaration"
public IAnalogInputArray CreateAnalogInputArray(params IPin[] pins)
```

##### Returns

`Meadow.Hardware.IAnalogInputArray`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin[]` | *pins* | The pins to use for the IAnalogInputArray |

### IsInputTypeSupported(InputType)
Is the input type supported on this MCP3xxx version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L180)
```csharp title="Declaration"
public virtual bool IsInputTypeSupported(Mcp3xxx.InputType inputType)
```

##### Returns

`System.Boolean`: True if supported, false if not supported
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx.InputType](../Meadow.Foundation.ICs.IOExpanders/Mcp3xxx.InputType) | *inputType* | The input type |

### ValidateChannel(int, int)
Checks if channel is in range
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L190)
```csharp title="Declaration"
protected void ValidateChannel(int channel, int channelCount)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | The channel |
| `System.Int32` | *channelCount* | The number of channels on the device |

### ValidateChannelPairing(int, int)
Checks if the channel is in range of the available input channels and that both channels are part of a valid pairing
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L203)
```csharp title="Declaration"
protected void ValidateChannelPairing(int valueChannel, int referenceChannel)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *valueChannel* | The 1st (value) channel in the pairing |
| `System.Int32` | *referenceChannel* | The 2nd (reference) channel in the pairing |

### ReadSingleEnded(int)
Reads a value from the device for a single ended input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L219)
```csharp title="Declaration"
protected virtual int ReadSingleEnded(int channel)
```

##### Returns

`System.Int32`: The raw voltage
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | Channel which represents the input signal |

### ReadPseudoDifferential(int, int)
Reads a value from the device using pseudo-differential inputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L232)
```csharp title="Declaration"
protected virtual int ReadPseudoDifferential(int valueChannel, int referenceChannel)
```

##### Returns

`System.Int32`: The raw relative voltage
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *valueChannel* | Channel which represents the signal |
| `System.Int32` | *referenceChannel* | Channel which represents ground |

### ReadDifferential(int, int)
Reads a value from the device using differential inputs
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L247)
```csharp title="Declaration"
protected virtual int ReadDifferential(int valueChannel, int referenceChannel)
```

##### Returns

`System.Int32`: The raw relative voltage
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *valueChannel* | Channel which represents the positive signal |
| `System.Int32` | *referenceChannel* | Channel which represents the negative signal |

### ReadInternal(int, InputType, int)
Reads a value from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L268)
```csharp title="Declaration"
protected virtual int ReadInternal(int channel, Mcp3xxx.InputType inputType, int adcResolutionBits)
```

##### Returns

`System.Int32`: A value corresponding to relative voltage level on specified device channel
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | Channel to read - for differential inputs this represents a channel pair (valid values: 0 - channelcount - 1 or 0 - channelcount / 2 - 1  with differential inputs) |
| [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx.InputType](../Meadow.Foundation.ICs.IOExpanders/Mcp3xxx.InputType) | *inputType* | The type of input channel to read |
| `System.Int32` | *adcResolutionBits* | The number of bits in the returned value |

### ReadInternalRaw(int, int, int)
Reads a value from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L290)
```csharp title="Declaration"
protected int ReadInternalRaw(int adcRequest, int adcResolutionInBits, int delayBits)
```

##### Returns

`System.Int32`: A value corresponding to a voltage level on the input pin described by the request
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *adcRequest* | A bit pattern to be sent to the ADC |
| `System.Int32` | *adcResolutionInBits* | The number of bits in the returned value |
| `System.Int32` | *delayBits* | The number of bits to be delayed between the request and the response being read |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L328)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Mcp3xxx.cs#L338)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Hardware.IAnalogInputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
