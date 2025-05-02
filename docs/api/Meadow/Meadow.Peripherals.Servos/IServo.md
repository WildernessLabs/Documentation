---
title: Interface IServo
sidebar_label: IServo
description: Represents a servo motor interface with properties for configuration.
slug: /docs/api/Meadow/Meadow.Peripherals.Servos/IServo
---
# Interface IServo
Represents a servo motor interface with properties for configuration.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IServo.cs#L8)
```csharp title="Declaration"
public interface IServo
```
## Properties
### TrimOffset
Gets or sets the trim offset for the servo.
The trim offset is used to adjust the neutral position of the servo.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IServo.cs#L14)
```csharp title="Declaration"
TimePeriod TrimOffset { get; set; }
```
## Methods
### Neutral()
Sets the servo to its neutral position.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IServo.cs#L19)
```csharp title="Declaration"
void Neutral()
```
### Disable()
Disables the servo, stopping any movement.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Servos/IServo.cs#L24)
```csharp title="Declaration"
void Disable()
```
