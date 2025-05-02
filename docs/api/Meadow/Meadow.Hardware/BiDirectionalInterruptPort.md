---
title: Class BiDirectionalInterruptPort
sidebar_label: BiDirectionalInterruptPort
description: >-
  Represents a port that is capable of reading and writing digital input and
  output.
slug: /docs/api/Meadow/Meadow.Hardware/BiDirectionalInterruptPort
---
# Class BiDirectionalInterruptPort
Represents a port that is capable of reading and writing digital input
and output.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L10)
```csharp title="Declaration"
public class BiDirectionalInterruptPort : BiDirectionalInterruptPortBase, IBiDirectionalPort, IBiDirectionalInterruptPort, IDigitalInterruptPort, IDigitalInputPort, IObservable<IChangeResult<DigitalState>>, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.BiDirectionalPortBase](../Meadow.Hardware/BiDirectionalPortBase) -> [Meadow.Hardware.BiDirectionalInterruptPortBase](../Meadow.Hardware/BiDirectionalInterruptPortBase)

**Implements:**  

<details>
<summary>Expand</summary>

[Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort), [Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort), [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`, [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`
</details>



## Properties
### IOController
Gets or sets the port's IOController
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L20)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; }
```
### LastEventTime
Gets or sets the last event time for the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L24)
```csharp title="Declaration"
protected DateTime LastEventTime { get; set; }
```
### Direction
Gets or sets the current direction of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L27)
```csharp title="Declaration"
public override PortDirectionType Direction { get; set; }
```
### Resistor
Gets the resistor mode of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L209)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### State
Gets or sets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L251)
```csharp title="Declaration"
public override bool State { get; set; }
```
### DebounceDuration
Gets or sets the debounce duration of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L267)
```csharp title="Declaration"
public override TimeSpan DebounceDuration { get; set; }
```
### GlitchDuration
Gets or sets the glitch filter duration of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L280)
```csharp title="Declaration"
public override TimeSpan GlitchDuration { get; set; }
```
## Methods
### From(IPin, IMeadowIOController, bool, InterruptMode, ResistorMode, PortDirectionType)
Creates a new instance of [Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort) with default debounce and glitch durations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L163)
```csharp title="Declaration"
public static BiDirectionalInterruptPort From(IPin pin, IMeadowIOController ioController, bool initialState = false, InterruptMode interruptMode = InterruptMode.None, ResistorMode resistorMode = ResistorMode.Disabled, PortDirectionType initialDirection = PortDirectionType.Input)
```

##### Returns

[Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort): A new instance of [Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin associated with the bi-directional interrupt port. |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The Meadow I/O controller. |
| `System.Boolean` | *initialState* | The initial state of the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port. |

### From(IPin, IMeadowIOController, bool, InterruptMode, ResistorMode, PortDirectionType, TimeSpan, TimeSpan, OutputType)
Creates a new instance of [Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort).
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L188)
```csharp title="Declaration"
public static BiDirectionalInterruptPort From(IPin pin, IMeadowIOController ioController, bool initialState, InterruptMode interruptMode, ResistorMode resistorMode, PortDirectionType initialDirection, TimeSpan debounceDuration, TimeSpan glitchDuration, OutputType outputType)
```

##### Returns

[Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort): A new instance of [Meadow.Hardware.BiDirectionalInterruptPort](../Meadow.Hardware/BiDirectionalInterruptPort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin associated with the bi-directional interrupt port. |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The Meadow I/O controller. |
| `System.Boolean` | *initialState* | The initial state of the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port. |
| `System.TimeSpan` | *debounceDuration* | The debounce duration for the port. |
| `System.TimeSpan` | *glitchDuration* | The glitch duration for the port. |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *outputType* | The output type for the port. |

### ~BiDirectionalInterruptPort()
Finalizes the Port instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L225)
```csharp title="Declaration"
protected ~BiDirectionalInterruptPort()
```
### Dispose(bool)
Releases allocated port resources
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalInterruptPort.cs#L231)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |


## Implements

* [Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort)
* [Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort)
* [Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* `System.IObservable<Meadow.IChangeResult<Meadow.Hardware.DigitalState>>`
* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
