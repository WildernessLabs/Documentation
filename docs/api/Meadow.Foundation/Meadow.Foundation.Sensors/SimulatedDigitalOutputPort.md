---
title: Class SimulatedDigitalOutputPort
sidebar_label: SimulatedDigitalOutputPort
description: A simulated digital output port that tracks and logs state changes.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors/SimulatedDigitalOutputPort
---
# Class SimulatedDigitalOutputPort
A simulated digital output port that tracks and logs state changes.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L12)
```csharp title="Declaration"
public class SimulatedDigitalOutputPort : IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### InitialState
Gets the initial state that the port was configured with.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L22)
```csharp title="Declaration"
public bool InitialState { get; }
```
### Name
Gets a name or identifier for this simulated port instance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L27)
```csharp title="Declaration"
public string Name { get; }
```
### State
Gets or sets the current state of the simulated port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L50)
```csharp title="Declaration"
public virtual bool State { get; set; }
```
### Channel
Returns [null](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null) since the channel info is not 
meaningful for a simulated port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L64)
```csharp title="Declaration"
public IDigitalChannelInfo Channel { get; }
```
### Pin
Returns [null](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null) since no physical pin is used.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L69)
```csharp title="Declaration"
public IPin Pin { get; }
```
## Methods
### Dispose()
Disposes of the simulated port. 
Currently, this does nothing for the simulation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Simulation/Ports/SimulatedDigitalOutputPort.cs#L75)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
