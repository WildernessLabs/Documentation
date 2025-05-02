---
title: Class SerialWombatBase.PwmPort
sidebar_label: SerialWombatBase.PwmPort
description: Represents a serial wombat PwmPort
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.PwmPort
---
# Class SerialWombatBase.PwmPort
Represents a serial wombat PwmPort

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L12)
```csharp title="Declaration"
public class SerialWombatBase.PwmPort : PwmPortBase, IPwmPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.PwmPortBase`

**Implements:**  
`Meadow.Hardware.IPwmPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### Inverted
Is the port inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L43)
```csharp title="Declaration"
public override bool Inverted { get; set; }
```
### DutyCycle
PWM duty cycle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L48)
```csharp title="Declaration"
public override double DutyCycle { get; set; }
```
### Frequency
PWM frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L64)
```csharp title="Declaration"
public override Frequency Frequency { get; set; }
```
### Duration
The amount of time, in seconds, that the a PWM pulse is high.  This will always be less than or equal to the Period
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L80)
```csharp title="Declaration"
public override TimePeriod Duration { get; set; }
```
### Period
PWM period
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L96)
```csharp title="Declaration"
public override TimePeriod Period { get; set; }
```
### State
Get the port state (is it running)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L105)
```csharp title="Declaration"
public override bool State { get; }
```
## Fields
### DefaultFrequency
The PWM default frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L17)
```csharp title="Declaration"
public static readonly Frequency DefaultFrequency
```
## Methods
### Start()
Start the PWM port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L110)
```csharp title="Declaration"
public override void Start()
```
### Stop()
Stop the PWM port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.PwmPort.cs#L121)
```csharp title="Declaration"
public override void Stop()
```

## Implements

* `Meadow.Hardware.IPwmPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
