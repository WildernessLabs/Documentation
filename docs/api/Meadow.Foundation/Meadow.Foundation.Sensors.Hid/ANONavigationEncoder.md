---
title: Class ANONavigationEncoder
sidebar_label: ANONavigationEncoder
description: Represents a ANO Directional Navigation and Scroll Wheel Rotary Encoder
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/ANONavigationEncoder
---
# Class ANONavigationEncoder
Represents a ANO Directional Navigation and Scroll Wheel Rotary Encoder

###### **Assembly**: ANONavigationEncoder.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L11)
```csharp title="Declaration"
public class ANONavigationEncoder
```
## Properties
### DirectionalPad
The directional pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L16)
```csharp title="Declaration"
public IDigitalJoystick DirectionalPad { get; protected set; }
```
### ButtonCenter
The center button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L21)
```csharp title="Declaration"
public PushButton ButtonCenter { get; protected set; }
```
### RotaryEncoder
The rotary wheel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L26)
```csharp title="Declaration"
public RotaryEncoder RotaryEncoder { get; protected set; }
```
