---
title: Class Ft232DigitalOutputPort
sidebar_label: Ft232DigitalOutputPort
description: "Digital output port for FT232 devices."
---
# Class Ft232DigitalOutputPort
Digital output port for FT232 devices.

###### **Assembly**: Ft232h.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalOutputPort.cs#L9)
```csharp title="Declaration"
public sealed class Ft232DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Gets or sets the state of the digital output port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalOutputPort.cs#L40)
```csharp title="Declaration"
public override bool State { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
