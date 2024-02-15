---
uid: Meadow.Foundation.Sensors.Hid.ANONavigationEncoder
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.ANONavigationEncoder
---

| ANONavigationEncoder | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.ANONavigationEncoder/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.ANONavigationEncoder.svg?label=Meadow.Foundation.Sensors.Hid.ANONavigationEncoder" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.ANONavigationEncoder" /></a> |


# Class ANONavigationEncoder
Represents a ANO Directional Navigation and Scroll Wheel Rotary Encoder

###### **Assembly**: ANONavigationEncoder.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L11)
```csharp title="Declaration"
public class ANONavigationEncoder
```
## Properties
### DirectionalPad
The directional pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L16)
```csharp title="Declaration"
public IDigitalJoystick DirectionalPad { get; protected set; }
```
### ButtonCenter
The center button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L21)
```csharp title="Declaration"
public PushButton ButtonCenter { get; protected set; }
```
### RotaryEncoder
The rotary wheel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.ANONavigationEncoder/Driver/ANONavigationEncoder.cs#L26)
```csharp title="Declaration"
public RotaryEncoder RotaryEncoder { get; protected set; }
```
