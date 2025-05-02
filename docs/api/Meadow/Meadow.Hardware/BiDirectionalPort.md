---
title: Class BiDirectionalPort
sidebar_label: BiDirectionalPort
description: Represents a bi-directional port.
slug: /docs/api/Meadow/Meadow.Hardware/BiDirectionalPort
---
# Class BiDirectionalPort
Represents a bi-directional port.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L9)
```csharp title="Declaration"
public class BiDirectionalPort : BiDirectionalPortBase, IBiDirectionalPort, IDigitalInputPort, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.BiDirectionalPortBase](../Meadow.Hardware/BiDirectionalPortBase)

**Implements:**  
[Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort), [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### IOController
Gets or sets the port's IOController
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L16)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; }
```
### LastEventTime
Gets or sets the last event time for the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L20)
```csharp title="Declaration"
protected DateTime LastEventTime { get; set; }
```
### Direction
Gets or sets the current direction of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L23)
```csharp title="Declaration"
public override PortDirectionType Direction { get; set; }
```
### State
Gets or sets the current state of the port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L155)
```csharp title="Declaration"
public override bool State { get; set; }
```
## Methods
### From(IPin, IMeadowIOController, bool, ResistorMode, PortDirectionType)
Creates a new instance of [Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort) with the specified parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L89)
```csharp title="Declaration"
public static BiDirectionalPort From(IPin pin, IMeadowIOController ioController, bool initialState = false, ResistorMode resistorMode = ResistorMode.Disabled, PortDirectionType initialDirection = PortDirectionType.Input)
```

##### Returns

[Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort): A new instance of [Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin associated with the bi-directional port. |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The Meadow I/O controller. |
| `System.Boolean` | *initialState* | The initial state of the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port. |

### From(IPin, IMeadowIOController, bool, ResistorMode, PortDirectionType, OutputType)
Creates a new instance of [Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort) with the specified parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L110)
```csharp title="Declaration"
public static BiDirectionalPort From(IPin pin, IMeadowIOController ioController, bool initialState, ResistorMode resistorMode, PortDirectionType initialDirection, OutputType outputType)
```

##### Returns

[Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort): A new instance of [Meadow.Hardware.BiDirectionalPort](../Meadow.Hardware/BiDirectionalPort).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin associated with the bi-directional port. |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The Meadow I/O controller. |
| `System.Boolean` | *initialState* | The initial state of the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port. |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *outputType* | The output type for the port. |

### ~BiDirectionalPort()
Finalizes the Port instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L130)
```csharp title="Declaration"
protected ~BiDirectionalPort()
```
### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/BiDirectionalPort.cs#L136)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |


## Implements

* [Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort)
* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
