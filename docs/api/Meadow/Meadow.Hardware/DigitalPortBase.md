---
title: Class DigitalPortBase
sidebar_label: DigitalPortBase
description: >-
  DigitalPortBase provides a base implementation for much of the  common tasks
  of classes implementing IDigitalPort.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalPortBase
---
# Class DigitalPortBase
DigitalPortBase provides a base implementation for much of the 
common tasks of classes implementing IDigitalPort.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalPortBase.cs#L9)
```csharp title="Declaration"
public abstract class DigitalPortBase : PortBase<IDigitalChannelInfo>, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`)

**Derived:**  
[Meadow.Hardware.BiDirectionalPortBase](../Meadow.Hardware/BiDirectionalPortBase), [Meadow.Hardware.DigitalInputPortBase](../Meadow.Hardware/DigitalInputPortBase), [Meadow.Hardware.DigitalOutputPortBase](../Meadow.Hardware/DigitalOutputPortBase), [Meadow.Hardware.PwmPortBase](../Meadow.Hardware/PwmPortBase)

**Implements:**  
[Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### Channel
Gets or sets the IDigitalChannelInfo for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalPortBase.cs#L14)
```csharp title="Declaration"
public IDigitalChannelInfo Channel { get; protected set; }
```
### InverseLogic
Gets whether or not the channel has inverse boolean logic (low == true)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/DigitalPortBase.cs#L19)
```csharp title="Declaration"
protected bool InverseLogic { get; }
```

## Implements

* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
