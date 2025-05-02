---
title: Class AnalogPortBase
sidebar_label: AnalogPortBase
description: >-
  Provides a base implementation for much of the common tasks of  implementing
  IAnalogPort
slug: /docs/api/Meadow/Meadow.Hardware/AnalogPortBase
---
# Class AnalogPortBase
Provides a base implementation for much of the common tasks of 
implementing IAnalogPort

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/AnalogPortBase.cs#L9)
```csharp title="Declaration"
public abstract class AnalogPortBase : PortBase<IAnalogChannelInfo>, IAnalogPort, IPort<IAnalogChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`)

**Derived:**  
[Meadow.Hardware.AnalogInputPortBase](../Meadow.Hardware/AnalogInputPortBase)

**Implements:**  
[Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`


## Implements

* [Meadow.Hardware.IAnalogPort](../Meadow.Hardware/IAnalogPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
