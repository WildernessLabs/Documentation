---
title: Class Sc16is7x2.DigitalInputPort
sidebar_label: Sc16is7x2.DigitalInputPort
description: >-
  Represents an SC16IS7x2 digital input port Mostly copied from the MCP23xxx
  implementation
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.DigitalInputPort
---
# Class Sc16is7x2.DigitalInputPort
Represents an SC16IS7x2 digital input port
Mostly copied from the MCP23xxx implementation

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalInputPort.cs#L15)
```csharp title="Declaration"
public class Sc16is7x2.DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalInputPort.cs#L18)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalInputPort.cs#L32)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
## Events
### StateChanged
Event to be raised whenever the port state changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.DigitalInputPort.cs#L75)
```csharp title="Declaration"
public event Sc16is7x2.DigitalInputPort.StateChangedHandler? StateChanged
```
##### Event Type
[Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.DigitalInputPort.StateChangedHandler](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.DigitalInputPort.StateChangedHandler)

## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
