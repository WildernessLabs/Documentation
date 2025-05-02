---
title: Class Sc16is7x2.DigitalOutputPort
sidebar_label: Sc16is7x2.DigitalOutputPort
description: >-
  Represents an Sc16is7x2 DigitalOutputPort  Copied from the Mcp23xxx
  implementation
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.DigitalOutputPort
---
# Class Sc16is7x2.DigitalOutputPort
Represents an Sc16is7x2 DigitalOutputPort 
Copied from the Mcp23xxx implementation

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalOutputPort.cs#L11)
```csharp title="Declaration"
public class Sc16is7x2.DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
The port state
True for high, false for low
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalOutputPort.cs#L29)
```csharp title="Declaration"
public override bool State { get; set; }
```
## Fields
### SetPinState
The SetPinState delegate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalOutputPort.cs#L23)
```csharp title="Declaration"
public Sc16is7x2.DigitalOutputPort.SetPinStateDelegate SetPinState
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
