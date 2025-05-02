---
title: Interface IDigitalInputController
sidebar_label: IDigitalInputController
description: >-
  Contract for IO devices that are capable of creating an `IDigitalInputPort`
  instances.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalInputController
---
# Interface IDigitalInputController
Contract for IO devices that are capable of creating an `IDigitalInputPort`
instances.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInputController.cs#L7)
```csharp title="Declaration"
public interface IDigitalInputController : IPinController
```
## Methods
### CreateDigitalInputPort(IPin, ResistorMode)
Creates an IDigitalInputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInputController.cs#L16)
```csharp title="Declaration"
IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode)
```

##### Returns

[Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |

### CreateDigitalInputPort(IPin)
Creates an IDigitalInputPort on the specified pin with Disabled resistor mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInputController.cs#L25)
```csharp title="Declaration"
IDigitalInputPort CreateDigitalInputPort(IPin pin)
```

##### Returns

[Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |

