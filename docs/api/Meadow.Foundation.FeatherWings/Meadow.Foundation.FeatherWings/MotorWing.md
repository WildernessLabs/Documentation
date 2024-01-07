---
title: Class MotorWing
sidebar_label: MotorWing
description: "Represents Adafruit's Feather DC and Stepper Motor Wing"
---
# Class MotorWing
Represents Adafruit's Feather DC and Stepper Motor Wing

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/MotorWing.cs#L10)
```csharp title="Declaration"
public class MotorWing
```
## Methods
### Initialize()
Initialize the MotorWings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/MotorWing.cs#L33)
```csharp title="Declaration"
public void Initialize()
```
### GetStepper(short, int)
Returns a instance of a Stepper Motor object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/MotorWing.cs#L44)
```csharp title="Declaration"
public StepperMotor GetStepper(short stepperMotorIndex, int steps)
```

##### Returns

[Meadow.Foundation.FeatherWings.StepperMotor](../Meadow.Foundation.FeatherWings/StepperMotor): StepperMotor
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *stepperMotorIndex* | The stepper motor port we want to use: only 0 or 1 are valid |
| `System.Int32` | *steps* | The number of steps the motor has |

### GetMotor(short)
Returns a instance of a DC Motor object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/MotorWing.cs#L61)
```csharp title="Declaration"
public DCMotor GetMotor(short dcMotorIndex)
```

##### Returns

[Meadow.Foundation.FeatherWings.DCMotor](../Meadow.Foundation.FeatherWings/DCMotor): DCMotor
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *dcMotorIndex* | The motor port we want to use: 1 thru 4 are valid |

