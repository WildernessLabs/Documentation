---
title: Interface IDigitalInterruptPort
sidebar_label: IDigitalInterruptPort
description: >-
  Contract for ports that are capable of reading digital inputs and raising
  events when state changes.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalInterruptPort
---
# Interface IDigitalInterruptPort
Contract for ports that are capable of reading digital inputs and raising
events when state changes.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L9)
```csharp title="Declaration"
public interface IDigitalInterruptPort : IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
## Properties
### InterruptMode
Gets the interrupt mode used to determine when interrupts are raised.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L20)
```csharp title="Declaration"
InterruptMode InterruptMode { get; }
```
### DebounceDuration
Gets or sets the debounce duration.
Effectively a delay after an event where new inputs are ignored
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L26)
```csharp title="Declaration"
TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch duration. 
This is the minimum amount of time a signal needs to be stable before an event is recognized
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L32)
```csharp title="Declaration"
TimeSpan GlitchDuration { get; set; }
```
## Methods
### CreateObserver(Action&lt;IChangeResult&lt;DigitalState&gt;&gt;, Predicate&lt;IChangeResult&lt;DigitalState&gt;&gt;?)
An `IObserver` that handles change notifications and has an optional
predicate that automatically filters results so only results that match
the predicate will reach the subscriber.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L35)
```csharp title="Declaration"
public static FilterableChangeObserver<DigitalState> CreateObserver(Action<IChangeResult<DigitalState>> handler, Predicate<IChangeResult<DigitalState>>? filter = null)
```

##### Returns

[Meadow.FilterableChangeObserver&lt;UNIT&gt;](../Meadow/FilterableChangeObserver`UNIT`)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Action<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>` | *handler* |
| `System.Predicate<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>` | *filter* |

## Events
### Changed
Raised when the state of the digital port is changed / updated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/IDigitalInterruptPort.cs#L15)
```csharp title="Declaration"
event EventHandler<DigitalPortResult> Changed
```
##### Event Type
`System.EventHandler<Meadow.Hardware.DigitalPortResult>`
