---
title: Interface IContinuousRotationServo
sidebar_label: IContinuousRotationServo
description: "Continuous rotation servo abstraction"
---
# Interface IContinuousRotationServo
Continuous rotation servo abstraction

###### **Assembly**: ServoCore.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IContinuousRotationServo.cs#L6)
```csharp title="Declaration"
public interface IContinuousRotationServo : IServo
```
## Properties
### CurrentDirection
Current direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IContinuousRotationServo.cs#L11)
```csharp title="Declaration"
RotationDirection CurrentDirection { get; }
```
### CurrentSpeed
Current servo speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IContinuousRotationServo.cs#L16)
```csharp title="Declaration"
float CurrentSpeed { get; }
```
## Methods
### Rotate(RotationDirection, float)
Rotate to a direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IContinuousRotationServo.cs#L23)
```csharp title="Declaration"
void Rotate(RotationDirection direction, float speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Servos.RotationDirection](../Meadow.Foundation.Servos/RotationDirection) | *direction* | The direction |
| `System.Single` | *speed* | The rotation speed |

### Stop()
Stop movement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IContinuousRotationServo.cs#L28)
```csharp title="Declaration"
void Stop()
```
