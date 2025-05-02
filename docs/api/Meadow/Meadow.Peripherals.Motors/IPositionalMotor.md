---
title: Interface IPositionalMotor
sidebar_label: IPositionalMotor
description: Represents an interface for controlling a positional motor.
slug: /docs/api/Meadow/Meadow.Peripherals.Motors/IPositionalMotor
---
# Interface IPositionalMotor
Represents an interface for controlling a positional motor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L10)
```csharp title="Declaration"
public interface IPositionalMotor : IVariableSpeedMotor, IMotor
```
## Properties
### Position
Gets the current position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L15)
```csharp title="Declaration"
Angle Position { get; }
```
## Methods
### GoTo(Angle, AngularVelocity, CancellationToken)
Moves the motor to the specified position with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L23)
```csharp title="Declaration"
Task GoTo(Angle position, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Angle](../Meadow.Units/Angle) | *position* | The target position to move to. |
| [Meadow.Units.AngularVelocity](../Meadow.Units/AngularVelocity) | *velocity* | The angular velocity of the motor during the movement. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### GoTo(Angle, RotationDirection, AngularVelocity, CancellationToken)
Moves the motor to the specified position and direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L32)
```csharp title="Declaration"
Task GoTo(Angle position, RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Angle](../Meadow.Units/Angle) | *position* | The target position to move to. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The direction in which to move the motor. |
| [Meadow.Units.AngularVelocity](../Meadow.Units/AngularVelocity) | *velocity* | The angular velocity of the motor during the movement. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### ResetPosition(CancellationToken)
Resets the position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L38)
```csharp title="Declaration"
Task ResetPosition(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Rotate(Angle, RotationDirection, AngularVelocity, CancellationToken)
Rotates the motor by the specified angle and direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IPositionalMotor.cs#L47)
```csharp title="Declaration"
Task Rotate(Angle amountToRotate, RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Angle](../Meadow.Units/Angle) | *amountToRotate* | The angle by which to rotate the motor. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The direction in which to rotate the motor. |
| [Meadow.Units.AngularVelocity](../Meadow.Units/AngularVelocity) | *velocity* | The angular velocity of the motor during the rotation. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

