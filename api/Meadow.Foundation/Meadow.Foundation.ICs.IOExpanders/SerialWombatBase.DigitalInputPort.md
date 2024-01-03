---
title: Class SerialWombatBase.DigitalInputPort
sidebar_label: SerialWombatBase.DigitalInputPort
description: "Serial Wombat DigitalInputPort"
---
# Class SerialWombatBase.DigitalInputPort
Serial Wombat DigitalInputPort

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.DigitalInputPort.cs#L10)
```csharp title="Declaration"
public class SerialWombatBase.DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
The port state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.DigitalInputPort.cs#L29)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
The port resistor mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.DigitalInputPort.cs#L37)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
