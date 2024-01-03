---
title: Class CwCcwStepper
sidebar_label: CwCcwStepper
description: "A stepper motor that uses separate GPIO pulses for clockwise and counter-clockwise movement"
---
# Class CwCcwStepper
A stepper motor that uses separate GPIO pulses for clockwise and counter-clockwise movement

###### **Assembly**: GpioStepper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L14)
```csharp title="Declaration"
public class CwCcwStepper : GpioStepperBase, IStepperMotor, IPositionalMotor, IVariableSpeedMotor, IMotor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Motors.Stepper.GpioStepperBase](../Meadow.Foundation.Motors.Stepper/GpioStepperBase)

**Implements:**  
`Meadow.Peripherals.Motors.IStepperMotor`, `Meadow.Peripherals.Motors.IPositionalMotor`, `Meadow.Peripherals.Motors.IVariableSpeedMotor`, `Meadow.Peripherals.Motors.IMotor`

## Properties
### MinimumStartupDwellMicroseconds
Gets or sets the minimum step dwell time when motor changes from stationary to moving. Motors with more mass or larger steps require more dwell.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L30)
```csharp title="Declaration"
public int MinimumStartupDwellMicroseconds { get; set; }
```
### LinearAccelerationConstant
Gets or sets a constant that affects the rate of linear acceleration for the motor. A lower value yields faster acceleration.
Motors with more mass or larger steps require slower acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L36)
```csharp title="Declaration"
public int LinearAccelerationConstant { get; set; }
```
### StepsPerRevolution
Gets the number of steps required for the stepper motor to complete one full revolution.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L39)
```csharp title="Declaration"
public override int StepsPerRevolution { get; }
```
### InverseLogic
Gets a value indicating whether or not the logic for the stepper motor driver is inverted.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L47)
```csharp title="Declaration"
public bool InverseLogic { get; }
```
### IsMoving
Gets a value indicating whether the motor is currently in motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L50)
```csharp title="Declaration"
public override bool IsMoving { get; }
```
### Position
Gets the current position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L53)
```csharp title="Declaration"
public override Angle Position { get; }
```
### MaxVelocity
Gets the maximum run velocity for the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L56)
```csharp title="Declaration"
public override AngularVelocity MaxVelocity { get; }
```
## Methods
### ResetPosition(CancellationToken)
Resets the position of the motor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L59)
```csharp title="Declaration"
public override Task ResetPosition(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | A token to cancel the operation. |

### Rotate(int, RotationDirection, Frequency, CancellationToken)
Rotates the stepper motor by the specified number of steps in the specified direction with the given frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L136)
```csharp title="Declaration"
public override Task Rotate(int steps, RotationDirection direction, Frequency rate, CancellationToken cancellationToken = default)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.GpioStepper/Driver/CwCcwStepper.cs#L254)
```csharp title="Declaration"
public override Task Stop(CancellationToken cancellationToken = default)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* | Optional cancellation token to stop the operation. |


## Implements

* `Meadow.Peripherals.Motors.IStepperMotor`
* `Meadow.Peripherals.Motors.IPositionalMotor`
* `Meadow.Peripherals.Motors.IVariableSpeedMotor`
* `Meadow.Peripherals.Motors.IMotor`
