---
title: Class StepperMotor
sidebar_label: StepperMotor
description: Represents a Stepper Motor and provides functionality to control it.
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/StepperMotor
---
# Class StepperMotor
Represents a Stepper Motor and provides functionality to control it.

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/StepperMotor.cs#L12)
```csharp title="Declaration"
public class StepperMotor
```
## Methods
### SetSpeed(short)
Sets the speed of the stepper motor in revolutions per minute (RPM).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/StepperMotor.cs#L75)
```csharp title="Declaration"
public void SetSpeed(short rpm)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *rpm* | The desired RPM. |

### Step(int, Style)
Moves the stepper motor a specified number of steps at the current speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/StepperMotor.cs#L85)
```csharp title="Declaration"
public virtual void Step(int steps = 1, MotorWing.Style style = Style.SINGLE)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to move. A negative value moves the stepper backwards. |
| [Meadow.Foundation.FeatherWings.MotorWing.Style](../Meadow.Foundation.FeatherWings/MotorWing.Style) | *style* | The style of stepping to use. |

### Step(int, Direction, Style)
Moves the stepper motor a specified number of steps in a given direction and style.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/StepperMotor.cs#L103)
```csharp title="Declaration"
protected virtual void Step(int steps, MotorWing.Direction direction, MotorWing.Style style)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to move. |
| [Meadow.Foundation.FeatherWings.MotorWing.Direction](../Meadow.Foundation.FeatherWings/MotorWing.Direction) | *direction* | The direction to move. |
| [Meadow.Foundation.FeatherWings.MotorWing.Style](../Meadow.Foundation.FeatherWings/MotorWing.Style) | *style* | The style of stepping to use. |

### Step(Direction, Style)
Moves the stepper motor one step in a given direction and style.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/StepperMotor.cs#L130)
```csharp title="Declaration"
protected virtual int Step(MotorWing.Direction direction, MotorWing.Style style)
```

##### Returns

`System.Int32`: The current step position.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.MotorWing.Direction](../Meadow.Foundation.FeatherWings/MotorWing.Direction) | *direction* | The direction to move. |
| [Meadow.Foundation.FeatherWings.MotorWing.Style](../Meadow.Foundation.FeatherWings/MotorWing.Style) | *style* | The style of stepping to use. |

