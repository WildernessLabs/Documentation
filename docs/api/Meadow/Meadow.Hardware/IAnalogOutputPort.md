---
title: Interface IAnalogOutputPort
sidebar_label: IAnalogOutputPort
description: Contract for ports that implement an analog output channel.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogOutputPort
---
# Interface IAnalogOutputPort
Contract for ports that implement an analog output channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogOutputPort.cs#L8)
```csharp title="Declaration"
public interface IAnalogOutputPort : IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable
```
## Methods
### GenerateOutput(uint)
Instructs the IAnalogOutputPort to generate an analog output signal corresponding to the provided digital value
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogOutputPort.cs#L14)
```csharp title="Declaration"
Task GenerateOutput(uint digitalValue)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt32` | *digitalValue* | The digital value to convert to an analog signal |

