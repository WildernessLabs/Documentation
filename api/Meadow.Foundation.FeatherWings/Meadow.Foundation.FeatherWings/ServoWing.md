---
title: Class ServoWing
sidebar_label: ServoWing
description: "Represents Adafruit's Feather Servo Wing and 16-Channel 12-bit PWM/Servo Shield"
---
# Class ServoWing
Represents Adafruit's Feather Servo Wing and 16-Channel 12-bit PWM/Servo Shield

###### **Assembly**: ServoWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/ServoWing/Driver/ServoWing.cs#L13)
```csharp title="Declaration"
public class ServoWing
```
## Methods
### GetServo(byte, ServoConfig)
Returns the specified servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/ServoWing/Driver/ServoWing.cs#L57)
```csharp title="Declaration"
public Servo GetServo(byte portIndex, ServoConfig servoConfig)
```

##### Returns

`Meadow.Foundation.Servos.Servo`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *portIndex* |
| `Meadow.Foundation.Servos.ServoConfig` | *servoConfig* |

### GetContinuousRotatioServo(byte, ServoConfig)
Returns the specified continues rotation servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/ServoWing/Driver/ServoWing.cs#L77)
```csharp title="Declaration"
public IContinuousRotationServo GetContinuousRotatioServo(byte portIndex, ServoConfig servoConfig)
```

##### Returns

`Meadow.Foundation.Servos.IContinuousRotationServo`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *portIndex* |
| `Meadow.Foundation.Servos.ServoConfig` | *servoConfig* |


##### Exceptions

`System.ArgumentException`  

