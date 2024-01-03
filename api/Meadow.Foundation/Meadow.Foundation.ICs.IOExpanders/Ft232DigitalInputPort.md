---
title: Class Ft232DigitalInputPort
sidebar_label: Ft232DigitalInputPort
description: "Represents a digital input port implementation for the FT232 bus."
---
# Class Ft232DigitalInputPort
Represents a digital input port implementation for the FT232 bus.

###### **Assembly**: Ft232h.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalInputPort.cs#L9)
```csharp title="Declaration"
public sealed class Ft232DigitalInputPort : DigitalInterruptPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase` -> `Meadow.Hardware.DigitalInterruptPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInterruptPort`, `Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### State
Gets the current state of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalInputPort.cs#L29)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Gets or sets the resistor mode of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalInputPort.cs#L44)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### DebounceDuration
Gets or sets the debounce duration of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalInputPort.cs#L54)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch duration of the input port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232DigitalInputPort.cs#L64)
```csharp title="Declaration"
public override TimeSpan GlitchDuration { get; set; }
```

## Implements

* `Meadow.Hardware.IDigitalInterruptPort`
* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
