---
title: Class AngularServoBase
sidebar_label: AngularServoBase
description: "Represents an angular servo base class"
---
# Class AngularServoBase
Represents an angular servo base class

###### **Assembly**: ServoCore.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/AngularServoBase.cs#L11)
```csharp title="Declaration"
public abstract class AngularServoBase : ServoBase, IAngularServo, IServo
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Servos.ServoBase](../Meadow.Foundation.Servos/ServoBase)

**Derived:**  
[Meadow.Foundation.Servos.Servo](../Meadow.Foundation.Servos/Servo)

**Implements:**  
[Meadow.Foundation.Servos.IAngularServo](../Meadow.Foundation.Servos/IAngularServo), [Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)

## Properties
### Angle
The current angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/AngularServoBase.cs#L16)
```csharp title="Declaration"
public Angle? Angle { get; protected set; }
```
## Methods
### RotateTo(Angle, bool)
Rotates the servo to a given angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/AngularServoBase.cs#L32)
```csharp title="Declaration"
public Task RotateTo(Angle angle, bool stopAfterMotion = false)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *angle* | The angle to rotate to |
| `System.Boolean` | *stopAfterMotion* | When true the PWM will stop after motion is complete |

### CalculatePulseDuration(Angle)
Calculate the pulse duration for an angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/AngularServoBase.cs#L65)
```csharp title="Declaration"
protected float CalculatePulseDuration(Angle angle)
```

##### Returns

`System.Single`: The pulse duration as as float
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Angle` | *angle* | The angle |


## Implements

* [Meadow.Foundation.Servos.IAngularServo](../Meadow.Foundation.Servos/IAngularServo)
* [Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)
