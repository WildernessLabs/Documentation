---
title: Namespace Meadow.Foundation.Motors.Stepper
sidebar_label: Meadow.Foundation.Motors.Stepper
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper
---
# Namespace Meadow.Foundation.Motors.Stepper
## Classes
### [A4988](../Meadow.Foundation.Motors.Stepper/A4988)
This class is for the A4988 Stepper Motor Driver
### [CwCcwStepper](../Meadow.Foundation.Motors.Stepper/CwCcwStepper)
A stepper motor that uses separate GPIO pulses for clockwise and counter-clockwise movement
### [GpioStepperBase](../Meadow.Foundation.Motors.Stepper/GpioStepperBase)
Represents an abstract GPIO-based stepper motor.
### [StepDirStepper](../Meadow.Foundation.Motors.Stepper/StepDirStepper)
A stepper motor that uses a GPIO pulse for step and a GPIO for travel direction
### [Uln2003](../Meadow.Foundation.Motors.Stepper/Uln2003)
This class is for controlling stepper motors that are controlled by a 4 pin controller board.
## Enums
### [StepDivisor](../Meadow.Foundation.Motors.Stepper/StepDivisor)
Step divisor
### [Uln2003.StepperMode](../Meadow.Foundation.Motors.Stepper/Uln2003.StepperMode)
The 28BYJ-48 motor has 512 full engine rotations to rotate the drive shaft once.
In half-step mode these are 8 x 512 = 4096 steps for a full rotation.
In full-step mode these are 4 x 512 = 2048 steps for a full rotation.
