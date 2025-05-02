---
title: Class AngularServo
sidebar_label: AngularServo
description: Represents an angular servo
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Servos/AngularServo
---
# Class AngularServo
Represents an angular servo

###### **Assembly**: Servos.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.PulseAngle.cs#L8)
```csharp title="Declaration"
public class AngularServo : ServoBase, IDisposable, IAngularServo, IServo
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Servos.ServoBase](../Meadow.Foundation.Servos/ServoBase)

**Derived:**  
[Meadow.Foundation.Servos.Ds3218](../Meadow.Foundation.Servos/Ds3218), [Meadow.Foundation.Servos.Hs322](../Meadow.Foundation.Servos/Hs322), [Meadow.Foundation.Servos.Mg90s](../Meadow.Foundation.Servos/Mg90s), [Meadow.Foundation.Servos.Mg996](../Meadow.Foundation.Servos/Mg996), [Meadow.Foundation.Servos.Ms24](../Meadow.Foundation.Servos/Ms24), [Meadow.Foundation.Servos.Sg90](../Meadow.Foundation.Servos/Sg90), [Meadow.Foundation.Servos.Tgy390dmh](../Meadow.Foundation.Servos/Tgy390dmh)

**Implements:**  
`System.IDisposable`, `Meadow.Peripherals.Servos.IAngularServo`, `Meadow.Peripherals.Servos.IServo`

## Properties
### Angle
Gets the current angle of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L20)
```csharp title="Declaration"
public Angle Angle { get; }
```
### MinimumAngle
Gets the minimum angle that the servo can rotate to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L22)
```csharp title="Declaration"
public Angle MinimumAngle { get; }
```
### MaximumAngle
Gets the maximum angle that the servo can rotate to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L24)
```csharp title="Declaration"
public Angle MaximumAngle { get; }
```
## Methods
### Dispose(bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L61)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### Neutral()
Sets the servo to its neutral position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L72)
```csharp title="Declaration"
public override void Neutral()
```
### RotateTo(Angle)
Rotates the servo to the specified angle.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/AngularServo.cs#L78)
```csharp title="Declaration"
public void RotateTo(Angle angle)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *angle* | The target angle to rotate to. |


## Implements

* `System.IDisposable`
* `Meadow.Peripherals.Servos.IAngularServo`
* `Meadow.Peripherals.Servos.IServo`
