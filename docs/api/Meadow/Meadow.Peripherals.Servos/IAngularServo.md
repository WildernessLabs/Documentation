---
title: Interface IAngularServo
sidebar_label: IAngularServo
description: >-
  Represents an angular servo interface, extending the basic servo interface
  with additional properties and methods for controlling angular position.
slug: /docs/api/Meadow/Meadow.Peripherals.Servos/IAngularServo
---
# Interface IAngularServo
Represents an angular servo interface, extending the basic servo interface with additional properties and methods for controlling angular position.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IAngularServo.cs#L8)
```csharp title="Declaration"
public interface IAngularServo : IServo
```
## Properties
### Angle
Gets the current angle of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IAngularServo.cs#L20)
```csharp title="Declaration"
Angle Angle { get; }
```
### MinimumAngle
Gets the minimum angle that the servo can rotate to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IAngularServo.cs#L25)
```csharp title="Declaration"
Angle MinimumAngle { get; }
```
### MaximumAngle
Gets the maximum angle that the servo can rotate to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IAngularServo.cs#L30)
```csharp title="Declaration"
Angle MaximumAngle { get; }
```
## Methods
### RotateTo(Angle)
Rotates the servo to the specified angle.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IAngularServo.cs#L15)
```csharp title="Declaration"
void RotateTo(Angle angle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Units.Angle](../Meadow.Units/Angle) | *angle* | The target angle to rotate to. |

