---
title: Class SerialWombatBase.DigitalOutputPort
sidebar_label: SerialWombatBase.DigitalOutputPort
description: Serial Wombat DigitalOutputPort class
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.DigitalOutputPort
---
# Class SerialWombatBase.DigitalOutputPort
Serial Wombat DigitalOutputPort class

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.DigitalOutputPort.cs#L10)
```csharp title="Declaration"
public class SerialWombatBase.DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
The port state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.DigitalOutputPort.cs#L27)
```csharp title="Declaration"
public override bool State { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
