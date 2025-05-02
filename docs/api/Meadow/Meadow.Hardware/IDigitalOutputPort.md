---
title: Interface IDigitalOutputPort
sidebar_label: IDigitalOutputPort
description: Contract for ports that are capable of writing digital outputs.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalOutputPort
---
# Interface IDigitalOutputPort
Contract for ports that are capable of writing digital outputs.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalOutputPort.cs#L6)
```csharp title="Declaration"
public interface IDigitalOutputPort : IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
## Properties
### InitialState
Gets the initial state of the port, either low (false) or high (true), as typically configured during the port's constructor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalOutputPort.cs#L11)
```csharp title="Declaration"
bool InitialState { get; }
```
### State
Gets or sets the state of the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalOutputPort.cs#L17)
```csharp title="Declaration"
bool State { get; set; }
```
