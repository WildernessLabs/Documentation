---
title: Class Pcx857x.DigitalInterruptPort
sidebar_label: Pcx857x.DigitalInterruptPort
description: A Pcx857x-specific implementation of the IDigitalInterruptPort
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Pcx857x.DigitalInterruptPort
---
# Class Pcx857x.DigitalInterruptPort
A Pcx857x-specific implementation of the IDigitalInterruptPort

###### **Assembly**: Pcx857x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L11)
```csharp title="Declaration"
public class Pcx857x.DigitalInterruptPort : DigitalInterruptPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> `Meadow.Hardware.PortBase<Meadow.Hardware.IDigitalChannelInfo>` -> `Meadow.Hardware.DigitalPortBase` -> `Meadow.Hardware.DigitalInputPortBase` -> `Meadow.Hardware.DigitalInterruptPortBase`

**Implements:**  
`Meadow.Hardware.IDigitalInterruptPort`, `Meadow.Hardware.IDigitalInputPort`, `Meadow.Hardware.IDigitalPort`, `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`, `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### InterruptMode
Gets or sets a value indicating the type of interrupt monitoring this input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L14)
```csharp title="Declaration"
public override InterruptMode InterruptMode { get; set; }
```
### Resistor
Gets or sets the internal resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L17)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### State
Gets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L33)
```csharp title="Declaration"
public override bool State { get; }
```
### DebounceDuration
Debouce duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L45)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Glitch duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L50)
```csharp title="Declaration"
public override TimeSpan GlitchDuration { get; set; }
```
## Methods
### Dispose(bool)
Releases allocated port resources
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.DigitalInterruptPort.cs#L111)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |


## Implements

* `Meadow.Hardware.IDigitalInterruptPort`
* `Meadow.Hardware.IDigitalInputPort`
* `Meadow.Hardware.IDigitalPort`
* `Meadow.Hardware.IPort<Meadow.Hardware.IDigitalChannelInfo>`
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
