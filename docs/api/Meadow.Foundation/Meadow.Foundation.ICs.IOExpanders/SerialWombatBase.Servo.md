---
title: Class SerialWombatBase.Servo
sidebar_label: SerialWombatBase.Servo
description: Represents a serial wombat servo
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.Servo
---
# Class SerialWombatBase.Servo
Represents a serial wombat servo

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Servo.cs#L13)
```csharp title="Declaration"
public class SerialWombatBase.Servo : IServo
```
**Implements:**  
`Meadow.Peripherals.Servos.IServo`

## Properties
### TrimOffset
Gets or sets the trim offset for the servo.
The trim offset is used to adjust the neutral position of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Servo.cs#L24)
```csharp title="Declaration"
public TimePeriod TrimOffset { get; set; }
```
## Methods
### Disable()
Disables the servo, stopping any movement.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Servo.cs#L27)
```csharp title="Declaration"
public void Disable()
```
### Neutral()
Sets the servo to its neutral position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.Servo.cs#L33)
```csharp title="Declaration"
public void Neutral()
```

## Implements

* `Meadow.Peripherals.Servos.IServo`
