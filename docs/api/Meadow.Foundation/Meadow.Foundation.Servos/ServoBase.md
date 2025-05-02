---
title: Class ServoBase
sidebar_label: ServoBase
description: 'Represents the base class for a servo, implementing common functionality.'
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Servos/ServoBase
---
# Class ServoBase
Represents the base class for a servo, implementing common functionality.

###### **Assembly**: Servos.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L11)
```csharp title="Declaration"
public abstract class ServoBase : IServo, IDisposable
```
**Derived:**  
[Meadow.Foundation.Servos.AngularServo](../Meadow.Foundation.Servos/AngularServo), [Meadow.Foundation.Servos.ContinuousRotationServo](../Meadow.Foundation.Servos/ContinuousRotationServo)

**Implements:**  
`Meadow.Peripherals.Servos.IServo`, `System.IDisposable`

## Properties
### RequiredFrequency
Gets the required PWM frequency for the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L19)
```csharp title="Declaration"
public static Frequency RequiredFrequency { get; }
```
### IsDisposed
Gets a value indicating whether the servo has been disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L27)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### PwmPort
Gets the PWM port used to control the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L32)
```csharp title="Declaration"
protected IPwmPort PwmPort { get; }
```
### TrimOffset
Gets or sets the trim offset for the servo.
The trim offset is used to adjust the neutral position of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L35)
```csharp title="Declaration"
public TimePeriod TrimOffset { get; set; }
```
## Methods
### Neutral()
Sets the servo to its neutral position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L22)
```csharp title="Declaration"
public abstract void Neutral()
```
### SetPulseWidthWithTrim(TimePeriod)
Send a command pulse
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L71)
```csharp title="Declaration"
protected virtual void SetPulseWidthWithTrim(TimePeriod pulseDuration)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.TimePeriod` | *pulseDuration* | The pulse duration |

### Disable()
Disables the servo, stopping any movement.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L83)
```csharp title="Declaration"
public virtual void Disable()
```
### Dispose(bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L89)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoBase.cs#L103)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `Meadow.Peripherals.Servos.IServo`
* `System.IDisposable`
