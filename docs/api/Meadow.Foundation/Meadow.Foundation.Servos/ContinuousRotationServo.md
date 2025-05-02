---
title: Class ContinuousRotationServo
sidebar_label: ContinuousRotationServo
description: >-
  Represents a continuous rotation servo, extending the base servo
  functionality.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Servos/ContinuousRotationServo
---
# Class ContinuousRotationServo
Represents a continuous rotation servo, extending the base servo functionality.

###### **Assembly**: Servos.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L12)
```csharp title="Declaration"
public class ContinuousRotationServo : ServoBase, IDisposable, IContinuousRotationServo, IServo
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Servos.ServoBase](../Meadow.Foundation.Servos/ServoBase)

**Derived:**  
[Meadow.Foundation.Servos.Fs90r](../Meadow.Foundation.Servos/Fs90r)

**Implements:**  
`System.IDisposable`, `Meadow.Peripherals.Servos.IContinuousRotationServo`, `Meadow.Peripherals.Servos.IServo`

## Properties
### Speed
Gets the current speed of rotation, between 0.0 (stopped) and 1.0 (full speed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L18)
```csharp title="Declaration"
public double Speed { get; }
```
### Direction
Gets the current direction of rotation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L20)
```csharp title="Declaration"
public RotationDirection Direction { get; }
```
## Methods
### Rotate(RotationDirection, double)
Rotates the servo in the specified direction at the specified speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L58)
```csharp title="Declaration"
public void Rotate(RotationDirection direction, double speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.RotationDirection` | *direction* | The direction of rotation. |
| `System.Double` | *speed* | The speed of rotation, between 0.0 (stopped) and 1.0 (full speed). |

### Disable()
Disables the servo, stopping any movement.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L100)
```csharp title="Declaration"
public override void Disable()
```
### Neutral()
Sets the servo to its neutral position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ContinuousRotationServo.cs#L107)
```csharp title="Declaration"
public override void Neutral()
```

## Implements

* `System.IDisposable`
* `Meadow.Peripherals.Servos.IContinuousRotationServo`
* `Meadow.Peripherals.Servos.IServo`
