---
title: Interface IRotaryEncoder
sidebar_label: IRotaryEncoder
description: Defines a generic rotary encoder
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Rotary/IRotaryEncoder
---
# Interface IRotaryEncoder
Defines a generic rotary encoder

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/IRotaryEncoder.cs#L8)
```csharp title="Declaration"
public interface IRotaryEncoder
```
## Properties
### LastDirectionOfRotation
Gets the last direction of rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/IRotaryEncoder.cs#L13)
```csharp title="Declaration"
RotationDirection? LastDirectionOfRotation { get; }
```
## Events
### Rotated
Raised when the encoder detects a rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/IRotaryEncoder.cs#L18)
```csharp title="Declaration"
event EventHandler<RotaryChangeResult> Rotated
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Rotary.RotaryChangeResult>`
