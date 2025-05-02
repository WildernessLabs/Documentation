---
title: Class ElectronicSpeedController
sidebar_label: ElectronicSpeedController
description: >-
  Driver for Electronic Speed Controllers (ESCs) typically used to control
  motors via PWM signals. To use, you generally have to calibrate the ESC
  through the following steps: 1. Depower the ESC, set the power to the intended
  maximum point (e.g., 1.0). 2. Power the ESC and wait for "happy tones" to
  indicate a good power supply, followed by possibly two beeps to indicate the
  max power limit set. 3. Set the ESC power to the intended minimum power point
  (e.g., 0.0), and the ESC should provide one beep for every LiPo cell (3.7V) of
  power supplied, followed by a long beep. 4. Optionally, for some ESCs, arm it
  by calling the `Arm()` method, which will drop the power below 0.0.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors/ElectronicSpeedController
---
# Class ElectronicSpeedController
Driver for Electronic Speed Controllers (ESCs) typically used to control motors via PWM signals.
To use, you generally have to calibrate the ESC through the following steps:
1. Depower the ESC, set the power to the intended maximum point (e.g., 1.0).
2. Power the ESC and wait for "happy tones" to indicate a good power supply, followed by possibly two beeps to indicate the max power limit set.
3. Set the ESC power to the intended minimum power point (e.g., 0.0), and the ESC should provide one beep for every LiPo cell (3.7V) of power supplied, followed by a long beep.
4. Optionally, for some ESCs, arm it by calling the `Arm()` method, which will drop the power below 0.0.

###### **Assembly**: ElectronicSpeedController.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L14)
```csharp title="Declaration"
public class ElectronicSpeedController
```
## Properties
### ArmingPulseDuration
The pulse duration, in milliseconds, necessary to "arm" the ESC. Default value is 0.5ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L21)
```csharp title="Declaration"
public float ArmingPulseDuration { get; set; }
```
### Power
Gets or sets the power of the ESC, in the range of 0.0 to 1.0.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L26)
```csharp title="Declaration"
public float Power { get; set; }
```
### Frequency
Frequency (in Hz) of the PWM signal. The default is 50Hz. Increase for higher quality ESCs that allow higher frequency PWM control signals.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L42)
```csharp title="Declaration"
public Frequency Frequency { get; }
```
### IsDisposed
Gets a value indicating whether the object has been disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L47)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Arm()
Sends a 0.5ms pulse to the motor to enable throttle control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L78)
```csharp title="Declaration"
public void Arm()
```
### CalculateDutyCycle(float, Frequency)
Calculates the appropriate duty cycle of a PWM signal for the given pulse duration and frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L89)
```csharp title="Declaration"
protected float CalculateDutyCycle(float pulseDuration, Frequency frequency)
```

##### Returns

`System.Single`: A duty cycle value expressed as a percentage between 0.0 and 1.0.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *pulseDuration* | The duration of the target pulse in milliseconds. |
| `Meadow.Units.Frequency` | *frequency* | The frequency of the PWM signal. |

### CalculatePulseDuration(float)
Returns a pulse duration in milliseconds for the given power, assuming that the allowed power band is between 1ms and 2ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L99)
```csharp title="Declaration"
protected float CalculatePulseDuration(float power)
```

##### Returns

`System.Single`: A pulse duration in milliseconds for the given power.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *power* | A value between 0.0 and 1.0 representing the percentage of power, with 0.0 = 0% and 1.0 = 100%. |

### Dispose()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L106)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L116)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

