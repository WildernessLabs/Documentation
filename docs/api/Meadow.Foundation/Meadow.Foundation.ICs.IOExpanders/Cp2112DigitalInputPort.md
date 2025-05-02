---
title: Class Cp2112DigitalInputPort
sidebar_label: Cp2112DigitalInputPort
description: Represents a digital input port implementation for the CP2112 bus.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Cp2112DigitalInputPort
---
# Class Cp2112DigitalInputPort
Represents a digital input port implementation for the CP2112 bus.

###### **Assembly**: Cp2112.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112DigitalInputPort.cs#L9)
```csharp title="Declaration"
public sealed class Cp2112DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Gets the current state of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112DigitalInputPort.cs#L29)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Gets or sets the resistor mode of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112DigitalInputPort.cs#L41)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
