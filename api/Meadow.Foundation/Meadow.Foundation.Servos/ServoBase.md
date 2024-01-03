---
title: Class ServoBase
sidebar_label: ServoBase
description: "Servo base class"
---
# Class ServoBase
Servo base class

###### **Assembly**: ServoCore.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L8)
```csharp title="Declaration"
public abstract class ServoBase : IServo
```
**Derived:**  
[Meadow.Foundation.Servos.AngularServoBase](../Meadow.Foundation.Servos/AngularServoBase), [Meadow.Foundation.Servos.ContinuousRotationServoBase](../Meadow.Foundation.Servos/ContinuousRotationServoBase)

**Implements:**  
[Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)

## Properties
### PwmPort
Gets the PWM port used to drive the Servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L13)
```csharp title="Declaration"
protected IPwmPort PwmPort { get; }
```
### Config
Gets the ServoConfig that describes this servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L18)
```csharp title="Declaration"
public ServoConfig Config { get; protected set; }
```
## Methods
### Stop()
Stop the servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L37)
```csharp title="Declaration"
public virtual void Stop()
```
### CalculateDutyCycle(float)
Note that this calculation expects a pulse duration in microseconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L47)
```csharp title="Declaration"
protected float CalculateDutyCycle(float pulseDuration)
```

##### Returns

`System.Single`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *pulseDuration* | Microseconds |

### SendCommandPulse(float)
Send a command pulse
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Servos.ServoCore/Driver/ServoBase.cs#L57)
```csharp title="Declaration"
protected virtual void SendCommandPulse(float pulseDuration)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *pulseDuration* | The pulse duration |


## Implements

* [Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)
