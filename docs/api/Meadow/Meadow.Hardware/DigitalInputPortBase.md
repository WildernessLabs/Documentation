---
title: Class DigitalInputPortBase
sidebar_label: DigitalInputPortBase
description: Provides a base implementation for digital input ports.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalInputPortBase
---
# Class DigitalInputPortBase
Provides a base implementation for digital input ports.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInputPortBase.cs#L8)
```csharp title="Declaration"
public abstract class DigitalInputPortBase : DigitalPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase)

**Derived:**  
[Meadow.Hardware.DigitalInputPort](../Meadow.Hardware/DigitalInputPort), [Meadow.Hardware.DigitalInterruptPortBase](../Meadow.Hardware/DigitalInterruptPortBase)

**Implements:**  
[Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInputPortBase.cs#L14)
```csharp title="Declaration"
public abstract bool State { get; }
```
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalInputPortBase.cs#L18)
```csharp title="Declaration"
public abstract ResistorMode Resistor { get; set; }
```

## Implements

* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
