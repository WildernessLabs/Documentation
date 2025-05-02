---
title: Interface IDigitalInterruptController
sidebar_label: IDigitalInterruptController
description: >-
  Contract for IO devices that are capable of creating `IDigitalInterruptPort`
  instances.
slug: /docs/api/Meadow/Meadow.Hardware/IDigitalInterruptController
---
# Interface IDigitalInterruptController
Contract for IO devices that are capable of creating `IDigitalInterruptPort`
instances.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInterruptController.cs#L8)
```csharp title="Declaration"
public interface IDigitalInterruptController : IPinController
```
## Methods
### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Creates an IDigitalInterruptPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInterruptController.cs#L28)
```csharp title="Declaration"
IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | An `InterruptMode` describing whether or
    not the port should be notify on change, and what type of change to
    notify on. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |
| `System.TimeSpan` | *debounceDuration* | The duration, with microseconds (µs) resolution,
    of the time to ignore state changes _after_ a deliberate state change
    has occurred. Used to prevent unwanted state changes due to noise.
    Set to `0` if no debounce filter is required. |
| `System.TimeSpan` | *glitchDuration* | The minimum duration, with microseconds
    (µs) resolution, of an initial state change to persist before it's notified as
    an intentional state change, rather than a spurious one. Use this to
    ensure that noise doesn't trigger an in interrupt. |

### CreateDigitalInterruptPort(IPin, InterruptMode)
Creates an IDigitalInterruptPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInterruptController.cs#L43)
```csharp title="Declaration"
IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | An `InterruptMode` describing whether or
    not the port should be notify on change, and what type of change to
    notify on. |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode)
Creates an IDigitalInterruptPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInterruptController.cs#L61)
```csharp title="Declaration"
IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | An `InterruptMode` describing whether or
    not the port should be notify on change, and what type of change to
    notify on. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |

### CreateDigitalSignalAnalyzer(IPin, bool)
Creates an IDigitalSignalAnalyzer on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IDigitalInterruptController.cs#L75)
```csharp title="Declaration"
IDigitalSignalAnalyzer CreateDigitalSignalAnalyzer(IPin pin, bool captureDutyCycle)
```

##### Returns

[Meadow.Hardware.IDigitalSignalAnalyzer](../Meadow.Hardware/IDigitalSignalAnalyzer)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the analyzer. |
| `System.Boolean` | *captureDutyCycle* | Whether or not to capture duty cycle. Not capturing it is more efficient and allows faster frequency capture |

