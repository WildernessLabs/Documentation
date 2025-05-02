---
title: Class ServoWing
sidebar_label: ServoWing
description: >-
  Represents Adafruit's Feather Servo Wing and 16-Channel 12-bit PWM/Servo
  Shield
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/ServoWing
---
# Class ServoWing
Represents Adafruit's Feather Servo Wing and 16-Channel 12-bit PWM/Servo Shield

###### **Assembly**: ServoWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/ServoWing/Driver/ServoWing.cs#L15)
```csharp title="Declaration"
public class ServoWing
```
## Methods
### GetServo(byte, PulseAngle, PulseAngle)
Returns the specified servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/ServoWing/Driver/ServoWing.cs#L59)
```csharp title="Declaration"
public AngularServo GetServo(byte portIndex, AngularServo.PulseAngle minPulseAngle, AngularServo.PulseAngle maxPulseAngle)
```

##### Returns

`Meadow.Foundation.Servos.AngularServo`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *portIndex* |  |
| `Meadow.Foundation.Servos.AngularServo.PulseAngle` | *minPulseAngle* | The pulse angle corresponding to the minimum angle of the servo. |
| `Meadow.Foundation.Servos.AngularServo.PulseAngle` | *maxPulseAngle* | The pulse angle corresponding to the maximum angle of the servo. |

### GetContinuousRotatioServo(byte, TimePeriod, TimePeriod)
Returns the specified continues rotation servo
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/ServoWing/Driver/ServoWing.cs#L78)
```csharp title="Declaration"
public IContinuousRotationServo GetContinuousRotatioServo(byte portIndex, TimePeriod minimumPulseDuration, TimePeriod maximumPulseDuration)
```

##### Returns

`Meadow.Peripherals.Servos.IContinuousRotationServo`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *portIndex* |  |
| `Meadow.Units.TimePeriod` | *minimumPulseDuration* | The minimum pulse duration for the servo. |
| `Meadow.Units.TimePeriod` | *maximumPulseDuration* | The maximum pulse duration for the servo. |

