---
title: Interface IContinuousRotationServo
sidebar_label: IContinuousRotationServo
description: >-
  Represents a continuous rotation servo interface, extending the basic servo
  interface with additional properties and methods for controlling rotation.
slug: /docs/api/Meadow/Meadow.Peripherals.Servos/IContinuousRotationServo
---
# Interface IContinuousRotationServo
Represents a continuous rotation servo interface, extending the basic servo interface with additional properties and methods for controlling rotation.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IContinuousRotationServo.cs#L6)
```csharp title="Declaration"
public interface IContinuousRotationServo : IServo
```
## Properties
### Direction
Gets the current direction of rotation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IContinuousRotationServo.cs#L11)
```csharp title="Declaration"
RotationDirection Direction { get; }
```
### Speed
Gets the current speed of rotation, between 0.0 (stopped) and 1.0 (full speed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IContinuousRotationServo.cs#L16)
```csharp title="Declaration"
double Speed { get; }
```
## Methods
### Rotate(RotationDirection, double)
Rotates the servo in the specified direction at the specified speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IContinuousRotationServo.cs#L23)
```csharp title="Declaration"
void Rotate(RotationDirection direction, double speed)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.RotationDirection](../Meadow.Peripherals/RotationDirection) | *direction* | The direction of rotation. |
| `System.Double` | *speed* | The speed of rotation, between 0.0 (stopped) and 1.0 (full speed). |

