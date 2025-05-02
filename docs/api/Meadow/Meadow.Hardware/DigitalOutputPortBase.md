---
title: Class DigitalOutputPortBase
sidebar_label: DigitalOutputPortBase
description: Provides a base implementation for digital output ports.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalOutputPortBase
---
# Class DigitalOutputPortBase
Provides a base implementation for digital output ports.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalOutputPortBase.cs#L8)
```csharp title="Declaration"
public abstract class DigitalOutputPortBase : DigitalPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase)

**Derived:**  
[Meadow.Hardware.DigitalOutputPort](../Meadow.Hardware/DigitalOutputPort)

**Implements:**  
[Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### InitialState
Gets the initial state of the port, either low (false) or high (true), as typically configured during the port's constructor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalOutputPortBase.cs#L11)
```csharp title="Declaration"
public bool InitialState { get; protected set; }
```
### InitialOutputType
Gets or sets the initial OutputType for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalOutputPortBase.cs#L15)
```csharp title="Declaration"
public OutputType InitialOutputType { get; protected set; }
```
### State
Gets or sets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalOutputPortBase.cs#L20)
```csharp title="Declaration"
public abstract bool State { get; set; }
```

## Implements

* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
