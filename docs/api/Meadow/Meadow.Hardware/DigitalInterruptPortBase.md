---
title: Class DigitalInterruptPortBase
sidebar_label: DigitalInterruptPortBase
description: A base class for IDigitalInterruptPort implementations
slug: /docs/api/Meadow/Meadow.Hardware/DigitalInterruptPortBase
---
# Class DigitalInterruptPortBase
A base class for IDigitalInterruptPort implementations

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L9)
```csharp title="Declaration"
public abstract class DigitalInterruptPortBase : DigitalInputPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.DigitalInputPortBase](../Meadow.Hardware/DigitalInputPortBase)

**Derived:**  
[Meadow.Hardware.DigitalInterruptPort](../Meadow.Hardware/DigitalInterruptPort)

**Implements:**  
[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### InterruptMode
Gets or sets a value indicating the type of interrupt monitoring this input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L22)
```csharp title="Declaration"
public abstract InterruptMode InterruptMode { get; set; }
```
### DebounceDuration
Gets or sets the debounce duration for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L27)
```csharp title="Declaration"
public abstract TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch filter duration for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L31)
```csharp title="Declaration"
public abstract TimeSpan GlitchDuration { get; set; }
```
### Observers
Gets a list of port State observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L50)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<DigitalState>>> Observers { get; }
```
## Methods
### RaiseChangedAndNotify(DigitalPortResult)
Raises the Changed event and notifies all observers of a state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L56)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(DigitalPortResult changeResult)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.DigitalPortResult](../Meadow.Hardware/DigitalPortResult) | *changeResult* |

### Subscribe(IObserver&lt;IChangeResult&lt;DigitalState&gt;&gt;)
Adds a state observer to the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L67)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<IChangeResult<DigitalState>> observer)
```

##### Returns

`System.IDisposable`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IObserver<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>` | *observer* |

### Dispose(bool)
Releases allocated port resources
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L79)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

## Events
### Changed
Occurs when the state is changed. To enable this, set the InterruptMode at construction
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInterruptPortBase.cs#L16)
```csharp title="Declaration"
public event EventHandler<DigitalPortResult> Changed
```
##### Event Type
`System.EventHandler<Meadow.Hardware.DigitalPortResult>`

## Implements

* [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
