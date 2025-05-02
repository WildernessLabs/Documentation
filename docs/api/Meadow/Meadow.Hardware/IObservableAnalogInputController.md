---
title: Interface IObservableAnalogInputController
sidebar_label: IObservableAnalogInputController
description: Contract for devices that expose `IAnalogInputPort(s)`.
slug: /docs/api/Meadow/Meadow.Hardware/IObservableAnalogInputController
---
# Interface IObservableAnalogInputController
Contract for devices that expose `IAnalogInputPort(s)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L9)
```csharp title="Declaration"
public interface IObservableAnalogInputController : IAnalogInputArrayController, IAnalogInputController, IPinController
```
## Fields
### DefaultA2DReferenceVoltage
The default Analog to Digital converter reference voltage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L16)
```csharp title="Declaration"
public const float DefaultA2DReferenceVoltage = 3.3
```
## Methods
### CreateAnalogInputPort(IPin, Voltage?)

###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L19)
```csharp title="Declaration"
IAnalogInputPort CreateAnalogInputPort(IPin pin, Voltage? voltageReference = null)
```

##### Returns

[Meadow.Hardware.IAnalogInputPort](../Meadow.Hardware/IAnalogInputPort)

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| `System.Nullable<Meadow.Units.Voltage>` | *voltageReference* |

### CreateAnalogInputPort(IPin, int)
Initializes the specified pin to be an AnalogInput and returns the
port used to sample the port value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L29)
```csharp title="Declaration"
IObservableAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount)
```

##### Returns

[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create the port on. |
| `System.Int32` | *sampleCount* | The number of samples to use for input averaging |

### CreateAnalogInputPort(IPin, int, TimeSpan)
Initializes the specified pin to be an AnalogInput and returns the
port used to sample the port value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L41)
```csharp title="Declaration"
IObservableAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount, TimeSpan sampleInterval)
```

##### Returns

[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create the port on. |
| `System.Int32` | *sampleCount* | The number of samples to use for input averaging |
| `System.TimeSpan` | *sampleInterval* | The interval between readings |

### CreateAnalogInputPort(IPin, int, TimeSpan, Voltage)
Initializes the specified pin to be an AnalogInput and returns the
port used to sample the port value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IObservableAnalogInputController.cs#L56)
```csharp title="Declaration"
IObservableAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount, TimeSpan sampleInterval, Voltage voltageReference)
```

##### Returns

[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create the port on. |
| `System.Int32` | *sampleCount* | The number of samples to use for input averaging |
| `System.TimeSpan` | *sampleInterval* | The interval between readings |
| [Meadow.Units.Voltage](../Meadow.Units/Voltage) | *voltageReference* | Reference maximum analog input port
    voltage in Volts. Default is 3.3V. |

