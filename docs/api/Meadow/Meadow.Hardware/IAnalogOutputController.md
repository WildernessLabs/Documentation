---
title: Interface IAnalogOutputController
sidebar_label: IAnalogOutputController
description: >-
  Contract for IO devices that are capable of creating an `IAnalogOutputPort`
  instances.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogOutputController
---
# Interface IAnalogOutputController
Contract for IO devices that are capable of creating an `IAnalogOutputPort`
instances.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogOutputController.cs#L7)
```csharp title="Declaration"
public interface IAnalogOutputController : IPinController
```
## Methods
### CreateAnalogOutputPort(IPin)
Creates an IAnalogOutputPort on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogOutputController.cs#L13)
```csharp title="Declaration"
IAnalogOutputPort CreateAnalogOutputPort(IPin pin)
```

##### Returns

[Meadow.Hardware.IAnalogOutputPort](../Meadow.Hardware/IAnalogOutputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |

