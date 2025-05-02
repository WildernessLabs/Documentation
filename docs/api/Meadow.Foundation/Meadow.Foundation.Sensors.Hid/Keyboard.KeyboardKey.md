---
title: Class Keyboard.KeyboardKey
sidebar_label: Keyboard.KeyboardKey
description: Represents a Keyboard key as a Meadow digital input
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/Keyboard.KeyboardKey
---
# Class Keyboard.KeyboardKey
Represents a Keyboard key as a Meadow digital input

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L11)
```csharp title="Declaration"
public class Keyboard.KeyboardKey : DigitalInterruptPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase` -> `Meadow.Hardware.DigitalInterruptPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInterruptPort`, `Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### State
the state of the key, &lt;b&gt;true&lt;/b&gt; being "down"
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L18)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Virtual resistor mode of the key.  Always InternalPullUp
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L22)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### DebounceDuration
Debounce duration of the key. Unsupported because the hardware handles this.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L26)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Glitch filter duration of the key. Unsupported because the hardware handles this.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L30)
```csharp title="Declaration"
public override TimeSpan GlitchDuration { get; set; }
```
### InterruptMode
Gets or sets a value indicating the type of interrupt monitoring this input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.KeyboardKey.cs#L33)
```csharp title="Declaration"
public override InterruptMode InterruptMode { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalInterruptPort`
* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
