---
title: Class PwmPortBase
sidebar_label: PwmPortBase
description: Represents a base class for PWM ports.
slug: /docs/api/Meadow/Meadow.Hardware/PwmPortBase
---
# Class PwmPortBase
Represents a base class for PWM ports.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L9)
```csharp title="Declaration"
public abstract class PwmPortBase : DigitalPortBase, IPwmPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase)

**Implements:**  
[Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### Channel
Gets or sets the PWM channel information associated with the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L14)
```csharp title="Declaration"
public IPwmChannelInfo Channel { get; protected set; }
```
### Inverted
Gets or sets a value indicating whether the PWM signal is inverted.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L36)
```csharp title="Declaration"
public abstract bool Inverted { get; set; }
```
### DutyCycle
Gets or sets the duty cycle of the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L41)
```csharp title="Declaration"
public abstract double DutyCycle { get; set; }
```
### Frequency
Gets or sets the frequency of the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L46)
```csharp title="Declaration"
public abstract Frequency Frequency { get; set; }
```
### Duration
Gets or sets the duration of the PWM pulse.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L51)
```csharp title="Declaration"
public abstract TimePeriod Duration { get; set; }
```
### Period
Gets or sets the period of the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L56)
```csharp title="Declaration"
public abstract TimePeriod Period { get; set; }
```
### State
Gets the state of the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L61)
```csharp title="Declaration"
public abstract bool State { get; }
```
## Methods
### Start()
Starts the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L66)
```csharp title="Declaration"
public abstract void Start()
```
### Stop()
Stops the PWM signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Bases/PwmPortBase.cs#L71)
```csharp title="Declaration"
public abstract void Stop()
```

## Implements

* [Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
