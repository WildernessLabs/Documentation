---
title: Class ServoConfig
sidebar_label: ServoConfig
description: Servo configuration class used to store servo properties
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Servos/ServoConfig
---
# Class ServoConfig
Servo configuration class used to store servo properties

###### **Assembly**: Servos.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L8)
```csharp title="Declaration"
public class ServoConfig
```
## Properties
### MinimumAngle
The servo's minimum angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L13)
```csharp title="Declaration"
public Angle MinimumAngle { get; }
```
### MaximumAngle
The servo's maximum angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L18)
```csharp title="Declaration"
public Angle MaximumAngle { get; }
```
### MinimumPulseDuration
The servo's minimum pulse duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L23)
```csharp title="Declaration"
public int MinimumPulseDuration { get; }
```
### MaximumPulseDuration
The servo's maximum pulse duration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L28)
```csharp title="Declaration"
public int MaximumPulseDuration { get; }
```
### Frequency
Servo PWM frequency
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Servos/Driver/ServoConfig.cs#L33)
```csharp title="Declaration"
public Frequency Frequency { get; set; }
```
