---
title: Class Mcp23xxx.DigitalInterruptPort
sidebar_label: Mcp23xxx.DigitalInterruptPort
description: "Represents an Mcp23xxx digital interrupt port"
---
# Class Mcp23xxx.DigitalInterruptPort
Represents an Mcp23xxx digital interrupt port

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInterruptPort.cs#L11)
```csharp title="Declaration"
public class Mcp23xxx.DigitalInterruptPort : DigitalInterruptPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase` -> `Meadow.Hardware.DigitalInterruptPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInterruptPort`, `Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInterruptPort.cs#L14)
```csharp title="Declaration"
public override bool State { get; }
```
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInterruptPort.cs#L20)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### DebounceDuration
Gets or sets the debounce duration for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInterruptPort.cs#L28)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch filter duration for the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.DigitalInterruptPort.cs#L31)
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
