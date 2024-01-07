---
title: Class Motor
sidebar_label: Motor
description: "Represents a generic motor"
---
# Class Motor
Represents a generic motor

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/Motor.cs#L8)
```csharp title="Declaration"
public abstract class Motor
```
**Derived:**  
[Meadow.Foundation.FeatherWings.DCMotor](../Meadow.Foundation.FeatherWings/DCMotor), [Meadow.Foundation.FeatherWings.StepperMotor](../Meadow.Foundation.FeatherWings/StepperMotor)

## Fields
### pca9685
The pca9685 instance used to control the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/Motor.cs#L13)
```csharp title="Declaration"
protected readonly Pca9685 pca9685
```
## Methods
### SetSpeed(short)
Set the motor speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/Motor.cs#L28)
```csharp title="Declaration"
public abstract void SetSpeed(short speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *speed* | The motor speed |

