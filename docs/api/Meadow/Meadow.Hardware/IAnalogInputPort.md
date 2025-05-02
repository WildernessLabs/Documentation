---
title: Interface IAnalogInputPort
sidebar_label: IAnalogInputPort
description: Contract for ports that implement an analog input channel.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogInputPort
---
# Interface IAnalogInputPort
Contract for ports that implement an analog input channel.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputPort.cs#L9)
```csharp title="Declaration"
public interface IAnalogInputPort : IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable
```
## Properties
### ReferenceVoltage
The maximum voltage that the Analog Port can read. Typically 3.3V.
This value is used to convert raw ADC values into voltage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputPort.cs#L15)
```csharp title="Declaration"
Voltage ReferenceVoltage { get; }
```
## Methods
### Read()
Gets the current voltage. For frequent reads, use StartUpdating() and StopUpdating()
in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IAnalogInputPort.cs#L22)
```csharp title="Declaration"
Task<Voltage> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: The current voltage.
