---
title: Class MotorWing
sidebar_label: MotorWing
description: Represents Adafruit's Feather DC and Stepper Motor Wing
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/MotorWing
---
# Class MotorWing
Represents Adafruit's Feather DC and Stepper Motor Wing

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L3)
```csharp title="Declaration"
public class MotorWing
```
## Methods
### GetStepper(StepperMotorIndex, int)
Returns a instance of a Stepper Motor object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.cs#L36)
```csharp title="Declaration"
public StepperMotor GetStepper(MotorWing.StepperMotorIndex motorIndex, int steps)
```

##### Returns

[Meadow.Foundation.FeatherWings.StepperMotor](../Meadow.Foundation.FeatherWings/StepperMotor): StepperMotor
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.MotorWing.StepperMotorIndex](../Meadow.Foundation.FeatherWings/MotorWing.StepperMotorIndex) | *motorIndex* | The stepper motor port |
| `System.Int32` | *steps* | The number of steps the motor has |

### GetMotor(DCMotorIndex)
Returns a instance of a DC Motor object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.cs#L46)
```csharp title="Declaration"
public DCMotor GetMotor(MotorWing.DCMotorIndex motorIndex)
```

##### Returns

[Meadow.Foundation.FeatherWings.DCMotor](../Meadow.Foundation.FeatherWings/DCMotor): DCMotor
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.MotorWing.DCMotorIndex](../Meadow.Foundation.FeatherWings/MotorWing.DCMotorIndex) | *motorIndex* | The motor port |

