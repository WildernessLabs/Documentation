---
title: Class FtdiExpander.DigitalOutputPort
sidebar_label: FtdiExpander.DigitalOutputPort
description: Represents a digital output port for the FTDI expander.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.DigitalOutputPort
---
# Class FtdiExpander.DigitalOutputPort
Represents a digital output port for the FTDI expander.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.DigitalOutputPort.cs#L14)
```csharp title="Declaration"
public sealed class FtdiExpander.DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Gets or sets the state of the digital output port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.DigitalOutputPort.cs#L49)
```csharp title="Declaration"
public override bool State { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
