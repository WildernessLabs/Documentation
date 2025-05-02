---
title: Class NamedServoConfigs
sidebar_label: NamedServoConfigs
description: NamedServoConfigs class to hold names servo configurations
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Servos/NamedServoConfigs
---
# Class NamedServoConfigs
NamedServoConfigs class to hold names servo configurations

###### **Assembly**: Servos.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L9)
```csharp title="Declaration"
public static class NamedServoConfigs
```
## Properties
### SG90
Represents the SG90 180 degree servo models. Angle: 0-180, Pulse: 500 - 2,200
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L63)
```csharp title="Declaration"
public static ServoConfig SG90 { get; }
```
### FS90R
Represents the FS90 continuous rotation servo models. Angle: 0-180, Pulse: 500 - 2,200
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L74)
```csharp title="Declaration"
public static ServoConfig FS90R { get; }
```
## Fields
### Ideal180Servo
Represents an ideal 180? servo that has a minimum pulse of 1ms and a max of 2ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L14)
```csharp title="Declaration"
public static ServoConfig Ideal180Servo
```
### Ideal270Servo
Represents an ideal 270? servo that has a minimum pulse of 1ms and a max of 2ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L19)
```csharp title="Declaration"
public static ServoConfig Ideal270Servo
```
### IdealContinuousRotationServo
Represents an ideal continuous rotation servo that has a min and max pulse of 1ms and 2ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L24)
```csharp title="Declaration"
public static ServoConfig IdealContinuousRotationServo
```
### BlueBirdBMS120
Represents the BlueBird BMS models. Maximum angle is 120. Pulse range is 900?s - 2,100?s
See: https://www.blue-bird-model.com/products_detail/309.htm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L30)
```csharp title="Declaration"
public static ServoConfig BlueBirdBMS120
```
### HiTecStandard
Represents the HiTec "Standard" servo models. Angle: 0-180, Pulse: 900 - 1,200
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L35)
```csharp title="Declaration"
public static ServoConfig HiTecStandard
```
### HiTechDigital
Represents HiTec Digital servo models with their default settings. Angle: 0-180, Pulse: 900 - 1,200
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L40)
```csharp title="Declaration"
public static ServoConfig HiTechDigital
```
### JXHV180
Represents the JX HV 180 degree servo models. Angle: 0-180, Pulse: 500 - 2,500
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L45)
```csharp title="Declaration"
public static ServoConfig JXHV180
```
### MG996R
Represents the MG996R 180 degree servo models. Angle: 0-180, Pulse: 500 - 2,200
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/NamedServoConfigs.cs#L51)
```csharp title="Declaration"
public static ServoConfig MG996R
```
