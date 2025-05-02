---
title: Interface IDigitalOutputController
sidebar_label: IDigitalOutputController
description: >-
  Contract for IO devices that are capable of creating `IDigitalOuputPort`
  instances.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalOutputController
---
# Interface IDigitalOutputController
Contract for IO devices that are capable of creating `IDigitalOuputPort`
instances.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalOutputController.cs#L7)
```csharp title="Declaration"
public interface IDigitalOutputController : IPinController
```
## Methods
### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an IDigitalOutputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalOutputController.cs#L18)
```csharp title="Declaration"
IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType initialOutputType = OutputType.PushPull)
```

##### Returns

[Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| `System.Boolean` | *initialState* | The default initial state of the port,
    either `LOW` (`false`), or `HIGH` (`true`). |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *initialOutputType* | Whether the port is initially configured
    as PushPull or OpenDrain. PushPull by default. |

