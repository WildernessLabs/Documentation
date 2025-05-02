---
title: Interface IVariableSpeedMotor
sidebar_label: IVariableSpeedMotor
description: Represents an interface for controlling a motor with variable speed.
slug: /docs/api/Meadow/Meadow.Peripherals.Motors/IVariableSpeedMotor
---
# Interface IVariableSpeedMotor
Represents an interface for controlling a motor with variable speed.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L11)
```csharp title="Declaration"
public interface IVariableSpeedMotor : IMotor
```
## Properties
### MaxVelocity
Gets the maximum run velocity for the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L16)
```csharp title="Declaration"
AngularVelocity MaxVelocity { get; }
```
## Methods
### RunFor(TimeSpan, RotationDirection, AngularVelocity, CancellationToken)
Runs the motor for a specified duration with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L26)
```csharp title="Declaration"
Task RunFor(TimeSpan runTime, RotationDirection direction, AngularVelocity angularVelocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which the motor should run. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| [Meadow.Units.AngularVelocity](../Meadow.Units/AngularVelocity) | *angularVelocity* | The AngularVelocity at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### Run(RotationDirection, AngularVelocity, CancellationToken)
Runs the motor continuously with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L35)
```csharp title="Declaration"
Task Run(RotationDirection direction, AngularVelocity angularVelocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| [Meadow.Units.AngularVelocity](../Meadow.Units/AngularVelocity) | *angularVelocity* | The AngularVelocity at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### RunFor(TimeSpan, RotationDirection, float, CancellationToken)
Runs the motor for a specified duration with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L45)
```csharp title="Declaration"
Task RunFor(TimeSpan runTime, RotationDirection direction, float speed = 100, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which the motor should run. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| `System.Single` | *speed* | The speed (as a percentage) at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### Run(RotationDirection, float, CancellationToken)
Runs the motor continuously with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IVariableSpeedMotor.cs#L58)
```csharp title="Declaration"
Task Run(RotationDirection direction, float speed = 100, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The rotation direction of the motor. |
| `System.Single` | *speed* | The speed (as a percentage) at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

