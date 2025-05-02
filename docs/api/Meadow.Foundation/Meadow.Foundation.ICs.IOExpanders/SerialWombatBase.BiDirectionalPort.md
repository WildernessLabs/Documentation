---
title: Class SerialWombatBase.BiDirectionalPort
sidebar_label: SerialWombatBase.BiDirectionalPort
description: Serial Wombat bi-directional port class
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.BiDirectionalPort
---
# Class SerialWombatBase.BiDirectionalPort
Serial Wombat bi-directional port class

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.BiDirectionalPort.cs#L10)
```csharp title="Declaration"
public class SerialWombatBase.BiDirectionalPort : BiDirectionalPortBase, IBiDirectionalPort, IDigitalInputPort, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.BiDirectionalPortBase`

**Implements:**  
`Meadow.Hardware.IBiDirectionalPort`, `Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### Direction
The port direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.BiDirectionalPort.cs#L20)
```csharp title="Declaration"
public override PortDirectionType Direction { get; set; }
```
### State
The port state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.BiDirectionalPort.cs#L37)
```csharp title="Declaration"
public override bool State { get; set; }
```

## Implements

* `Meadow.Hardware.IBiDirectionalPort`
* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
