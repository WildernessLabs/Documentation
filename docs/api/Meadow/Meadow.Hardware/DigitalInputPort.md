---
title: Class DigitalInputPort
sidebar_label: DigitalInputPort
description: Represents a port that is capable of reading digital input.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalInputPort
---
# Class DigitalInputPort
Represents a port that is capable of reading digital input.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L9)
```csharp title="Declaration"
public class DigitalInputPort : DigitalInputPortBase, IDigitalInputPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.PortBase&lt;C&gt;](../Meadow.Hardware/PortBase`C`) -> [Meadow.Hardware.DigitalPortBase](../Meadow.Hardware/DigitalPortBase) -> [Meadow.Hardware.DigitalInputPortBase](../Meadow.Hardware/DigitalInputPortBase)

**Implements:**  
[Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### IOController
Gets or sets the port's IOController
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L16)
```csharp title="Declaration"
protected IMeadowIOController IOController { get; set; }
```
### Resistor
Gets or Sets the internal resistor mode for the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L74)
```csharp title="Declaration"
public override ResistorMode Resistor { get; set; }
```
### State
Gets the current State of the input (True == high, False == low)
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L113)
```csharp title="Declaration"
public override bool State { get; }
```
## Methods
### From(IPin, IMeadowIOController, ResistorMode)
Creates an instance of a DigitalInputPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L54)
```csharp title="Declaration"
public static DigitalInputPort From(IPin pin, IMeadowIOController ioController, ResistorMode resistorMode)
```

##### Returns

[Meadow.Hardware.DigitalInputPort](../Meadow.Hardware/DigitalInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The IPin for the port |
| [Meadow.Hardware.IMeadowIOController](../Meadow.Hardware/IMeadowIOController) | *ioController* | The port's IO Controller |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The port's resistor mode |

### Dispose(bool)
Releases the resources used by the port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L85)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | A boolean value indicating whether the port is being disposed. |

### ~DigitalInputPort()
Finalizes the DigitalInputPort instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/DigitalInputPort.cs#L105)
```csharp title="Declaration"
protected ~DigitalInputPort()
```

## Implements

* [Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
