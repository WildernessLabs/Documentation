---
title: Interface IStepperMotor
sidebar_label: IStepperMotor
description: Represents an interface for controlling a stepper motor.
slug: /docs/api/Meadow/Meadow.Peripherals.Motors/IStepperMotor
---
# Interface IStepperMotor
Represents an interface for controlling a stepper motor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IStepperMotor.cs#L10)
```csharp title="Declaration"
public interface IStepperMotor : IPositionalMotor, IVariableSpeedMotor, IMotor
```
## Properties
### StepsPerRevolution
Gets the number of steps required for the stepper motor to complete one full revolution.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IStepperMotor.cs#L24)
```csharp title="Declaration"
int StepsPerRevolution { get; }
```
## Methods
### Rotate(int, RotationDirection, Frequency, CancellationToken)
Rotates the stepper motor by the specified number of steps in the specified direction with the given frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IStepperMotor.cs#L19)
```csharp title="Declaration"
Task Rotate(int steps, RotationDirection direction, Frequency rate, CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to rotate the motor. |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The direction in which to rotate the motor. |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *rate* | The frequency of the steps at which to rotate the motor. |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

