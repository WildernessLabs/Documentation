---
title: Interface IBiDirectionalController
sidebar_label: IBiDirectionalController
description: Contract for devices that expose `IBiDirectionPort(s)`.
slug: /docs/api/Meadow/Meadow.Hardware/IBiDirectionalController
---
# Interface IBiDirectionalController
Contract for devices that expose `IBiDirectionPort(s)`.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IBiDirectionalController.cs#L7)
```csharp title="Declaration"
public interface IBiDirectionalController : IPinController
```
## Methods
### CreateBiDirectionalInterruptPort(IPin, bool, InterruptMode, ResistorMode, PortDirectionType, TimeSpan, TimeSpan, OutputType)
Creates an `IBiDirectionalInterruptPort` on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IBiDirectionalController.cs#L31)
```csharp title="Declaration"
IBiDirectionalInterruptPort CreateBiDirectionalInterruptPort(IPin pin, bool initialState, InterruptMode interruptMode, ResistorMode resistorMode, PortDirectionType initialDirection, TimeSpan debounceDuration, TimeSpan glitchDuration, OutputType output = OutputType.PushPull)
```

##### Returns

[Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort): an `IBiDirectionalInterruptPort` for the specified pin
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| `System.Boolean` | *initialState* |  |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | An `InterruptMode` describing whether or
    not the port should be notify on change, and what type of change to
    notify on. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* |  |
| `System.TimeSpan` | *debounceDuration* | The duration, with microseconds (µs) resolution,
    of the time to ignore state changes _after_ a deliberate state change
    has occurred. Used to prevent unwanted state changes due to noise.
    Set to `0` if no debounce filter is required. |
| `System.TimeSpan` | *glitchDuration* | The minimum duration, with microseconds
    (µs) resolution, of an initial state change to persist before it's notified as
    an intentional state change, rather than a spurious one. Use this to
    ensure that noise doesn't trigger an in interrupt. |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *output* |  |

### CreateBiDirectionalInterruptPort(IPin)
Creates an `IBiDirectionalInterruptPort` on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IBiDirectionalController.cs#L47)
```csharp title="Declaration"
IBiDirectionalInterruptPort CreateBiDirectionalInterruptPort(IPin pin)
```

##### Returns

[Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort): an `IBiDirectionalInterruptPort` for the specified pin
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |

### CreateBiDirectionalPort(IPin, bool)
Creates an `IBiDirectionalInterruptPort` on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IOControllers/IBiDirectionalController.cs#L59)
```csharp title="Declaration"
IBiDirectionalPort CreateBiDirectionalPort(IPin pin, bool initialState)
```

##### Returns

[Meadow.Hardware.IBiDirectionalPort](../Meadow.Hardware/IBiDirectionalPort): an `IBiDirectionalInterruptPort` for the specified pin
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin on which to create the port. |
| `System.Boolean` | *initialState* |  |

