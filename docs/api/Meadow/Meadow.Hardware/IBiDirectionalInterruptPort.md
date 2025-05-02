---
title: Interface IBiDirectionalInterruptPort
sidebar_label: IBiDirectionalInterruptPort
description: >-
  Contract for BiDirectional Ports; digital ports that can be both input and
  output.
slug: /docs/api/Meadow/Meadow.Hardware/IBiDirectionalInterruptPort
---
# Interface IBiDirectionalInterruptPort
Contract for BiDirectional Ports; digital ports that can be both input and output.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IBiDirectionalInterruptPort.cs#L7)
```csharp title="Declaration"
public interface IBiDirectionalInterruptPort : IDigitalInterruptPort, IDigitalInputPort, IObservable<IChangeResult<DigitalState>>, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
## Properties
### Direction

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IBiDirectionalInterruptPort.cs#L10)
```csharp title="Declaration"
PortDirectionType Direction { get; set; }
```
### State

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IBiDirectionalInterruptPort.cs#L12)
```csharp title="Declaration"
bool State { get; set; }
```
