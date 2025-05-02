---
title: Interface IBiDirectionalPort
sidebar_label: IBiDirectionalPort
description: >-
  Contract for ports that are capable of reading inputs and writing digital
  outputs.
slug: /docs/api/Meadow/Meadow.Hardware/IBiDirectionalPort
---
# Interface IBiDirectionalPort
Contract for ports that are capable of reading inputs and writing digital outputs.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IBiDirectionalPort.cs#L6)
```csharp title="Declaration"
public interface IBiDirectionalPort : IDigitalInputPort, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
## Properties
### Direction
Gets or sets the current direction of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IBiDirectionalPort.cs#L11)
```csharp title="Declaration"
PortDirectionType Direction { get; set; }
```
