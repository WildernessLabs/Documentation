---
title: Interface IAnalogInputController
sidebar_label: IAnalogInputController
description: >-
  Controller for analog input pins that enables creating individual analog input
  ports.
slug: /docs/api/Meadow/Meadow.Hardware/IAnalogInputController
---
# Interface IAnalogInputController
Controller for analog input pins that enables creating individual analog input ports.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogInputController.cs#L12)
```csharp title="Declaration"
public interface IAnalogInputController : IPinController
```
## Methods
### CreateAnalogInputPort(IPin, Voltage?)
Creates an analog input port using the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IAnalogInputController.cs#L20)
```csharp title="Declaration"
IAnalogInputPort CreateAnalogInputPort(IPin pin, Voltage? voltageReference = null)
```

##### Returns

[Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort): An instance of [Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort) configured for the specified pin.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to use for analog input. |
| `System.Nullable<Meadow.Units.Voltage>` | *voltageReference* | Optional reference voltage for the analog input. If null, the default reference voltage will be used. |

