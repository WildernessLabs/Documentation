---
title: Struct AnalogJoystickPosition
sidebar_label: AnalogJoystickPosition
description: >-
  Represents a position that an analog joystick can having, including both the
  `Horizontal` and `Vertical` components.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Hid/AnalogJoystickPosition
---
# Struct AnalogJoystickPosition
Represents a position that an analog joystick can having, including both
the `Horizontal` and `Vertical` components.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/AnalogJoystickPosition.cs#L7)
```csharp title="Declaration"
public struct AnalogJoystickPosition
```
## Properties
### Horizontal
Current horizontal position of joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/AnalogJoystickPosition.cs#L12)
```csharp title="Declaration"
public float? Horizontal { readonly get; set; }
```
### Vertical
Current vertical position of joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/AnalogJoystickPosition.cs#L17)
```csharp title="Declaration"
public float? Vertical { readonly get; set; }
```
## Methods
### From(AnalogJoystickPosition)
Create a new JoystickPosition instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/AnalogJoystickPosition.cs#L35)
```csharp title="Declaration"
public static AnalogJoystickPosition From(AnalogJoystickPosition position)
```

##### Returns

[Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition](../Meadow.Peripherals.Sensors.Hid/AnalogJoystickPosition)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition](../Meadow.Peripherals.Sensors.Hid/AnalogJoystickPosition) | *position* | Reference position to copy values from |

