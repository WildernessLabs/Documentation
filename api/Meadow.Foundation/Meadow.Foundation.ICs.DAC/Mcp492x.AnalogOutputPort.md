---
title: Class Mcp492x.AnalogOutputPort
sidebar_label: Mcp492x.AnalogOutputPort
description: "Represents an analog output port for interfacing with the MCP492x DAC."
---
# Class Mcp492x.AnalogOutputPort
Represents an analog output port for interfacing with the MCP492x DAC.

###### **Assembly**: Mcp492x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L12)
```csharp title="Declaration"
public class Mcp492x.AnalogOutputPort : IAnalogOutputPort, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable
```
**Implements:**  
`Meadow.Hardware.IAnalogOutputPort`, `Meadow.Hardware.IAnalogPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`, `System.IDisposable`

## Properties
### Channel
Gets the channel associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L18)
```csharp title="Declaration"
public IAnalogChannelInfo Channel { get; }
```
### Pin
Gets the pin associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L20)
```csharp title="Declaration"
public IPin Pin { get; }
```
### Gain
Gets or sets the Gain for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L25)
```csharp title="Declaration"
public Mcp492x.Gain Gain { get; set; }
```
### BufferedInput
Gets or sets whether the port has a buffered input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L30)
```csharp title="Declaration"
public bool BufferedInput { get; set; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L45)
```csharp title="Declaration"
public void Dispose()
```
### GenerateOutput(uint)
Instructs the IAnalogOutputPort to generate an analog output signal corresponding to the provided digital value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L51)
```csharp title="Declaration"
public Task GenerateOutput(uint digitalValue)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt32` | *digitalValue* | The digital value to convert to an analog signal |

### HighZ()
Turns off the output, setting the pin to high impedance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Mcp492x.AnalogOutputPort.cs#L66)
```csharp title="Declaration"
public void HighZ()
```

## Implements

* `Meadow.Hardware.IAnalogOutputPort`
* `Meadow.Hardware.IAnalogPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IAnalogChannelInfo>`
* `System.IDisposable`
