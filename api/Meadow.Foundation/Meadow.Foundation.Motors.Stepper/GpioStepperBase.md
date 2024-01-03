---
title: Class GpioStepperBase
sidebar_label: GpioStepperBase
description: "Represents an abstract GPIO-based stepper motor."
---
# Class GpioStepperBase
Represents an abstract GPIO-based stepper motor.

###### **Assembly**: GpioStepper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L13)
```csharp title="Declaration"
public abstract class GpioStepperBase : IStepperMotor, IPositionalMotor, IVariableSpeedMotor, IMotor
```
**Derived:**  
[Meadow.Foundation.Motors.Stepper.CwCcwStepper](../Meadow.Foundation.Motors.Stepper/CwCcwStepper), [Meadow.Foundation.Motors.Stepper.StepDirStepper](../Meadow.Foundation.Motors.Stepper/StepDirStepper)

**Implements:**  
`Meadow.Peripherals.Motors.IStepperMotor`, `Meadow.Peripherals.Motors.IPositionalMotor`, `Meadow.Peripherals.Motors.IVariableSpeedMotor`, `Meadow.Peripherals.Motors.IMotor`

## Properties
### Direction
Gets the current rotation direction of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L18)
```csharp title="Declaration"
public RotationDirection Direction { get; protected set; }
```
### Position
Gets the current position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L21)
```csharp title="Declaration"
public abstract Angle Position { get; }
```
### IsMoving
Gets a value indicating whether the motor is currently in motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L24)
```csharp title="Declaration"
public abstract bool IsMoving { get; }
```
### MaxVelocity
Gets the maximum run velocity for the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L36)
```csharp title="Declaration"
public abstract AngularVelocity MaxVelocity { get; }
```
### StepsPerRevolution
Gets the number of steps required for the stepper motor to complete one full revolution.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L39)
```csharp title="Declaration"
public abstract int StepsPerRevolution { get; }
```
## Methods
### Rotate(int, RotationDirection, Frequency, CancellationToken)
Rotates the stepper motor by the specified number of steps in the specified direction with the given frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L27)
```csharp title="Declaration"
public abstract Task Rotate(int steps, RotationDirection direction, Frequency rate, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to rotate the motor. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction in which to rotate the motor. |
| `Meadow.Units.Frequency` | *rate* | The frequency of the steps at which to rotate the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Stop(CancellationToken)
Stops the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L30)
```csharp title="Declaration"
public abstract Task Stop(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### ResetPosition(CancellationToken)
Resets the position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L33)
```csharp title="Declaration"
public abstract Task ResetPosition(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### GetFrequencyForVelocity(AngularVelocity)
Gets the frequency corresponding to the specified angular velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L53)
```csharp title="Declaration"
protected Frequency GetFrequencyForVelocity(AngularVelocity velocity)
```

##### Returns

`Meadow.Units.Frequency`: The frequency required for the specified angular velocity.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity. |

### GoTo(Angle, AngularVelocity, CancellationToken)
Moves the motor to the specified position with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L66)
```csharp title="Declaration"
public Task GoTo(Angle position, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *position* | The target position to move to. |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity of the motor during the movement. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### GoTo(Angle, RotationDirection, AngularVelocity, CancellationToken)
Moves the motor to the specified position and direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L109)
```csharp title="Declaration"
public Task GoTo(Angle position, RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *position* | The target position to move to. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction in which to move the motor. |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity of the motor during the movement. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Rotate(Angle, RotationDirection, AngularVelocity, CancellationToken)
Rotates the motor by the specified angle and direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L149)
```csharp title="Declaration"
public Task Rotate(Angle amountToRotate, RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *amountToRotate* | The angle by which to rotate the motor. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction in which to rotate the motor. |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity of the motor during the rotation. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Run(RotationDirection, AngularVelocity, CancellationToken)
Runs the motor in the specified direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L159)
```csharp title="Declaration"
public Task Run(RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction in which to run the motor. |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity of the motor during the run. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### RunFor(TimeSpan, RotationDirection, AngularVelocity, CancellationToken)
Runs the motor for a specified duration in the specified direction with the given velocity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L169)
```csharp title="Declaration"
public Task RunFor(TimeSpan runTime, RotationDirection direction, AngularVelocity velocity, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which to run the motor. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction in which to run the motor. |
| `Meadow.Units.AngularVelocity` | *velocity* | The angular velocity of the motor during the run. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Run(RotationDirection, float, CancellationToken)
Runs the motor continuously with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L188)
```csharp title="Declaration"
public Task Run(RotationDirection direction, float speed, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.RotationDirection` | *direction* | The rotation direction of the motor. |
| `System.Single` | *speed* | The speed (as a percentage) at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### RunFor(TimeSpan, RotationDirection, float, CancellationToken)
Runs the motor for a specified duration with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L198)
```csharp title="Declaration"
public virtual Task RunFor(TimeSpan runTime, RotationDirection direction, float speed, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which the motor should run. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The rotation direction of the motor. |
| `System.Single` | *speed* | The speed (as a percentage) at which the motor should run (0 to 100). |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### RunFor(TimeSpan, RotationDirection, CancellationToken)
Runs the motor for a specified duration with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L208)
```csharp title="Declaration"
public Task RunFor(TimeSpan runTime, RotationDirection direction, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *runTime* | The duration for which the motor should run. |
| `Meadow.Peripherals.RotationDirection` | *direction* | The rotation direction of the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |

### Run(RotationDirection, CancellationToken)
Runs the motor continuously with the given parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/GpioStepper.cs#L214)
```csharp title="Declaration"
public Task Run(RotationDirection direction, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.RotationDirection` | *direction* | The rotation direction of the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |


## Implements

* `Meadow.Peripherals.Motors.IStepperMotor`
* `Meadow.Peripherals.Motors.IPositionalMotor`
* `Meadow.Peripherals.Motors.IVariableSpeedMotor`
* `Meadow.Peripherals.Motors.IMotor`
