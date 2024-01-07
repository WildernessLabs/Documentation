---
title: Class StepperMotor
sidebar_label: StepperMotor
description: "Represents a Stepper Motor"
---
# Class StepperMotor
Represents a Stepper Motor

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/StepperMotor.cs#L48)
```csharp title="Declaration"
public class StepperMotor : Motor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.FeatherWings.Motor](../Meadow.Foundation.FeatherWings/Motor)

## Methods
### SetSpeed(short)
Set the delay for the Stepper Motor speed in RPM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/StepperMotor.cs#L105)
```csharp title="Declaration"
public override void SetSpeed(short rpm)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int16` | *rpm* | The desired RPM |

### Step(int, Style)
Move the stepper with the given RPM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/StepperMotor.cs#L115)
```csharp title="Declaration"
public virtual void Step(int steps = 1, Style style = Style.SINGLE)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to move. Negative number moves the stepper backwards |
| [Meadow.Foundation.FeatherWings.Style](../Meadow.Foundation.FeatherWings/Style) | *style* | How to perform the step |

### Step(int, Direction, Style)
Move the stepper with the given RPM
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/StepperMotor.cs#L133)
```csharp title="Declaration"
protected virtual void Step(int steps, Direction direction, Style style)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | The number of steps to move |
| [Meadow.Foundation.FeatherWings.Direction](../Meadow.Foundation.FeatherWings/Direction) | *direction* | The direction to go |
| [Meadow.Foundation.FeatherWings.Style](../Meadow.Foundation.FeatherWings/Style) | *style* | How to perform the step |

### Step(Direction, Style)
Move the stepper one step only
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/MotorWing/Driver/StepperMotor.cs#L160)
```csharp title="Declaration"
protected virtual int Step(Direction direction, Style style)
```

##### Returns

`System.Int32`: The current location
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.FeatherWings.Direction](../Meadow.Foundation.FeatherWings/Direction) | *direction* | The direction to go |
| [Meadow.Foundation.FeatherWings.Style](../Meadow.Foundation.FeatherWings/Style) | *style* | How to perform the step |

