---
title: Class DCMotor
sidebar_label: DCMotor
description: "Represents a DC Motor"
---
# Class DCMotor
Represents a DC Motor

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/DCMotor.cs#L28)
```csharp title="Declaration"
public class DCMotor : Motor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.FeatherWings.Motor](../Meadow.Foundation.FeatherWings/Motor)

## Methods
### Run(Commmand)
Controls the motor direction/action
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/DCMotor.cs#L81)
```csharp title="Declaration"
public virtual void Run(Commmand command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.Commmand](../Meadow.Foundation.FeatherWings/Commmand) | *command* | The action |

### SetSpeed(short)
Control the DC Motor speed/throttle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/DCMotor.cs#L106)
```csharp title="Declaration"
public override void SetSpeed(short speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *speed* | The 8-bit PWM value, 0 is off, 255 is on |

### PreciseSpeed(short)
Control the DC Motor speed/throttle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/DCMotor.cs#L125)
```csharp title="Declaration"
public void PreciseSpeed(short speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *speed* | The 12-bit PWM value, 0 is off, 4096 is on |

### Stop()
Stops the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/DCMotor.cs#L139)
```csharp title="Declaration"
public void Stop()
```
