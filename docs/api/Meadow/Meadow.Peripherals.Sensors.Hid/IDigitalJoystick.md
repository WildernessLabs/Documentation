---
title: Interface IDigitalJoystick
sidebar_label: IDigitalJoystick
description: Interface describing digital joysticks and d-pads.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Hid/IDigitalJoystick
---
# Interface IDigitalJoystick
Interface describing digital joysticks and d-pads.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IDigitalJoystick.cs#L8)
```csharp title="Declaration"
public interface IDigitalJoystick
```
## Properties
### Position
Gets the position of the joystick.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IDigitalJoystick.cs#L13)
```csharp title="Declaration"
DigitalJoystickPosition? Position { get; }
```
## Events
### Updated
Raised when a new reading has been made.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IDigitalJoystick.cs#L18)
```csharp title="Declaration"
event EventHandler<ChangeResult<DigitalJoystickPosition>> Updated
```
##### Event Type
`System.EventHandler<Meadow.ChangeResult<Meadow.Peripherals.Sensors.Hid.DigitalJoystickPosition>>`
