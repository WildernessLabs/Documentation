---
title: Class DigitalInterruptPort
sidebar_label: DigitalInterruptPort
description: Represents a port that is capable of reading digital input.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalInterruptPort
---
# Class DigitalInterruptPort
Represents a port that is capable of reading digital input.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L9)
```csharp title="Declaration"
public class DigitalInterruptPort : DigitalInterruptPortBase, IDigitalInterruptPort, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable, IObservable<IChangeResult<DigitalState>>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.DigitalInputPortBase](../Meadow.Hardware/DigitalInputPortBase) -> [Meadow.Hardware.DigitalInterruptPortBase](../Meadow.Hardware/DigitalInterruptPortBase)

**Implements:**  
[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`, `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`

## Properties
### IOController

###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L20)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; set; }
```
### Resistor
Gets or Sets the internal resistor mode for the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L118)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### InterruptMode
Gets or sets a value indicating the type of interrupt monitoring this input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L129)
```csharp title="Declaration"
public override InterruptMode InterruptMode { get; set; }
```
### State
Gets the current State of the input (True == high, False == low)
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L202)
```csharp title="Declaration"
public override bool State { get; }
```
### DebounceDuration
Gets or Sets the interrupt debounce duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L214)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or Sets the interrupt glitch filter duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L234)
```csharp title="Declaration"
public override TimeSpan GlitchDuration { get; set; }
```
## Methods
### From(IPin, IMeadowIOController, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Creates a DigitalInterruptPort with the specified parameters
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L82)
```csharp title="Declaration"
public static DigitalInterruptPort From(IPin pin, IMeadowIOController ioController, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

[Meadow.Hardware.DigitalInterruptPort](../Meadow.Hardware/DigitalInterruptPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The IPin the port is on |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The IIoController used to control the IPin |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the port |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port |
| `System.TimeSpan` | *debounceDuration* | The debounce duration used for interrupts |
| `System.TimeSpan` | *glitchDuration* | The glitch filter duration used for interrupts |

### Dispose(bool)
Releases Port resources
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L173)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### ~DigitalInterruptPort()
Finalizes the Port instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInterruptPort.cs#L194)
```csharp title="Declaration"
protected ~DigitalInterruptPort()
```

## Implements

* [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
