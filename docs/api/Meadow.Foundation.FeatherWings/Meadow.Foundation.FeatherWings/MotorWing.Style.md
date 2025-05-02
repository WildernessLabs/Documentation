---
title: Enum MotorWing.Style
sidebar_label: MotorWing.Style
description: Defines the different motor styles for stepper motors.
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/MotorWing.Style
---
# Enum MotorWing.Style
Defines the different motor styles for stepper motors.

###### **Assembly**: MotorWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L46)
```csharp title="Declaration"
public enum MotorWing.Style
```
## Fields
### SINGLE
Single step mode. Moves one step at a time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L51)
```csharp title="Declaration"
SINGLE = 1
```
### DOUBLE
Double step mode. Moves two steps at a time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L55)
```csharp title="Declaration"
DOUBLE = 2
```
### INTERLEAVE
Interleaved mode. Alternates between single and double steps.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L60)
```csharp title="Declaration"
INTERLEAVE = 3
```
### MICROSTEP
Microstep mode. Moves in smaller steps for smoother motion.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/MotorWing/Driver/MotorWing.Enums.cs#L64)
```csharp title="Declaration"
MICROSTEP = 4
```
