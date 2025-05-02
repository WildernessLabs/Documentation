---
title: Interface IDigitalInputPort
sidebar_label: IDigitalInputPort
description: Contract for ports that are capable of reading digital inputs.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalInputPort
---
# Interface IDigitalInputPort
Contract for ports that are capable of reading digital inputs.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInputPort.cs#L6)
```csharp title="Declaration"
public interface IDigitalInputPort : IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
## Properties
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInputPort.cs#L11)
```csharp title="Declaration"
bool State { get; }
```
### Resistor
Gets or sets the ResistorMode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInputPort.cs#L15)
```csharp title="Declaration"
ResistorMode Resistor { get; set; }
```
