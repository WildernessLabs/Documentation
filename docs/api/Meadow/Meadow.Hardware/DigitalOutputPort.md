---
title: Class DigitalOutputPort
sidebar_label: DigitalOutputPort
description: Represents a port that is capable of writing analog output.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalOutputPort
---
# Class DigitalOutputPort
Represents a port that is capable of writing analog output.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L9)
```csharp title="Declaration"
public class DigitalOutputPort : DigitalOutputPortBase, IDigitalOutputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.DigitalOutputPortBase](../Meadow.Hardware/DigitalOutputPortBase)

**Implements:**  
[Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### IOController
Gets or sets the port's IOController
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L14)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; }
```
### State
Gets or sets the state of the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L20)
```csharp title="Declaration"
public override bool State { get; set; }
```
## Methods
### From(IPin, IMeadowIOController, bool, OutputType)
From the specified pin and initialState.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L73)
```csharp title="Declaration"
public static DigitalOutputPort From(IPin pin, IMeadowIOController ioController, bool initialState = false, OutputType initialOutputType = OutputType.PushPull)
```

##### Returns

[Meadow.Hardware.DigitalOutputPort](../Meadow.Hardware/DigitalOutputPort): The from.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | Pin. |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The IO controller responsible for creating the port. |
| `System.Boolean` | *initialState* | If set to `true` initial state. |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *initialOutputType* | The initial port output type. |

### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L91)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |

### ~DigitalOutputPort()
Finalizes the Port instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalOutputPort.cs#L111)
```csharp title="Declaration"
protected ~DigitalOutputPort()
```

## Implements

* [Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
