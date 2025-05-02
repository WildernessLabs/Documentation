---
title: Class BiDirectionalPortBase
sidebar_label: BiDirectionalPortBase
description: >-
  Provides a base implementation for BiDirectional Ports; digital ports  that
  can be both input and output.
slug: /docs/api/Meadow/Meadow.Hardware/BiDirectionalPortBase
---
# Class BiDirectionalPortBase
Provides a base implementation for BiDirectional Ports; digital ports 
that can be both input and output.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L9)
```csharp title="Declaration"
public abstract class BiDirectionalPortBase : DigitalPortBase, IBiDirectionalPort, IDigitalInputPort, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase)

**Derived:**  
[Meadow.Hardware.BiDirectionalInterruptPortBase](../Meadow.Hardware/BiDirectionalInterruptPortBase), [Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort)

**Implements:**  
[Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### InitialState
Gets the initial state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L14)
```csharp title="Declaration"
public bool InitialState { get; }
```
### InitialOutputType
Gets the initial output type of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L18)
```csharp title="Declaration"
public OutputType InitialOutputType { get; }
```
### Resistor
Gets the resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L22)
```csharp title="Declaration"
public virtual ResistorMode Resistor { get; set; }
```
### State
Gets or sets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L26)
```csharp title="Declaration"
public abstract bool State { get; set; }
```
### Direction
Gets or sets the current direction of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/BiDirectionalPortBase.cs#L28)
```csharp title="Declaration"
public abstract PortDirectionType Direction { get; set; }
```

## Implements

* [Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
