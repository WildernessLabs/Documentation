---
title: Class ContinuousRotationServoBase
sidebar_label: ContinuousRotationServoBase
description: "Base class implementation for servos that can rotate continuously."
---
# Class ContinuousRotationServoBase
Base class implementation for servos that can rotate continuously.

###### **Assembly**: ServoCore.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L9)
```csharp title="Declaration"
public abstract class ContinuousRotationServoBase : ServoBase, IContinuousRotationServo, IServo
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Servos.ServoBase](../Meadow.Foundation.Servos/ServoBase)

**Derived:**  
[Meadow.Foundation.Servos.ContinuousRotationServo](../Meadow.Foundation.Servos/ContinuousRotationServo)

**Implements:**  
[Meadow.Foundation.Servos.IContinuousRotationServo](../Meadow.Foundation.Servos/IContinuousRotationServo), [Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)

## Properties
### CurrentDirection
Gets the current rotation direction.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L14)
```csharp title="Declaration"
public RotationDirection CurrentDirection { get; protected set; }
```
### CurrentSpeed
Gets the current rotation speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L19)
```csharp title="Declaration"
public float CurrentSpeed { get; protected set; }
```
## Methods
### Rotate(RotationDirection, float)
Starts rotating the servo in the specified direction, at the specified speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L36)
```csharp title="Declaration"
public void Rotate(RotationDirection direction, float speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Servos.RotationDirection](../Meadow.Foundation.Servos/RotationDirection) | *direction* | Clockwise/counterclockwise. |
| `System.Single` | *speed* | 0.0 to 1.0 (0% to 100%). |

### Stop()
Stops rotation of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L57)
```csharp title="Declaration"
public override void Stop()
```
### CalculatePulseDuration(RotationDirection, float)
Continuous rotation servos usually have a zero speed at their midpoint pulse 
duration (between min and max). As you lower the duration from midpoint, they 
rotate clockwise and rotate their fastest at the minimum pulse duration. As 
you increase the pulse duration, they rotate counter-clockwise.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L73)
```csharp title="Declaration"
protected float CalculatePulseDuration(RotationDirection direction, float speed)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Servos.RotationDirection](../Meadow.Foundation.Servos/RotationDirection) | *direction* |
| `System.Single` | *speed* |

### SendCommandPulse(float)
Send command pulse
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ContinuousRotationServoBase.cs#L98)
```csharp title="Declaration"
protected override void SendCommandPulse(float pulseDuration)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *pulseDuration* | Pulse duration |


## Implements

* [Meadow.Foundation.Servos.IContinuousRotationServo](../Meadow.Foundation.Servos/IContinuousRotationServo)
* [Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)
