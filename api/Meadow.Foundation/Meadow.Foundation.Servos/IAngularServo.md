---
title: Interface IAngularServo
sidebar_label: IAngularServo
description: "Angular servo abstraction"
---
# Interface IAngularServo
Angular servo abstraction

###### **Assembly**: ServoCore.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IAngularServo.cs#L9)
```csharp title="Declaration"
public interface IAngularServo : IServo
```
## Properties
### Angle
The current angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IAngularServo.cs#L22)
```csharp title="Declaration"
Angle? Angle { get; }
```
## Methods
### RotateTo(Angle, bool)
Rotate to an angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/IAngularServo.cs#L17)
```csharp title="Declaration"
Task RotateTo(Angle angle, bool stopAfterMotion = false)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *angle* | The angle |
| `System.Boolean` | *stopAfterMotion* | True to stop the servo after motion |

