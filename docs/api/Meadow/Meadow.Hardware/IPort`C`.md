---
title: Interface IPort<C>
sidebar_label: IPort<C>
description: Represents a port that is associated with a specific channel and pin.
slug: /docs/api/Meadow/Meadow.Hardware/IPort`C`
---
# Interface IPort&lt;C&gt;
Represents a port that is associated with a specific channel and pin.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPort.cs#L9)
```csharp title="Declaration"
public interface IPort<C> : IDisposable where C : IChannelInfo
```
## Properties
### Channel
Gets the channel associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPort.cs#L14)
```csharp title="Declaration"
C Channel { get; }
```
### Pin
Gets the pin associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IPort.cs#L19)
```csharp title="Declaration"
IPin Pin { get; }
```
