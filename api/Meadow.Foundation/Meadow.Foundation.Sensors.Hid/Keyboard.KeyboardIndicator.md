---
title: Class Keyboard.KeyboardIndicator
sidebar_label: Keyboard.KeyboardIndicator
description: "Represents a Keyboard indicator as a Meadow digital output"
---
# Class Keyboard.KeyboardIndicator
Represents a Keyboard indicator as a Meadow digital output

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardIndicator.cs#L12)
```csharp title="Declaration"
public class Keyboard.KeyboardIndicator : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalOutputPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalOutputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`

## Properties
### State
Sets the state of the indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardIndicator.cs#L19)
```csharp title="Declaration"
public override bool State { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalOutputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
