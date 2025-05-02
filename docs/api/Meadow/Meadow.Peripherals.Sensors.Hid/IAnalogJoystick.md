---
title: Interface IAnalogJoystick
sidebar_label: IAnalogJoystick
description: Interface describing 2-axis analog joysticks
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Hid/IAnalogJoystick
---
# Interface IAnalogJoystick
Interface describing 2-axis analog joysticks

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogJoystick.cs#L8)
```csharp title="Declaration"
public interface IAnalogJoystick
```
## Properties
### IsHorizontalInverted
Is the horizontal / x-axis inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogJoystick.cs#L13)
```csharp title="Declaration"
bool IsHorizontalInverted { get; set; }
```
### IsVerticalInverted
Is the vertical / y-axis inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogJoystick.cs#L18)
```csharp title="Declaration"
bool IsVerticalInverted { get; set; }
```
### Position
Current position of analog joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogJoystick.cs#L23)
```csharp title="Declaration"
AnalogJoystickPosition? Position { get; }
```
## Events
### Updated
Raised when a new reading has been made.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogJoystick.cs#L28)
```csharp title="Declaration"
event EventHandler<IChangeResult<AnalogJoystickPosition>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`
