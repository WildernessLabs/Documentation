---
title: Class BiDirectionalInterruptPortBase
sidebar_label: BiDirectionalInterruptPortBase
description: A base class for IBiDirectionalInterruptPort implementations
slug: /docs/api/Meadow/Meadow.Hardware/BiDirectionalInterruptPortBase
---
# Class BiDirectionalInterruptPortBase
A base class for IBiDirectionalInterruptPort implementations

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L9)
```csharp title="Declaration"
public abstract class BiDirectionalInterruptPortBase : BiDirectionalPortBase, IBiDirectionalPort, IBiDirectionalInterruptPort, IDigitalInterruptPort, IDigitalInputPort, IObservable<IChangeResult<DigitalState>>, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.BiDirectionalPortBase](../Meadow.Hardware/BiDirectionalPortBase)

**Derived:**  
[Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort)

**Implements:**  

<details>
<summary>Expand</summary>

[Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort), [Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort), [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`, [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`
</details>



## Properties
### Observers
Gets a list of port State observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L21)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<DigitalState>>> Observers { get; }
```
### DebounceDuration
Gets or sets the debounce duration of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L26)
```csharp title="Declaration"
public abstract TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch filter duration of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L30)
```csharp title="Declaration"
public abstract TimeSpan GlitchDuration { get; set; }
```
### InterruptMode
Gets or sets a value indicating the type of interrupt monitoring this input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L36)
```csharp title="Declaration"
public InterruptMode InterruptMode { get; protected set; }
```
## Methods
### RaiseChangedAndNotify(DigitalPortResult)
Raises the Changed event and notifies all observers of a state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L90)
```csharp title="Declaration"
protected void RaiseChangedAndNotify(DigitalPortResult changeResult)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.DigitalPortResult](../Meadow.Hardware/DigitalPortResult) | *changeResult* |

### Subscribe(IObserver&lt;IChangeResult&lt;DigitalState&gt;&gt;)
Adds a state observer to the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L103)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L115)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

## Events
### Changed
Event raised when the port value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalInterruptPortBase.cs#L16)
```csharp title="Declaration"
public event EventHandler<DigitalPortResult> Changed
```
##### Event Type
`System.EventHandler<Meadow.Hardware.DigitalPortResult>`

## Implements

* [Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort)
* [Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort)
* [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
