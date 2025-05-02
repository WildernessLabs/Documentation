---
title: Class DCMotor
sidebar_label: DCMotor
description: Represents a DC Motor
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/DCMotor
---
# Class DCMotor
Represents a DC Motor

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/DCMotor.cs#L10)
```csharp title="Declaration"
public class DCMotor
```
## Methods
### Run(Direction)
Controls the motor direction/action
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/DCMotor.cs#L56)
```csharp title="Declaration"
public virtual void Run(MotorWing.Direction command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.MotorWing.Direction](../Meadow.Foundation.FeatherWings/MotorWing.Direction) | *command* | The action |

### SetSpeed(double)
Control the DC Motor speed/throttle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/DCMotor.cs#L80)
```csharp title="Declaration"
public void SetSpeed(double speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Double` | *speed* | 0 is off, 1 is on |

### Stop()
Stops the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/DCMotor.cs#L88)
```csharp title="Declaration"
public void Stop()
```
