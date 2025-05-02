---
title: Class FtdiExpander.DigitalInputPort
sidebar_label: FtdiExpander.DigitalInputPort
description: Represents a digital input port for the FTDI expander.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander.DigitalInputPort
---
# Class FtdiExpander.DigitalInputPort
Represents a digital input port for the FTDI expander.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.DigitalInputPort.cs#L14)
```csharp title="Declaration"
public sealed class FtdiExpander.DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.DigitalInputPort.cs#L20)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.DigitalInputPort.cs#L32)
```csharp title="Declaration"
public override bool State { get; }
```

## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
