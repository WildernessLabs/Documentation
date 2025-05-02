---
title: Interface IMotor
sidebar_label: IMotor
description: Represents an interface for controlling a motor.
slug: /docs/api/Meadow/Meadow.Peripherals.Motors/IMotor
---
# Interface IMotor
Represents an interface for controlling a motor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L10)
```csharp title="Declaration"
public interface IMotor
```
## Properties
### Direction
Gets the current rotation direction of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L20)
```csharp title="Declaration"
RotationDirection Direction { get; }
```
### IsMoving
Gets a value indicating whether the motor is currently in motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L53)
```csharp title="Declaration"
bool IsMoving { get; }
```
## Methods
### RunFor(TimeSpan, RotationDirection, CancellationToken)
Runs the motor for a specified duration with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L29)
```csharp title="Declaration"
Task RunFor(TimeSpan runTime, RotationDirection direction, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which the motor should run. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### Run(RotationDirection, CancellationToken)
Runs the motor continuously with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L37)
```csharp title="Declaration"
Task Run(RotationDirection direction, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### Stop(CancellationToken)
Stops the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L44)
```csharp title="Declaration"
Task Stop(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

## Events
### StateChanged
Raised when the movement state of the motor changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IMotor.cs#L15)
```csharp title="Declaration"
event EventHandler<bool>? StateChanged
```
##### Event Type
`System.EventHandler<System.Boolean>`
