---
title: Class HBridgeMotor
sidebar_label: HBridgeMotor
description: "Generic h-bridge motor controller."
---
# Class HBridgeMotor
Generic h-bridge motor controller.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L11)
```csharp title="Declaration"
public class HBridgeMotor : IDCMotor
```
**Derived:**  
[Meadow.Foundation.Motors.Tb67h420ftg.Motor](../Meadow.Foundation.Motors/Tb67h420ftg.Motor)

**Implements:**  
`Meadow.Peripherals.Motors.IDCMotor`

## Properties
### IsNeutral
When true, the wheels spin "freely"
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L31)
```csharp title="Declaration"
public bool IsNeutral { get; set; }
```
### Power
The power applied to the motor, as a percentage between
`-1.0` and `1.0`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L48)
```csharp title="Declaration"
public float Power { get; set; }
```
### PwmFrequency
The frequency of the PWM used to drive the motors. 
Default value is 1600.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L77)
```csharp title="Declaration"
public Frequency PwmFrequency { get; }
```
### MotorCalibrationMultiplier
Not all motors are created equally. This number scales the Speed Input so
that you can match motor speeds without changing your logic.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L83)
```csharp title="Declaration"
public float MotorCalibrationMultiplier { get; set; }
```
## Fields
### motorLeftPwm
PWM port for left motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L18)
```csharp title="Declaration"
protected IPwmPort motorLeftPwm
```
### motorRighPwm
PWM port for right motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L22)
```csharp title="Declaration"
protected IPwmPort motorRighPwm
```
### enablePort
Digital output port to enable h-bridge
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/HBridgeMotor.cs#L26)
```csharp title="Declaration"
protected IDigitalOutputPort enablePort
```

## Implements

* `Meadow.Peripherals.Motors.IDCMotor`
